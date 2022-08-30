import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#ccb0a1",
      contrastText: "#303030",
    },
    error: {
      main: "#ff0000",
    },
    info: {
      main: "#a8573c",
    },
    secondary: {
      main: "#a4482d",
    },
  },
  typography: {
    fontFamily: ["unset"].join(","),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
          borderRadius: "4vh",
          height: "6vh",
          width: "20vw",
          fontSize: "3vh",
          fontFamily: "unset",
          "&:hover": {
            backgroundColor: "#ccb0a1",
          },
          "&:disabled": {
            backgroundColor: "#757575",
            color: "#ededed",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "24vw",
          "& div": {
            width: "100%",
          },
          "&.settings-page-field fieldset": {
            border: "none",
          },
          "&.settings-page-field input::placeholder": {
            color: "#ccb0a1",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "4vh",
          height: "6vh",
          width: "20vw",
          fontSize: "2.5vh",
          backgroundColor: "white",
          "& fieldset": {
            borderColor: "#ccb0a1 !important",
            borderWidth: 2,
          },
          "& input::placeholder": {
            color: "#484848",
            opacity: 1,
          },
          "& .settings-page-input": {
            boxSizing: "border-box",
            minWidth: "24vw",
            backgroundColor: "#1d1b26",
            height: 44,
            borderRadius: "3vh",
            color: "#bf846b",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "3vh",
          height: "3vh",
        },
      },
    },
  },
});

theme.components.MuiButton.styleOverrides.root[theme.breakpoints.down("sm")] = {
  minWidth: "64vw",
};
theme.components.MuiOutlinedInput.styleOverrides.root[
  theme.breakpoints.down("sm")
] = {
  minWidth: "64vw",
};

export { theme };
