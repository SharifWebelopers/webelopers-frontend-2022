import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [context, setContext] = useState({
    snackbar: {
      open: false,
      message: "",
      variant: "success",
    },
    loggedIn: false,
  });

  return (
    <Context.Provider value={[context, setContext]}>
      {children}
    </Context.Provider>
  );
};

export default Context;
