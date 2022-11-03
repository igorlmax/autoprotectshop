import React from "react";
import { Container, Grid, Stack, useTheme } from "@mui/material";
import ServiceCard from "./ServiceCard";
import CarCrashRoundedIcon from "@mui/icons-material/CarCrashRounded";
import { useTranslation } from "react-multi-lang";
import SosIcon from "@mui/icons-material/Sos";
import SavingsIcon from "@mui/icons-material/Savings";
import PaymentsIcon from "@mui/icons-material/Payments";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const Services = () => {
  const t = useTranslation();

  return (
    <>
      <Container maxWidth={"xl"}>
        <Grid container py={6}>
          <Grid item lg>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={6}
            >
              <Stack direction={"column"} spacing={6}>
                <ServiceCard
                  icon={
                    <CarCrashRoundedIcon
                      style={{ fontSize: "54px" }}
                      fontSize={"large"}
                      color={"primary"}
                    />
                  }
                  title={t("services.parkingDamage")}
                  description={t("services.parkingDamageDescription")}
                />
                <ServiceCard
                  icon={
                    <SosIcon
                      style={{ fontSize: "54px" }}
                      fontSize={"large"}
                      color={"primary"}
                    />
                  }
                  title={t("services.assistance")}
                  description={t("services.assistanceDescription")}
                />
              </Stack>

              <Stack direction={"column"} spacing={6}>
                <ServiceCard
                  icon={
                    <SavingsIcon
                      style={{ fontSize: "54px" }}
                      fontSize={"large"}
                      color={"primary"}
                    />
                  }
                  title={t("services.bonusProtection")}
                  description={t("services.bonusProtectionDescription")}
                />
                <ServiceCard
                  icon={
                    <PaymentsIcon
                      style={{ fontSize: "54px" }}
                      fontSize={"large"}
                      color={"primary"}
                    />
                  }
                  title={t("services.purchasePriceProtection")}
                  description={t("services.purchasePriceProtectionDescription")}
                />
              </Stack>

              <Stack direction={"column"} spacing={6}>
                <ServiceCard
                  icon={
                    <MinorCrashIcon
                      style={{ fontSize: "54px" }}
                      fontSize={"large"}
                      color={"primary"}
                    />
                  }
                  title={t("services.ownDamage")}
                  description={t("services.ownDamageDescription")}
                />
                <ServiceCard
                  icon={
                    <CleaningServicesIcon
                      style={{ fontSize: "54px" }}
                      fontSize={"large"}
                      color={"primary"}
                    />
                  }
                  title={t("services.innerSpace")}
                  description={t("services.innerSpaceDescription")}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Services;
