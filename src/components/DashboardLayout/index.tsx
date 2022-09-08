import Image from "next/future/image";
import Head from "next/head";
import React, { PropsWithChildren, useContext } from "react";
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
import Link from "next/link";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import Context from "../../context/context";

import styles from "./DashboardLayout.module.scss";

interface Dashboard {
  title?: string;
}

interface NavItemProps {
  path: string;
  title: string;
  isMobile: boolean;
  router: any;
  Icon: any;
  disabled: boolean;
}

interface LinkWrapperProps {
  href: string;
  disabled: boolean;
  children: any;
}

const LinkWrapper = ({ href, disabled, children }: LinkWrapperProps) => {
  return disabled ? (
    <span>{children}</span>
  ) : (
    <Link href={href}>{children}</Link>
  );
};

const NavItem = ({
  path,
  title,
  isMobile,
  router,
  Icon,
  disabled,
}: NavItemProps) => {
  return (
    <LinkWrapper href={path} disabled={disabled}>
      <Tooltip title={title} placement={isMobile ? "top" : "left"}>
        <div className={styles.navItem}>
          <IconButton
            className={styles["nav-icon-button"]}
            disabled={disabled}
            style={
              router.pathname === path
                ? {
                    color: "#916649 !important",
                  }
                : {}
            }
          >
            <Icon style={{ width: "4vh", height: "4vh" }} fontSize="large" />
          </IconButton>
        </div>
      </Tooltip>
    </LinkWrapper>
  );
};

function DashboardLayout({
  title = "داشبورد",
  children,
}: PropsWithChildren<Dashboard>) {
  const router = useRouter();
  const isMobile = useMobile();

  const [context, setContext] = useContext(Context);

  const navItems: NavItemProps[] = [
    {
      path: "/",
      title: "خانه",
      isMobile,
      router,
      Icon: HomeIcon,
      disabled: false,
    },
    {
      path: "/dashboard/tutorials",
      title: "آموزش‌ها",
      isMobile,
      router,
      Icon: MenuBookOutlinedIcon,
      disabled: true,
    },
    {
      path: "/dashboard/leaderboard",
      title: "جدول امتیازات",
      isMobile,
      router,
      Icon: LeaderboardIcon,
      disabled: true,
    },
    {
      path: "/dashboard/team",
      title: "تیم",
      isMobile,
      router,
      Icon: GroupsIcon,
      disabled: true,
    },
    {
      path: "/dashboard/code",
      title: "بررسی کد",
      isMobile,
      router,
      Icon: CodeIcon,
      disabled: true,
    },
    {
      path: "/dashboard/settings",
      title: "تنظیمات",
      isMobile,
      router,
      Icon: SettingsIcon,
      disabled: false,
    },
    {
      path: "/dashboard/request",
      title: "ارسال درخواست",
      isMobile,
      router,
      Icon: BorderColorOutlinedIcon,
      disabled: true,
    },
  ];

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
          <div className={styles.name}>
            {context.first_name} {context.last_name}
          </div>
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
            {navItems.map((item, index) => {
              return <NavItem key={index} {...item} />;
            })}
            <div className={styles.hrSeperator}></div>
            <Tooltip title="خروج" placement={isMobile ? "top" : "left"}>
              <div className={styles.navItem}>
                <IconButton
                  className={styles["nav-icon-button"]}
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    router.push("/auth");
                  }}
                >
                  <LogoutOutlinedIcon
                    fontSize="large"
                    className={styles.logoutIcon}
                  />
                </IconButton>
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
