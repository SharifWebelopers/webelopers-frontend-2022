import react from "react";
import { useEffect, useState } from "react";
import TicketReport from "./TicketReport";
import styles from "./Tickets.module.scss";
import RateReviewIcon from '@mui/icons-material/RateReview';
import Link from 'next/link'
import { getTickets } from "../../actions/dashboard";
import { CircularProgress } from "@mui/material";
import { faNumConverter } from "../../utils/farsiNum";

interface Ticket {
    id: number;
    title: string;
    body: string;
    response: string;
    is_answered: boolean;
}

const TicketsLayout = () => {
    const [tickets, setTickets] = useState<Ticket[]>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getTickets()
        .then(res => {
            setTickets(res.data);
        })
        .catch(err => {
            console.log("error in getting tickets: "+err);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[]);

    return (
        <div className={styles.dashboardChildContainer}>
            <div className={styles.ticketLayout}>
                <p className={styles.layoutTitle}>
                    <RateReviewIcon />
                    <span>درخواست ها</span>
                </p>

                <div className={styles.ticketStatus}>
                    <div>
                        {tickets ? (
                                <div>
                                    شما تاکنون {faNumConverter(tickets.length)} درخواست ثبت کرده اید
                                </div>
                            ) :
                            (
                                <div>
                                    شما تاکنون درخواستی ثبت نکرده اید.
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <Link href="/dashboard/tickets/new-ticket/">
                            ثبت درخواست جدید
                        </Link>
                    </div>
                </div>

                {loading && (
                    <CircularProgress sx={{ marginTop: "30px" }} />
                )}

                <div className={styles.ticketContainer}>
                    {tickets && (
                        tickets.map(data => (<TicketReport data={data} key={data.id.toString()} />))
                    )}
                </div>
            </div>
        </div>
    );
}

export default TicketsLayout;