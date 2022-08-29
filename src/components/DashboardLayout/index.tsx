import Image from "next/future/image";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import Tooltip from "@mui/material/Tooltip";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import useMobile from "../../utils/useMobile";
import logo from "../../assets/images/logo.png";
import styles from "./DashboardLayout.module.scss";
import Link from "next/link";

interface Dashboard {
  title?: string;
}

function DashboardLayout({
  title = "داشبورد",
  children,
}: PropsWithChildren<Dashboard>) {
  const isMobile = useMobile();
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.right}>
          <MailOutlineIcon fontSize="large" className={styles.mailIcon} />
          <div className={styles.seperator}></div>
          <PersonIcon fontSize="large" className={styles.personIcon} />
          <div className={styles.name}>نام و نام خانوادگی</div>
        </div>
        <Link href={"/"}>
          <Image
            width={88}
            height={52}
            src={logo}
            alt="Webelopers logo"
            className={styles.logo}
          />
        </Link>
      </header>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <Link href={"/"}>
              <Tooltip title="خانه" placement={isMobile ? "top" : "left"}>
                <div className={styles.navItem}>
                  <HomeIcon fontSize="large" />
                </div>
              </Tooltip>
            </Link>
            <Link href={"/dashboard/tutorials"}>
              <Tooltip title="آموزش‌ها" placement={isMobile ? "top" : "left"}>
                <div className={styles.navItem}>
                  <MenuBookOutlinedIcon fontSize="large" />
                </div>
              </Tooltip>
            </Link>
            <Link href={"/dashboard/leaderboard"}>
              <Tooltip
                title="جدول امتیازات"
                placement={isMobile ? "top" : "left"}
              >
                <div className={styles.navItem}>
                  <LeaderboardIcon fontSize="large" />
                </div>
              </Tooltip>
            </Link>
            <Link href={"/dashboard/team"}>
              <Tooltip title="تیم" placement={isMobile ? "top" : "left"}>
                <div className={styles.navItem}>
                  <GroupsIcon fontSize="large" />
                </div>
              </Tooltip>
            </Link>
            <Link href={"/dashboard/code"}>
              <Tooltip title="بررسی کد" placement={isMobile ? "top" : "left"}>
                <div className={styles.navItem}>
                  <CodeIcon fontSize="large" />
                </div>
              </Tooltip>
            </Link>
            <Link href={"/dashboard/settings"}>
              <Tooltip title="تنظیمات" placement={isMobile ? "top" : "left"}>
                <div className={styles.navItem}>
                  <SettingsIcon fontSize="large" />
                </div>
              </Tooltip>
            </Link>
            <Link href={"/dashboard/request"}>
              <Tooltip
                title="ارسال درخواست"
                placement={isMobile ? "top" : "left"}
              >
                <div className={styles.navItem}>
                  <BorderColorOutlinedIcon fontSize="large" />
                </div>
              </Tooltip>
            </Link>
            <div className={styles.hrSeperator}></div>
            <Tooltip title="خروج" placement={isMobile ? "top" : "left"}>
              <div className={styles.navItem}>
                <LogoutOutlinedIcon
                  fontSize="large"
                  className={styles.logoutIcon}
                />
              </div>
            </Tooltip>
          </nav>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
