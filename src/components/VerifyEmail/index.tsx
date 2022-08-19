import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@mui/material";

import { verify } from "../../actions/auth";

import styles from "../../styles/Auth.module.scss";

function VerifyEmail() {
  const router = useRouter();

  const [isValid, setIsValid] = useState(
    !!(router.query?.uid && router.query?.token)
  );
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (isValid)
      verify({
        encoded_user_id: router.query.uid,
        token: router.query.token,
      })
        .then(() => {
          setVerified(true);
        })
        .catch(() => {
          setVerified(false);
        })
        .finally(() => {
          setLoading(false);
        });
  }, [isValid]);

  useEffect(() => {
    setIsValid(!!(router.query?.uid && router.query?.token));
  }, [router.query]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>فعال‌سازی حساب</div>
      {loading || !isValid ? (
        <div className={styles["message-box"]}>
          {!isValid ? "لینک نامعتبر است!" : "در انتظار تایید ایمیل..."}
        </div>
      ) : (
        <div className={styles["verification-result"]}>
          <img
            className={styles["verification-icon"]}
            src={verified ? "/success.svg" : "/failed.svg"}
            alt={verified ? "success" : "failed"}
          />
          <div className={styles["verification-message"]}>
            {verified
              ? "حساب کاربری شما با موفقیت فعال شد."
              : "لینک مربوطه منقضی شده است."}
          </div>
          {!verified && (
            <Link href="/auth/request-verification">
              <Button color="primary" variant="contained">
                ارسال مجدد ایمیل
              </Button>
            </Link>
          )}
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
