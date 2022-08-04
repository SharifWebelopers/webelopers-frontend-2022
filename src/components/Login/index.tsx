import React, { useState } from "react";
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

import styles from "../../styles/Auth.module.scss";

function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>ورود</div>
      <TextField className={styles.inputs} placeholder="ایمیل" />
      <TextField
        className={styles.inputs}
        placeholder="رمز عبور"
        type={showPass ? "text" : "password"}
        InputProps={{
          sx: {
            paddingRight: "26px",
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setShowPass(!showPass);
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
              >
                {showPass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button color="primary" variant="contained">
        ورود
      </Button>
      <div className={styles["bottom-links"]}>
        <a href="">رمز عبور خود را فراموش کردید؟</a>
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ backgroundColor: "#1C156D" }}
        />
        <Link href="/auth/signup">ثبت‌نام</Link>
      </div>
      <OAuth />
    </div>
  );
}

export default Login;
