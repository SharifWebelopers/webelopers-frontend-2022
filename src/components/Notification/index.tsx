import React from "react";
import classNames from "classnames";
import useCollapse from "react-collapsed";
import SouthIcon from "@mui/icons-material/South";
import styles from "./Notification.module.scss";

interface FaqProps {
  data: { question: string; answer: string };
}

function Notification({ data }: FaqProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className={styles.faq}>
      <div className={styles.faqSummary} {...getToggleProps()}>
        <div className={styles.faqTitle}>{data.question}</div>
        <SouthIcon
          className={classNames(styles.arrowIcon, {
            [styles.arrowFlip]: isExpanded,
          })}
        />
      </div>
      <div className={styles.faqDescriptionWrapper} {...getCollapseProps()}>
        <div className={styles.faqDescription}>{data.answer}</div>
      </div>
    </div>
  );
}

export default Notification;
