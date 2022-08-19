import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Layout from "../../components/AuthLayout";
import RequestVerification from "../../components/RequestVerification";

const RequestVerificationPage: NextPageWithLayout = () => {
  return <RequestVerification />;
};

RequestVerificationPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default RequestVerificationPage;
