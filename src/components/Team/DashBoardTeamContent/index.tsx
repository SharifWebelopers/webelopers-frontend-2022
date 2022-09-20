import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";

import styles from "./DashBoardTeamContent.module.scss";
import TeamInvitations from "../TeamInvitaions";
import CreateTeam from "../CreateTeam";
import FindTeammate from "../FindTeammate";
import Context from "../../../context/context";
import Link from "next/link";
import { getUserInfo } from "../../../actions/dashboard";

interface TabPanelProps {
  children: any;
  value: number;
  index: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      style={{
        minWidth: "100%",
        maxWidth: "100%",
        direction: "rtl",
      }}
      hidden={value !== index}
    >
      {children}
    </div>
  );
};

const PanelsWrapper = ({
  isDesktop,
  children,
  tab,
}: {
  isDesktop: boolean;
  children: any;
  tab: number;
}) => {
  return <>{children}</>;
};

const SettingsContainer = () => {
  const [tab, setTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [accordion, setAccordion] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 600);
  }, []);

  const tabLabel = ["تشکیل تیم", "یافتن هم‌تیمی", "صندوق پیام"];
  const [context, setContext] = useContext(Context);
  const is_team_creator = context.profile.is_team_creator;
  const needs_team = context.profile.needs_team;
  const contest_type = context.profile.contest_type;
  const [refreshPage, setRefreshPage] = useState(false);

  useEffect(() => {
    getUserInfo().then((res) => {
      setContext({
        ...context,
        profile: {
          profile_image: res.data.profile_image || "",
          first_name: res.data.first_name || "",
          last_name: res.data.last_name || "",
          phone_number: res.data.phone_number || "",
          email: res.data.email || "",
          province: res.data.province,
          university_degree: res.data.university_degree,
          university_start_date: res.data.university_start_date || "",
          field_study: res.data.field_study || "",
          university: res.data.university || "",
          linkedin_link: res.data.linkedin_link || "",
          github_link: res.data.github_link || "",
          django_experience: res.data.django_experience,
          react_experience: res.data.react_experience,
          devops_experience: res.data.devops_experience,
          can_sponsor_see_profile: res.data.can_sponsor_see_profile,
          resume: res.data.resume || "",
          contest_type: res.data.contest_type || "",
          needs_team: res.data.needs_team || "",
          is_team_creator: res.data.is_team_creator || "",
        },
      });
    });
  }, [refreshPage]);

  const isLoading = context.profile.phone_number === undefined;

  return (
    <>
      {!context.profile.phone_number && !isLoading && (
        <div className={styles.completeInfo}>
          برای تشکیل تیم ابتدا به بخش تنظیمات رفته و اطلاعات خود را تکمیل کنید.{" "}
          <Link href={"/dashboard/settings"}>
            <a className={styles.completeInfoLink}>تکمیل اطلاعات</a>
          </Link>
        </div>
      )}
      {context.profile.phone_number && !isLoading && (
        <div className={styles.container}>
          {contest_type && (
            <>
              {isDesktop ? (
                <Box className={styles["tab-panel"]}>
                  <Tabs
                    value={tab}
                    onChange={(_, newValue) => {
                      setTab(newValue);
                    }}
                    TabIndicatorProps={{ style: { display: "none" } }}
                  >
                    <Tab
                      style={{ transition: "all 0.7s" }}
                      label={tabLabel[0]}
                    />
                    <Tab
                      style={{
                        transition: "all 0.7s",
                        display: is_team_creator ? "" : "none",
                      }}
                      label={tabLabel[1]}
                    />

                    <Tab
                      style={{
                        transition: "all 0.7s",
                        display: !is_team_creator ? "" : "none",
                      }}
                      label={tabLabel[2]}
                    />
                  </Tabs>
                </Box>
              ) : (
                <Accordion
                  expanded={accordion}
                  onChange={(_, newValue) => {
                    setAccordion(newValue);
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreOutlined sx={{ color: "#fff" }} />}
                  >
                    {tabLabel[tab]}
                  </AccordionSummary>

                  {[0, 1, 2]
                    .filter(
                      (number) =>
                        number !== tab &&
                        ((number === 1 && is_team_creator) ||
                          (number === 2 && !is_team_creator) ||
                          number === 0)
                    )
                    .map((number) => (
                      <>
                        <AccordionDetails key={number}>
                          <Button
                            className="settings-accordion"
                            onClick={() => {
                              setAccordion(false);
                              setTab(number);
                            }}
                          >
                            {tabLabel[number]}
                          </Button>
                        </AccordionDetails>
                      </>
                    ))}
                </Accordion>
              )}
            </>
          )}

          <PanelsWrapper tab={tab} isDesktop={isDesktop}>
            <TabPanel value={tab} index={0}>
              <CreateTeam
                setRefreshPage={setRefreshPage}
                tabState={tab}
                isTeamCreator={is_team_creator}
              />
            </TabPanel>
            {is_team_creator && (
              <TabPanel value={tab} index={1}>
                <FindTeammate isDesktop={isDesktop} />
              </TabPanel>
            )}
            {!is_team_creator && (
              <TabPanel value={tab} index={2}>
                <TeamInvitations tabState={tab} />
              </TabPanel>
            )}
          </PanelsWrapper>
        </div>
      )}
    </>
  );
};

export default SettingsContainer;
