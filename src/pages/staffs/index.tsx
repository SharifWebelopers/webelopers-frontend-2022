import classNames from "classnames";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Staff from "../../components/Staff";
import staffsData from "./staffData";
import useCollapse from "react-collapsed";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./staffs.module.scss";
import { useMediaQuery } from "@mui/material";

const teamTitles = [
  "دبیران",
  "انسانی",
  "فنی",
  "علمی",
  "اجرایی",
  "مارکتینگ",
  "مدیا",
  "اسپانسرشیپ",
];

function Staffs() {
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:910px)");
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className={styles.staff}>
      <Header />
      <h1>تیم برگزاری</h1>
      {isMobile ? (
        <div className={styles.teamTitlesMobileWrapper}>
          <div className={styles.teamTitlesMobile}>
            <div
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
              })}
              className={styles.teamTitlesMobileHeader}
            >
              <div className={styles.teamTitleActiveMobile}>
                {teamTitles[activeTeamIndex]}
              </div>
              <ExpandMoreIcon
                className={classNames(styles.arrowIcon, {
                  [styles.arrowFlip]: isExpanded,
                })}
              />
            </div>
            <div
              className={styles.teamTitlesListMobileWrapper}
              {...getCollapseProps()}
            >
              <div className={styles.teamTitlesListMobile}>
                {teamTitles.map(
                  (teamTitle, index) =>
                    index !== activeTeamIndex && (
                      <div
                        className={styles.teamTitleMobileWrapper}
                        key={teamTitle}
                      >
                        <div
                          className={styles.teamTitleMobile}
                          onClick={() => {
                            setExpanded((prevExpanded) => !prevExpanded);
                            setActiveTeamIndex(index);
                          }}
                        >
                          {teamTitle}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.teamTitles}>
          {teamTitles.map((teamTitle, index) => (
            <div
              key={teamTitle}
              className={classNames(styles.teamTitle, {
                [styles.teamTitleActive]: index === activeTeamIndex,
              })}
              onClick={() => setActiveTeamIndex(index)}
            >
              {teamTitle}
            </div>
          ))}
        </div>
      )}
      <div className={styles.teamStaffs}>
        {staffsData[activeTeamIndex].map((data, index) => (
          <Staff key={index} data={data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Staffs;
