import React from "react";
import { TagHero, Tag } from "./styles";
import { projectTypeColors } from "../../utils/projectTypeColors";
import Link from "next/link";

interface ProjectTypeTagProps {
  type?: string;
  hero?: boolean;
}

export function ProjectTypeTag({ type, hero = false }: ProjectTypeTagProps) {
  const color = projectTypeColors[type] ?? "#BABABA";

  return hero ? (
    <Link href="/projetos" passHref>
      <div style={{ background: "#171515" }}>
        <TagHero $color={color} $hero={hero}>
          {type}
        </TagHero>
      </div>
    </Link>
  ) : (
    <Tag $color={color} $hero={hero}>
      {type}
    </Tag>
  );
}
