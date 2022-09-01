import React, { ReactElement } from "react";
import Layout from "../../../components/DashboardLayout";

import SettingsContainer from "../../../components/Settings";

function DashboardSettingsPage() {
  return <SettingsContainer />;
}

DashboardSettingsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};

export default DashboardSettingsPage;
