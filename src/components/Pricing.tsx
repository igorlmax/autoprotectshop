import React from "react";
import PriceCard from "./PriceCard";
import { useTranslation } from "react-multi-lang";
import { Container, Grid, useTheme } from "@mui/material";

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
        style={{ backgroundColor: theme.palette.secondary.main }}
      >
          <Grid item xs>
            <PriceCard />
          </Grid>
          <Grid item xs>
            <PriceCard />
          </Grid>
          <Grid item xs>
            <PriceCard />
          </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
