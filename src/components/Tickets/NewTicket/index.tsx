import react from "react";
import { useState, useContext } from "react";
import styles from "./NewTicket.module.scss";
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Formik } from 'formik';
import Link from "next/link";
import { submitTicket } from "../../../actions/dashboard";
import Context from "../../../context/context";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

interface NewTicketData {
    title: null | string;
    body: null | string;
}

const NewTicket = () => {

    const [context, setContext] = useContext(Context);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const validate = (values: NewTicketData) => {
        const errors: any = {};
        if (!values.title) {
            errors.title = 'لطفا موضوع رو هم وارد کن :)';
        }
        if (!values.body) {
            errors.body = 'پیامت کو پس!';
        }
        return errors;
    }

    const handleSubmit = (values: NewTicketData) => {
        setIsSubmitting(true);
        setLoading(true);
        submitTicket(values)
            .then(res => {
                setContext({
                    ...context,
                    snackbar: {
                    open: true,
                    message: "پیام شما با موفقیت ارسال شد",
                    variant: "success",
                    },
                });
                setTimeout(() => {
                    router.push("/dashboard/tickets/");
                },2000);
            })
            .catch(err => {
                setContext({
                    ...context,
                    snackbar: {
                    open: true,
                    message: "خطایی در حین ارسال پیام رخ داد!",
                    variant: "error",
                    },
                });
            })
            .finally(()=>{
                setIsSubmitting(false);
                setLoading(false);
            })
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
                        initialValues={{ title: '', body: '' }}
                        validate={validate}
                        onSubmit={handleSubmit}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>

                            {loading &&
                                (
                                    <CircularProgress/>
                                )
                            }

                            <input
                                type="text"
                                name="title"
                                onChange={handleChange}
                                value={values.title}
                                placeholder="عنوان..."
                            />
                            {errors.title && touched.title && (<div className={styles.errorMessage}>{errors.title}</div>)}
                            <textarea
                                name="body"
                                onChange={handleChange}
                                value={values.body}
                                placeholder="پیام شما..."
                            />
                            {errors.body && touched.body && (<div className={styles.errorMessage}>{errors.body}</div>)}
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