import type { ReactElement } from "react";
import Link from "next/link";

import styles from "./AuthLayout.module.scss";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles["logo-container"]}>
        <Link className={styles.logo} href="/">
          <img src="/webelopers-logo.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles["inputs-box"]}>{children}</div>
    </div>
  );
}
