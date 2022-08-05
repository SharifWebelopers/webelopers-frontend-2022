import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./staffs.module.scss";
import randomUserImage from "../../assets/images/84.jpeg";
import staffElipsisImg from "../../assets/images/staffElipsis.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Staffs() {
  const teamTitles = [
    "دبیران",
    "انسانی",
    "فنی",
    "علمی",
    "مدیا",
    "اجرایی",
    "برندینگ",
    "اسپانسرشیپ",
  ];

  const [activeTeamTitle, setactiveTeamTitle] = useState(teamTitles[0]);

  return (
    <div className={styles.staff}>
      <h1>تیم برگزاری</h1>
      <div className={styles.teamTitles}>
        {teamTitles.map((teamTitle) => (
          <div
            key={teamTitle}
            className={classNames(styles.teamTitle, {
              [styles.teamTitleActive]: teamTitle === activeTeamTitle,
            })}
            onClick={() => setactiveTeamTitle(teamTitle)}
          >
            {teamTitle}
          </div>
        ))}
      </div>
      <div className={styles.teamStaffs}>
        {Array(8)
          .fill(null)
          .map((value, index) => (
            <div key={index} className={styles.teamStaff}>
              <div className={styles.staffImgWrapper}>
                <div className={styles.staffElipsis}>
                  <Image
                    src={staffElipsisImg}
                    alt="elipsis"
                    width={96}
                    height={72}
                  />
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
                <LinkedInIcon className={styles.socialIcon} />
                <GitHubIcon className={styles.socialIcon} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Staffs;
