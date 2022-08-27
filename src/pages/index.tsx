import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home";
import DownloadFile from "../components/DownloadFile";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>وبلوپرز ۲۰۲۲</title>
      </Head>
      <DownloadFile />
      <Home />
    </>
  );
};

export default HomePage;
