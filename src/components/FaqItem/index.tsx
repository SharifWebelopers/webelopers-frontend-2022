import React from "react";
import classNames from "classnames";
import useCollapse from "react-collapsed";
import SouthIcon from "@mui/icons-material/South";
import styles from "./FaqItem.module.scss";

function FaqItem() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className={styles.faq}>
      <div className={styles.faqSummary} {...getToggleProps()}>
        <div className={styles.faqTitle}>نحوه ثبت نام و شرکت در رویداد</div>
        <SouthIcon
          className={classNames(styles.arrowIcon, {
            [styles.arrowFlip]: isExpanded,
          })}
        />
      </div>
      <div className={styles.faqDescriptionWrapper} {...getCollapseProps()}>
        <div className={styles.faqDescription}>
          برای ثبت نام در رویداد به راحتی می‌توانید در همین سایت ثبت‌نام کنید.
          با ثبت‌نام در سایت، اطلاعیه‌های مرتبط با رویداد به شما ایمیل خواهد شد
          تا در جریان تمامی اتفاقات رویداد قرار بگیرید.
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
