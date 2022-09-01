import React, { FormEvent, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { CheckboxOnIcon, CheckboxOffIcon } from "./Checkbox";
import { updateUserInfo } from "../../../actions/dashboard";

import styles from "./Fields.module.scss";

const Fields = ({ state, setState }: { state: any; setState: any }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    updateUserInfo(
      Object.keys(state)
        .filter(
          (key) =>
            key !== "email" && key !== "resume" && key !== "profile_image"
        )
        .reduce((acc, item) => ({ ...acc, [item]: state[item] }), {})
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles["row-container"]}>
      <div className={styles.row}>
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="نام*"
          value={state.first_name}
          onChange={(e) => {
            setState({
              ...state,
              first_name: e.target.value,
            });
          }}
        />
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="نام خانوادگی*"
          value={state.last_name}
          onChange={(e) => {
            setState({
              ...state,
              last_name: e.target.value,
            });
          }}
        />
      </div>
      <div className={styles.row}>
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="شماره همراه*"
          value={state.phone_number}
          onChange={(e) => {
            setState({
              ...state,
              phone_number: e.target.value,
            });
          }}
        />
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="ایمیل*"
          value={state.email}
          disabled
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
            state.university_degree === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.university_degree}
          onChange={(e) => {
            setState({
              ...state,
              university_degree: e.target.value,
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
            state.university_start_date === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.university_start_date}
          onChange={(e) => {
            setState({
              ...state,
              university_start_date: e.target.value,
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
            state.field_study === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.field_study}
          onChange={(e) => {
            setState({
              ...state,
              field_study: e.target.value,
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
            state.university === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.university}
          onChange={(e) => {
            setState({
              ...state,
              university: e.target.value,
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
          value={state.linkedin_link}
          onChange={(e) => {
            setState({
              ...state,
              linkedin_link: e.target.value,
            });
          }}
        />
      </div>
      <div className={styles.row}>
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="لینک صفحه گیتهاب"
          value={state.github_link}
          onChange={(e) => {
            setState({
              ...state,
              github_link: e.target.value,
            });
          }}
        />
        <Select
          className={`settings-page-field ${
            state.django_experience === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.django_experience}
          onChange={(e) => {
            setState({
              ...state,
              django_experience: e.target.value,
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
            state.react_experience === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.react_experience}
          onChange={(e) => {
            setState({
              ...state,
              react_experience: e.target.value,
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
            state.devops_experience === "placeholder" ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.devops_experience}
          onChange={(e) => {
            setState({
              ...state,
              devops_experience: e.target.value,
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
                marginRight: state.share_info ? -3 : 0,
              }}
              icon={<CheckboxOffIcon />}
              checkedIcon={<CheckboxOnIcon />}
              value={state.share_info}
              onChange={(e) => {
                setState({
                  ...state,
                  share_info: e.target.checked,
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
    </form>
  );
};

export default Fields;
