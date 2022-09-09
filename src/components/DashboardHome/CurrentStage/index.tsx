import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Divider } from "@mui/material";
import CurrentStageIcon from "../icons/CurrentStageIcon";
import { getStages } from "../../../actions/dashboard";

import styles from "./CurrentStage.module.scss";

class TimerObject {
  deadline: number;

  constructor(deadline: number) {
    this.deadline = deadline;
  }

  getDays() {
    return Math.floor((this.deadline - Date.now()) / (1000 * 60 * 60 * 24));
  }

  getHours() {
    return Math.floor((this.deadline - Date.now()) / (1000 * 60 * 60)) % 24;
  }

  getMinutes() {
    return Math.floor((this.deadline - Date.now()) / (1000 * 60)) % 60;
  }

  getSeconds() {
    return Math.floor((this.deadline - Date.now()) / 1000) % 60;
  }
}

const CurrentStage = () => {
  const [stage, setStage] = useState({
    name: "",
    document_url: "",
    deadline: 0,
    start_time: 0,
  });
  const [remainingTime, setRemainingTime] = useState({
    Days: "00",
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  });

  const timer = new TimerObject(stage.deadline);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (stage.deadline)
        setRemainingTime({
          Days: timer.getDays().toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          }),
          Hours: timer.getHours().toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          }),
          Minutes: timer.getMinutes().toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          }),
          Seconds: timer.getSeconds().toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          }),
        });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [stage.deadline]);

  useEffect(() => {
    getStages().then((res: any) => {
      const lastStage = res.data[res.data.length - 1];
      setStage({
        name: lastStage.name,
        document_url: lastStage.document_url,
        deadline: +lastStage.deadline_timestamp,
        start_time: +lastStage.start_timestamp,
      });
    });
  }, []);

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
          <Button
            variant="outlined"
            sx={{
              height: "60px",
              width: "100%",
              fontSize: "1.5rem",
              color: "#fff",
              borderColor: "#c2a090",
              "&:hover": {
                borderColor: "#9e8379",
                backgroundColor: "#9e8379",
              },
            }}
            component={"a"}
            href={stage.document_url}
            download
          >
            دانلود فایل
          </Button>
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
          <div className={styles.data}>
            {!!stage.deadline &&
              new Date(stage.deadline).toLocaleDateString("fa", {
                month: "long",
                day: "numeric",
              })}
          </div>
        </div>
        <div className={styles["timer-container"]}>
          <CircularProgress
            className={styles["circular-timer"]}
            variant="determinate"
            value={100}
            thickness={0.4}
            color="timerContrast"
          />
          <CircularProgress
            className={styles["circular-timer"]}
            variant="determinate"
            value={
              stage.deadline && stage.start_time
                ? ((stage.deadline - Date.now()) /
                    (stage.deadline - stage.start_time)) *
                  100
                : 0
            }
            thickness={1}
            color="timer"
          />
          <div style={{ color: "white" }}>
            {remainingTime.Days}:{remainingTime.Hours}:{remainingTime.Minutes}:
            {remainingTime.Seconds}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStage;
