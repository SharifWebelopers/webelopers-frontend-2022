import { Button } from "@mui/material";
import React, { useContext } from "react";
import Image from "next/image";
import defaultImg from "../../../../assets/images/blank-profile.png";
import { sendInvitation } from "../../../../actions/team";

import styles from "./Search.module.scss";
import Context from "../../../../context/context";

interface SearchResultProps {
  className?: string;
  imageSrc?: string;
  username: string;
  email: string;
}

const SearchResult = ({
  className,
  imageSrc,
  username,
  email,
}: SearchResultProps) => {
  const [context, setContext] = useContext(Context);

  const invite = (email: string, username: string) => {
    sendInvitation({ receiver_email: email })
      .then(() => {
        setContext({
          ...context,
          snackbar: {
            open: true,
            message: `دعوت شما به ${username} ارسال شد.`,
            variant: "success",
          },
        });
      })
      .catch(() => {
        setContext({
          ...context,
          snackbar: {
            open: true,
            message: "ارسال دعوت با مشکل مواجه شد!",
            variant: "error",
          },
        });
      });
  };

  return (
    <div className={`${styles["search-result-row"]} ${className}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          maxWidth: "56%",
          overflow: "hidden",
        }}
      >
        <Image
          loading="lazy"
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
      <Button
        className={styles.invite}
        variant="outlined"
        onClick={() => invite(email, username)}
      >
        ارسال دعوت
      </Button>
    </div>
  );
};

export default SearchResult;
