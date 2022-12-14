import Image from "next/future/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import {
  createTeam,
  deleteRequestRandomTeammate,
  deleteTeam,
  getRequestRandomTeammate,
  getTeam,
  requestRandomTeammate,
  updateTeam,
} from "../../../actions/team";
import Context from "../../../context/context";
import staffElipsis from "../../../assets/images/staffElipsis.png";
import noTeamImg from "../../../assets/images/blank-profile.png";

import styles from "./CreateTeam.module.scss";
import { Modal } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import { updateUserInfo } from "../../../actions/dashboard";
import { profile } from "console";
import { createRouteLoader } from "next/dist/client/route-loader";

interface CreateTeamProps {
  isTeamCreator: boolean;
  tabState: number;
  setRefreshPage: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateTeam({
  isTeamCreator,
  tabState,
  setRefreshPage,
}: CreateTeamProps) {
  const [context, setContext] = useContext(Context);
  const [teamState, setTeamState] = useState("no-team");
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [githubRepo, setGithubRepo] = useState("");
  const [teamImage, setTeamImage] = useState<any>();
  const [teamId, setTeamId] = useState("");
  const [pageLoading, setPageLoading] = useState(true);
  const [teamCreator, setTeamCreator] = useState({});
  const [hasChosenRegion, setHasChosenRegion] = useState<boolean | null>(null);

  useEffect(() => {
    setHasChosenRegion(!!context.profile.contest_type);
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
          setTeamCreator(data[0].creator);
        }
        setPageLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [context.profile, tabState]);
  return (
    <div style={{ marginBottom: 96 }}>
      {!pageLoading && (
        <>
          {!hasChosenRegion && (
            <ChooseRegion
              setTeamState={setTeamState}
              setHasChosenRegion={setHasChosenRegion}
              setContext={setContext}
            />
          )}
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
              isTeamCreator={isTeamCreator}
              currentEmail={context.profile.email}
              setRefreshPage={setRefreshPage}
              teamCreator={teamCreator}
            />
          )}
          {teamState === "no-team" && hasChosenRegion && (
            <NoTeam setContext={setContext} setTeamState={setTeamState} />
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
              setRefreshPage={setRefreshPage}
            />
          )}
        </>
      )}
    </div>
  );
}

function ChooseRegion({ setTeamState, setHasChosenRegion, setContext }) {
  const [chooseRegionModalOpen, setChooseRegionModalOpen] = useState(false);
  const handleChooseRegionModalOpen = () => setChooseRegionModalOpen(true);
  const [selectedRegion, setSelectedRegion] = useState("");
  const handleCloseChooseRegionModalModal = () =>
    setChooseRegionModalOpen(false);
  const handleSetRegion = () => {
    updateUserInfo({ contest_type: selectedRegion })
      .then((res) => {
        console.log("res", res.data);
        setTeamState("no-team");
        setHasChosenRegion(true);
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "???????????? ?????? ???? ???????????? ?????? ????.",
            variant: "success",
          },
        }));
      })
      .catch((err) => {
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message:
              err?.response?.data?.message_fa || "?????????? ???? ???????????? ???? ???????? ??????.",
            variant: "error",
          },
        }));
      });
  };
  return (
    <>
      <Modal
        open={chooseRegionModalOpen}
        onClose={handleCloseChooseRegionModalModal}
      >
        <div className={styles.modal}>
          <div className={styles.modalTitle}>
            ?????? ???????? ?????? ???????? ?????????? ?????? ?? ???????? ?????????? ???? ???????? ???? ???????????????? ????????????
            ???????? ??????????.
          </div>
          <div className={styles.modalButtons}>
            <button
              // disabled={findLoading}
              className={styles.modalAccept}
              onClick={handleSetRegion}
            >
              ??????????
            </button>
            <button
              // disabled={findLoading}
              className={styles.modalReject}
              onClick={handleCloseChooseRegionModalModal}
            >
              ????????????
            </button>
          </div>
        </div>
      </Modal>
      <div className={styles.chooseRegion}>
        <div className={styles.chooseRegionTitle}>
          ?????????? ?????????? ???? ???????? ?????? ???????? ??????????
        </div>
        <div className={styles.regions}>
          <div
            className={styles.region}
            onClick={() => {
              handleChooseRegionModalOpen();
              setSelectedRegion("web");
            }}
          >
            <LaptopChromebookIcon className={styles.regionIcon} />
            ????????????????? ???? ?????? ???? ???????? ??????.
          </div>
          <div
            className={styles.region}
            onClick={() => {
              handleChooseRegionModalOpen();
              setSelectedRegion("idea");
            }}
          >
            <TipsAndUpdatesIcon className={styles.regionIcon} />
            ????????????????? ???? ?????? ???????? ???????? ??????.
          </div>
        </div>
        <a
          className={styles.regionDifference}
          target="_blank"
          href="https://www.instagram.com/p/Cg4kl1dj55d/"
          rel="noreferrer"
        >
          ?????????? ?????? ???? ?? ???????? ??????????
        </a>
      </div>
    </>
  );
}

