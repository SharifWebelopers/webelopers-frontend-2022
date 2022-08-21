import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./dashboard.module.scss";
import underconstructor from "../../assets/images/underconstructor.png";
import Image from "next/future/image";
import { useRouter } from "next/router";

function DashboardPage() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.replace("/auth/login");
    }
  }, []);
  return (
    <div className={styles.dashboard}>
      <Head>
        <title>داشبورد</title>
      </Head>
      <Header />
      <h1 className={styles.text}>این قسمت به زودی تکمیل خواهد شد‌ :)</h1>
      <Image src={underconstructor} className={styles.image} />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardPage;
