import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./sponsor.module.scss";
import cafebazaar from "../../assets/images/cafebazaar.png";
import quera from "../../assets/images/quera.png";
import Image from "next/future/image";

function SponsorPage() {
  return (
    <div className={styles.sponsorPage}>
      <Head>
        <title>حامیان رویداد</title>
      </Head>
      <Header />
      <h1 className={styles.title}>حامیان رویداد</h1>
      <div className={styles.sponsors}>
        <div className={styles.sponsorContainer}>
          <div className={styles.sponsorContent}>
            <h2 className={styles.sponsorName}>حامی مالی رویداد</h2>
            <Image
              src={cafebazaar}
              alt="cafe bazaar"
              width={100}
              height={50}
              className={styles.sponsorImage}
            />
          </div>
          <p className={styles.sponsorDescription}>
            کافه‌بازار در بهمن ۱۳۸۹ به همت جمعی از فارغ‌التحصیلان و دانشجویان
            دانشگاه‌های ایرانی شکل گرفت و از آن زمان تاکنون، با بهره‌مندی از
            همکاری متخصصان و توسعه‌دهندگان مشتاق و مستعد ایرانی، کوشیده است بستر
            جامعی از خدمات، محتوا و محصولات دیجیتال را برای کاربران اندرویدی
            فراهم کند.
            <br />
            کافه‌بازار در این سالها کوشیده میزبانی برای توسعه‌دهنده‌های بازی و
            برنامه باشد تا محصول و محتوای خود را به مخاطبان ایرانی برسانند. کافه
            بازار همواره می‌کوشد خدمات بومی و بهینه‌سازی‌شده‌ای را به کاربران
            ایرانی ارائه کند.
          </p>
        </div>
        <div className={styles.sponsorContainer}>
          <div className={styles.sponsorContent}>
            <h2 className={styles.sponsorName}>حامی رسانه‌ای رویداد</h2>
            <Image
              src={quera}
              alt="quera"
              width={100}
              height={50}
              className={styles.sponsorImage}
            />
          </div>
          <p className={styles.sponsorDescription}>
            Quera کار خود را در تابستان ۱۳۹۴ با یک تیم ۳‌نفره در شتاب‌دهنده شریف
            آغاز کرد. این تیم که در ابتدا بر روی یک سامانه کمک‌آموزشی (LMS) برای
            کلاس‌های درس برنامه‌نویسی کار می‌کرد، رفته‌رفته رویای بزرگ‌تری را
            برای خود ترسیم کرد: ساخت جامعه‌ای برای توسعه‌دهندگان ایران
            <br />
            بعد از گذشت شش سال، امروز حدود ۸۰ نفر از جمله یک تیم ۳۰‌نفره از
            طراحان، پشتیبان‌ها و منتورها به تیم اصلی کوئرا پیوسته‌اند. به یاری
            این تیم بزرگ، کوئرا توانسته است به آرزوی خود که ساخت جامعه‌ای برای
            توسعه‌دهندگان ایران است، نزدیک‌تر شود.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SponsorPage;
