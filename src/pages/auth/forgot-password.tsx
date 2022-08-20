import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Layout from "../../components/AuthLayout";
import ForgotPassword from "../../components/ForgotPassword";

const ForgotPasswordPage: NextPageWithLayout = () => {
  return <ForgotPassword />;
};

ForgotPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ForgotPasswordPage;
