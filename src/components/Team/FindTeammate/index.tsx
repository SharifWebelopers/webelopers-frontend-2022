import React from "react";
import Search from "./Search";

import styles from "./FindTeammate.module.scss";

const FindTeammate = () => {
  return (
    <div className={styles.container}>
      <Search />
    </div>
  );
};

export default FindTeammate;
