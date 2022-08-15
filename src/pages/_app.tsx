import "../styles/globals.scss";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}
/* <Snackbar
  open={state.Snackbar.show}
  autoHideDuration={6000}
  onClose={closeSnackbar}
>
  <Alert
    onClose={closeSnackbar}
    severity="success"
    sx={{ width: "100%" }}
  >
    {state.snackbar.message}
  </Alert>
</Snackbar> */
