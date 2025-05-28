import React from "react";
import { Tag } from "./styles";
import { projectTypeColors } from "../../utils/projectTypeColors";

interface ProjectTypeTagProps {
  type?: string;
}

export function ProjectTypeTag({ type }: ProjectTypeTagProps) {
  const color = projectTypeColors[type] ?? "#BABABA";

  return <Tag color={color}>{type}</Tag>;
}
