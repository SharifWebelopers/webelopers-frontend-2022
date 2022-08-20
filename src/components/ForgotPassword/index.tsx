import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import OAuth from "../OAuth";
import { Button, TextField } from "@mui/material";
import Context from "../../context/context";

import { requestResetPassword } from "../../actions/auth";

import styles from "../../styles/Auth.module.scss";

function VerifyEmail() {
  const [context, setContext] = useContext(Context);

  const [requested, setRequested] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const emailValidators = [
    (email: string) => (email ? false : "ایمیل الزامی است!"), // checking emptiness
    (email: string) => {
      // checking regex
      const re =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      return !re.test(email) && "ایمیل نامعتبر است!";
    },
  ];

  const validateEmail = (showError = true) => {
    for (const validator of emailValidators) {
      const error = validator(email);
      if (error) {
        if (showError) setEmailError(error);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (validateEmail(false) && !loading) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, loading]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);
    requestResetPassword({ email })
      .then(() => {
        setRequested(true);
      })
      .catch((err) => {
        const status = err.response?.status;
        const message =
          status === 400
            ? "ایمیل وجود ندارد!"
            : status === 406
            ? "این حساب رمزعبور ندارد!"
            : status === 429
            ? "تعداد درخواست‌های شما از مجاز بیشتر است، لطفا کمی صبر کنید و سپس دوباره تلاش کنید."
            : status === 403
            ? "لطفا ابتدا ایمیل خود را فعال کنید!"
            : "خطایی رخ داده است!";
        setContext({
          ...context,
          snackbar: {
            open: true,
            message,
            variant: "error",
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>بازیابی رمز عبور</div>
      {requested ? (
        <div className={styles["message-box"]}>
          لطفا برای عوض کردن رمز عبور، ایمیل خود را چک کنید.
        </div>
      ) : (
        <>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <TextField
              className={styles.inputs}
              placeholder="ایمیل"
              type="email"
              value={email}
              error={!!emailError}
              helperText={emailError}
              onBlur={() => validateEmail()}
              onFocus={() => {
                setEmailError("");
              }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              disabled={disabled}
            >
              ارسال ایمیل
            </Button>
          </form>
          <div className={styles["bottom-links"]}>
            حساب کاربری دارید؟
            <Link href="/auth/login">ورود</Link>
          </div>
          <OAuth />
        </>
      )}
    </div>
  );
}

export default VerifyEmail;
