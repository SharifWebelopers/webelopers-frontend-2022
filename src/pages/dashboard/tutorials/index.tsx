import React, { ReactElement } from "react";
import Layout from "../../../components/DashboardLayout";

import TutorialsContainer from "../../../components/Tutorials";

function DashboardTutorialsPage() {
  return <TutorialsContainer />;
}

DashboardTutorialsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};

export default DashboardTutorialsPage;
