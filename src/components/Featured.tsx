import React from "react";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import carLoan from "../assets/images/icons8-car-roof-box-100.png";
import { useTranslation } from "react-multi-lang";

const Featured = () => {
  const t = useTranslation();
  const theme = useTheme();

  return (
    <Grid container style={{ backgroundColor: "#f7f7f9" }}>
      <Container maxWidth={"xl"}>
        <Stack direction={"row"}>
          <Grid item lg={4}>
            <Stack direction="column" spacing={2} alignItems="center">
              <Stack>
                <img src={carLoan} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={6}>
            <Stack
              style={{ height: 400 }}
              direction="column"
              spacing={0}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Typography
                  fontWeight={100}
                  fontSize={'x-large'}
              >
                {t("featured.trustExperts")}
              </Typography>
              <Typography sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }} variant={"h4"}>
                {t("featured.pricePerformance")}
              </Typography>

              <Button
                variant={"outlined"}
                style={{ borderRadius: 50, marginTop: 32 }}
                size={"medium"}
              >
                {t("featured.calculateCarInsurance")}
              </Button>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Grid>
  );
};

export default Featured;
