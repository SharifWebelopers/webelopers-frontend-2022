import React, { ReactElement } from "react";
import Layout from "../../../components/DashboardLayout";

import Head from "next/head";
import SettingsContainer from "../../../components/Settings/Container";

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
