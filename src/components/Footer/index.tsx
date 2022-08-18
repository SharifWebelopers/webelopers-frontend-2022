import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./Footer.module.scss";
import ssc from "../../assets/images/ssc.png";
import sharif from "../../assets/images/sharif.png";
import Link from "next/link";
import Image from "next/future/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.sharifLogos}>
          <Link href={"https://ssc.ce.sharif.edu/"}>
            <a target="_blank">
              <Image src={ssc} alt="SSC" className={styles.ssc} />
            </a>
          </Link>
          <Link href={"https://www.sharif.edu/"}>
            <a target="_blank">
              <Image src={sharif} alt="sharif university" className={styles.sharif} />
            </a>
          </Link>
        </div>
        <div className={styles.socialItems}>
          <Link href={"https://t.me/webelopers"}>
            <a target="_blank" className={styles.socialItem}>
              <TelegramIcon className={styles.socialIcon} />
            </a>
          </Link>
          <Link href={"https://twitter.com/WebelopersSUT"}>
            <a target="_blank" className={styles.socialItem}>
              <TwitterIcon className={styles.socialIcon} />
            </a>
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/webelopers-sharif-bb3374204?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B223UN38ESI%2Btv%2Fln7qcdTg%3D%3D"
            }
          >
            <a target="_blank" className={styles.socialItem}>
              <LinkedInIcon className={styles.socialIcon} />
            </a>
          </Link>
          <Link
            href={
              "https://www.instagram.com/webeloperssut/?igshid=YmMyMTA2M2Y%3D"
            }
          >
            <a target="_blank" className={styles.socialItem}>
              <InstagramIcon className={styles.socialIcon} />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.copyRight}>
        &copy; &nbsp;تمامی حقوق برای تیم برگزاری رویداد وبلوپرز محفوظ است.
      </div>
    </footer>
  );
}

export default Footer;
