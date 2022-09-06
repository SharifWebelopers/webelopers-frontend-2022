import React, { useContext, useEffect, useState } from "react";
import { Button, TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import OAuth from "../OAuth";
import Context from "../../context/context";

import { register } from "../../actions/auth";

import styles from "../../styles/Auth.module.scss";

function SignUp() {
  const [context, setContext] = useContext(Context);

  const [submitted, setSubmitted] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password2Error, setPassword2Error] = useState("");
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
    if (
      validateEmail(false) &&
      validatePassword(false) &&
      validateRepeatPassword(false) &&
      !loading
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password1, password2, email, loading]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);
    register({
      email,
      password: password1,
    })
      .then((res) => {
        // localStorage.setItem("accessToken", res.data.access);
        // localStorage.setItem("refreshToken", res.data.refresh);
        setSubmitted(true);
      })
      .catch((err) => {
        const message =
          err.response?.status === 400
            ? "این ایمیل قبلا ثبت شده است!"
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
      <div className={styles.title}>ثبت‌نام</div>
      {submitted ? (
        <>
          <div className={styles["message-box"]}>
            برای تایید ثبت‌نام لطفا ایمیل خود را چک کنید
          </div>
        </>
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
                setEmail(e.target.value.toLowerCase());
              }}
              tabIndex={1}
            />
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
              tabIndex={2}
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
                      tabIndex={5}
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
              tabIndex={3}
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
                      tabIndex={5}
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
              ثبت‌نام
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

export default SignUp;
