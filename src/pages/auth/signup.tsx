import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Head from "next/head";
import Layout from "../../components/AuthLayout";
import SignUp from "../../components/SignUp";

const SignUpPage: NextPageWithLayout = () => {
  return <SignUp />;
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>ثبت‌نام</title>
      </Head>
      <Layout>{page}</Layout>;
    </>
  );
};

export default SignUpPage;
