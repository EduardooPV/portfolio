export interface CardProps {
  props: {
    name: string;
    homepage: string;
    created_at: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    watchers: string;
  };

  loading: boolean;
}
