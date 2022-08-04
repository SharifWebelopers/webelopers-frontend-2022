import { Divider } from "@mui/material";

import styles from "./OAuth.module.scss";

function OAuth() {
  return (
    <>
      <Divider
        variant="fullWidth"
        sx={{ backgroundColor: "#1C156D", width: "100%" }}
      />
      <div className={styles["oauth-container"]}>
        <div>ورود از طریق:</div>
        <div className={styles["oauth-logos-container"]}>
          <img src="/gmail-logo.png" alt="gmail" />
          <img src="/github-logo.png" alt="github" />
        </div>
      </div>
    </>
  );
}

export default OAuth;
