import { createContext, useState } from "react";

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  return (
    <SnackbarContext.Provider value={[snackbar, setSnackbar]}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
