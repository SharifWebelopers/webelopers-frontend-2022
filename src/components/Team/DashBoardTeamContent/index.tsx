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

  return (
    <>
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
                  <Tab style={{ transition: "all 0.7s" }} label={tabLabel[0]} />
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
            <CreateTeam isTeamCreator={is_team_creator} />
          </TabPanel>
          {is_team_creator && (
            <TabPanel value={tab} index={1}>
              <FindTeammate isDesktop={isDesktop} />
            </TabPanel>
          )}
          {needs_team && (
            <TabPanel value={tab} index={2}>
              <TeamInvitations />
            </TabPanel>
          )}
        </PanelsWrapper>
      </div>
    </>
  );
};

export default SettingsContainer;
