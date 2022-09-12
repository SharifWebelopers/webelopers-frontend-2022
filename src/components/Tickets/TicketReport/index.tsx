import react from "react";
import useCollapse from "react-collapsed";
import SouthIcon from "@mui/icons-material/South";
import classNames from "classnames";

import styles from "./TicketReport.module.scss";
import shamsiDate from "../../../utils/shamsiDate";

function TicketReport(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return(
        <div className={styles.ticketReport}>
            <div className={styles.upSection}>
                <div>۱</div>
                <div className={styles.date}>
                    <p className={styles.label}>عنوان</p>
                    <div>
                        عنوان درخواست...
                    </div>
                </div>
                <div className={styles.score}>
                    <p className={styles.label}>وضعیت</p>
                    <div style={{ cursor: "pointer" }} {...getToggleProps()}>
                        <span>هنوز پاسخی داده نشده است</span>
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
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و 
                    </p>
                </div>
                <div>
                    <p className={styles.intro}>
                        پاسخ
                    </p>
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TicketReport;