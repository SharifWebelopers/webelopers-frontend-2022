import { ReactElement, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./AuthLayout.module.scss";
import Image from "next/future/image";

import logo from "../../assets/images/logo.png";
import Context from "../../context/context";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  const [context, _] = useContext(Context);

  if (context.loggedIn) {
    router.replace("/dashboard");
  }

  return (
    <div className={styles.container}>
      <div className={styles["logo-container"]}>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles["inputs-box"]}>{children}</div>
    </div>
  );
}
