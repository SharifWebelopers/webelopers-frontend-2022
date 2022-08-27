import react from "react";
import { useEffect, useState, useRef } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import styles from "./VideoTutorial.module.scss";

interface video {
    embedLink?: string;
    title?: string;
    publishedDate?: string;
}

interface VideoProps{
    data?: video
}

function VideoTutorial({ data }: VideoProps){

    const videoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fragment = document.createRange().createContextualFragment(`<div id="84819769371"><script type="text/JavaScript" src="https://www.aparat.com/embed/HEDWK?data[rnddiv]=84819769371&data[responsive]=yes"></script></div>`);
        videoRef.current.append(fragment);
    }, [])

    return (
        <div className={styles.videoTutorial}>
            <div className={styles.video} ref={videoRef}>
            </div>

            <div className={styles.videoDetails}>
                <div className={styles.videoTitle}>عنوان ویدیو</div>

                <div className={styles.timingDetails}>
                    <div>دو هفته پیش</div>
                    <div>
                        <span>۲۳:۴۱</span>
                        <span><AccessTimeFilledIcon /></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoTutorial;