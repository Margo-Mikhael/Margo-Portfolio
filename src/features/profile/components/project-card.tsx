import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import type { Project } from "../types/projects";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.demo || project.code || "#";
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group/project flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      {project.image && (
        <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={630}
            quality={100}
            unoptimized
            className="object-cover"
          />

          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/project:underline">
          {project.title}
        </h3>

        {project.category && (
          <p className="text-sm text-muted-foreground">{project.category}</p>
        )}
      </div>
    </Link>
  );
}
