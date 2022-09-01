import React, { useState, FormEvent } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { changePassword } from "../../../actions/dashboard";
import styles from "./ChangePassword.module.scss";

const ChangePassword = ({ isDesktop }: { isDesktop: boolean }) => {
  const [showPass, setShowPass] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    changePassword({
      old_password: currentPassword,
      new_password: newPassword,
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
          onChange={(e) => {
            setCurrentPassword(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
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
          type={showPass ? "text" : "password"}
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
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
          placeholder="تکرار رمز عبور جدید"
          type={showPass ? "text" : "password"}
          value={repeatNewPassword}
          onChange={(e) => {
            setRepeatNewPassword(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
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
          sx={{ width: "100%", marginTop: "24px" }}
          color="primary"
          variant="contained"
          type="submit"
          disabled={
            !currentPassword ||
            currentPassword.length < 8 ||
            !newPassword ||
            newPassword.length < 8 ||
            newPassword !== repeatNewPassword
          }
        >
          تغییر رمز
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
