import "../styles/globals.scss";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ContextProvider } from "../context/context";
import Snackbar from "../components/SnackbarWrapper";

import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
    >
      <ThemeProvider theme={theme}>
        <ContextProvider>
          {getLayout(<Component {...pageProps} />)}

          <Snackbar />
        </ContextProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}
