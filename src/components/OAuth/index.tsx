import { Divider, IconButton } from "@mui/material";
import Image from "next/image";
import { useGoogleLogin } from "@react-oauth/google";
// @ts-ignore
import GitHubLogin from "react-github-login";

import styles from "./OAuth.module.scss";

function OAuth() {
  const responseGoogle = (res: any) => {
    console.log("googla googla", res);
  };
  const responseGithub = (res: any) => {
    console.log("githuuuuuuub", res);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
  });

  return (
    <>
      <Divider
        variant="fullWidth"
        sx={{ backgroundColor: "#757575", width: "20vw", height: 2 }}
      />
      <div className={styles["oauth-container"]}>
        <div>ورود از طریق:</div>
        <div className={styles["oauth-logos-container"]}>
          <IconButton onClick={() => googleLogin()}>
            <Image src="/gmail-logo.svg" alt="gmail" layout="fill" />
          </IconButton>

          <GitHubLogin
            clientId={process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || ""}
            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-78trlr-MuiButtonBase-root-MuiIconButton-root"
            onSuccess={responseGithub}
            onFailure={responseGithub}
          >
            <Image src="/github-logo.svg" alt="github" layout="fill" />
          </GitHubLogin>
        </div>
      </div>
    </>
  );
}

export default OAuth;
