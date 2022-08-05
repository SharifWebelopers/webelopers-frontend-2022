import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#002C45",
      contrastText: "#fff",
    },
    error: {
      main: "#ff0000",
    },
  },
  typography: {
    fontFamily: ["unset"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          height: 64,
          width: 390,
          fontSize: "2rem",
          fontFamily: "unset",
          "&:hover": {
            backgroundColor: "#002C45",
          },
          "&:disabled": {
            backgroundColor: "#757575",
            color: "#040310",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          height: 64,
          width: 390,
          fontSize: "1.5rem",
          padding: 12,
          "& fieldset": {
            borderColor: "#002C45 !important",
            borderWidth: 2,
          },
          "& input::placeholder": {
            color: "#002C45",
            opacity: 1,
          },
          "&.Mui-focused input::placeholder": {
            color: "#757575",
            opacity: 0.7,
          },
        },
      },
    },
  },
});
