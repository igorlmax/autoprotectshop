import React from "react";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-multi-lang";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import carLoan from "../assets/images/icons8-car-roof-box-100.png";

const HeroSection = () => {
  const t = useTranslation();
  const theme = useTheme();

  return (
    <Grid container style={{ backgroundColor: theme.palette.secondary.main }}>
      <Container maxWidth={"xl"}>
        <Stack direction={"row"}>
          <Grid item lg={6}>
            <Stack
              style={{ height: 400 }}
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Typography color={"primary"} variant={"h4"}>
                {t("hero.payPerKm")}
              </Typography>
              <Typography
                color={"primary"}
                variant={"h4"}
                style={{ fontWeight: "700" }}
              >
                {t("hero.payFullPrice")}
              </Typography>

              <Grid gap={2} container direction="row" alignItems="center">
                <CheckCircleIcon sx={{ color: "white" }} /> {t("hero.pointOne")}
              </Grid>
              <Grid gap={2} container direction="row" alignItems="center">
                <CheckCircleIcon sx={{ color: "white" }} /> {t("hero.pointTwo")}
              </Grid>
              <Grid gap={2} container direction="row" alignItems="center">
                <CheckCircleIcon sx={{ color: "white" }} />{" "}
                {t("hero.pointThree")}
              </Grid>

              <Button
                variant={"contained"}
                style={{ borderRadius: 50 }}
                size={"large"}
              >
                {t("navigation.getQuote")}
              </Button>
            </Stack>
          </Grid>
          <Grid item lg={6}>
            <Stack direction="column" spacing={2} alignItems="center">
              <Stack>
                <img src={carLoan} />
              </Stack>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Grid>
  );
};

export default HeroSection;
