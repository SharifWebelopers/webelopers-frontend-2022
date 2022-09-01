import React, {useState} from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {Grid} from "@mui/material";
import faqsData from "../../data/faqsData";
import FaqItem from "../../components/FaqItem";
import styles from "../../components/Home/Home.module.scss";


function DashboardSamplePage() {

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    return (
    <div>
      <DashboardLayout>
        <Grid container spacing={2}>
            <Grid item xs={6} sm={12}>
                <div>
                    اطلاعات
                </div>
                {faqsData.map((data, index) => (
                    <FaqItem data={data} key={index} />
                ))}
            </Grid>
            <Grid item xs={6} sm={12}>

                <div>
                    وضعیت
                </div>

                <div className={styles.countdown}>
                    <div className={styles.countdownItem}>
                        <div className={styles.countdownValue}>
                            {String(countdown.seconds).padStart(2, "0")}
                        </div>
                        <div className={styles.countdownUnit}>ثانیه</div>
                    </div>
                    <div className={styles.countdownItem}>
                        <div className={styles.countdownValue}>
                            {String(countdown.minutes).padStart(2, "0")}
                        </div>
                        <div className={styles.countdownUnit}>دقیقه</div>
                    </div>
                    <div className={styles.countdownItem}>
                        <div className={styles.countdownValue}>
                            {String(countdown.hours).padStart(2, "0")}
                        </div>
                        <div className={styles.countdownUnit}>ساعت</div>
                    </div>
                    <div className={styles.countdownItem}>
                        <div className={styles.countdownValue}>
                            {String(countdown.days).padStart(2, "0")}
                        </div>
                        <div className={styles.countdownUnit}>روز</div>
                    </div>
                </div>

            </Grid>
        </Grid>
      </DashboardLayout>
    </div>
  );
}

export default DashboardSamplePage;
