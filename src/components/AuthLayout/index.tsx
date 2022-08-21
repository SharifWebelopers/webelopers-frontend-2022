import type { ReactElement } from "react";
import Link from "next/link";

import styles from "./AuthLayout.module.scss";
import Image from "next/future/image";

import logo from "../../assets/images/logo.png";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props) {
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
