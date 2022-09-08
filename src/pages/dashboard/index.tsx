import React, { ReactElement } from "react";
import Layout from "../../components/DashboardLayout";

import DashboardHome from "../../components/DashboardHome";

function DashboardHomePage() {
  return <DashboardHome />;
}

DashboardHomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};

export default DashboardHomePage;
