import React from "react";
import CurrentStageIcon from "../icons/CurrentStageIcon";

import styles from "./CurrentStage.module.scss";

const CurrentStage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <CurrentStageIcon />
        <div>وضعیت</div>
      </div>
    </div>
  );
};

export default CurrentStage;
