import react from "react";
import VideoTutorial from "../VideoTutorial";
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import styles from "./VideoTutorialsLayout.module.scss";

interface videoTutorialData {
    title: string;
    embed: string;
    publishedDate: string;
    duration: string;
}

interface videoTutorialDataProps {
    data: videoTutorialData[]
}

const VideoTutorialsLayout = ({ data }: videoTutorialDataProps) => {
    return (
        <div className={styles.dashboardChildContainer}>
            <div className={styles.videoTutorialLayout}>
                <p className={styles.layoutTitle}>
                    <BackupTableOutlinedIcon />
                    <span>آموزش‌های ویدیویی</span>
                </p>
                <div className={styles.videoContainer}>
                    {
                        data && data.map(video => (
                            <VideoTutorial video={video}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default VideoTutorialsLayout;