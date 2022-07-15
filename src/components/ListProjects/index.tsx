import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { CardProject } from "./CardProject";
import { TextSection } from "../TextSection";

interface ProjectsProps {
  id: number;
  name: string;
  homepage: string;
  created_at: string;
  updated_at: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  watchers: string;
  topics: [];
}

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
      <TextSection tag="<h1>">Projetos</TextSection>

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
