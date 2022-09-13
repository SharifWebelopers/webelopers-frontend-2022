import Image from "next/future/image";
import React, { useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import staffElipsis from "../../../assets/images/staffElipsis.png";
import styles from "./CreateTeam.module.scss";

function CreateTeam() {
  const [teamState, setTeamState] = useState("no-team");
  return (
    <div>
      {teamState === "has-team" && (
        <>
          <div className={styles.editBtnWrapper}>
            <button className={styles.editBtn}>
              <BorderColorOutlinedIcon />
              ویرایش
            </button>
          </div>
          <div className={styles.createTeam}>
            <div className={styles.imageWrapper}>
              <Image className={styles.elipsis} src={staffElipsis} />
              <div className={styles.teamImageWrapper}>
                <Image className={styles.teamImage} src={""} />
              </div>
            </div>
            <div className={styles.teamNameWrapper}>
              <div className={styles.teamNameTitle}>نام تیم</div>
              <div className={styles.teamName}>اسم همون تیم</div>
            </div>
            <div className={styles.membersWrapper}>
              <div className={styles.membersTitle}>اعضا</div>
              <div className={styles.members}>
                <div className={styles.member}>
                  <div className={styles.memberImage}>
                    <Image src={""} />
                  </div>
                  <div className={styles.membername}>اسم فرد</div>
                </div>
                <div className={styles.member}>
                  <div className={styles.memberImage}>
                    <Image src={""} />
                  </div>
                  <div className={styles.membername}>اسم فرد</div>
                </div>
                <div className={styles.member}>
                  <div className={styles.memberImage}>
                    <Image src={""} />
                  </div>
                  <div className={styles.membername}>اسم فرد</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {teamState === "no-team" && (
        <div className={styles.noTeam}>
          <div>شما تاکنون تیمی تشکیل نداده‌اید.</div>
          <div className={styles.noTeamLeft}>
            <div className={styles.seperator}></div>
            <button
              onClick={() => setTeamState("is-creating")}
              className={styles.newTeamBtn}
            >
              تشکیل تیم جدید
            </button>
          </div>
        </div>
      )}
      {teamState === "is-creating" && (
        <div className={styles.createTeam}>
          <div className={styles.imageWrapper}>
            <Image className={styles.elipsis} src={staffElipsis} />
            <div className={styles.teamImageWrapper}>
              <Image className={styles.teamImage} src={""} />
            </div>
          </div>
          <PhotoCamera className={styles.camera} />
          <div className={styles.inputs}>
            <input
              type="text"
              className={styles.input}
              placeholder="نام گروه"
            />
            <input
              type="text"
              className={styles.input}
              placeholder="لینک ریپازیتوری گیتهاب"
            />
          </div>
          <button
            onClick={() => setTeamState("has-team")}
            className={styles.createTeamBtn}
          >
            ساخت تیم
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateTeam;
