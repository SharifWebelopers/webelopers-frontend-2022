import React, { ReactElement } from "react";
import Layout from "../../../components/DashboardLayout";

import CodeReviewContainer from "../../../components/CodeReview";

function DashboardCodeReviewPage() {
  return <CodeReviewContainer />;
}

DashboardCodeReviewPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};

export default DashboardCodeReviewPage;
