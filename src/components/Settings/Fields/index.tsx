import React, { FormEvent, useContext, useEffect, useState } from "react";
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
import Context from "../../../context/context";

import styles from "./Fields.module.scss";

const Fields = ({ state, setState }: { state: any; setState: any }) => {
  const [context, setContext] = useContext(Context);

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [yearError, setYearError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    updateUserInfo({
      ...Object.keys(state)
        .filter(
          (key) =>
            key !== "email" && key !== "resume" && key !== "profile_image"
        )
        .reduce((acc, item) => ({ ...acc, [item]: state[item] }), {}),
      university_start_date: +state.university_start_date || null,
    })
      .then(() => {
        setContext({
          ...context,
          snackbar: {
            open: true,
            message: "اطلاعات کاربری با موفقیت ویرایش شد!",
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

  const phoneNumbervalidators = [
    (phone: string) => (phone ? false : "شماره همراه الزامی است!"), // checking emptiness
    (phone: string) => {
      // checking regex
      const re = /^09[0-9]{9}$/;
      return !re.test(phone) && "شماره همراه نامعتبر است!";
    },
  ];

  const validatePhoneNumber = (showError = true) => {
    for (const validator of phoneNumbervalidators) {
      const error = validator(state.phone_number);
      if (error) {
        if (showError) setPhoneNumberError(error);
        return false;
      }
    }
    return true;
  };

  const nameValidators = [
    (name: string) => (name ? false : "نام الزامی است!"), // checking emptiness
  ];

  const validateName = (showError = true) => {
    for (const validator of nameValidators) {
      const error = validator(state.first_name);
      if (error) {
        if (showError) setNameError(error);
        return false;
      }
    }
    return true;
  };

  const lastNameValidators = [
    (name: string) => (name ? false : "نام خانوادگی الزامی است!"), // checking emptiness
  ];

  const validateLastName = (showError = true) => {
    for (const validator of lastNameValidators) {
      const error = validator(state.last_name);
      if (error) {
        if (showError) setLastNameError(error);
        return false;
      }
    }
    return true;
  };

  const yearValidators = [
    (year: string) => {
      const re = /^(1[3-4][0-9]{2})$/;
      return (
        year &&
        (!re.test(year) || +year > 1410 || +year < 1300) &&
        "لطفا یک عدد بین ۱۳۰۰ و ۱۴۱۰ وارد کنید."
      );
    },
  ];

  const validateYear = (showError = true) => {
    for (const validator of yearValidators) {
      const error = validator(state.university_start_date);
      if (error) {
        if (showError) setYearError(error);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (
      validateName(false) &&
      validateLastName(false) &&
      validatePhoneNumber(false) &&
      validateYear(false) &&
      !loading
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [
    state.phone_number,
    state.first_name,
    state.last_name,
    state.university_start_date,
    loading,
  ]);

  return (
    <form onSubmit={handleSubmit} className={styles["row-container"]}>
      <div className={styles.row}>
        <TextField
          className="settings-page-field"
          inputProps={{ className: "settings-page-input" }}
          placeholder="نام*"
          value={state.first_name}
          error={!!nameError}
          helperText={nameError}
          onBlur={() => validateName()}
          onFocus={() => {
            setNameError("");
          }}
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
          error={!!lastNameError}
          helperText={lastNameError}
          onBlur={() => validateLastName()}
          onFocus={() => {
            setLastNameError("");
          }}
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
          error={!!phoneNumberError}
          helperText={phoneNumberError}
          onBlur={() => validatePhoneNumber()}
          onFocus={() => {
            setPhoneNumberError("");
          }}
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
          error={!!yearError}
          helperText={yearError}
          onBlur={() => validateYear()}
          onFocus={() => {
            setYearError("");
          }}
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
        <Button
          className="save-button"
          variant="contained"
          type="submit"
          disabled={disabled}
        >
          ذخیره اطلاعات
        </Button>
      </div>
    </form>
  );
};

export default Fields;
