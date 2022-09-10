import React, { useContext, useEffect, useState } from "react";
import Scores from "./Scores";
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
import Context from "../../context/context";
import DashboardContext from "../../context/dashboard-context";

import styles from "./CodeReview.module.scss";

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
    <SwipeableViews sx={{ width:"100%" }} axis="x-reverse" index={tab}>
      {children}
    </SwipeableViews>
  ) : (
    <>{children}</>
  );
};

const CodeReviewContainer = () => {
  const [context, setContext] = useContext(Context);

  const [_, setDashboardContext] = useContext(DashboardContext);

  const [tab, setTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [accordion, setAccordion] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 600);
  }, []);

  const tabLabel = ["Front-end", "Back-end", "DevOps"];

  return (
    <div className={styles.dashboardChildContainer}>
         <div className={styles.tabsContainer}>
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

          <div className={styles.intro}>
              بررسی کد
          </div>

          <div className={styles.panel}>
              <p className={styles.historyIntro}>
                تاریخچه:
              </p>
              <PanelsWrapper tab={tab} isDesktop={isDesktop}>
                <TabPanel value={tab} index={0}>
                  <Scores />
                </TabPanel>
                <TabPanel value={tab} index={1}>
                  <Scores />
                </TabPanel>
                <TabPanel value={tab} index={2}>
                  <Scores />
                </TabPanel>
              </PanelsWrapper>
          </div>

        </div>
    </div>
  );
};

export default CodeReviewContainer;
