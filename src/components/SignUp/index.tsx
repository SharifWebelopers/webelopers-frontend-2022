import React, { useState } from "react";
import { Button, TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

import OAuth from "../OAuth";

import styles from "../../styles/Auth.module.scss";

function SignUp() {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>ثبت‌نام</div>
      <TextField className={styles.inputs} placeholder="ایمیل" />
      <TextField
        className={styles.inputs}
        placeholder="رمز عبور"
        type={showPass1 ? "text" : "password"}
        InputProps={{
          sx: {
            paddingRight: "26px",
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setShowPass1(!showPass1);
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
              >
                {showPass1 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={styles.inputs}
        placeholder="رمز عبور"
        type={showPass2 ? "text" : "password"}
        InputProps={{
          sx: {
            paddingRight: "26px",
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setShowPass2(!showPass2);
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
              >
                {showPass2 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button color="primary" variant="contained">
        ثبت‌نام
      </Button>
      <div className={styles["bottom-links"]}>
        حساب کاربری دارید؟
        <Link href="/auth/login">ورود</Link>
      </div>
      <OAuth />
    </div>
  );
}

export default SignUp;
