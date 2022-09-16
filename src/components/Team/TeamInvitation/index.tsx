import React from "react";
import {
  acceptRecievedInvitations,
  rejectRecievedInvitations,
} from "../../../actions/team";
import styles from "./TeamInvitation.module.scss";

interface TeamInvitationProps {
  title?: string;
  creator: {
    first_name: string;
    last_name: string;
  };
  teamName: string;
  invitationId: string;
}

function TeamInvitation({
  creator,
  teamName,
  invitationId,
}: TeamInvitationProps) {
  const handleAccept = () => {
    acceptRecievedInvitations(invitationId)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleReject = () => {
    rejectRecievedInvitations(invitationId)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.invitation}>
      <div
        className={styles.title}
      >{`${creator.first_name} ${creator.last_name} شما را به تیم ${teamName} دعوت کرده است.`}</div>
      <div className={styles.buttons}>
        <button onClick={handleAccept} className={styles.accept}>
          قبول
        </button>
        <button onClick={handleReject} className={styles.reject}>
          رد
        </button>
      </div>
    </div>
  );
}

export default TeamInvitation;
