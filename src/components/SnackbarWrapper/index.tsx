import React from "react";

const SnackbarWrapper = () => {
  return (
    <Snackbar
      open={state.Snackbar.show}
      autoHideDuration={6000}
      onClose={closeSnackbar}
    >
      <Alert onClose={closeSnackbar} severity="success" sx={{ width: "100%" }}>
        {state.snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarWrapper;
