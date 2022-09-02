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
import provinces from "../../../assets/data/provinces.json";
import degree from "../../../assets/data/degree.json";
import experience from "../../../assets/data/experience.json";

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
          inputProps={{
            className: "settings-page-input",
            style: {
              // @ts-ignore
              "-webkit-text-fill-color": "unset",
            },
          }}
          placeholder="ایمیل*"
          value={state.email}
          disabled
        />
      </div>
      <div className={styles.row}>
        <Select
          className={`settings-page-field ${
            !state.province ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.province || "placeholder"}
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
          {provinces.provinces.map((item: any, index: number) => {
            return (
              <MenuItem key={index} value={item.slug}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          className={`settings-page-field ${
            !state.university_degree ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.university_degree || "placeholder"}
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
          {degree.degree.map((item: any, index: number) => {
            return (
              <MenuItem key={index} value={item.slug}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div className={styles.row}>
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="سال ورود به مقطع تحصیلی فعلی"
          value={state.university_start_date}
          onChange={(e) => {
            setState({
              ...state,
              university_start_date: e.target.value,
            });
          }}
        />
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="رشته تحصیلی"
          value={state.field_study}
          onChange={(e) => {
            setState({
              ...state,
              field_study: e.target.value,
            });
          }}
        />
      </div>
      <div className={styles.row}>
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="محل تحصیل"
          value={state.university}
          onChange={(e) => {
            setState({
              ...state,
              university: e.target.value,
            });
          }}
        />
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
            !state.django_experience ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.django_experience || "placeholder"}
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
          {experience.experience.map((item: any, index: number) => {
            return (
              <MenuItem key={index} value={item.slug}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div className={styles.row}>
        <Select
          className={`settings-page-field ${
            !state.react_experience ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.react_experience || "placeholder"}
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
          {experience.experience.map((item: any, index: number) => {
            return (
              <MenuItem key={index} value={item.slug}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          className={`settings-page-field ${
            !state.devops_experience ? "placeholder" : ""
          }`}
          inputProps={{ className: "settings-page-input" }}
          value={state.devops_experience || "placeholder"}
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
          {experience.experience.map((item: any, index: number) => {
            return (
              <MenuItem key={index} value={item.slug}>
                {item.name}
              </MenuItem>
            );
          })}
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
        <Button className="save-button" variant="contained" type="submit">
          ذخیره اطلاعات
        </Button>
      </div>
    </form>
  );
};

export default Fields;
