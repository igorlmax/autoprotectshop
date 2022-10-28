import React from "react";
import { createTheme } from "@mui/material";

export const ThemeConfig = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
  palette: {
    primary: {
      main: "#9c27b0",
      light: "",
      dark: "",
    },
    secondary: {
      main: "#9c27b0",
      light: "",
      dark: "",
    },
  },
});
