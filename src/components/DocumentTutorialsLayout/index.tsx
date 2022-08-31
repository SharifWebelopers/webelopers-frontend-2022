import react from "react";
import DownloadFile from "../DownloadFile";
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import styles from "./DocumentTutorialsLayout.module.scss";

interface documentFileData {
    title: string;
    url: string;
    publishedDate: string;
}

interface documentFileDataProps {
    data: documentFileData[]
}

const DocumentTutorialsLayout = ({ data }: documentFileDataProps) => {
    
    return (
        <div className={styles.dashboardChildContainer}>
            <div className={styles.documentTutorialLayout}>
                <p className={styles.layoutTitle}>
                    <BackupTableOutlinedIcon />
                    <span>آموزش‌ها</span>
                </p>
                <div className={styles.documentContainer}>
                    {
                        data && data.map(file => (
                            <DownloadFile file={file}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DocumentTutorialsLayout;