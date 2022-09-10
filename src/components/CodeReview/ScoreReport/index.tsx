import react from "react";
import { useEffect, useState, useRef } from "react";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

import styles from "./ScoreReport.module.scss";
import shamsiDate from "../../../utils/shamsiDate";

function ScoreReport(){

    return ( 
        <div className={styles.scoreReport}>
            <div>۱</div>
            <div className={styles.date}>
                <p className={styles.label}>تاریخ ارسال</p>
                <p>
                    <span>یکشنبه</span>
                    |
                    <span>۶ شهریور</span>
                    |
                    <span>۲۳:۱۵</span>
                </p>
            </div>
            <div className={styles.score}>
                <p className={styles.label}>نمره</p>
                <p>98/100</p>
            </div>
        </div>
    )
}

export default ScoreReport;