export interface ListProjects {
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