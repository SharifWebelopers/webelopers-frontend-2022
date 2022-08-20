import React, { useContext } from "react";
import { Snackbar, Alert } from "@mui/material";
import Context from "../../context/context";

import styles from "./SnackbarWrapper.module.scss";

const SnackbarWrapper = () => {
  const [context, setContext] = useContext(Context);

  const closeSnackbar = () => {
    setContext({
      ...context,
      snackbar: {
        open: false,
        message: "",
        variant: context.snackbar.variant,
      },
    });
  };

  return (
    <Snackbar
      open={context.snackbar.open}
      autoHideDuration={6000}
      onClose={closeSnackbar}
    >
      <Alert
        className={styles.alert}
        onClose={closeSnackbar}
        severity={context.snackbar.variant}
        sx={{ width: "100%" }}
      >
        <div className={styles.text}>{context.snackbar.message}</div>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarWrapper;
