import React, { useEffect, useState } from "react";
import { getRecievedInvitations } from "../../../actions/team";
import TeamInvitation from "../TeamInvitation";
import styles from "./TeamInvitations.module.scss";

function TeamInvitations() {
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
  }, []);
  return (
    <div className={styles.invitations}>
      {invitations
        .filter((item: any) => item.state === 1)
        .map((item: any, index) => (
          <TeamInvitation
            invitationId={item.id}
            teamName={item.team.name}
            creator={item.team.creator}
            key={index}
          />
        ))}
    </div>
  );
}

export default TeamInvitations;
