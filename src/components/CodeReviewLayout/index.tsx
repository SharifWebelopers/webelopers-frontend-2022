import * as React from 'react';
import styles from "./CodeReviewLayout.module.scss";
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from "@mui/system";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}
  
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const CodeReviewLayout = (props: TabPanelProps) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const customTheme = createTheme({ 
      components: {
        Tab: {
          styleOverrides: {
            root: {
              backgroundColor: "yellow",
              "&.Mui-selected": {
                backgroundColor: "green",
              }
            }
          }
        }
      }
    });

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    
    return (
      <div className={styles.codeReviewLayout}>
        <ThemeProvider theme={theme}>
          <Box className={styles.tabsContainer}>
            <AppBar position="static" className={styles.tabsContainer}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="full width tabs example"
                TabIndicatorProps={{
                  style: {
                      display: "none",
                  },
                }}
              >
                <Tab label="Front-end" {...a11yProps(0)} classes={{root: 'classes-state-root', selected: 'selected', }} />
                <Tab label="Back-end" {...a11yProps(1)} classes={{root: 'classes-state-root', selected: 'selected', }} />
                <Tab label="DevOps" {...a11yProps(2)} classes={{root: 'classes-state-root', selected: 'selected', }} />
              </Tabs>
            </AppBar>

            <div>
              بررسی کد
            </div>

            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
              </TabPanel>
            </SwipeableViews>
          </Box>
        </ThemeProvider>
      </div>
      );
}

export default CodeReviewLayout;