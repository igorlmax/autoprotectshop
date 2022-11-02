import React from "react";
import PriceCard from "./PriceCard";
import { useTranslation } from "react-multi-lang";
import { Container, Grid, Stack, useTheme } from "@mui/material";
import shield from "../assets/images/shield.png";

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
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            justifyItems={"center"}
            spacing={5}
          >
            <PriceCard
              icon={shield}
              heading={"test"}
              subHeading={"sub text"}
              description={"description"}
              features={["feature1", "feature2", "feature3"]}
            />
          </Stack>


        </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
