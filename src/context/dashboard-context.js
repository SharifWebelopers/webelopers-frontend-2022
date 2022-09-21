import { createContext, useState } from "react";

const DashboardContext = createContext();

export const withDashboardContext = (Component) => {
  const WrappedComp = (props) => {
    const [context, setContext] = useState({ refreshInfo: true });

    return (
      <DashboardContext.Provider value={[context, setContext]}>
        <Component {...props} />
      </DashboardContext.Provider>
    );
  };

  return WrappedComp;
};

export default DashboardContext;
