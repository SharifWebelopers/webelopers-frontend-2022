import React from "react";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import staffElipsisImg from "../../assets/images/staffElipsis.png";
import randomUserImage from "../../assets/images/84.jpeg";
import styles from "./Staff.module.scss";
import classNames from "classnames";

function Staff() {
  return (
    <div className={styles.teamStaff}>
      <div className={styles.staffImgWrapper}>
        <div className={styles.staffElipsis}>
          <Image src={staffElipsisImg} alt="elipsis" width={96} height={72} />
        </div>
        <Image
          src={randomUserImage}
          alt="staff image"
          width={198}
          height={198}
          className={styles.staffImg}
        />
      </div>
      <p>نام/نام خانوادگی</p>
      <p>مسئول ...</p>
      <div className={styles.socials}>
        <LinkedInIcon
          className={classNames(styles.socialIcon, styles.linkedin)}
        />
        <GitHubIcon className={styles.socialIcon} />
      </div>
    </div>
  );
}

export default Staff;
