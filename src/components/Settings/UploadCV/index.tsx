import React, { useState } from "react";
import { Button } from "@mui/material";
import FileIcon from "./FileIcon";
import PlusIcon from "./PlusIcon";
import { sendCV } from "../../../actions/dashboard";

import styles from "./UploadCV.module.scss";

const UploadCV = ({ isDesktop }: { isDesktop: boolean }) => {
  const [file, setFile] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  const postCV = () => {
    setLoading(true);
    sendCV({ resume: file }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className={styles.container}>
      <div
        className={styles["upload-box"]}
        style={isDesktop ? {} : { padding: "70px 22px" }}
      >
        <div className={styles["choose-file"]}>
          <div>
            {file
              ? file.name.length > 20
                ? file.name.slice(0, 17) + "..."
                : file.name
              : "فایلی انتخاب نشده است!"}
          </div>
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
            <div>انتخاب فایل</div>
            <input
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
              hidden
              type="file"
            />
          </Button>
        </div>
        {isDesktop && (
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
        )}
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
