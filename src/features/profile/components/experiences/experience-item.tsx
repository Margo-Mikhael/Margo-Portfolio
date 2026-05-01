import React from "react";

import type { Experience } from "../../types/experiences";
import { ExperiencePositionItem } from "./experience-position-item";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="relative space-y-4 before:absolute before:left-3.5 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem
            key={position.id}
            position={position}
            companyLogo={experience.companyLogo}
            companyName={experience.companyName}
            isCurrentEmployer={experience.isCurrentEmployer}
          />
        ))}
      </div>
    </div>
  );
}
