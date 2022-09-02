import React from "react";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Close from "@mui/icons-material/Close";
import Image from "next/image";
import staffElipsis from "../../../assets/images/staffElipsis.png";
import defaultImg from "../../../assets/images/white.jpeg";
import { updateUserInfo } from "../../../actions/dashboard";

import styles from "./ProfilePicture.module.scss";

const PorfilePicture = ({
  src,
  setRefreshInfo,
}: {
  src: null | string;
  setRefreshInfo: Function;
}) => {
  const setProfilePicture = (file: any) => {
    const form_data = new FormData();
    form_data.append("profile_image", file, file.name);
    updateUserInfo(form_data).then(() => {
      setRefreshInfo(true);
    });
  };

  return (
    <>
      <div className={styles["avatar-container"]}>
        <Image
          className={styles["profile-ellipsis"]}
          src={staffElipsis}
          alt=""
          width={80}
          height={60}
        />
        <Image
          className={styles.avatar}
          src={src || defaultImg}
          alt="no picture!"
          height={200}
          width={200}
        />
      </div>
      <div className={styles["button-container"]}>
        <IconButton
          className={styles["upload-button"]}
          color="secondary"
          component="label"
        >
          <input
            onChange={(e) => {
              setProfilePicture(e.target.files?.[0]);
            }}
            hidden
            accept="image/*"
            type="file"
          />
          <PhotoCamera style={{ width: 35, height: 30 }} />
        </IconButton>
        {src && (
          <IconButton
            className={styles["upload-button"]}
            color="error"
            onClick={() => {
              const form_data = new FormData();
              form_data.append("profile_image", "");
              updateUserInfo(form_data).then(() => {
                setRefreshInfo(true);
              });
            }}
          >
            <Close style={{ width: 35, height: 30 }} />
          </IconButton>
        )}
      </div>
    </>
  );
};

export default PorfilePicture;
