import react from "react";
import VideoTutorial from "../VideoTutorial";
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import styles from "./VideoTutorialsLayout.module.scss";

const VideoTutorialsLayout = () => {
    return (
        <div className={styles.dashboardChildContainer}>
            <div className={styles.videoTutorialLayout}>
                <p className={styles.layoutTitle}>
                    <BackupTableOutlinedIcon />
                    <span>آموزش‌های ویدیویی</span>
                </p>
                <div className={styles.videoContainer}>
                    <VideoTutorial />
                    <VideoTutorial />
                    <VideoTutorial />
                    <VideoTutorial />
                </div>
            </div>
        </div>
    )
}

export default VideoTutorialsLayout;