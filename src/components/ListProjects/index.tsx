import React from "react";
import { Container, Content } from "./styles";
import { CardProject } from "./CardProject";
import { TextSection } from "../TextSection";

interface ListProjects {
  projects: {
    slug: string;
    title: string;
    description: string;
    created_at: string;
    preview: {
      url: string;
      alt: string;
    };
    github_url: string;
  }[];
}

export function ListProjects({ projects }: ListProjects) {
  // const [projects, setProjects] = useState<ProjectsProps[]>();
  // const [loading, setLoading] = useState(false);

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // function SortProjectsByData(a: any, b: any) {
  //   if (a.updated_at > b.updated_at) {
  //     return -1;
  //   } else {
  //     return true;
  //   }
  // }

  // useEffect(() => {
  //   const searchUser = "EduardooPV";

  //   const searchTopic = "portfolio";

  //   setLoading(true);

  //   fetch(
  //     `https://api.github.com/search/repositories?q=user%3A${searchUser}%20topic:${searchTopic}`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setProjects(response.items.sort(SortProjectsByData));
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1500);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <Container
      data-aos="fade-down"
      data-aos-offset="20"
      data-aos-duration="800"
      data-aos-delay="800"
    >
      <TextSection tag="<h1>" tabIndex={0}>
        Projetos
      </TextSection>

      <Content>
        {projects?.map((project) => (
          <>
            <CardProject props={project} key={project.slug} />
          </>
        ))}
      </Content>
    </Container>
  );
}
