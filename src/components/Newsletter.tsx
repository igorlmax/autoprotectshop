import React from "react";
import {
  Box,
  Container,
  Grid, Hidden,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import invitation from "../assets/images/email-marketing02.png";
import { useTranslation } from "react-multi-lang";

const Newsletter = () => {
  const t = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Grid container style={{ backgroundColor: theme.palette.primary.main }}>
        <Container maxWidth={"lg"} >
          <Stack direction={{ xs: "column", md: "row" }}  my={4}>
            <Grid item xs={12} lg={8}>
              <Stack
                direction="column"
                spacing={4}
                justifyContent="center"
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <Typography color={"secondary"} fontWeight={100} fontSize={'x-large'}>
                  {t("newsletter.heading")}
                </Typography>
                <Typography
                  color={"white"}
                  variant={"body1"}
                  style={{ fontWeight: "100" }}
                >
                  {t("newsletter.title")}
                </Typography>
                <Hidden mdDown>
                <Typography
                  color={"white"}
                  variant={"body2"}
                  style={{ fontWeight: "100" }}
                >
                  {t("newsletter.unsubscribe")}
                </Typography>
                </Hidden>
                <TextField
                  className="inputRounded"
                  placeholder={t("newsletter.email")}
                  variant="outlined"
                  size="small"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={4} my={3}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img loading='lazy' src={invitation} style={{ maxWidth: "192px" }} />
              </Box>
            </Grid>
            <Hidden mdUp>
            <Typography
                color={"white"}
                variant={"body2"}
                style={{ fontWeight: "100" }}
                fontSize={'x-small'}
            >
              {t("newsletter.unsubscribe")}
            </Typography>
            </Hidden>
          </Stack>
        </Container>
      </Grid>
    </>
  );
};

export default Newsletter;
