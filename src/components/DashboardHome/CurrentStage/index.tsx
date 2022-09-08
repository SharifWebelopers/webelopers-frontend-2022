import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import CurrentStageIcon from "../icons/CurrentStageIcon";

import styles from "./CurrentStage.module.scss";

const CurrentStage = () => {
  const [stage, setStage] = useState({
    name: "فلان مرحله",
    document_url: null,
    deadline: "۵ شهریور",
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <CurrentStageIcon />
        <div>وضعیت</div>
      </div>
      <div className={styles.content}>
        <div className={styles["stage-info"]}>
          <div className={styles.identifier}>مرحله</div>
          <Divider
            orientation="vertical"
            sx={{ color: "#c2a090", height: "60%", borderColor: "unset" }}
          />
          <div className={styles.data}>{stage.name}</div>
        </div>
        {stage.document_url ? (
          <Button>دانلود فایل</Button>
        ) : (
          <div className={styles["stage-info"]}>
            <div className={styles.data}>این مرحله فایلی ندارد!</div>
          </div>
        )}
        <div className={styles["stage-info"]}>
          <div className={styles.identifier}>مهلت پایان تا</div>
          <Divider
            orientation="vertical"
            sx={{ color: "#c2a090", height: "60%", borderColor: "unset" }}
          />
          <div className={styles.data}>{stage.deadline}</div>
        </div>
        <div
          style={{
            border: "1px solid seagreen",
            borderRadius: "50%",
            height: "100%",
            width: "218px",
            alignSelf: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CurrentStage;
