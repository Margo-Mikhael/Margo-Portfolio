import { GithubIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

import type { Project } from "../../types/projects";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  return (
    <CollapsibleWithContext defaultOpen={project.isExpanded} asChild>
      <div className={className}>
        <div className="flex items-stretch hover:bg-accent2">
          <div className="flex shrink-0 items-center justify-center px-4 select-none">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                width={80}
                height={56}
                quality={100}
                className="h-12 w-16 rounded-md border border-edge object-cover"
                unoptimized
                aria-hidden="true"
              />
            ) : (
              <div
                className="flex size-10 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background"
                aria-hidden="true"
              >
                <Icons.project className="size-4" />
              </div>
            )}
          </div>

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="flex w-full items-center gap-3 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {project.title}
                </h3>

                {project.category && (
                  <p className="text-sm text-muted-foreground">
                    {project.category}
                  </p>
                )}
              </div>

              {project.demo && (
                <SimpleTooltip content="Live Demo">
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={addQueryParams(project.demo, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                  >
                    <LinkIcon className="pointer-events-none size-4" />
                    <span className="sr-only">Live Demo</span>
                  </a>
                </SimpleTooltip>
              )}

              {project.code && project.code !== project.demo && (
                <SimpleTooltip content="Source Code">
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={addQueryParams(project.code, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                  >
                    <GithubIcon className="pointer-events-none size-4" />
                    <span className="sr-only">Source Code</span>
                  </a>
                </SimpleTooltip>
              )}

              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <CollapsibleChevronsIcon />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-t border-edge shadow-inner">
            <div className="space-y-4 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
              {project.description && (
                <Prose>
                  <Markdown>{project.description}</Markdown>
                </Prose>
              )}

              {project.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="flex">
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}
