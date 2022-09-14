import Image from "next/future/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import {
  createTeam,
  deleteTeam,
  getTeam,
  updateTeam,
} from "../../../actions/team";
import Context from "../../../context/context";
import staffElipsis from "../../../assets/images/staffElipsis.png";
import noTeamImg from "../../../assets/images/blank-profile.png";

import styles from "./CreateTeam.module.scss";
import { Modal } from "@mui/material";

function CreateTeam() {
  const [context, setContext] = useContext(Context);
  const [teamState, setTeamState] = useState("no-team");
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [githubRepo, setGithubRepo] = useState("");
  const [teamImage, setTeamImage] = useState<any>();
  const [teamId, setTeamId] = useState("");
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    getTeam()
      .then((res) => res.data)
      .then((data) => {
        console.log("data", data);
        if (data.length > 0) {
          setTeamState("has-team");
          setTeamId(data[0].id);
          setTeamName(data[0].name);
          setGithubRepo(data[0].github_link);
          setTeamMembers(data[0].members);
          setTeamImage(data[0].image);
        }
        setPageLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {!pageLoading && (
        <div>
          {teamState === "is-editing" && (
            <EditTeam
              id={teamId}
              image={teamImage}
              name={teamName}
              github={githubRepo}
              setTeamState={setTeamState}
              setContext={setContext}
              setBaseTeamName={setTeamName}
              setBaseTeamImage={setTeamImage}
              setBaseTeamGithub={setGithubRepo}
            />
          )}
          {teamState === "has-team" && (
            <ViewTeam
              teamName={teamName}
              teamImage={teamImage}
              teamMembers={teamMembers}
              setTeamState={setTeamState}
              setContext={setContext}
              teamId={teamId}
            />
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
            <CreateTeamForm
              setBaseTeamName={setTeamName}
              setBaseTeamImage={setTeamImage}
              setBaseTeamMembers={setTeamMembers}
              setBaseTeamId={setTeamId}
              setBaseTeamGithub={setGithubRepo}
              setTeamState={setTeamState}
              setContext={setContext}
            />
          )}
        </div>
      )}
    </>
  );
}

function CreateTeamForm({
  setBaseTeamName,
  setBaseTeamImage,
  setBaseTeamMembers,
  setBaseTeamId,
  setBaseTeamGithub,
  setTeamState,
  setContext,
}) {
  const imageUploaderRef = useRef(null);
  const [teamName, setTeamName] = useState("");
  const [githubRepo, setGithubRepo] = useState("");
  const [teamImage, setTeamImage] = useState<any>();
  const handleCreateTeam = () => {
    const formData = new FormData();
    if (teamImage) {
      formData.append("image", teamImage);
    }
    if (!teamName) {
      setContext((old) => ({
        ...old,
        snackbar: {
          open: true,
          message: "نام تیم نمی‌تواند خالی باشد.",
          variant: "error",
        },
      }));
      return;
    }
    formData.append("name", teamName);
    const regex = new RegExp("http(s)?://(www.)?github.com/.*.git");
    if (githubRepo && !regex.test(githubRepo)) {
      setContext((old) => ({
        ...old,
        snackbar: {
          open: true,
          message: "فرمت آدرس ریپازیتوری گیتهاب صحیح نیست.",
          variant: "error",
        },
      }));
      return;
    }
    formData.append("github_link", githubRepo);
    createTeam(formData)
      .then((res) => res.data)
      .then((data) => {
        setTeamState("has-team");
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "تیم با موفقیت ساخته شد.",
            variant: "success",
          },
        }));
        setBaseTeamImage(teamImage);
        setBaseTeamName(teamName);
        setBaseTeamGithub(githubRepo);
        setBaseTeamId(data.id);
        setBaseTeamMembers(data.members);
      })
      .catch((error) => {
        const status = error.response?.status;
        if (status === 400) {
          setContext((old) => ({
            ...old,
            snackbar: {
              open: true,
              message: "نام تیم قبلا انتخاب شده است.",
              variant: "error",
            },
          }));
          return;
        }
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "مشکلی در ساخت تیم رخ داده است.",
            variant: "error",
          },
        }));
      });
  };
  return (
    <div className={styles.createTeam}>
      <div className={styles.imageWrapper}>
        <Image className={styles.elipsis} src={staffElipsis} alt="elipsis" />
        <div className={styles.teamImageWrapper}>
          <Image
            className={styles.teamImage}
            src={
              (typeof teamImage === "string" && teamImage) ||
              (teamImage && URL.createObjectURL(teamImage)) ||
              noTeamImg
            }
            alt="team image"
            width={160}
            height={160}
          />
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={imageUploaderRef}
        className={styles.fileUploader}
        onChange={(e) => setTeamImage(e.target.files?.[0])}
      />
      <PhotoCamera
        onClick={() => {
          //@ts-ignore
          imageUploaderRef.current.click();
        }}
        className={styles.camera}
      />
      <div className={styles.inputs}>
        <input
          type="text"
          className={styles.input}
          placeholder="نام گروه *"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="لینک ریپازیتوری گیتهاب"
          value={githubRepo}
          onChange={(e) => setGithubRepo(e.target.value)}
        />
        <div className={styles.githubDescription}>
          به ریپازیتوری گیتهاب رفته و گزینه clone را بزنید و لینک https را وارد
          کنید.
        </div>
      </div>
      <button onClick={handleCreateTeam} className={styles.createTeamBtn}>
        ساخت تیم
      </button>
      <button
        className={styles.returnBtn}
        onClick={() => setTeamState("no-team")}
      >
        بازگشت
      </button>
    </div>
  );
}

