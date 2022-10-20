import { ReactNode } from "react";

export interface BreadcrumbProps {
  children: ReactNode;
  href: string;
  isCurrent: boolean;
}
