import React from "react";
import Image, { StaticImageData } from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import staffElipsisImg from "../../assets/images/staffElipsis.png";
import styles from "./Staff.module.scss";
import classNames from "classnames";

interface StaffProps {
  data: {
    fullName: string;
    image: StaticImageData;
    role?: string;
    linkedin?: string;
    github?: string;
  };
}

function Staff({ data }: StaffProps) {
  return (
    <div className={styles.teamStaff}>
      <div className={styles.staffImgWrapper}>
        <div className={styles.staffElipsis}>
          <Image src={staffElipsisImg} alt="elipsis" width={80} height={60} />
        </div>
        <Image
          src={data.image}
          alt="staff image"
          width={160}
          height={160}
          className={styles.staffImg}
        />
      </div>
      <p>{data.fullName}</p>
      {data.role && <p className={styles.role}>{data.role}</p>}
      <div className={styles.socials}>
        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon
              className={classNames(styles.socialIcon, styles.linkedin)}
            />
          </a>
        )}
        {data.github && (
          <a href={data.github} target="_blank" rel="noreferrer">
            <GitHubIcon className={styles.socialIcon} />
          </a>
        )}
      </div>
    </div>
  );
}

export default Staff;
