import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Head from "next/head";
import Layout from "../../components/AuthLayout";
import Login from "../../components/Login";

const LoginPage: NextPageWithLayout = () => {
  return <Login />;
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>ورود</title>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default LoginPage;
