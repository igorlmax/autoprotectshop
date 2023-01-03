import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-multi-lang";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import carLoan from "../assets/images/original car alternative colour.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const t = useTranslation();
  const theme = useTheme();

  return (
    <Grid container style={{ backgroundColor: theme.palette.secondary.main }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Grid mt={4} item xs={12} lg={6}>
            <Stack direction="column" spacing={2} alignItems="flex-start">
              <Typography color={"primary"} variant={"h2"}>
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
                <img src={"icons8-checkmark-48.png"} width={24} />
                {t("hero.pointOne")}
              </Grid>
              <Grid gap={2} container direction="row" alignItems="center">
                <img src={"icons8-checkmark-48.png"} width={24} />                {t("hero.pointTwo")}

              </Grid>
              <Grid gap={2} container direction="row" alignItems="center">
                <img src={"icons8-checkmark-48.png"} width={24} />{" "}
                {t("hero.pointThree")}
              </Grid>

              <Link to={"/quote"} style={{ textDecoration: "none" }}>
                <Button
                  variant={"contained"}
                  style={{
                    borderRadius: 50,
                    padding: "12px 30px",
                    marginTop: 14,
                  }}
                  size={"large"}
                >
                  {t("hero.getQuote")}
                </Button>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6} justifyContent="center">
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={carLoan} style={{ maxWidth: "360px" }} />
            </Box>
          </Grid>
        </Stack>
      </Container>
    </Grid>
  );
};

export default HeroSection;
