import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import type { ExperiencePosition } from "../../types/experiences";
import { ExperienceIcon } from "./experience-position-icon";

export function ExperiencePositionItem({
  position,
  companyLogo,
  companyName,
  isCurrentEmployer,
}: {
  position: ExperiencePosition;
  companyLogo?: string;
  companyName?: string;
  isCurrentEmployer?: boolean;
}) {
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;

  return (
    <CollapsibleWithContext defaultOpen={position.isExpanded} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger
          className={cn(
            "block w-full text-left select-none",
            "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-accent2"
          )}
        >
          <div className="relative z-1 mb-1 flex items-center gap-3">
            <div
              className={cn(
                "flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full",
                "bg-muted text-muted-foreground",
                "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background"
              )}
              aria-hidden
            >
              {companyLogo ? (
                <Image
                  src={companyLogo}
                  alt={companyName ?? ""}
                  width={28}
                  height={28}
                  className="size-full object-cover"
                  unoptimized
                />
              ) : (
                <ExperienceIcon className="size-4" icon={position.icon} />
              )}
            </div>

            <h4 className="flex flex-1 items-center gap-2 font-medium text-balance">
              {position.title}
              {isCurrentEmployer && (
                <span className="relative flex shrink-0 items-center justify-center">
                  <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-info" />
                  <span className="sr-only">Current Employer</span>
                </span>
              )}
            </h4>

            <div
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
              aria-hidden
            >
              <CollapsibleChevronsIcon />
            </div>
          </div>

          <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
            {position.employmentType && (
              <>
                <dl>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )}

            <dl>
              <dt className="sr-only">Employment Period</dt>
              <dd className="flex items-center gap-0.5">
                <span>{start}</span>
                <span className="font-mono">—</span>
                {isOngoing ? (
                  <>
                    <InfinityIcon
                      className="size-4.5 translate-y-[0.5px]"
                      aria-hidden
                    />
                    <span className="sr-only">Present</span>
                  </>
                ) : (
                  <span>{end}</span>
                )}
              </dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
          {position.description && (
            <Prose className="pt-2 pl-9">
              <Markdown>{position.description}</Markdown>
            </Prose>
          )}

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 pt-2 pl-9">
              {position.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}
