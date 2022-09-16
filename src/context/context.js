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
    profile: {
      profile_image: "",
      first_name: "",
      contest_type: null,
      needs_team: "",
      is_team_creator: "",
      last_name: "",
      phone_number: "",
      email: "",
      province: "",
      university_degree: "",
      university_start_date: "",
      field_study: "",
      university: "",
      linkedin_link: "",
      github_link: "",
      django_experience: "",
      react_experience: "",
      devops_experience: "",
      can_sponsor_see_profile: true,
      resume: "",
    },
  });

  useEffect(() => {
    setContext((old) => ({
      ...old,
      loggedIn: !!localStorage.getItem("accessToken"),
    }));
  }, [router.pathname]);

  return (
    <Context.Provider value={[context, setContext]}>
      {children}
    </Context.Provider>
  );
};

export default Context;
