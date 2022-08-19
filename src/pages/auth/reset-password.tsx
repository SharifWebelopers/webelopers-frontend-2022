import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Layout from "../../components/AuthLayout";
import ResetPassword from "../../components/ResetPassword";

const ResetPasswordPage: NextPageWithLayout = () => {
  return <ResetPassword />;
};

ResetPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ResetPasswordPage;
