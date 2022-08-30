import React from "react";
import styles from "./ProfilePicture.module.scss";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const PorfilePicture = ({ src }: { src: string }) => {
  return (
    <>
      <div>
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
