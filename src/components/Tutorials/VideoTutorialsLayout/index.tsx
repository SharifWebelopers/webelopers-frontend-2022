import react from "react";
import VideoTutorial from "../VideoTutorial";
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import styles from "./VideoTutorialsLayout.module.scss";

interface videoTutorialData {
    id: number;
    title: string;
    duration: string;
    aparat_url: string;
    youtube_url: string;
    publish_date: string;
    stack: string;
}

interface videoTutorialDataProps {
    videos: videoTutorialData[] | undefined;
}

const VideoTutorialsLayout = ({ videos }: videoTutorialDataProps) => {
    return (
        <div className={styles.dashboardChildContainer}>
            <div className={styles.videoTutorialLayout}>
                <div className={styles.videoContainer}>
                    {
                        videos && videos.map(video => (
                            <VideoTutorial data={video} key={video.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default VideoTutorialsLayout;