import { ReactNode } from "react";

export interface BreadcrumbProps {
  label: string;
  href: string;
  isCurrent: boolean;
  children?: ReactNode;
}
