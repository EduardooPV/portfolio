import React, { useState } from "react";
import { Container, Header, Content } from "./styles";
import { CardProjectList } from "./CardProjectList";
import { CardProjectGrid } from "./CardProjectGrid";
import { TextSection } from "../TextSection";

import { ProjectProps, ProjectsProps } from "../../pages/projetos";

export function ListProjects({ projects }: ProjectsProps) {
  const [sortByAsc, setSortByAsc] = useState<boolean>(true);
  const [gridLayout, setGridLayout] = useState<boolean>(true);

  const toggleSortOrder = () => {
    setSortByAsc((prevSortOrder: boolean) => !prevSortOrder);
  };
  const toggleLayout = () => {
    setGridLayout((prevGridLayout: boolean) => !prevGridLayout);
  };

  const sortedProjects = projects
    .slice()
    .sort((a: ProjectProps, b: ProjectProps) => {
      const dateA: any = new Date(a.published.split("/").reverse().join("/"));
      const dateB: any = new Date(b.published.split("/").reverse().join("/"));

      return sortByAsc ? dateB - dateA : dateA - dateB;
    });

  return (
    <Container>
      <Header>
        <TextSection
          tag="<h1>"
          tabIndex={0}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="1200"
        >
          Projetos
        </TextSection>

        <div>
          <button
            onClick={toggleSortOrder}
            role="switch"
            title="Troca ordenação por data de criação"
          >
            {sortByAsc ? (
              // Icon Ascending
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 17H24L20 21L16 17H19V3H21V17ZM8 16H11V13H8V16ZM13 5H12V3H10V5H6V3H4V5H3C1.89 5 1 5.89 1 7V18C1 19.11 1.89 20 3 20H13C14.11 20 15 19.11 15 18V7C15 5.89 14.11 5 13 5ZM3 18V11H13V18H3Z"
                  fill="black"
                />
              </svg>
            ) : (
              // Icon Descending
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7H16L20 3L24 7H21V21H19V7ZM8 16H11V13H8V16ZM13 5H12V3H10V5H6V3H4V5H3C1.89 5 1 5.89 1 7V18C1 19.11 1.89 20 3 20H13C14.11 20 15 19.11 15 18V7C15 5.89 14.11 5 13 5ZM3 18V11H13V18H3Z"
                  fill="black"
                />
              </svg>
            )}
          </button>
          <button
            onClick={toggleLayout}
            role="switch"
            title="Troca layout dos projetos"
          >
            {gridLayout ? (
              // Icon Grid Layout
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 3C9.53043 3 10.0391 3.21071 10.4142 3.58579C10.7893 3.96086 11 4.46957 11 5V9C11 9.53043 10.7893 10.0391 10.4142 10.4142C10.0391 10.7893 9.53043 11 9 11H5C4.46957 11 3.96086 10.7893 3.58579 10.4142C3.21071 10.0391 3 9.53043 3 9V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V9C21 9.53043 20.7893 10.0391 20.4142 10.4142C20.0391 10.7893 19.5304 11 19 11H15C14.4696 11 13.9609 10.7893 13.5858 10.4142C13.2107 10.0391 13 9.53043 13 9V5C13 4.46957 13.2107 3.96086 13.5858 3.58579C13.9609 3.21071 14.4696 3 15 3H19ZM9 13C9.53043 13 10.0391 13.2107 10.4142 13.5858C10.7893 13.9609 11 14.4696 11 15V19C11 19.5304 10.7893 20.0391 10.4142 20.4142C10.0391 20.7893 9.53043 21 9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15C3 14.4696 3.21071 13.9609 3.58579 13.5858C3.96086 13.2107 4.46957 13 5 13H9ZM19 13C19.5304 13 20.0391 13.2107 20.4142 13.5858C20.7893 13.9609 21 14.4696 21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15C14.4696 21 13.9609 20.7893 13.5858 20.4142C13.2107 20.0391 13 19.5304 13 19V15C13 14.4696 13.2107 13.9609 13.5858 13.5858C13.9609 13.2107 14.4696 13 15 13H19Z"
                  fill="black"
                />
              </svg>
            ) : (
              // Icon List Layout
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 3C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7956 11 18 11H6C5.20435 11 4.44129 10.6839 3.87868 10.1213C3.31607 9.55871 3 8.79565 3 8V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18ZM18 13C18.7956 13 19.5587 13.3161 20.1213 13.8787C20.6839 14.4413 21 15.2044 21 16V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V16C3 15.2044 3.31607 14.4413 3.87868 13.8787C4.44129 13.3161 5.20435 13 6 13H18Z"
                  fill="black"
                />
              </svg>
            )}
          </button>
        </div>
      </Header>

      <Content
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="1600"
        layout={gridLayout}
      >
        {sortedProjects.map((project) =>
          gridLayout ? (
            <CardProjectGrid
              project={project}
              key={project.title}
              data-aos="fade-up"
              data-aos-offset="10"
              data-aos-duration="600"
              data-aos-delay="400"
            />
          ) : (
            <CardProjectList
              project={project}
              key={project.title}
              data-aos="fade-up"
              data-aos-offset="10"
              data-aos-duration="600"
              data-aos-delay="400"
            />
          )
        )}
      </Content>
    </Container>
  );
}
