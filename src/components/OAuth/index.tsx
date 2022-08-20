import { useContext } from "react";
import { Divider, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Context from "../../context/context";

import { useGoogleLogin } from "@react-oauth/google";
// @ts-ignore
import GitHubLogin from "react-github-login";

import { sendSocialAuthToken } from "../../actions/auth";

import styles from "./OAuth.module.scss";

function OAuth() {
  const router = useRouter();

  const [context, setContext] = useContext(Context);

  const responseGoogle = async (res: any) => {
    sendSocialAuthToken("google", { auth_token: res.access_token })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        setContext({
          ...context,
          snackbar: {
            open: true,
            message: "ورود موفقیت‌آمیز بود!",
            variant: "success",
          },
          loggedIn: true,
        });
        router.push("/dashboard");
      })
      .catch((err) => {
        // TODO make errors more informative
        const message = "خطایی رخ داده است!";
        setContext({
          ...context,
          snackbar: {
            open: true,
            message,
            variant: "error",
          },
        });
      });
  };

  const responseGithub = (res: any) => {
    sendSocialAuthToken("github", { auth_token: res.code })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        setContext({
          ...context,
          snackbar: {
            open: true,
            message: "ورود موفقیت‌آمیز بود!",
            variant: "success",
          },
          loggedIn: true,
        });
        router.push("/dashboard");
      })
      .catch((err) => {
        // TODO make errors more informative
        const message = "خطایی رخ داده است!";
        setContext({
          ...context,
          snackbar: {
            open: true,
            message,
            variant: "error",
          },
        });
      });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: () => {
      const message = "خطایی رخ داده است!";
      setContext({
        ...context,
        snackbar: {
          open: true,
          message,
          variant: "error",
        },
      });
    },
  });

  return (
    <>
      <Divider
        variant="fullWidth"
        sx={{
          backgroundColor: "#757575",
          minWidth: "20vw",
          width: "100%",
          height: 2,
        }}
      />
      <div className={styles["oauth-container"]}>
        <div>ورود از طریق:</div>
        <div className={styles["oauth-logos-container"]}>
          <IconButton onClick={() => googleLogin()}>
            <Image src="/gmail-logo.svg" alt="gmail" layout="fill" />
          </IconButton>

          <GitHubLogin
            clientId={process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || ""}
            redirectUri={process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI}
            className={styles["github-login"]}
            onSuccess={responseGithub}
            onFailure={() => {
              const message = "خطایی رخ داده است!";
              setContext({
                ...context,
                snackbar: {
                  open: true,
                  message,
                  variant: "error",
                },
              });
            }}
          >
            <img src="/github-logo.svg" alt="github" />
          </GitHubLogin>
        </div>
      </div>
    </>
  );
}

export default OAuth;
