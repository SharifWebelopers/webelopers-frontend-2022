import * as React from 'react';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import stylesHome from "../Home/Home.module.scss";
import {useState} from "react";

function CircleProgressbar(
    props: CircularProgressProps & { value: number },
) {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    return (
        <Box sx={{position: 'relative', display: 'inline-flex'}}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/*<Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>*/}
                <div className={stylesHome.countdown}>
                    <div className={stylesHome.countdownItem}>
                        <div className={stylesHome.countdownValue}>
                            {String(countdown.seconds).padStart(2, "0")}
                        </div>
                        <div className={stylesHome.countdownUnit}>ثانیه</div>
                    </div>
                    <div className={stylesHome.countdownItem}>
                        <div className={stylesHome.countdownValue}>
                            {String(countdown.minutes).padStart(2, "0")}
                        </div>
                        <div className={stylesHome.countdownUnit}>دقیقه</div>
                    </div>
                    <div className={stylesHome.countdownItem}>
                        <div className={stylesHome.countdownValue}>
                            {String(countdown.hours).padStart(2, "0")}
                        </div>
                        <div className={stylesHome.countdownUnit}>ساعت</div>
                    </div>
                    <div className={stylesHome.countdownItem}>
                        <div className={stylesHome.countdownValue}>
                            {String(countdown.days).padStart(2, "0")}
                        </div>
                        <div className={stylesHome.countdownUnit}>روز</div>
                    </div>
                </div>

            </Box>
        </Box>
    );
}

export default function CircularStatic() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircleProgressbar value={progress}/>;
}
