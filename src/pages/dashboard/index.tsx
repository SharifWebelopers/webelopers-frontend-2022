import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./dashboard.module.scss";

function DashboardPage() {
  return (
    <div>
      <Head>
        <title>داشبرد</title>
      </Head>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className={styles.text}>این قسمت به زودی تکمیل خواهد شد‌ :)</h1>
      <Footer />
    </div>
  );
}

export default DashboardPage;
