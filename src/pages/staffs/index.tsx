import classNames from "classnames";
import React, { useState } from "react";
import Staff from "../../components/Staff";
import styles from "./staffs.module.scss";

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

function Staffs() {
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
          .map((_value, index) => (
            <Staff key={index} />
          ))}
      </div>
    </div>
  );
}

export default Staffs;
