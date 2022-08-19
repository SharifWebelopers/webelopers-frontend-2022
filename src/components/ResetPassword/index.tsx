import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import OAuth from "../OAuth";
import { Button, TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { resetPassword, validateResetPasswordToken } from "../../actions/auth";

import styles from "../../styles/Auth.module.scss";

function VerifyEmail() {
  const router = useRouter();

  const [valid, setValid] = useState(false);
  const [waitingForValidation, setWaitingForValidation] = useState(true);
  const [done, setDone] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password2Error, setPassword2Error] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const passwordValidators = [
    (pass: string) => (pass ? false : "رمز عبور الزامی است!"), // checking emptiness
    (pass: string) => {
      // checking length
      return pass.length < 8 && "رمز عبور باید حداقل شامل ۸ کاراکتر باشد!";
    },
  ];

  const repeatPasswordValidators = [
    (pass: string) =>
      pass === password1 ? false : "تکرار رمز عبور با رمز عبور یکسان نیست!", // must be same with first password
  ];

  const validatePassword = (showError = true) => {
    for (const validator of passwordValidators) {
      const error = validator(password1);
      if (error) {
        if (showError) setPassword1Error(error);
        return false;
      }
    }
    return true;
  };

  const validateRepeatPassword = (showError = true) => {
    for (const validator of repeatPasswordValidators) {
      const error = validator(password2);
      if (error) {
        if (showError) setPassword2Error(error);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (validatePassword(false) && validateRepeatPassword(false) && !loading) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password1, password2, loading]);

  useEffect(() => {
    if (!router.isReady) return;
    validateResetPasswordToken(router.query.uid, router.query.token)
      .then(() => {
        setValid(true);
      })
      .catch(() => {
        setValid(false);
      })
      .finally(() => {
        setWaitingForValidation(false);
      });
  }, [router.isReady]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);
    resetPassword({
      new_password: password1,
      encoded_user_id: router.query.uid,
      token: router.query.token,
    })
      .then(() => {
        setDone(true);
      })
      .catch(() => {
        // show some errors here
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>بازیابی رمز عبور</div>
      {waitingForValidation ? (
        <div className={styles["message-box"]}>در انتظار تایید ایمیل...</div>
      ) : valid ? (
        done ? (
          <div className={styles["verification-result"]}>
            <img
              className={styles["verification-icon"]}
              src="/success.svg"
              alt="success"
            />
            <div className={styles["verification-message"]}>
              رمز عبور شما با موفقیت تغییر یافت.
            </div>
            <Link href="/">
              <Button color="primary" variant="contained">
                بازگشت به صفحه اصلی
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <form className={styles.form} onSubmit={handleFormSubmit}>
              <TextField
                className={styles.inputs}
                placeholder="رمز عبور"
                type={showPass1 ? "text" : "password"}
                value={password1}
                error={!!password1Error}
                helperText={password1Error}
                onBlur={() => validatePassword()}
                onFocus={() => {
                  setPassword1Error("");
                }}
                onChange={(e) => {
                  setPassword1(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="info"
                        onClick={() => {
                          setShowPass1(!showPass1);
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                      >
                        {!showPass1 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className={styles.inputs}
                placeholder="تکرار رمز عبور"
                type={showPass2 ? "text" : "password"}
                value={password2}
                error={!!password2Error}
                helperText={password2Error}
                onBlur={() => validateRepeatPassword()}
                onFocus={() => {
                  setPassword2Error("");
                }}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="info"
                        onClick={() => {
                          setShowPass2(!showPass2);
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                      >
                        {!showPass2 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
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
        )
      ) : (
        <div className={styles["verification-result"]}>
          <img
            className={styles["verification-icon"]}
            src="/failed.svg"
            alt="failed"
          />
          <div className={styles["verification-message"]}>
            لینک مربوطه منقضی شده است.
          </div>
          <Link href="/auth/forgot-password">
            <Button color="primary" variant="contained">
              ارسال مجدد ایمیل
            </Button>
          </Link>
          <Link href="/">
            <Button color="primary" variant="contained">
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;
