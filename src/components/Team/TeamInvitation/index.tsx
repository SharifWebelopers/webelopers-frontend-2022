import React, { useContext, useState } from "react";
import {
  acceptRecievedInvitations,
  rejectRecievedInvitations,
} from "../../../actions/team";
import Modal from "../../Modal";
import Context from "../../../context/context";
import styles from "./TeamInvitation.module.scss";

interface TeamInvitationProps {
  title?: string;
  creator: {
    first_name: string;
    last_name: string;
  };
  teamName: string;
  invitationId: string;
  setInvitations: React.Dispatch<React.SetStateAction<never[]>>;
}

function TeamInvitation({
  creator,
  teamName,
  invitationId,
  setInvitations,
}: TeamInvitationProps) {
  const [context, setContext] = useContext(Context);
  const [modalLoading, setModalLoading] = useState(false);
  const [acceptModalOpen, setAcceptModalOpen] = useState(false);
  const handleAcceptModalOpen = () => setAcceptModalOpen(true);
  const handleAcceptModalClose = () => setAcceptModalOpen(false);
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const handlerejectModalOpen = () => setRejectModalOpen(true);
  const handleRejectModalClose = () => setRejectModalOpen(false);
  const handleAccept = () => {
    setModalLoading(true);
    acceptRecievedInvitations(invitationId)
      .then((res) => res.data)
      .then((data) => {
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "درخواست شما با موفقیت انجام شد.",
            variant: "success",
          },
        }));
        setInvitations([]);
      })
      .catch((error) => {
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "مشکلی در سامانه رخ داده است.",
            variant: "success",
          },
        }));
      })
      .finally(() => {
        setModalLoading(false);
        handleAcceptModalClose();
      });
  };
  const handleReject = () => {
    setModalLoading(true);
    rejectRecievedInvitations(invitationId)
      .then((res) => res.data)
      .then((data) => {
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "درخواست شما با موفقیت انجام شد.",
            variant: "success",
          },
        }));
        setInvitations((old) =>
          old.filter((item: any) => item.id !== invitationId)
        );
      })
      .catch((error) => {
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "مشکلی در سامانه رخ داده است.",
            variant: "success",
          },
        }));
      })
      .finally(() => {
        setModalLoading(false);
        handleRejectModalClose();
      });
  };
  const fullName = creator.first_name + creator.last_name;
  return (
    <>
      <Modal
        open={acceptModalOpen}
        onAccept={handleAccept}
        title={`آیا مطمئنید که می‌خواهید درخواست ${fullName} را قبول کنید؟`}
        loading={modalLoading}
        handleClose={handleAcceptModalClose}
      />
      <Modal
        open={rejectModalOpen}
        onAccept={handleReject}
        title={`آیا مطمئنید که می‌خواهید درخواست ${fullName} را رد کنید؟`}
        loading={modalLoading}
        handleClose={handleRejectModalClose}
      />
      <div className={styles.invitation}>
        <div
          className={styles.title}
        >{`${fullName} شما را به تیم ${teamName} دعوت کرده است.`}</div>
        <div className={styles.buttons}>
          <button onClick={handleAcceptModalOpen} className={styles.accept}>
            قبول
          </button>
          <button onClick={handlerejectModalOpen} className={styles.reject}>
            رد
          </button>
        </div>
      </div>
    </>
  );
}

export default TeamInvitation;
