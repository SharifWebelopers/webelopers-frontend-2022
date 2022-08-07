import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.loginBtn}>
          <LoginIcon className={styles.loginIcon} />
          ورود | ثبت نام
        </button>
        <nav className={styles.nav}>
          <Link href={"/"}>
            <div className={styles.navItem}>خانه</div>
          </Link>
          <Link href={"/staffs"}>
            <div className={styles.navItem}>تیم برگزاری</div>
          </Link>
          <Link href={"/sponsorship"}>
            <div className={styles.navItem}>حامی مالی</div>
          </Link>
          <Link href={"/faq"}>
            <div className={styles.navItem}>سوالات متداول</div>
          </Link>
        </nav>
        <Link href={"/"}>
          <a className={styles.logo}>
            <Image src={logo} alt="webelopers logo" width={100} height={60} />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
