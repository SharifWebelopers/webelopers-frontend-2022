import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Layout from "../../components/AuthLayout";
import Login from "../../components/Login";

const SignUpPage: NextPageWithLayout = () => {
  return <Login />;
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SignUpPage;
