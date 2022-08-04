import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#002C45",
      contrastText: "#040310",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          height: 64,
          width: 390,
          fontSize: "2rem",
          backgroundColor: "#757575",
          color: "#040310",
          fontFamily: "unset",
          "&:hover": {
            backgroundColor: "#013654",
            color: "#fff",
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
        },
      },
    },
  },
});
