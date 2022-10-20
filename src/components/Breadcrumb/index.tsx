import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { BreadcrumbItem } from "./BreadcrumbItem";

import { BreadcrumbProps } from "./types";

import { List } from "./styles";

export function Breadcrumb() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbProps[]>();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const router = "/" + pathArray.slice(0, index + 1).join("/");

      let href = "";

      if (router == "/projeto") {
        href = "/projetos";
      } else {
        href = router;
      }

      return {
        href,
        label:
          path === "projeto"
            ? path.charAt(0).toUpperCase() +
              path.slice(1) +
              "s".replace("-", " ")
            : path.charAt(0).toUpperCase() + path.slice(1).replace("-", " "),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <List>
      <BreadcrumbItem isCurrent={router.pathname === "/"} href="/">
        Início
      </BreadcrumbItem>
      <span>/</span>
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb, index) => {
          if (index !== breadcrumbs.length - 1) {
            return (
              <div key={breadcrumb.href}>
                <BreadcrumbItem
                  href={breadcrumb.href}
                  isCurrent={breadcrumb.isCurrent}
                >
                  {breadcrumb.label}
                </BreadcrumbItem>
                <span>/</span>
              </div>
            );
          }

          return (
            <div key={breadcrumb.href}>
              <BreadcrumbItem
                href={breadcrumb.href}
                isCurrent={breadcrumb.isCurrent}
              >
                {breadcrumb.label}
              </BreadcrumbItem>
            </div>
          );
        })}
    </List>
  );
}
