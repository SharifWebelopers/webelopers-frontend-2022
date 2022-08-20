import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Head from "next/head";
import Layout from "../../components/AuthLayout";
import ForgotPassword from "../../components/ForgotPassword";

const ForgotPasswordPage: NextPageWithLayout = () => {
  return <ForgotPassword />;
};

ForgotPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>بازیابی رمز عبور</title>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default ForgotPasswordPage;
