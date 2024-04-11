"use client";
import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Components {
    MainMenuFrameComponent: {};
    GameButtonComponent: {};
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF5733",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: blue[500],
    },
    // tonalOffset: { // mitoone nabashe va az default estefade kone 0.2
    //   light: 0.1,
    //   dark: 0.9,
    // },
  },
  components: {
    MainMenuFrameComponent: {
      styleOverrides: {
        root: {
          width: "250px",
          height: "400px",
          border: `12px ridge #333`,
          borderRadius: "36px",
        },
      },
    },
    GameButtonComponent: {
      styleOverrides: {
        root: {
          width: 200,
          height: 40,
          borderTop: `1px solid #110000`,
        },
      },
    },
  },
});

export default theme;
