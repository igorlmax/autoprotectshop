import React from "react";
import { createTheme } from "@mui/material";

export const ThemeConfig = createTheme({
  mixins: {
    toolbar: {
      minHeight: 72
    }
  },
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
      main: "#7e57c2",
      light: "",
      dark: "",
    },
    secondary: {
      main: "#ffe24f",
      light: "",
      dark: "",
    },
  },
});
