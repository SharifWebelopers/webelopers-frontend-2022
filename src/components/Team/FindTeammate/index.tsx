import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import SadIcon from "./icons/SadIcon";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AcceptedIcon from "./icons/AcceptedIcon";
import RejectedIcon from "./icons/RejectedIcon";
import PendingIcon from "./icons/PendingIcon";
import SearchResult from "./Search/SearchResult";
import DeleteIcon from "./icons/DeleteIcon";
import Context from "../../../context/context";
import { getTeamRequests, getSentInvitations } from "../../../actions/team";

import styles from "./FindTeammate.module.scss";

const FindTeammate = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [loneWolves, setLoneWolves] = useState<any[]>([]);

  const [context, setContext] = useContext(Context);

  useEffect(() => {
    getTeamRequests()
      .then((res) => {
        setLoneWolves(
          res.data.map((item: any) => ({
            ...item,
            username: item.first_name + " " + item.last_name,
          }))
        );
      })
      .catch(() => {
        setContext({
          ...context,
          snackbar: {
            open: true,
            message: "دریافت اطلاعات با خطا مواجه شد، لطفا دوباره تلاش کنید!",
            variant: "error",
          },
        });
      });
    getSentInvitations().then((res) => {
      setRequests(
        res.data.map((item: any) => ({
          id: item.id,
          name: item.receiver.first_name + " " + item.receiver.last_name,
          status:
            item.state === 0
              ? "pending"
              : item.state === 1
              ? "accepted"
              : "rejected",
        }))
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      <Search />
      <div className={styles["requests-container"]}>
        <Accordion className={styles["find-teammate-box"]}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#fff", width: 36, height: 36 }} />
            }
          >
            درخواست‌های شما
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {requests.length ? (
                <>
                  <div
                    className={styles["request-row"]}
                    style={{
                      fontSize: "1.25rem",
                      color: "#ccb0a1",
                      width: "100%",
                    }}
                  >
                    <div className={styles["request-index"]}></div>
                    <Divider
                      orientation="vertical"
                      sx={{
                        borderColor: "unset",
                      }}
                    />
                    <div>درخواست‌ها</div>
                    <Divider
                      orientation="vertical"
                      sx={{
                        borderColor: "unset",
                      }}
                    />
                    <div
                      className={styles.status}
                      style={{ justifyContent: "center" }}
                    >
                      وضعیت
                    </div>
                    <Divider
                      orientation="vertical"
                      sx={{
                        borderColor: "unset",
                      }}
                    />
                    <div></div>
                  </div>
                  <div className={styles["request-table"]}>
                    {requests.map((item, index) => {
                      return (
                        <div key={item.id} className={styles["request-row"]}>
                          <div className={styles["request-index"]}>
                            {(index + 1).toLocaleString("fa")}
                          </div>
                          <Divider
                            orientation="vertical"
                            sx={{
                              color: "#a3a2a2",
                              height: "30px",
                              width: "2px",
                              borderColor: "unset",
                            }}
                          />
                          <div>شما به {item.name} درخواست داده‌اید.</div>
                          <Divider
                            orientation="vertical"
                            sx={{
                              color: "#a3a2a2",
                              height: "30px",
                              width: "2px",
                              borderColor: "unset",
                            }}
                          />
                          <div
                            className={`${styles.status} ${
                              styles[item.status]
                            }`}
                          >
                            {item.status === "pending" ? (
                              <PendingIcon />
                            ) : item.status === "accepted" ? (
                              <AcceptedIcon />
                            ) : (
                              <RejectedIcon />
                            )}
                            <div>
                              {item.status === "pending"
                                ? "در انتظار دیده شدن..."
                                : item.status === "accepted"
                                ? "درخواست شما پذیرفته شد."
                                : "درخواست شما رد شد."}
                            </div>
                          </div>
                          <Divider
                            orientation="vertical"
                            sx={{
                              color: "#a3a2a2",
                              height: "30px",
                              width: "2px",
                              borderColor: "unset",
                            }}
                          />
                          <IconButton
                            size="small"
                            sx={{
                              "& svg": {
                                width: 25,
                              },
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div>شما تا کنون درخواستی ثبت نکرده‌اید.</div>
                  <br />
                  <SadIcon />
                </>
              )}
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className={styles["find-teammate-box"]}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#fff", width: 36, height: 36 }} />
            }
          >
            افرادی که نیاز به تیم دارند:
          </AccordionSummary>
          <AccordionDetails style={{ width: "100%" }}>
            <div>
              {loneWolves.length ? (
                <>
                  <div className={styles["info-container"]}>
                    {loneWolves.map((item) => {
                      return (
                        <React.Fragment key={item.id}>
                          <SearchResult
                            className={styles["lone-wolf"]}
                            imageSrc={item.profile_image}
                            username={item.username}
                            email={item.email}
                          />
                          <Divider
                            sx={{
                              color: "#a3a2a2",
                              width: "90%",
                              borderColor: "unset",
                            }}
                          />
                        </React.Fragment>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={styles["wolf-container"]}
                    style={{ justifyContent: "center" }}
                  >
                    هیچ کس اینجا نیست!
                  </div>
                </>
              )}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FindTeammate;
