import react from "react";
import { useEffect, useState, useRef } from "react";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

import styles from "./DownloadFile.module.scss";

interface File{
    url?: string;
    title?: string;
    publishedDate?: string;
}

interface DownloadFileProps{
    data?: FileList;
}

function DownloadFile({ data }: DownloadFileProps){
    return (
        <div className={styles.downloadFile}>
            <div className={styles.fileDetails}>
                <div className={styles.title}>
                    عنوان فایل
                </div>
                <div className={styles.publishDate}>
                    <span>تاریخ انتشار: </span>
                    <span>۱/۱/۱</span>
                </div>
            </div>

            <button className={styles.downloadFileButton}>
                <span>دانلود</span>
                <span><FileDownloadRoundedIcon /></span>
            </button>
        </div>
    )
}

export default DownloadFile;