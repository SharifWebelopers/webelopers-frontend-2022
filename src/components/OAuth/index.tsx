import { Divider, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

import { useGoogleLogin } from "@react-oauth/google";
// @ts-ignore
import GitHubLogin from "react-github-login";

import { sendSocialAuthToken } from "../../actions/auth";

import styles from "./OAuth.module.scss";

function OAuth() {
  const router = useRouter();

  const responseGoogle = async (res: any) => {
    console.log("googla googla", res);
    sendSocialAuthToken("google", { auth_token: res.access_token })
      .then((res) => {
        // maybe so some other things? (store token for example)
        router.push("/");
      })
      .catch((err) => {
        // show some error (for github with private email need to show suitable error)
      });
  };

  const responseGithub = (res: any) => {
    sendSocialAuthToken("github", { auth_token: res.code })
      .then((res) => {
        // maybe so some other things? (store token for example)
        router.push("/");
      })
      .catch((err) => {
        // show some error (for github with private email need to show suitable error)
      });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: () => {
      // show some error
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
            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-78trlr-MuiButtonBase-root-MuiIconButton-root"
            onSuccess={responseGithub}
            onFailure={() => {
              // show some errors here too
            }}
          >
            <Image src="/github-logo.svg" alt="github" layout="fill" />
          </GitHubLogin>
        </div>
      </div>
    </>
  );
}

export default OAuth;
