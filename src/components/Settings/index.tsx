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
import { getUserInfo } from "../../actions/dashboard";
import SwipeableViews from "react-swipeable-views";

import styles from "./Settings.module.scss";

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

interface StateType {
  profile_image: null | string;
  first_name: null | string;
  last_name: null | string;
  phone_number: null | string;
  email: null | string;
  province: null | string;
  university_degree: null | string;
  university_start_date: null | string;
  field_study: null | string;
  university: null | string;
  linkedin_link: null | string;
  github_link: null | string;
  django_experience: null | string;
  react_experience: null | string;
  devops_experience: null | string;
  share_info: boolean;
  resume: null | string;
}

const SettingsContainer = () => {
  const [refreshInfo, setRefreshInfo] = useState(true);
  const [tab, setTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [accordion, setAccordion] = useState(false);
  const [state, setState] = useState<StateType>({
    profile_image: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    province: null,
    university_degree: null,
    university_start_date: "",
    field_study: "",
    university: "",
    linkedin_link: "",
    github_link: "",
    django_experience: null,
    react_experience: null,
    devops_experience: null,
    share_info: false,
    resume: "",
  });

  useEffect(() => {
    setIsDesktop(window.innerWidth > 600);
  }, []);

  useEffect(() => {
    if (refreshInfo) {
      getUserInfo().then((res) => {
        setState({
          profile_image: res.data.profile_image,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          phone_number: res.data.phone_number,
          email: res.data.email,
          province: res.data.province,
          university_degree: res.data.university_degree,
          university_start_date: res.data.start_date,
          field_study: res.data.field_study,
          university: res.data.university,
          linkedin_link: res.data.linkedin_link,
          github_link: res.data.github_link,
          django_experience: res.data.django_experience,
          react_experience: res.data.react_experience,
          devops_experience: res.data.devops_experience,
          share_info: false,
          resume: res.data.resume,
        });
      });

      setRefreshInfo(false);
    }
  }, [refreshInfo]);

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
          <div className={styles["tab-panel-item"]}>
            <ProfilePicture
              src={state.profile_image}
              setRefreshInfo={setRefreshInfo}
            />
            <Fields state={state} setState={setState} />
          </div>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <UploadCV isDesktop={isDesktop} resume={state.resume} />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <ChangePassword isDesktop={isDesktop} />
        </TabPanel>
      </PanelsWrapper>
    </div>
  );
};

export default SettingsContainer;