function NoTeam({ setTeamState, setContext }) {
  const [findTeamModalOpen, setFindTeamModalOpen] = useState(false);
  const handleOpenFindTeamModal = () => setFindTeamModalOpen(true);
  const handleCloseFindTeamModal = () => setFindTeamModalOpen(false);
  const [findLoading, setFindLoading] = useState(false);
  const [alreadyWantFindTeammate, setAlreadyWantFindTeammate] = useState(false);

  useEffect(() => {
    getRequestRandomTeammate()
      .then((res) => res.data)
      .then((data) => {
        setAlreadyWantFindTeammate(data.is_active);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const handleFindRandomTeammate = () => {
    setFindLoading(true);
    requestRandomTeammate()
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "?????????????? ?????? ???? ???????????? ?????? ????.",
            variant: "success",
          },
        }));
      })
      .catch((err) => {
        console.log(err);
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message:
              err?.response?.data?.message_fa || "?????????? ???? ???????????? ???? ???????? ??????.",
            variant: "error",
          },
        }));
      })
      .finally(() => {
        setFindLoading(false);
        handleCloseFindTeamModal();
      });
  };

  const handleDeleteFindTeammate = () => {
    deleteRequestRandomTeammate()
      .then((res) => res.data)
      .then((data) => {
        setAlreadyWantFindTeammate(false);
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "?????????????? ?????? ???? ???????????? ?????? ????.",
            variant: "success",
          },
        }));
      })
      .catch((err) => {
        console.log(err);
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message:
              err?.response?.data?.message_fa || "?????????? ???? ???????????? ???? ???????? ??????.",
            variant: "error",
          },
        }));
      });
  };
  return (
    <>
      <Modal open={findTeamModalOpen} onClose={handleCloseFindTeamModal}>
        <div className={styles.modal}>
          <div className={styles.modalTitle}>
            ???? ?????????? ?????? ???????????? ?????? ?????? ???? ?????????? ?????????? ???? ???? ?????????? ???????????????
            ???????????? ?????????? ???????? ????????????? ?? ?????? ???? ?????????? ???????????? ???????? ???????? ?????????????? ??????
            ?????? ???? ???????? ?????????? ???????????? ?????????????.
          </div>
          <div className={styles.modalButtons}>
            <button
              disabled={findLoading}
              className={styles.modalAccept}
              onClick={handleFindRandomTeammate}
            >
              ??????????
            </button>
            <button
              disabled={findLoading}
              className={styles.modalReject}
              onClick={handleCloseFindTeamModal}
            >
              ????????????
            </button>
          </div>
        </div>
      </Modal>
      <div className={styles.noTeam}>
        <div>???????????? ???????????? ???????? ?? ?????? ?????????? ??????.</div>
        <div className={styles.noTeamLeft}>
          <div className={styles.seperator}></div>
          <button
            onClick={() => setTeamState("is-creating")}
            className={styles.newTeamBtn}
            disabled={alreadyWantFindTeammate}
          >
            ?????????? ?????? ????????
          </button>
        </div>
      </div>
      <div className={styles.noTeam}>
        <div className={styles.noTeamDescription}>
          ????????????????? ???????????? ???????? ?? ?????????? ??????????????? ???????????????.
        </div>
        <div className={styles.noTeamLeft}>
          <div className={styles.seperator}></div>
          <button
            onClick={handleOpenFindTeamModal}
            className={styles.newTeamBtn}
            disabled={alreadyWantFindTeammate}
          >
            ?????????? ??????????????? ??????????
          </button>
        </div>
      </div>
      {alreadyWantFindTeammate && (
        <div className={styles.alreadyWantFindTeammate}>
          ?????? ???????? ?????????????? ?????????? ??????????????? ?????????? ???? ?????? ?????????????????.
          <button
            className={styles.alreadyWantFindTeammateCancel}
            onClick={handleDeleteFindTeammate}
          >
            ?????? ??????????????
          </button>
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
  setRefreshPage,
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
          message: "?????? ?????? ??????????????????? ???????? ????????.",
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
          message: "???????? ???????? ???????????????????? ???????????? ???????? ????????.",
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
            message: "?????? ???? ???????????? ?????????? ????.",
            variant: "success",
          },
        }));
        setBaseTeamImage(teamImage);
        setBaseTeamName(teamName);
        setBaseTeamGithub(githubRepo);
        setBaseTeamId(data.id);
        setBaseTeamMembers(data.members);
        setRefreshPage((old) => !old);
      })
      .catch((error) => {
        const status = error.response?.status;
        if (status === 400) {
          setContext((old) => ({
            ...old,
            snackbar: {
              open: true,
              message:
                error?.response?.data?.message_fa ||
                "?????? ?????? ???????? ???????????? ?????? ??????.",
              variant: "error",
            },
          }));
          return;
        }
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "?????????? ???? ???????? ?????? ???? ???????? ??????.",
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
          placeholder="?????? ???????? *"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="???????? ???????????????????? ????????????"
          value={githubRepo}
          onChange={(e) => setGithubRepo(e.target.value)}
        />
        <div className={styles.githubDescription}>
          ???? ???????????????????? ???????????? ???????? ?? ?????????? clone ???? ?????????? ?? ???????? https ???? ????????
          ????????.
        </div>
      </div>
      <button onClick={handleCreateTeam} className={styles.createTeamBtn}>
        ???????? ??????
      </button>
      <button
        className={styles.returnBtn}
        onClick={() => setTeamState("no-team")}
      >
        ????????????
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
  isTeamCreator,
  currentEmail,
  setRefreshPage,
  teamCreator,
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
            message: "?????? ???? ???????????? ???? ?????? ???????? ????????.",
            variant: "success",
          },
        }));
        setRefreshPage((old) => !old);
      })
      .catch((err) => {
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message:
              err?.response?.data?.message_fa ||
              "?????????? ???? ?????? ?????? ???? ???????? ??????.",
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
            ?????? ???? ???????? ?????? ???? ?????? ?????????????? ????????????
            <br />
            ???????? ???????????? ???? ?????????? ?????? ?????? ??????.
          </div>
          <div className={styles.modalButtons}>
            <button
              disabled={deleteLoading}
              className={styles.modalAccept}
              onClick={handleDeleteTeam}
            >
              ??????
            </button>
            <button
              disabled={deleteLoading}
              className={styles.modalReject}
              onClick={handleClose}
            >
              ??????
            </button>
          </div>
        </div>
      </Modal>
      <div className={styles.editBtnWrapper}>
        {isTeamCreator && (
          <button
            className={styles.editBtn}
            onClick={() => setTeamState("is-editing")}
          >
            <BorderColorOutlinedIcon />
            ????????????
          </button>
        )}
        {isTeamCreator && (
          <button onClick={handleOpen} className={styles.deleteTeamBtn}>
            ?????? ??????
          </button>
        )}
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
          <div className={styles.teamNameTitle}>?????? ??????</div>
          <div className={styles.teamName}>{teamName}</div>
        </div>
        <div className={styles.membersWrapper}>
          <div className={styles.membersTitle}>????????</div>
          <div className={styles.members}>
            {teamMembers.map((member, index) => (
              <div key={member.id} className={styles.member}>
                <div className={styles.memberImage}>
                  <Image
                    src={member.profile_image || noTeamImg}
                    alt="member image"
                    width={32}
                    height={32}
                  />
                </div>
                <div className={styles.memberName}>{`${member.first_name} ${
                  member.last_name
                } ${member.id === teamCreator.id ? "(????????????)" : ""}`}</div>
                <Tooltip placement="top" title="???????? ???? ??????">
                  <div className={styles.exitMember} onClick={handleOpen}>
                    {member.email === currentEmail && (
                      <LogoutIcon fontSize="large" />
                    )}
                  </div>
                </Tooltip>
              </div>
            ))}
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
          message: "?????? ?????? ??????????????????? ???????? ????????.",
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
          message: "???????? ???????? ???????????????????? ???????????? ???????? ????????.",
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
            message: "?????????????? ?????? ???? ???????????? ?????????? ????????.",
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
              message:
                error?.response?.data?.message_fa ||
                "?????? ?????? ???????? ???????????? ?????? ??????.",
              variant: "error",
            },
          }));
          return;
        }
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "?????????? ???? ???????? ?????? ???? ???????? ??????.",
            variant: "error",
          },
        }));
        setContext((old) => ({
          ...old,
          snackbar: {
            open: true,
            message: "?????????? ???? ???????????? ?????????????? ?????? ???? ???????? ??????.",
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
          placeholder="?????? ????????"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="???????? ???????????????????? ????????????"
          value={githubRepo}
          onChange={(e) => setGithubRepo(e.target.value)}
        />
        <div className={styles.githubDescription}>
          ???? ???????????????????? ???????????? ???????? ?? ?????????? clone ???? ?????????? ?? ???????? https ???? ????????
          ????????.
        </div>
      </div>
      <button
        disabled={loading}
        onClick={handleUpdateTeam}
        className={styles.createTeamBtn}
      >
        ???????????? ??????
      </button>
      <button
        className={styles.returnBtn}
        onClick={() => setTeamState("has-team")}
      >
        ????????????
      </button>
    </div>
  );
}

export default CreateTeam;
