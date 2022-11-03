import React from "react";
import { createTheme } from "@mui/material";

export const ThemeConfig = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Rubik",
      textTransform: "none",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 72,
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application
      },
    },
  },
  palette: {
    primary: {
      main: "#7e57c2",
      light: "#f8f6fc",
      dark: "#363145",
    },
    secondary: {
      main: "#ffe24f",
      light: "",
      dark: "",
    },
  },
});
