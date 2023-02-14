import React from "react";
import {
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-multi-lang";
import { SiInstagram } from "react-icons/si";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const t = useTranslation();
  const theme = useTheme();

  const customerService = [
    "Claims Service",
    "Help Point Locations",
    "Agency Locations",
    "Change of Address",
    "Queries & Feedback",
    "Kunden Online Panel",
  ];

  const goTo = ["Support", "FAQs", "Kontakt", "Schaden melden", "Magazin"];

  const languages = ["English", "German"];

  return (
    <Grid
      container
      style={{ backgroundColor: theme.palette.primary.dark }}
      py={7}
      id="footer"
    >
      <Container maxWidth={"lg"}>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Grid item lg={3}>
            <Typography fontSize="18px" color="white" fontWeight="100">
              Customer Service
            </Typography>
            {customerService.map((item, index) => (
              <Typography
                  key={index}
                color="white"
                fontSize="14px"
                fontWeight="100"
                style={{ padding: "12px 0" }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid item lg={3}>
            <Typography fontSize="18px" color="white" fontWeight="100">
              Go To
            </Typography>
            {goTo.map((item, index) => (
              <Typography
                  key={index}
                color="white"
                fontSize="14px"
                fontWeight="100"
                style={{ padding: "12px 0" }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid item lg={3}>
            <Typography fontSize="18px" color="white" fontWeight="100">
              Languages
            </Typography>
            {languages.map((item, index) => (
              <Typography
                  key={index}
                color="white"
                fontSize="14px"
                fontWeight="100"
                style={{ padding: "12px 0" }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid item lg={3}>
            <Typography fontSize="18px" color="white" fontWeight="100">
              Newsletter
            </Typography>
            <Typography
              color="white"
              fontSize="14px"
              fontWeight="100"
              style={{ padding: "12px 0" }}
            >
              Important news and tips for your car and home straight to your
              inbox.
            </Typography>

            <Typography
              color="white"
              fontSize="14px"
              fontWeight="100"
              style={{ padding: "12px 0" }}
            >
              You can unsubscribe at any time using the unsubscribe link in our
              emails or via our
            </Typography>
            <TextField
              className="inputRounded"
              placeholder={t("newsletter.email")}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Stack>
        <Stack direction="row">
          <Typography variant="h2" color="white" py={4}>
            {t("appName")}
          </Typography>
        </Stack>
        <hr />
        <Divider flexItem />
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" mt={4}>
          <Stack direction="row" spacing={2}>
            <a href="https://www.facebook.com">
              <BsFacebook color="white" fontSize="24px" />
            </a>
            <a href="https://www.instagram.com">
              <SiInstagram color="white" fontSize="24px" />
            </a>
            <a href="https://www.whatsapp.com">
              <BsWhatsapp color="white" fontSize="24px" />
            </a>
            <a href="https://www.twitter.com">
              <BsTwitter color="white" fontSize="24px" />
            </a>
          </Stack>
          <Stack direction="row" spacing={2}>
            <a href="#">
              <Typography color="white">@ 2022 {t("appName")}</Typography>
            </a>
            <a href="#">
              <Typography color="white">Privacy</Typography>
            </a>
            <a href="#">
              <Typography color="white">disclaimer</Typography>
            </a>
            <a href="#">
              <Typography color="white">Terms of Use</Typography>
            </a>
          </Stack>
        </Stack>
      </Container>
    </Grid>
  );
};

export default Footer;
