import react from "react";
import { useState } from "react";
import styles from "./NewTicket.module.scss";
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Formik } from 'formik';
import Link from "next/link";

interface NewTicketData {
    subject: null | string;
    body: null | string;
}

const NewTicket = () => {

    const isSubmitting = useState(false);

    const validate = (values: NewTicketData) => {
        const errors: any = {};
        if (!values.subject) {
            errors.subject = 'لطفا موضوع رو هم وارد کن :)';
        }
        if (!values.body) {
            errors.body = 'پیامت کو پس!';
        }
        return errors;
    }

    return (
        <div className={styles.dashboardChildContainer}>
            <div className={styles.ticketLayout}>
                <p className={styles.layoutTitle}>
                    <RateReviewIcon />
                    <span>درخواست جدید</span>
                </p>

                <div className={styles.newTicket}>
                    <Formik
                        initialValues={{ subject: '', body: '' }}
                        validate={validate}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                    }}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="subject"
                                onChange={handleChange}
                                value={values.subject}
                                placeholder="عنوان..."
                            />
                            {errors.subject && touched.subject && errors.subject}
                            <textarea
                                name="body"
                                onChange={handleChange}
                                value={values.body}
                                placeholder="پیام شما..."
                            />
                            {errors.body && touched.body && errors.body}
                            <div className={styles.buttons}>
                                <button type="submit" disabled={isSubmitting}>
                                    ثبت
                                </button>
                                <Link href="/dashboard/tickets/">
                                    انصراف
                                </Link>
                            </div>
                        </form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default NewTicket;