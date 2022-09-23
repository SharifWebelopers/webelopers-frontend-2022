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
import Context from "../../context/context";
import DashboardContext from "../../context/dashboard-context";
import VideoTutorialsLayout from "./VideoTutorialsLayout";
import DocumentTutorialsLayout from "./DocumentTutorialsLayout";

import { getDocumentTutorials, getVideoTutorials } from "../../actions/dashboard";

import styles from "./Tutorials.module.scss";
import axios from "axios";
import { CircularProgress } from "@mui/material";

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

const TutorialsContainer = () => {
  const [context, setContext] = useContext(Context);

  const [_, setDashboardContext] = useContext(DashboardContext);

  const [tab, setTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [accordion, setAccordion] = useState(false);
  const [loading, setLoading] = useState(true);

  const [videos, setVideos] = useState();
  const [documents, setDocuments] = useState();

  useEffect(() => {
    setIsDesktop(window.innerWidth > 600);

    axios.all([getDocumentTutorials(), getVideoTutorials()]).then(axios.spread(function(res1, res2) {
        setDocuments(res1.data);
        setVideos(res2.data);
    }))
    .catch(err => {
      console.log("errorL "+err);
    })
    .finally(()=>{
      setLoading(false);
    })


  }, []);

  const tabLabel = ["فایل‌ها", "ویدیوها"];

  const setRefreshInfo = (refreshInfo: boolean) => {
    setDashboardContext({
      ...context,
      refreshInfo,
    });
  };

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

          {[0, 1]
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
          {loading ? (<CircularProgress sx={{ textAlign: "center" }} />) : (<DocumentTutorialsLayout documents={documents} />)}
        </TabPanel>

        <TabPanel value={tab} index={1}>
          {loading ? (<CircularProgress sx={{ textAlign: "center" }} />) : (<VideoTutorialsLayout videos={videos} />)}
        </TabPanel>

      </PanelsWrapper>
    </div>
  );
};

export default TutorialsContainer;
