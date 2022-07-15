import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { CardProject } from "./CardProject";
import { TextSection } from "../TextSection";
import { ProjectsProps } from "./types";

export function ListProjects() {
  const [projects, setProjects] = useState<ProjectsProps[]>();
  const [loading, setLoading] = useState(true)

  function SortProjectsByData(a: any, b: any) {
    if (a.updated_at > b.updated_at) {
      return -1;
    } else {
      return true;
    }
  }

  useEffect(() => {
    const searchUser = "EduardooPV";

    const searchTopic = "portfolio";

    fetch(
      `https://api.github.com/search/repositories?q=user%3A${searchUser}%20topic:${searchTopic}`
    )
      .then((response) => response.json())
      .then((response) => setProjects(response.items.sort(SortProjectsByData)));

    setLoading(false)
  }, []);

  return (
    <Container>
      <TextSection tag="<h1>" tabIndex={6}>Projetos</TextSection>

      <Content>
        {projects?.map((project) => (
          <>
            <CardProject props={project} key={project.id} loading={loading} />
          </>
        ))}
      </Content>
    </Container>
  );
}
