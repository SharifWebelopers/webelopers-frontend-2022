import react from "react";
import DownloadFile from "../DownloadFile";
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import styles from "./DocumentTutorialsLayout.module.scss";

const DocumentTutorialsLayout = () => {
    return (
        <div className={styles.dashboardChildContainer}>
            <div className={styles.documentTutorialLayout}>
                <p className={styles.layoutTitle}>
                    <BackupTableOutlinedIcon />
                    <span>آموزش‌ها</span>
                </p>
                <div className={styles.documentContainer}>
                    <DownloadFile />
                    <DownloadFile />
                    <DownloadFile />
                    <DownloadFile />
                    <DownloadFile />
                </div>
            </div>
        </div>
    )
}

export default DocumentTutorialsLayout;