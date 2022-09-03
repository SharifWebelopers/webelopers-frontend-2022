import React, {useState} from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {Divider, Grid, SvgIcon} from "@mui/material";
import faqsData from "../../data/faqsData";
import stylesHome from "../../components/Home/Home.module.scss";
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from "./dashboard-sample.module.scss";
import SVGLOZI from "../../../public/lozi.svg";
import {Button} from "@mui/material";
import useMobile from "../../utils/useMobile";
import Notification from "../../components/Notification";

function DashboardSamplePage() {

    const isMobile = useMobile();

    return (
        <div>
            <DashboardLayout>
                <div className={styles.container}>
                    <Grid container>
                        <Grid item xs>
                            <div className={styles.status_container}>
                                <div className={styles.title}>
                                    <NotificationsIcon classes={{root: styles.titleIcon}}/>
                                    اطلاعات
                                </div>
                                {faqsData.map((data, index) => (
                                    <Notification data={data} key={index}/>
                                ))}
                            </div>
                        </Grid>
                        {isMobile ?
                            /*<Divider variant="middle"  flexItem />*/<></> :
                            <Divider
                                orientation="vertical"
                                flexItem
                            />}

                        <Grid classes={{root: "justify-center"}} item xs>

                            <div className={styles.status_container}>
                                <div className={styles.title}>
                                    {/*<NotificationsIcon classes={{root: styles.titleIcon}}/>*/}
                                    {/*<img src={SVGLOZI} alt={"icon"}/>*/}
                                    {/*<SvgIcon component={SVGLOZI} />*/}
                                    وضعیت
                                </div>

                                <div className={styles.status}>
                                    مرحله
                                </div>
                                <div className={styles.status}>
                                    دانلود فایل سوال
                                </div>
                                <div className={styles.status}>
                                    مهلتت پایان ۵ شهریور
                                </div>
                                {/*<CircleProgressbar/>*/}
                            </div>

                        </Grid>
                    </Grid>

                </div>
            </DashboardLayout>
        </div>
    );
}

export default DashboardSamplePage;
