import React, { useEffect, useState } from "react";
import NotifsIcon from "../icons/NotifsIcon";
import Notification from "../../Notification";
import { getNotifs } from "../../../actions/dashboard";

import styles from "./Notifs.module.scss";

const Notifs = () => {
  const [notifs, setNotifs] = useState([]);

  useEffect(() => {
    getNotifs().then((res) => {
      setNotifs(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <NotifsIcon />
        <div>اعلانات</div>
      </div>
      <div>
        {notifs.map((data, index) => (
          <Notification data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Notifs;
