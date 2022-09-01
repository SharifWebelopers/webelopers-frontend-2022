// @ts-nocheck
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gray: Palette["primary"];
  }
  interface PaletteOptions {
    gray: PaletteOptions["primary"];
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    gray;
  }
}

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
    gray: {
      main: "#757575",
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
          "&.save-button": {
            backgroundColor: "#9e8379",
            color: "#ededed",
            minWidth: "25vw",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#fff !important",
          borderRadius: "9vh",
          fontSize: "3vh",
          marginBottom: 12,
          fontWeight: 700,
          "&.Mui-selected": {
            backgroundColor: "#404040",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "24vw",
          "& > div": {
            width: "100%",
          },
          "&.settings-page-field fieldset": {
            border: "none",
          },
          "&.settings-page-field input::placeholder": {
            color: "#ccb0a1",
          },
          "&.change-password-field input::placeholder": {
            color: "#ccb0a1",
          },
          "&.change-password-field > div": {
            backgroundColor: "#1d1b26",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          width: "24vw",
          "& div": {
            width: "100%",
            paddingRight: "14px !important",
          },
          "&.settings-page-field fieldset": {
            border: "none",
          },
          "& svg": {
            color: "#d9d9d9",
            right: "unset",
            left: 7,
          },
          "&.placeholder > div": {
            color: "#ccb0a1 !important",
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
          lineHeight: "2vh",
          "& > div:focus": {
            borderRadius: "4vh !important",
          },
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
            height: "44px !important",
            borderRadius: "3vh",
            color: "#bf846b",
          },
          "& .change-password-input": {
            backgroundColor: "#1d1b26",
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
