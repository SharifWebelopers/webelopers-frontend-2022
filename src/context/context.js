import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const router = useRouter();
  const [context, setContext] = useState({
    snackbar: {
      open: false,
      message: "",
      variant: "success",
    },
    loggedIn: false,
    first_name: "نام و",
    last_name: "نام خانوادگی",
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setContext((old) => ({ ...old, loggedIn: true }));
    }
  }, [router.pathname]);

  return (
    <Context.Provider value={[context, setContext]}>
      {children}
    </Context.Provider>
  );
};

export default Context;
