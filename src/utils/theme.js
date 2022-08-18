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
          fontSize: "2rem",
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "4vh",
          height: "6vh",
          width: "20vw",
          fontSize: "1.5rem",
          backgroundColor: "white",
          "& fieldset": {
            borderColor: "#ccb0a1 !important",
            borderWidth: 2,
          },
          "& input::placeholder": {
            color: "#484848",
            opacity: 1,
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
