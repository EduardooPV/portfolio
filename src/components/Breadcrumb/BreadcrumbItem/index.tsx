import React from "react";
import Link from "next/link";

import { BreadcrumbProps } from "./types";

import { Item } from "./styles";

export function BreadcrumbItem({
  children,
  href,
  isCurrent,
  ...props
}: BreadcrumbProps) {
  return (
    <Item {...props}>
      <Link href={href} passHref>
        <a
          className={isCurrent && "text-blue-500"}
          aria-current={isCurrent ? "page" : "false"}
        >
          {children}
        </a>
      </Link>
    </Item>
  );
}
