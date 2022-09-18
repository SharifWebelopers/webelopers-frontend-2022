import React from "react";
import MuiModal from "@mui/material/Modal";
import styles from "./Modal.module.scss";

interface ModalProps {
  onAccept?: () => void;
  onReject?: () => void;
  title?: string;
  open: boolean;
  handleOpen?: () => void;
  handleClose?: () => void;
  loading?: boolean;
}

function Modal({
  onAccept,
  title,
  open,
  handleClose,
  loading,
}: ModalProps) {
  return (
    <MuiModal open={open} onClose={handleClose}>
      <div className={styles.modal}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.modalButtons}>
          <button
            disabled={loading}
            className={styles.modalAccept}
            onClick={onAccept}
          >
            تایید
          </button>
          <button
            disabled={loading}
            className={styles.modalReject}
            onClick={handleClose}
          >
            بازگشت
          </button>
        </div>
      </div>
    </MuiModal>
  );
}

export default Modal;
