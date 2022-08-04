import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Layout from "../../components/AuthLayout";
import SignUp from "../../components/SignUp";

const SignUpPage: NextPageWithLayout = () => {
  return <SignUp />;
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SignUpPage;
