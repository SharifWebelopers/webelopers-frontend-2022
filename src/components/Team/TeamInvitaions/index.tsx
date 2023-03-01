import React, { useEffect, useState } from "react";
import { getRecievedInvitations } from "../../../actions/team";
import TeamInvitation from "../TeamInvitation";
import styles from "./TeamInvitations.module.scss";

function TeamInvitations({ tabState }: { tabState: number }) {
  const [invitations, setInvitations] = useState([]);
  useEffect(() => {
    getRecievedInvitations()
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setInvitations(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tabState]);
  const activInvitations = invitations.filter((item: any) => item.state === 1);
  return (
    <div className={styles.invitations}>
      {activInvitations.length === 0 && (
        <div className={styles.noInvitation}>
          شما هیچ دعوت‌نامه‌ی فعالی ندارید.
        </div>
      )}
      {activInvitations.map((item: any, index) => (
        <TeamInvitation
          invitationId={item.id}
          teamName={item.team.name}
          creator={item.team.creator}
          key={index}
          setInvitations={setInvitations}
        />
      ))}
    </div>
  );
}

export default TeamInvitations;
