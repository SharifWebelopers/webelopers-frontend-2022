import react from "react";
import TicketReport from "./TicketReport";
import styles from "./Tickets.module.scss";
import RateReviewIcon from '@mui/icons-material/RateReview';
import Link from 'next/link'

const TicketsLayout = () => {
    return (
        <div className={styles.dashboardChildContainer}>
            <div className={styles.ticketLayout}>
                <p className={styles.layoutTitle}>
                    <RateReviewIcon />
                    <span>درخواست ها</span>
                </p>

                <div className={styles.ticketStatus}>
                    <div>
                        <div>
                            شما تاکنون درخواستی ثبت نکرده اید.
                        </div>
                    </div>
                    <div>
                        <Link href="/dashboard/tickets/new-ticket/">
                            ثبت درخواست جدید
                        </Link>
                    </div>
                </div>

                <div className={styles.ticketContainer}>
                    <TicketReport/>
                    <TicketReport/>
                    <TicketReport/>
                </div>
            </div>
        </div>
    );
}

export default TicketsLayout;