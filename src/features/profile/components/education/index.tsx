import React from "react";

import { EXPERIENCES } from "../../data/experiences";
import { ExperienceItem } from "../experiences/experience-item";
import { Panel, PanelHeader, PanelTitle } from "../panel";

export function Education() {
  const items = EXPERIENCES.filter((item) => item.id === "education");

  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {items.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  );
}
