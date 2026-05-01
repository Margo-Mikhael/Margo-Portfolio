import type { Metadata } from "next";

import { ProjectCard } from "@/features/profile/components/project-card";
import { PROJECTS } from "@/features/profile/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects I've built — from production interfaces to experiments.",
};

export default function Page() {
  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Projects</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="h-4" />
    </>
  );
}
