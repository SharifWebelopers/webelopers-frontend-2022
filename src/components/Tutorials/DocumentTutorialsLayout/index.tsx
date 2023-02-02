import react from "react";
import DownloadFile from "../DownloadFile";
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import styles from "./DocumentTutorialsLayout.module.scss";

interface Document {
    id: number;
    title: string;
    pdf_file: string;
    google_doc: string;
    publish_date: string;
    stack: string;
}
interface DownloadFileProps{
    documents: Document[] | undefined;
}

const DocumentTutorialsLayout = ({ documents }: DownloadFileProps) => {
    
    return (
        <div className={styles.dashboardChildContainer}>
            <div className={styles.documentTutorialLayout}>
                <div className={styles.documentContainer}>
                    {
                        documents && documents.map(document => (
                            <DownloadFile data={document}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DocumentTutorialsLayout;