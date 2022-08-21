import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Head from "next/head";
import Layout from "../../components/AuthLayout";
import VerifyEmail from "../../components/VerifyEmail";

const VerifyEmailPage: NextPageWithLayout = () => {
  return <VerifyEmail />;
};

VerifyEmailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>فعال‌سازی حساب</title>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default VerifyEmailPage;
