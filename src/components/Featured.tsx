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
      <Container maxWidth="xl">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Grid item xs={12} lg={4}>
            <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
            >
              <img style={{maxWidth: 220}} loading='lazy' src={longTerm} />
            </Box>

          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack
              py={3}
              direction="column"
              spacing={0}
              justifyContent="center"
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Typography
                  variant='h2'
                  // fontWeight={100}
                  fontSize={'x-large'}
              >
                {t("featured.trustExperts")}
              </Typography>
              <Typography variant={"h2"} fontSize={'xx-large'} sx={{
                textAlign: {xs: 'center', md: 'left'}
              }}>
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
