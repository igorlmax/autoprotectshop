import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import ShieldIcon from "@mui/icons-material/Shield";
import {
  setDefaultLanguage,
  setTranslations,
  useTranslation,
} from "react-multi-lang";
import de from "../assets/transaltion/de.json";
import en from "../assets/transaltion/en.json";

setTranslations({ de, en });
setDefaultLanguage("en");

const Navigation = () => {
  const theme = useTheme();
  const t = useTranslation();

  return (
    <>
      <AppBar position={"fixed"} color="transparent">
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "70%",
            mx: "auto",
          }}
        >
          <IconButton size={"large"} edge="start" aria-label="menu">
            <ShieldIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Photos
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Elements</Button>
            <Button color="inherit">About us</Button>
            <Button color="inherit">Contact</Button>
            <button onClick={() => setTranslations({ de })}>DE</button>
            <button onClick={() => setTranslations({ en })}>EN</button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
