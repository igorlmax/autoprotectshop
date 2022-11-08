import React from "react";
import PriceCard from "./PriceCard";
import { useTranslation } from "react-multi-lang";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import shield01 from "../assets/images/shield01.png";
import shield02 from "../assets/images/shield02.png";
import shield03 from "../assets/images/shield03.png";

const Pricing = () => {
  const t = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        style={{ backgroundColor: "#f7f7f9" }}
      >
        <Grid item xs m={7}>
          <Typography variant="h2" align="center" style={{ margin: "24px 0" }}>
            {t("pricing.heading")}
          </Typography>
          <Typography variant="h4" fontSize="18px" align="center">
            {t("pricing.subHeading")}
          </Typography>
          <Typography variant="h4" fontSize="18px" align="center">
            {t("pricing.subHeading2")}
          </Typography>
          <Stack
            style={{ margin: "32px 0" }}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            justifyItems={"center"}
            spacing={5}
          >
            <PriceCard
              icon={shield01}
              heading={t("pricing.headingCard1")}
              subHeading={t("pricing.subHeadingCard1")}
              description={t("pricing.descriptionCard1")}
              features={[
                t("pricing.card1Feature1"),
                t("pricing.card1Feature2"),
                t("pricing.card1Feature3"),
              ]}
            />
            <PriceCard
              icon={shield02}
              heading={t("pricing.headingCard2")}
              subHeading={t("pricing.subHeadingCard2")}
              description={t("pricing.descriptionCard2")}
              features={[
                t("pricing.card2Feature1"),
                t("pricing.card2Feature2"),
              ]}
            />
            <PriceCard
              icon={shield03}
              heading={t("pricing.headingCard3")}
              subHeading={t("pricing.subHeadingCard3")}
              description={t("pricing.descriptionCard3")}
              features={[
                t("pricing.card3Feature1"),
                t("pricing.card3Feature2"),
                t("pricing.card3Feature3"),
              ]}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
