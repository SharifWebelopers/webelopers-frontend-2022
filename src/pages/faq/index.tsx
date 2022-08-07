import React from "react";
import FaqItem from "../../components/FaqItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./faq.module.scss";

function FaqPage() {
  return (
    <div className={styles.faqPage}>
      <Header />
      <h1 className={styles.title}>سوالات متداول</h1>
      <div className={styles.faqs}>
        {Array(5)
          .fill(null)
          .map((_value, index) => (
            <FaqItem key={index} />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default FaqPage;
