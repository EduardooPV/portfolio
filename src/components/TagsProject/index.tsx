import React from "react";
import { techIcons } from "../../utils/techIcon";
import { tagColors } from "../../utils/tagColors";
import { Tags, IconWrapper } from "./styles";

export function TagsProject({ tags }: { tags: string[] }) {
  return (
    <Tags>
      {tags?.map((tag) => {
        const tech = techIcons.find(
          (icon) => icon.title.toLowerCase() === tag.toLowerCase()
        );

        if (!tech) return null;

        const IconComponent = tech.Icon;

        const color =
          tagColors[tech.title] ||
          tagColors[tech.title.replace(/\s/g, "")] ||
          undefined;

        return (
          <IconWrapper key={tech.title} color={color} title={tech.title}>
            <IconComponent />
          </IconWrapper>
        );
      })}
    </Tags>
  );
}
