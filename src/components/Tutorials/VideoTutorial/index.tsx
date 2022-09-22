import react from "react";
import { useEffect, useState, useRef } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ReactPlayer from "react-player";
import styles from "./VideoTutorial.module.scss";
import shamsiDate from "../../../utils/shamsiDate";
import { faNumConverter } from "../../../utils/farsiNum";

interface Video {
    id: number;
    title: string;
    duration: string;
    aparat_url: string;
    youtube_url: string;
    publish_date: string;
    stack: string;
}
interface VideoProps{
    data: Video
}

function VideoTutorial({ data }: VideoProps){

    const videoRef = useRef<HTMLDivElement>(null);

    const convertToEmbFormat = (link: string) => {
        return `<div id=${data?.id}><script type="text/JavaScript" src="https://www.aparat.com/embed/${link.split("/v/")[1]}?data[rnddiv]=${data?.id}&data[responsive]=yes"></script></div>`;
    }

    useEffect(() => {
        let convertedFormat: string = convertToEmbFormat(data?.aparat_url);
        const fragment = document.createRange().createContextualFragment(convertedFormat);
        videoRef.current!.append(fragment);
    }, [])

    return (
        <div className={styles.videoTutorial}>
            <div className={styles.video} ref={videoRef}>
            </div>

            <div className={styles.videoDetails}>
                <div className={styles.videoTitle}>{data?.title}</div>

                <div className={styles.timingDetails}>
                    <div>انتشار: {faNumConverter(shamsiDate(data?.publish_date))}</div>
                    <div>
                        <span>{faNumConverter(data?.duration)}</span>
                        <span><AccessTimeFilledIcon /></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoTutorial;