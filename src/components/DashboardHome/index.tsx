import React from "react";
import { Divider } from "@mui/material";
import CurrentStage from "./CurrentStage";
import Notifs from "./Notifs";

import styles from "./DashboardHome.module.scss";

const DashboardHome = () => {
  return (
    <div className={styles.container}>
      <Notifs />
      <Divider
        orientation="vertical"
        sx={{ color: "#1d1b26", height: "100%", borderColor: "unset" }}
      />
      <CurrentStage />
    </div>
  );
};

export default DashboardHome;
