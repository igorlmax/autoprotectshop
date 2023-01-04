import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  setDefaultLanguage,
  setLanguage,
  setTranslations,
  useTranslation,
} from "react-multi-lang";
import { Link, useLocation } from "react-router-dom";
import lock from "../assets/images/lock4.png";
import { Container, Menu, MenuItem } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import de from "../assets/transaltion/de.json";
import en from "../assets/transaltion/en.json";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

setTranslations({ de, en });
setDefaultLanguage("en");

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const t = useTranslation();

  const { pathname } = useLocation();
  console.log("pathname: ", pathname);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <IconButton size={"large"} edge="start" aria-label="menu">
          <img src={lock} style={{ maxWidth: 48 }} />
        </IconButton>
      </Link>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          {t("appName")}
        </Link>
      </Typography>
      <Divider />
      <List>
        <Button color="primary">
          <Link to={"/quote"} style={{ textDecoration: "none" }}>
            {t("navigation.getQuote")}
          </Link>
        </Button>

        <Link to="#services">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={t("navigation.services")} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="#pricing">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={t("navigation.Pricing")} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="login">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={t("navigation.contact")} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="login">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={t("navigation.reportDamage")} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Button
          variant={"contained"}
          startIcon={<LocalPhoneIcon />}
          style={{ borderRadius: 50 }}
        >
          <a href="tel:8665562570"> {t("navigation.Hotline")}</a>
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
        <AppBar component="nav" position="sticky" color="inherit">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
              size={"large"}
            >
              <MenuIcon />
            </IconButton>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <MenuItem sx={{ display: { sm: "none" } }}>
                <Typography fontSize={22}>
                  Auto&#8758;<b>Protect</b>
                </Typography>
              </MenuItem>
            </Link>

            <Link to={"login"} style={{ textDecoration: "none" }}>
              <MenuItem sx={{ display: { sm: "none" } }}>
                <PersonOutlineOutlinedIcon />
              </MenuItem>
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <IconButton size={"large"} edge="start" aria-label="menu">
                  <img src={lock} style={{ maxWidth: 48 }} />
                  <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {t("appName")}
                  </Typography>
                </IconButton>
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ borderRadius: 50 }}
              >
                <Link to={"/quote"} style={{ textDecoration: "none" }}>
                  {t("navigation.getQuote")}
                </Link>
              </Button>

              <Link to="#services">
                <Button
                  color="inherit"
                  onClick={() =>
                    // @ts-ignore
                    document.getElementById("services").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  {t("navigation.services")}
                </Button>
              </Link>

              <Link to="#pricing">
                <Button
                  color="inherit"
                  onClick={() =>
                    // @ts-ignore
                    document.getElementById("pricing").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  {t("navigation.Pricing")}
                </Button>
              </Link>

              <Link to="#footer">
                <Button
                  color="inherit"
                  onClick={() =>
                    // @ts-ignore
                    document.getElementById("footer").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  {t("navigation.contact")}
                </Button>
              </Link>

              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <Button color="inherit">{t("navigation.reportDamage")}</Button>
              </Link>
              <Button
                variant={"contained"}
                startIcon={<LocalPhoneIcon />}
                style={{ borderRadius: 50 }}
              >
                <a href="tel:8665562570"> {t("navigation.Hotline")}</a>
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
            </Box>
          </Toolbar>
        </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
