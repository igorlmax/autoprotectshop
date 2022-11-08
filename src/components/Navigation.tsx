import React from "react";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import {
  setDefaultLanguage, setLanguage,
  setTranslations,
  useTranslation,
} from 'react-multi-lang';
import de from "../assets/transaltion/de.json";
import en from "../assets/transaltion/en.json";
import LanguageIcon from "@mui/icons-material/Language";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import { Link } from "react-router-dom";
import lock from '../assets/images/lock4.png'

setTranslations({ de, en });
setDefaultLanguage("en");

const Navigation = () => {
  const theme = useTheme();
  const t = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position={"relative"} color="transparent">
        <Container maxWidth={"xl"}>
          <Toolbar>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <IconButton size={"large"} edge="start" aria-label="menu">
                <img src={lock} style={{maxWidth: 48}}/>
                {/*<ElectricCarIcon color={"primary"} />*/}
              </IconButton>
            </Link>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              <Link to={"/"} style={{ textDecoration: "none" }}>
                {t("appName")}
              </Link>
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="primary"
                style={{ borderRadius: 50 }}
              >
                <Link to={"/quote"} style={{ textDecoration: "none" }}>
                  {t("navigation.getQuote")}
                </Link>
              </Button>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Button color="inherit">{t("navigation.reportDamage")}</Button>
              </Link>
              <Button color="inherit">{t("navigation.Pricing")}</Button>
              <Button color="inherit" onClick={() =>
                  // @ts-ignore
                  document.getElementById('middle').scrollIntoView()
              }>{t("navigation.services")}</Button>
              <Button color="inherit">{t("navigation.contact")}</Button>
              <Button
                variant={"contained"}
                startIcon={<LocalPhoneIcon />}
                style={{ borderRadius: 50 }}
              >
                {t("navigation.Hotline")}
              </Button>

              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <LanguageIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  sx={{ width: 120 }}
                  onClick={() => {
                    setLanguage("de");
                    handleClose();
                  }}
                >
                  DE
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setLanguage("en");
                    handleClose();
                  }}
                >
                  EN
                </MenuItem>
              </Menu>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navigation;
