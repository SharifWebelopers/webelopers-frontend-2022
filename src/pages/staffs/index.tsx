import classNames from "classnames";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
      <Header />
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
        {Array(10)
          .fill(null)
          .map((_value, index) => (
            <Staff key={index} />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Staffs;
