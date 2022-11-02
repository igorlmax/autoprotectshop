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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-multi-lang";

const PriceCard = ({
  icon,
  heading,
  subHeading,
  description,
  features,
}: any) => {
  const t = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Paper elevation={4} style={{ width: "350px", padding: "30px" }}>
        <Box
          component="div"
          display={"flex"}
          justifyContent={"center"}
          justifyItems={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          py={3}
        >
          <img src={icon} width={120} />
          <Typography variant={"h6"}>{heading}</Typography>
          <Typography variant={"caption"}>{subHeading}</Typography>
          <hr />
          <Divider flexItem />
          <hr />
          <Typography variant={"caption"} align={"center"}>
            {description}
          </Typography>

          <Stack direction={"column"} spacing={2} mt={2}>
            {features.map((feature: string) => (
              <Stack direction={"row"} spacing={1}>
                <Stack>
                  <CheckCircleIcon
                    style={{ color: "#10a258", fontSize: "20px" }}
                  />
                </Stack>
                <Stack>
                  <Typography variant={"body2"}>{feature}</Typography>
                </Stack>
              </Stack>
            ))}
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
