import React from "react";
import styles from "./TeamInvitation.module.scss";

interface TeamInvitationProps {
  title: string;
}

function TeamInvitation({
  title = "فلانی شما را به فلان تیم دعوت کرده است.",
}: TeamInvitationProps) {
  return (
    <div className={styles.invitation}>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttons}>
        <button className={styles.accept}>قبول</button>
        <button className={styles.reject}>رد</button>
      </div>
    </div>
  );
}

export default TeamInvitation;
