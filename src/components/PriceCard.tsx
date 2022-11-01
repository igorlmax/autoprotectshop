import React from "react";
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import shield from "../assets/images/shield.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-multi-lang";

const PriceCard = () => {
  const t = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Paper elevation={3}>
        <Box
          component="div"
          display={"flex"}
          justifyContent={"center"}
          justifyItems={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          py={3}
        >
          <img src={shield} width={100} />
          <Typography variant={"h6"}>Covers</Typography>
          <Typography variant={"caption"}>
            Kfz-Haftpflicht, Teilkasko oder Vollkasko?
          </Typography>
          <hr />
          <Divider flexItem />
          <hr />
          <Typography variant={"caption"}>
            Entscheide dich für die passende Deckung zu deinem Auto.
          </Typography>

          <Stack direction={"column"} spacing={2} mt={2}>
            <Stack direction={"row"} spacing={1}>
              <Stack>
                <CheckCircleIcon
                  style={{ color: "#10a258", fontSize: "20px" }}
                />
              </Stack>
              <Stack>
                <Typography variant={"body2"}>
                  Haftpflicht: Ein Muss für Autofahrer
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Stack>
                <CheckCircleIcon
                  style={{ color: "#10a258", fontSize: "20px" }}
                />
              </Stack>
              <Stack>
                <Typography variant={"body2"}>
                  Haftpflicht: Ein Muss für Autofahrer
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Stack>
                <CheckCircleIcon
                  style={{ color: "#10a258", fontSize: "20px" }}
                />
              </Stack>
              <Stack>
                <Typography variant={"body2"}>
                  Haftpflicht: Ein Muss für Autofahrer
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <hr />
          <Divider flexItem />
          <hr />
          <Link to={"/quote"} style={{ textDecoration: "none" }}>
            <Button
              variant={"contained"}
              style={{ borderRadius: 50 }}
              size={"large"}
            >
              <Typography>{t("pricing.learnMore")}</Typography>
            </Button>
          </Link>
        </Box>
      </Paper>
    </>
  );
};

export default PriceCard;
