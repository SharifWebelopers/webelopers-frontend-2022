import React, { useState, FormEvent, useEffect, useContext } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { changePassword } from "../../../actions/dashboard";
import Context from "../../../context/context";

import styles from "./ChangePassword.module.scss";

const ChangePassword = ({ isDesktop }: { isDesktop: boolean }) => {
  const [context, setContext] = useContext(Context);

  const [showPass, setShowPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [repeatNewPasswordError, setRepeatNewPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const passwordValidators: Function[] = [
    (pass: string) => (pass ? false : "رمز عبور فعلی الزامی است!"), // checking emptiness
    (pass: string) => {
      // checking length
      return pass.length < 8 && "رمز عبور باید حداقل شامل ۸ کاراکتر باشد!";
    },
  ];
  const newPasswordValidators: Function[] = [
    ...passwordValidators,
    (pass: string) =>
      pass === currentPassword &&
      "رمز عبور جدید نمی‌تواند با رمز عبور فعلی یکسان باشد!",
  ];
  const repeatPasswordValidators: Function[] = [
    (pass: string) =>
      pass === newPassword ? false : "تکرار رمز عبور با رمز عبور یکسان نیست!", // must be same with first password
  ];

  const validateCurrentPassword = (showError = true) => {
    for (const validator of passwordValidators) {
      const error = validator(currentPassword);
      if (error) {
        if (showError) setCurrentPasswordError(error);
        return false;
      }
    }
    return true;
  };

  const validateNewPassword = (showError = true) => {
    for (const validator of newPasswordValidators) {
      const error = validator(newPassword);
      if (error) {
        if (showError) setNewPasswordError(error);
        return false;
      }
    }
    return true;
  };

  const validateRepeatNewPassword = (showError = true) => {
    for (const validator of repeatPasswordValidators) {
      const error = validator(repeatNewPassword);
      if (error) {
        if (showError) setRepeatNewPasswordError(error);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (
      validateCurrentPassword(false) &&
      validateNewPassword(false) &&
      validateRepeatNewPassword(false) &&
      !loading
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [currentPassword, newPassword, repeatNewPassword, loading]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    changePassword({
      old_password: currentPassword,
      new_password: newPassword,
    })
      .then(() => {
        setContext({
          ...context,
          snackbar: {
            open: true,
            message: "رمز عبور با موفقیت تغییر کرد!",
            variant: "success",
          },
        });
      })
      .catch(() => {
        setContext({
          ...context,
          snackbar: {
            open: true,
            message: "خطایی رخ داد!",
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
      <form
        onSubmit={handleSubmit}
        className={styles["textfields-container"]}
        style={isDesktop ? {} : { padding: "62px 14px" }}
      >
        <TextField
          className={`change-password-field ${styles.textfield}`}
          inputProps={{ className: "change-password-input" }}
          placeholder="رمز عبور فعلی"
          type={showPass ? "text" : "password"}
          value={currentPassword}
          tabIndex={1}
          error={!!currentPasswordError}
          helperText={currentPasswordError}
          onBlur={() => validateCurrentPassword()}
          onFocus={() => {
            setCurrentPasswordError("");
          }}
          onChange={(e) => {
            setCurrentPassword(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  tabIndex={4}
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
        <TextField
          className={`change-password-field ${styles.textfield}`}
          inputProps={{ className: "change-password-input" }}
          placeholder="رمز عبور جدید"
          type={showNewPass ? "text" : "password"}
          value={newPassword}
          tabIndex={2}
          error={!!newPasswordError}
          helperText={newPasswordError}
          onBlur={() => validateNewPassword()}
          onFocus={() => {
            setNewPasswordError("");
          }}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  tabIndex={4}
                  onClick={() => {
                    setShowNewPass(!showNewPass);
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                >
                  {!showNewPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={`change-password-field ${styles.textfield}`}
          inputProps={{ className: "change-password-input" }}
          placeholder="تکرار رمز عبور جدید"
          type={showNewPass ? "text" : "password"}
          value={repeatNewPassword}
          tabIndex={3}
          error={!!repeatNewPasswordError}
          helperText={repeatNewPasswordError}
          onBlur={() => validateRepeatNewPassword()}
          onFocus={() => {
            setRepeatNewPasswordError("");
          }}
          onChange={(e) => {
            setRepeatNewPassword(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  tabIndex={4}
                  onClick={() => {
                    setShowNewPass(!showNewPass);
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                >
                  {!showNewPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          sx={{ width: "100%", marginTop: "24px" }}
          color="primary"
          variant="contained"
          type="submit"
          disabled={disabled}
        >
          تغییر رمز
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
