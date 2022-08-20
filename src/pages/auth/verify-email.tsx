import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Layout from "../../components/AuthLayout";
import VerifyEmail from "../../components/VerifyEmail";

const VerifyEmailPage: NextPageWithLayout = () => {
  return <VerifyEmail />;
};

VerifyEmailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default VerifyEmailPage;
