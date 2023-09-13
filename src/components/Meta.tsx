import { metadata } from "@/config";
import Head from "next/head";
import React from "react";

const Meta = () => {
  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Head>
  );
};

export default Meta;
