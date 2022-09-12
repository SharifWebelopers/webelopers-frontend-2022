import React, { useEffect, useState } from "react";
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

interface TabPanelProps {
  children: any;
  value: number;
  index: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      style={{
        minHeight: "100%",
        minWidth: "100%",
        height: "fit-content",
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
  return isDesktop ? (
    <SwipeableViews axis="x-reverse" index={tab}>
      {children}
    </SwipeableViews>
  ) : (
    <>{children}</>
  );
};

const SettingsContainer = () => {
  const [tab, setTab] = useState(2);
  const [isDesktop, setIsDesktop] = useState(false);
  const [accordion, setAccordion] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 600);
  }, []);

  const tabLabel = ["تشکیل تیم", "یافتن هم‌تیمی", "صندوق پیام"];

  return (
    <div className={styles.container}>
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
            <Tab style={{ transition: "all 0.7s" }} label={tabLabel[1]} />
            <Tab style={{ transition: "all 0.7s" }} label={tabLabel[2]} />
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
            .filter((number) => number !== tab)
            .map((number) => (
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
            ))}
        </Accordion>
      )}

      <PanelsWrapper tab={tab} isDesktop={isDesktop}>
        <TabPanel value={tab} index={0}>
          <div>0</div>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <div>1</div>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <TeamInvitations />
        </TabPanel>
      </PanelsWrapper>
    </div>
  );
};

export default SettingsContainer;
