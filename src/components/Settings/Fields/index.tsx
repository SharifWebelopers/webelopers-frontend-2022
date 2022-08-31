import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { CheckboxOnIcon, CheckboxOffIcon } from "./Checkbox";

import styles from "./Fields.module.scss";

const Fields = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    province: "placeholder",
    grade: "placeholder",
    entranceYear: "placeholder",
    field: "placeholder",
    school: "placeholder",
    linkedinLink: "",
    githubLink: "",
    djangoBackground: "placeholder",
    reactBackground: "placeholder",
    devopsBackground: "placeholder",
    shareInfo: false,
  });

  return (
    <div className={styles["row-container"]}>
      <div className={styles.row}>
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="نام*"
          value={state.firstName}
          onChange={(e) => {
            setState({
              ...state,
              firstName: e.target.value,
            });
          }}
        />
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="نام خانوادگی*"
          value={state.lastName}
          onChange={(e) => {
            setState({
              ...state,
              lastName: e.target.value,
            });
          }}
        />
      </div>
      <div className={styles.row}>
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="شماره همراه*"
          value={state.phone}
          onChange={(e) => {
            setState({
              ...state,
              phone: e.target.value,
            });
          }}
        />
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="ایمیل*"
          value={state.email}
          onChange={(e) => {
            setState({
              ...state,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className={styles.row}>
        <Select
          className={`settings-page-field ${
            state.province === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.province}
          onChange={(e) => {
            setState({
              ...state,
              province: e.target.value,
            });
          }}
        >
          <MenuItem value={"placeholder"} disabled>
            استان
          </MenuItem>
          <MenuItem value={"teh"}>tehran</MenuItem>
          <MenuItem value={"hmm"}>hmmm</MenuItem>
        </Select>
        <Select
          className={`settings-page-field ${
            state.grade === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.grade}
          onChange={(e) => {
            setState({
              ...state,
              grade: e.target.value,
            });
          }}
        >
          <MenuItem value={"placeholder"} disabled>
            مقطع تحصیلی
          </MenuItem>
          <MenuItem value={"teh"}>tehran</MenuItem>
          <MenuItem value={"hmm"}>hmmm</MenuItem>
        </Select>
      </div>
      <div className={styles.row}>
        <Select
          className={`settings-page-field ${
            state.entranceYear === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.entranceYear}
          onChange={(e) => {
            setState({
              ...state,
              entranceYear: e.target.value,
            });
          }}
        >
          <MenuItem value={"placeholder"} disabled>
            سال ورود به مقطع تحصیلی فعلی
          </MenuItem>
          <MenuItem value={"teh"}>tehran</MenuItem>
          <MenuItem value={"hmm"}>hmmm</MenuItem>
        </Select>
        <Select
          className={`settings-page-field ${
            state.field === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.field}
          onChange={(e) => {
            setState({
              ...state,
              field: e.target.value,
            });
          }}
        >
          <MenuItem value={"placeholder"} disabled>
            رشته تحصیلی
          </MenuItem>
          <MenuItem value={"teh"}>tehran</MenuItem>
          <MenuItem value={"hmm"}>hmmm</MenuItem>
        </Select>
      </div>
      <div className={styles.row}>
        <Select
          className={`settings-page-field ${
            state.school === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.school}
          onChange={(e) => {
            setState({
              ...state,
              school: e.target.value,
            });
          }}
        >
          <MenuItem value={"placeholder"} disabled>
            محل تحصیل
          </MenuItem>
          <MenuItem value={"teh"}>tehran</MenuItem>
          <MenuItem value={"hmm"}>hmmm</MenuItem>
        </Select>
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="لینک صفحه لینکدین"
          value={state.linkedinLink}
          onChange={(e) => {
            setState({
              ...state,
              linkedinLink: e.target.value,
            });
          }}
        />
      </div>
      <div className={styles.row}>
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="لینک صفحه گیتهاب"
          value={state.githubLink}
          onChange={(e) => {
            setState({
              ...state,
              githubLink: e.target.value,
            });
          }}
        />
        <Select
          className={`settings-page-field ${
            state.djangoBackground === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.djangoBackground}
          onChange={(e) => {
            setState({
              ...state,
              djangoBackground: e.target.value,
            });
          }}
        >
          <MenuItem value={"placeholder"} disabled>
            سابقه جنگو
          </MenuItem>
          <MenuItem value={"teh"}>tehran</MenuItem>
          <MenuItem value={"hmm"}>hmmm</MenuItem>
        </Select>
      </div>
      <div className={styles.row}>
        <Select
          className={`settings-page-field ${
            state.reactBackground === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.reactBackground}
          onChange={(e) => {
            setState({
              ...state,
              reactBackground: e.target.value,
            });
          }}
        >
          <MenuItem value={"placeholder"} disabled>
            سابقه ری‌اکت
          </MenuItem>
          <MenuItem value={"teh"}>tehran</MenuItem>
          <MenuItem value={"hmm"}>hmmm</MenuItem>
        </Select>
        <Select
          className={`settings-page-field ${
            state.devopsBackground === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.devopsBackground}
          onChange={(e) => {
            setState({
              ...state,
              devopsBackground: e.target.value,
            });
          }}
        >
          <MenuItem value={"placeholder"} disabled>
            سابقه زیرساخت
          </MenuItem>
          <MenuItem value={"teh"}>tehran</MenuItem>
          <MenuItem value={"hmm"}>hmmm</MenuItem>
        </Select>
      </div>
      <div className={`${styles.row} ${styles.checkbox}`}>
        <FormControlLabel
          style={{ color: "#cbcbcb" }}
          control={
            <Checkbox
              disableRipple
              style={{
                marginRight: state.shareInfo ? -3 : 0,
              }}
              icon={<CheckboxOffIcon />}
              checkedIcon={<CheckboxOnIcon />}
              value={state.shareInfo}
              onChange={(e) => {
                setState({
                  ...state,
                  shareInfo: e.target.checked,
                });
              }}
            />
          }
          label="اطلاعاتم برای اسپانسر به نمایش گذاشته شود."
        />
      </div>
      <div>
        <Button className="save-button" variant="contained">
          ذخیره اطلاعات
        </Button>
      </div>
    </div>
  );
};

export default Fields;
