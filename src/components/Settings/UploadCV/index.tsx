import React, { useState } from "react";
import { Button } from "@mui/material";
import FileIcon from "./FileIcon";

import styles from "./UploadCV.module.scss";
import PlusIcon from "./PlusIcon";

const UploadCV = () => {
  const [file, setFile] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  const postCV = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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
          {file ? (
            <FileIcon />
          ) : (
            <>
              <PlusIcon />
              <div>رزومه‌تان را بکشید و رها کنید...</div>
            </>
          )}
        </div>
        <Button
          variant="contained"
          sx={{ width: "100%", color: "white" }}
          disabled={!file || loading}
          onClick={postCV}
        >
          ذخیره رزومه
        </Button>
      </div>
    </div>
  );
};

export default UploadCV;
