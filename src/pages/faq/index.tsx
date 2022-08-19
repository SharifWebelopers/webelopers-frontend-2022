import Head from "next/head";
import React from "react";
import FaqItem from "../../components/FaqItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import faqsData from "../../data/faqsData";
import styles from "./faq.module.scss";

function FaqPage() {
  return (
    <div className={styles.faqPage}>
      <Head>
        <title>سوالات متداول</title>
      </Head>
      <Header />
      <h1 className={styles.title}>سوالات متداول</h1>
      <div className={styles.faqs}>
        {faqsData.map((data, index) => (
          <FaqItem data={data} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default FaqPage;
