import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setContext((old) => ({ ...old, loggedIn: true }));
    }
  }, []);

  return (
    <Context.Provider value={[context, setContext]}>
      {children}
    </Context.Provider>
  );
};

export default Context;
