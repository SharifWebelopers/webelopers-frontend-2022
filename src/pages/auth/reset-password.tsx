import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Head from "next/head";
import Layout from "../../components/AuthLayout";
import ResetPassword from "../../components/ResetPassword";

const ResetPasswordPage: NextPageWithLayout = () => {
  return <ResetPassword />;
};

ResetPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>بازیابی رمز عبور</title>
      </Head>
      <Layout>{page}</Layout>;
    </>
  );
};

export default ResetPasswordPage;
