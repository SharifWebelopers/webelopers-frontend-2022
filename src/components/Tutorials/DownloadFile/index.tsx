import react from "react";
import { useEffect, useState, useRef } from "react";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

import styles from "./DownloadFile.module.scss";
import shamsiDate from "../../../utils/shamsiDate";
import { faNumConverter } from "../../../utils/farsiNum";

interface Document {
    id: number;
    title: string;
    pdf_file: string;
    google_doc: string;
    publish_date: string;
    stack: string;
}
interface DownloadFileProps{
    data: Document;
}

function DownloadFile({ data }: DownloadFileProps){

    return (
        <div className={styles.downloadFile}>
            <div className={styles.fileDetails}>
                <div className={styles.title}>
                    {data.title}
                </div>
                <div className={styles.publishDate}>
                    <span>تاریخ انتشار: </span>
                    <span>{faNumConverter(shamsiDate(data.publish_date))}</span>
                </div>
            </div>

            <a href={data.google_doc} className={styles.downloadFileButton}>
                <span>دانلود</span>
                <span><FileDownloadRoundedIcon /></span>
            </a>
        </div>
    )
}

export default DownloadFile;