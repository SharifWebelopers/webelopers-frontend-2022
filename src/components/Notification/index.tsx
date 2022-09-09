import React from "react";
import classNames from "classnames";
import useCollapse from "react-collapsed";
import SouthIcon from "@mui/icons-material/South";
import styles from "./Notification.module.scss";

interface NotificationProps {
  data: { header: string; body: string };
}

function Notification({ data }: NotificationProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className={styles.faq}>
      <div className={styles.faqSummary} {...getToggleProps()}>
        <div className={styles.faqTitle}>{data.header}</div>
        <SouthIcon
          className={classNames(styles.arrowIcon, {
            [styles.arrowFlip]: isExpanded,
          })}
        />
      </div>
      <div className={styles.faqDescriptionWrapper} {...getCollapseProps()}>
        <div className={styles.faqDescription}>{data.body}</div>
      </div>
    </div>
  );
}

export default Notification;
