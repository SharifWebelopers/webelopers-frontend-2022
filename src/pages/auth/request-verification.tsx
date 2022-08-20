import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Head from "next/head";
import Layout from "../../components/AuthLayout";
import RequestVerification from "../../components/RequestVerification";

const RequestVerificationPage: NextPageWithLayout = () => {
  return <RequestVerification />;
};

RequestVerificationPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>فعال‌سازی حساب</title>
      </Head>
      <Layout>{page}</Layout>;
    </>
  );
};

export default RequestVerificationPage;
