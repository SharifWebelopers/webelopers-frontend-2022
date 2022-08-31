import React from "react";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import styles from "./ProfilePicture.module.scss";

const PorfilePicture = ({ src }: { src: string }) => {
  return (
    <>
      <div className={styles["avatar-container"]}>
        <img
          className={styles["profile-ellipsis"]}
          src="/profile-ellipsis.png"
          alt="elipsis"
        />
        <img className={styles.avatar} src={src} alt="no picture!" />
      </div>
      <IconButton
        className={styles["upload-button"]}
        color="secondary"
        component="label"
      >
        <input hidden accept="image/*" type="file" />
        <PhotoCamera style={{ width: 35, height: 30 }} />
      </IconButton>
    </>
  );
};

export default PorfilePicture;
