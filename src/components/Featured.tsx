import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import longTerm from "../assets/images/long-term.png";
import { useTranslation } from "react-multi-lang";
import { Link } from 'react-router-dom';

const Featured = () => {
  const t = useTranslation();

  return (
    <Grid container style={{ backgroundColor: "#f7f7f9" }} py={3}>
      <Container maxWidth={"xl"}>
        <Stack direction={"row"}>
          <Grid item lg={4}>
            <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
            >
              <img src={longTerm} />
            </Box>

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
                  variant='h2'
                  // fontWeight={100}
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
              }} variant={"h2"}>
                {t("featured.pricePerformance")}
              </Typography>

              <Link to={"/quote"} style={{ textDecoration: "none" }}>

              <Button
                variant={"outlined"}
                style={{ borderRadius: 50, marginTop: 32 }}
                size={"medium"}
              >
                {t("featured.calculateCarInsurance")}
              </Button>
              </Link>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Grid>
  );
};

export default Featured;
