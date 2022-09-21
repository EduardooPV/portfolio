import Head from "next/head";
import React from "react";
import { ListProjects } from "../components/ListProjects";

export default function Projetos() {
  return (
    <>
      <Head>
        <title>Projetos | Luiz Eduardo</title>
      </Head>
      <ListProjects />
    </>
  );
}
