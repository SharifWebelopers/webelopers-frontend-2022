import React, { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import Fields from "./Fields";
import UploadCV from "./UploadCV";
import ChangePassword from "./ChangePassword";
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

import styles from "./Settings.module.scss";

interface TabPanelProps {
  children: any;
  value: number;
  index: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      style={{ minHeight: "100%", minWidth: "100%", height: "fit-content" }}
      hidden={value !== index}
    >
      {children}
    </div>
  );
};

const SettingsContainer = () => {
  const [tab, setTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [accordion, setAccordion] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 600);
  }, []);

  const tabLabel = ["اطلاعات کاربری", "ارسال رزومه", "تغییر رمز عبور"];

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
            <Tab label={tabLabel[0]} />
            <Tab label={tabLabel[1]} />
            <Tab label={tabLabel[2]} />
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
      <TabPanel value={tab} index={0}>
        <div className={styles["tab-panel-item"]}>
          <ProfilePicture src="data:image/jpeg;base64,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" />
          <Fields />
        </div>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <UploadCV isDesktop={isDesktop} />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <ChangePassword isDesktop={isDesktop} />
      </TabPanel>
    </div>
  );
};

export default SettingsContainer;