function ViewTeam({
  teamName,
  teamImage,
  teamMembers,
  setTeamState,
  setContext,
  teamId,
}) {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteTeamOpen, setDeleteTeamOpen] = useState(false);
  const handleOpen = () => setDeleteTeamOpen(true);
  const handleClose = () => setDeleteTeamOpen(false);
  const handleDeleteTeam = () => {
    setDeleteLoading(true);
    deleteTeam(teamId)
      .then((res) => {
        setTeamState("no-team");
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "تیم با موفقیت حذف شد.",
            variant: "success",
          },
        }));
      })
      .catch((error) => {
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "مشکلی در حذف تیم رخ داده است.",
            variant: "error",
          },
        }));
      })
      .finally(() => {
        setDeleteLoading(false);
        handleClose();
      });
  };
  return (
    <>
      <Modal open={deleteTeamOpen} onClose={handleClose}>
        <div className={styles.modal}>
          <div className={styles.modalTitle}>
            خروج سرگروه به منزله حذف تیم است ، آیا از خروج خود اطمینان دارید؟
          </div>
          <div className={styles.modalButtons}>
            <button disabled={deleteLoading} className={styles.modalAccept} onClick={handleDeleteTeam}>
              بله
            </button>
            <button disabled={deleteLoading} className={styles.modalReject} onClick={handleClose}>
              خیر
            </button>
          </div>
        </div>
      </Modal>
      <div className={styles.editBtnWrapper}>
        <button
          className={styles.editBtn}
          onClick={() => setTeamState("is-editing")}
        >
          <BorderColorOutlinedIcon />
          ویرایش
        </button>
        <button
          onClick={() => setDeleteTeamOpen(true)}
          className={styles.deleteTeamBtn}
        >
          حذف تیم
        </button>
      </div>
      <div className={styles.createTeam}>
        <div className={styles.imageWrapper}>
          <Image className={styles.elipsis} src={staffElipsis} alt="elipsis" />
          <div className={styles.teamImageWrapper}>
            <Image
              className={styles.teamImage}
              src={
                (typeof teamImage === "string" && teamImage) ||
                (teamImage && URL.createObjectURL(teamImage)) ||
                noTeamImg
              }
              alt="team image"
              width={160}
              height={160}
            />
          </div>
        </div>
        <div className={styles.teamNameWrapper}>
          <div className={styles.teamNameTitle}>نام تیم</div>
          <div className={styles.teamName}>{teamName}</div>
        </div>
        <div className={styles.membersWrapper}>
          <div className={styles.membersTitle}>اعضا</div>
          <div className={styles.members}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.member}>
                <div className={styles.memberName}>{member.email}</div>
              </div>
            ))}
            {/* <div className={styles.member}>
    <div className={styles.memberImage}>
      <Image src={""} />
    </div>
    <div className={styles.memberName}>اسم فرد</div>
  </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

function EditTeam({
  image,
  name,
  github,
  setTeamState,
  id,
  setContext,
  setBaseTeamName,
  setBaseTeamImage,
  setBaseTeamGithub,
}) {
  const [teamName, setTeamName] = useState(name);
  const [teamImage, setTeamImage] = useState(image);
  const [githubRepo, setGithubRepo] = useState(github);
  const [loading, setLoading] = useState(false);
  const imageUploaderRef = useRef(null);
  const handleUpdateTeam = () => {
    const formData = new FormData();
    if (teamImage !== image) {
      formData.append("image", teamImage);
    }
    if (!teamName) {
      setContext((old) => ({
        ...old,
        snackbar: {
          open: true,
          message: "نام تیم نمی‌تواند خالی باشد.",
          variant: "error",
        },
      }));
      return;
    }
    if (teamName !== name) {
      formData.append("name", teamName);
    }
    const regex = new RegExp("http(s)?://(www.)?github.com/.*.git");
    if (githubRepo && !regex.test(githubRepo)) {
      setContext((old) => ({
        ...old,
        snackbar: {
          open: true,
          message: "فرمت آدرس ریپازیتوری گیتهاب صحیح نیست.",
          variant: "error",
        },
      }));
      return;
    }
    if (githubRepo !== github) {
      formData.append("github_link", githubRepo);
    }
    setLoading(true);
    updateTeam(id, formData)
      .then(() => {
        setTeamState("has-team");
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "اطلاعات تیم با موفقیت تغییر یافت.",
            variant: "success",
          },
        }));
        setBaseTeamImage(teamImage);
        setBaseTeamName(teamName);
        setBaseTeamGithub(githubRepo);
      })
      .catch((error) => {
        const status = error.response?.status;
        if (status === 400) {
          setContext((old) => ({
            ...old,
            snackbar: {
              open: true,
              message: "نام تیم قبلا انتخاب شده است.",
              variant: "error",
            },
          }));
          return;
        }
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "مشکلی در ساخت تیم رخ داده است.",
            variant: "error",
          },
        }));
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "مشکلی در ویرایش اطلاعات تیم رخ داده است.",
            variant: "error",
          },
        }));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.createTeam}>
      <div className={styles.imageWrapper}>
        <Image className={styles.elipsis} src={staffElipsis} alt="elipsis" />
        <div className={styles.teamImageWrapper}>
          <Image
            width={160}
            height={160}
            className={styles.teamImage}
            src={
              (typeof teamImage === "string" && teamImage) ||
              (teamImage && URL.createObjectURL(teamImage)) ||
              noTeamImg
            }
            alt="team image"
          />
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={imageUploaderRef}
        className={styles.fileUploader}
        onChange={(e) => setTeamImage(e.target.files?.[0])}
      />
      <PhotoCamera
        onClick={() => {
          //@ts-ignore
          imageUploaderRef.current.click();
        }}
        className={styles.camera}
      />
      <div className={styles.inputs}>
        <input
          type="text"
          className={styles.input}
          placeholder="نام گروه"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="لینک ریپازیتوری گیتهاب"
          value={githubRepo}
          onChange={(e) => setGithubRepo(e.target.value)}
        />
        <div className={styles.githubDescription}>
          به ریپازیتوری گیتهاب رفته و گزینه clone را بزنید و لینک https را وارد
          کنید.
        </div>
      </div>
      <button
        disabled={loading}
        onClick={handleUpdateTeam}
        className={styles.createTeamBtn}
      >
        ویرایش تیم
      </button>
      <button
        className={styles.returnBtn}
        onClick={() => setTeamState("has-team")}
      >
        بازگشت
      </button>
    </div>
  );
}

export default CreateTeam;
