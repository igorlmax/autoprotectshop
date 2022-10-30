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
  setDefaultLanguage,
  setTranslations,
  useTranslation,
} from "react-multi-lang";
import de from "../assets/transaltion/de.json";
import en from "../assets/transaltion/en.json";
import LanguageIcon from "@mui/icons-material/Language";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";

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
        <Container maxWidth={'xl'}>
        <Toolbar>
          <IconButton size={"large"} edge="start" aria-label="menu">
            <ElectricCarIcon color={"primary"} />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {t("appName")}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="primary"
              style={{ borderRadius: 50 }}
            >
              {t("navigation.getQuote")}
            </Button>
            <Button color="inherit">{t("navigation.reportDamage")}</Button>
            <Button color="inherit">{t("navigation.Help")}</Button>
            <Button color="inherit">{t("navigation.contact")}</Button>
            <Button color="inherit">{t("navigation.aboutUs")}</Button>
            <Button
              variant={"contained"}
              startIcon={<LocalPhoneIcon />}
              style={{ borderRadius: 50 }}
            >
              {t("navigation.getQuote")}
            </Button>

            <Button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <LanguageIcon />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                sx={{ width: 120 }}
                onClick={() => setTranslations({ de })}
              >
                DE
              </MenuItem>
              <MenuItem onClick={() => setTranslations({ en })}>EN</MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navigation;
