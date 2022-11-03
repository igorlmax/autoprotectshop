import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import invitation from "../assets/images/email-marketing02.png";
import { useTranslation } from "react-multi-lang";

const Newsletter = () => {
  const t = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Grid container style={{ backgroundColor: theme.palette.primary.main }}>
        <Container maxWidth={"xl"}>
          <Stack direction={"row"}>
            <Grid item lg={8}>
              <Stack
                style={{ height: 400 }}
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="flex-start"
              >
                <Typography color={"secondary"} fontWeight={100} fontSize={24}>
                  {t("newsletter.heading")}
                </Typography>
                <Typography
                  color={"white"}
                  variant={"body1"}
                  style={{ fontWeight: "100" }}
                >
                  {t("newsletter.title")}
                </Typography>

                <Typography
                  color={"white"}
                  variant={"body2"}
                  style={{ fontWeight: "100" }}
                >
                  {t("newsletter.unsubscribe")}
                </Typography>

                <TextField name="url" variant="outlined" />
              </Stack>
            </Grid>
            <Grid item lg={4}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={invitation} style={{maxWidth: '192px'}} />
              </Box>
            </Grid>
          </Stack>
        </Container>
      </Grid>
    </>
  );
};

export default Newsletter;
