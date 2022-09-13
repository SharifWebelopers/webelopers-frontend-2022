import React from "react";
import TeamInvitation from "../TeamInvitation";
import styles from "./TeamInvitations.module.scss";

function TeamInvitations() {
  return (
    <div className={styles.invitations}>
      {Array(8)
        .fill(null)
        .map((item, index) => (
          <TeamInvitation key={index} />
        ))}
    </div>
  );
}

export default TeamInvitations;
