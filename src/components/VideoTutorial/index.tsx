import react from "react";
import { useEffect, useState, useRef } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import styles from "./VideoTutorial.module.scss";

interface Video {
    embed?: string;
    title?: string;
    publishedDate?: string;
    duration?: string;
}

interface VideoProps{
    video?: Video
}

function VideoTutorial({ video }: VideoProps){

    const videoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fragment = document.createRange().createContextualFragment(video.embed);
        videoRef.current.append(fragment);
    }, [])

    return (
        <div className={styles.videoTutorial}>
            <div className={styles.video} ref={videoRef}>
            </div>

            <div className={styles.videoDetails}>
                <div className={styles.videoTitle}>{video.title}</div>

                <div className={styles.timingDetails}>
                    <div>{video.publishedDate}</div>
                    <div>
                        <span>{video.duration}</span>
                        <span><AccessTimeFilledIcon /></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoTutorial;