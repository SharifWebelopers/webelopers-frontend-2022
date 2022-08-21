import React, { useContext } from "react";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import useMobile from "../../utils/useMobile";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
import Context from "../../context/context";
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Header() {
  const [context, _] = useContext(Context);

  const isMobile = useMobile();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {isMobile ? (
        <header className={styles.headerMobile}>
          <div className={styles.menuIcon} onClick={handleClickOpen}>
            <MenuIcon fontSize="large" />
          </div>
          <Link href={"/"}>
            <a className={styles.logo}>
              <Image src={logo} alt="webelopers logo" width={56} height={32} />
            </a>
          </Link>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <div className={styles.modal}>
              <div className={styles.closeIcon} onClick={handleClose}>
                <CloseIcon fontSize="large" />
              </div>
              <Link href={"/"}>
                <div className={styles.navItemMobile}>خانه</div>
              </Link>
              <Link href={"/staffs"}>
                <div className={styles.navItemMobile}>تیم برگزاری</div>
              </Link>
              <Link href={"/sponsors"}>
                <div className={styles.navItemMobile}>حامیان</div>
              </Link>
              <Link href={"/faq"}>
                <div className={styles.navItemMobile}>سوالات متداول</div>
              </Link>
              {context.loggedIn ? (
                <Link href={"/dashboard"}>
                  <div className={styles.navItemMobile}>داشبورد</div>
                </Link>
              ) : (
                <>
                  <button
                    className={classNames(
                      styles.modalBtn,
                      styles.modalRegisterBtn
                    )}
                    onClick={() => router.push("/auth/signup")}
                  >
                    ثبت نام
                  </button>
                  <button
                    className={styles.modalBtn}
                    onClick={() => router.push("/auth/login")}
                  >
                    ورود
                  </button>
                </>
              )}
            </div>
          </Dialog>
        </header>
      ) : (
        <header className={styles.header}>
          <div className={styles.container}>
            {context.loggedIn ? (
              <Link href={"/dashboard"}>
                <div className={styles.navItem}>داشبورد</div>
              </Link>
            ) : (
              <button
                className={styles.loginBtn}
                onClick={() => {
                  router.push("/auth");
                }}
              >
                <LoginIcon className={styles.loginIcon} />
                ورود | ثبت نام
              </button>
            )}
            <nav className={styles.nav}>
              <Link href={"/"}>
                <div className={styles.navItem}>خانه</div>
              </Link>
              <Link href={"/staffs"}>
                <div className={styles.navItem}>تیم برگزاری</div>
              </Link>
              <Link href={"/sponsors"}>
                <div className={styles.navItem}>حامیان</div>
              </Link>
              <Link href={"/faq"}>
                <div className={styles.navItem}>سوالات متداول</div>
              </Link>
            </nav>
            <Link href={"/"}>
              <a className={styles.logo}>
                <Image
                  src={logo}
                  alt="webelopers logo"
                  width={100}
                  height={60}
                />
              </a>
            </Link>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
