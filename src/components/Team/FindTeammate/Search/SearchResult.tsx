import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import defaultImg from "../../../../assets/images/blank-profile.png";
import styles from "./Search.module.scss";

interface SearchResultProps {
  imageSrc?: string;
  username: string;
  email: string;
}

const SearchResult = ({ imageSrc, username, email }: SearchResultProps) => {
  return (
    <div className={styles["search-result-row"]}>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          maxWidth: "56%",
          overflow: "hidden",
        }}
      >
        <Image
          className={styles.avatar}
          src={imageSrc || defaultImg}
          alt="no picture!"
          height={60}
          width={60}
        />
        <div className={styles["info-container"]}>
          <div>{username}</div>
          <div className={styles.email}>
            {email.length <= 25 ? email : email.slice(0, 22) + "..."}
          </div>
        </div>
      </div>
      <Button className={styles.invite} variant="outlined">
        ارسال دعوت
      </Button>
    </div>
  );
};

export default SearchResult;
