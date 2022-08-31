import react from "react";
import { useEffect, useState, useRef } from "react";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

import styles from "./DownloadFile.module.scss";
import shamsiDate from "../../utils/shamsiDate";

interface File{
    url?: string;
    title?: string;
    publishedDate?: string;
}

interface DownloadFileProps{
    file?: File;
}

function DownloadFile({ file }: DownloadFileProps){

    return (
        <div className={styles.downloadFile}>
            <div className={styles.fileDetails}>
                <div className={styles.title}>
                    {file.title}
                </div>
                <div className={styles.publishDate}>
                    <span>تاریخ انتشار: </span>
                    <span>{shamsiDate(file.publishedDate)}</span>
                </div>
            </div>

            <a href={file.url} className={styles.downloadFileButton}>
                <span>دانلود</span>
                <span><FileDownloadRoundedIcon /></span>
            </a>
        </div>
    )
}

export default DownloadFile;