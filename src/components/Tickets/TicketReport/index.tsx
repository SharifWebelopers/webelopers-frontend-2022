import react from "react";
import useCollapse from "react-collapsed";
import SouthIcon from "@mui/icons-material/South";
import classNames from "classnames";

import styles from "./TicketReport.module.scss";
import { faNumConverter } from "../../../utils/farsiNum";

interface Data {
    id: number;
    title: string;
    body: string;
    response: string;
    is_answered: boolean;
}

interface DataProps {
    data: Data
}

function TicketReport({ data }: DataProps){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return(
        <div className={styles.ticketReport}>
            <div className={styles.upSection}>
                <div>{faNumConverter(data.id)}</div>
                <div className={styles.date}>
                    <p className={styles.label}>عنوان</p>
                    <div>
                        {data.title}
                    </div>
                </div>
                <div className={styles.score}>
                    <p className={styles.label}>وضعیت</p>
                    <div style={{ cursor: "pointer" }} {...getToggleProps()}>
                        {data.is_answered ? (
                                <span style={{ color: "#6cf497" }}>پاسخ داده شده است</span>
                            ) :
                            (
                                <span style={{ color: "#c7c7c7" }}>هنوز پاسخی داده نشده است</span>
                            )
                        }
                        <SouthIcon
                            className={classNames(styles.arrowIcon, {
                                [styles.arrowFlip]: isExpanded,
                            })}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection} {...getCollapseProps()}>
                <div>
                    <p className={styles.intro}>
                        متن پیام
                    </p>
                    <p>
                        {data.body}
                    </p>
                </div>
                <div>
                    <p className={styles.intro}>
                        پاسخ
                    </p>
                    <p>
                        {data.response}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TicketReport;