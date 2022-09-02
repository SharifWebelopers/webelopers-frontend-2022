import React, {useState} from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {Grid} from "@mui/material";
import faqsData from "../../data/faqsData";
import FaqItem from "../../components/FaqItem";
import stylesHome from "../../components/Home/Home.module.scss";
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from "./dashboard-sample.module.scss";

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
                <div className={styles.container}>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.title}>
                                <NotificationsIcon classes={{root: styles.titleIcon}}/>
                                اطلاعات
                            </div>
                            {faqsData.map((data, index) => (
                                <FaqItem data={data} key={index}/>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <div className={styles.title}>
                                <NotificationsIcon classes={{root: styles.titleIcon}}/>
                                وضعیت
                            </div>

                            <div>
                                مرحله
                            </div>
                            <div>
                                دانلود فایل سوال
                            </div>
                            <div>
                                مهلتت پایان ۵ شهریور
                            </div>
                            <div className={stylesHome.countdown}>
                                <div className={stylesHome.countdownItem}>
                                    <div className={stylesHome.countdownValue}>
                                        {String(countdown.seconds).padStart(2, "0")}
                                    </div>
                                    <div className={stylesHome.countdownUnit}>ثانیه</div>
                                </div>
                                <div className={stylesHome.countdownItem}>
                                    <div className={stylesHome.countdownValue}>
                                        {String(countdown.minutes).padStart(2, "0")}
                                    </div>
                                    <div className={stylesHome.countdownUnit}>دقیقه</div>
                                </div>
                                <div className={stylesHome.countdownItem}>
                                    <div className={stylesHome.countdownValue}>
                                        {String(countdown.hours).padStart(2, "0")}
                                    </div>
                                    <div className={stylesHome.countdownUnit}>ساعت</div>
                                </div>
                                <div className={stylesHome.countdownItem}>
                                    <div className={stylesHome.countdownValue}>
                                        {String(countdown.days).padStart(2, "0")}
                                    </div>
                                    <div className={stylesHome.countdownUnit}>روز</div>
                                </div>
                            </div>

                        </Grid>
                    </Grid>

                </div>
            </DashboardLayout>
        </div>
    );
}

export default DashboardSamplePage;
