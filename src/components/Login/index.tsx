import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import OAuth from "../OAuth";

import { login } from "../../actions/auth";

import styles from "../../styles/Auth.module.scss";
import Context from "../../context/context";

function Login() {
  const router = useRouter();

  const [context, setContext] = useContext(Context);

  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showActivationPrompt, setShowActivationPrompt] = useState(false);

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
      const error = validator(password);
      if (error) {
        if (showError) setPasswordError(error);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (validateEmail(false) && validatePassword(false) && !loading) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, email, loading]);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    login({ email, password })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
        setContext({
          ...context,
          snackbar: {
            open: true,
            message: "ورود موفقیت‌آمیز بود!",
            variant: "success",
          },
          loggedIn: true,
        });
        router.push("/dashboard");
      })
      .catch((err) => {
        if (err.response?.status === 403) return setShowActivationPrompt(true);

        const message =
          err.response?.status === 404
            ? "رمز عبور یا نام کاربری اشتباه است (یا با شبکه‌های اجتماعی ثبت‌نام شده است)."
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
      <div className={styles.title}>ورود</div>
      {showActivationPrompt ? (
        <div className={styles["verification-result"]}>
          <img
            className={styles["verification-icon"]}
            src="/failed.svg"
            alt="failed"
          />
          <div className={styles["verification-message"]}>
            حساب کاربری شما غیرفعال است.
          </div>
          <Link href="/auth/request-verification">
            <Button color="primary" variant="contained">
              فعال‌سازی حساب
            </Button>
          </Link>
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
            />
            <TextField
              className={styles.inputs}
              placeholder="رمز عبور"
              type={showPass ? "text" : "password"}
              value={password}
              error={!!passwordError}
              helperText={passwordError}
              onBlur={() => validatePassword()}
              onFocus={() => {
                setPasswordError("");
              }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="info"
                      onClick={() => {
                        setShowPass(!showPass);
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                    >
                      {!showPass ? <VisibilityOff /> : <Visibility />}
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
              ورود
            </Button>
          </form>
          <div className={styles["bottom-links"]}>
            <Link href="/auth/forgot-password">
              رمز عبور خود را فراموش کردید؟
            </Link>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ backgroundColor: "#ccb0a1", width: "1px", height: "4vh" }}
            />
            <Link href="/auth/signup">ثبت‌نام</Link>
          </div>
          <OAuth />
        </>
      )}
    </div>
  );
}

export default Login;
