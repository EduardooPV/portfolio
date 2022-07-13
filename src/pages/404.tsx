import Head from "next/head";
import React from "react";
import { NotFoundComp } from "../components/NotFoundComp";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Ops... página não encontrada</title>
      </Head>
      <NotFoundComp />
    </>
  );
}
