import Link from "next/link";
import type { ReactElement } from "react";

import styles from "./AuthLayout.module.scss";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles["left-panel"]}>
        <div className={styles["logo-container"]}>
          <Link className={styles.logo} href="/">
            <img src="/webelopers-logo.png" alt="logo" />
          </Link>
        </div>
      </div>
      <main className={styles["right-panel"]}>{children}</main>
    </div>
  );
}