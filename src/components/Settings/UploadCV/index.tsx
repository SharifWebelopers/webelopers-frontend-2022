import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

import styles from "./UploadCV.module.scss";

const UploadCV = () => {
  const [file, setFile] = useState<null | any>(null);

  return (
    <div className={styles.container}>
      <div className={styles["upload-box"]}>
        <div className={styles["choose-file"]}>
          <div>{file ? file.name : "No file chosen"}</div>
          <Button
            className={styles["choose-file-button"]}
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            variant="outlined"
            component="label"
            color="gray"
          >
            <div>choose file</div>
            <input
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
              hidden
              type="file"
            />
          </Button>
        </div>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setFile(e.dataTransfer.items[0].getAsFile());
          }}
          className={styles["drag-n-drop"]}
        >
          <svg
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.6429 34.8571H34.8571V56.6429C34.8571 59.0393 32.8964 61 30.5 61C28.1036 61 26.1429 59.0393 26.1429 56.6429V34.8571H4.35714C1.96071 34.8571 0 32.8964 0 30.5C0 28.1036 1.96071 26.1429 4.35714 26.1429H26.1429V4.35714C26.1429 1.96071 28.1036 0 30.5 0C32.8964 0 34.8571 1.96071 34.8571 4.35714V26.1429H56.6429C59.0393 26.1429 61 28.1036 61 30.5C61 32.8964 59.0393 34.8571 56.6429 34.8571Z"
              fill="#CCB0A1"
              fillOpacity="0.2"
            />
          </svg>
          <div>رزومه‌تان را بکشید و رها کنید...</div>
        </div>
        <Button
          variant="contained"
          sx={{ width: "100%", color: "white" }}
          disabled={!file}
        >
          ذخیره رزومه
        </Button>
      </div>
    </div>
  );
};

export default UploadCV;
