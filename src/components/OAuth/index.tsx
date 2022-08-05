import { Divider } from "@mui/material";

import styles from "./OAuth.module.scss";

function OAuth() {
  return (
    <>
      <Divider
        variant="fullWidth"
        sx={{ backgroundColor: "#757575", width: 390, height: 2 }}
      />
      <div className={styles["oauth-container"]}>
        <div>ورود از طریق:</div>
        <div className={styles["oauth-logos-container"]}>
          <a href="">
            <img src="/linkedin-logo.svg" alt="github" />
          </a>
          <a href="">
            <img src="/gmail-logo.svg" alt="gmail" />
          </a>
          <a href="">
            <img src="/github-logo.svg" alt="github" />
          </a>
        </div>
      </div>
    </>
  );
}

export default OAuth;
