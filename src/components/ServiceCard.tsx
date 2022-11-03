import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import { BsChevronRight } from "react-icons/bs";

const ServiceCard = ({ icon, title, description }: any) => {
  const t = useTranslation();
  const theme = useTheme();

  return (
    <Stack direction={"column"} spacing={2} flexWrap={"wrap"}>
      {icon}
      <Typography variant={"body1"} fontWeight={"400"}>
        {title}
      </Typography>
      <Typography variant={"body2"}>{description}</Typography>
      <Link to={"/quote"} style={{ textDecoration: "none" }}>
        <Stack direction={"row"} alignItems={'center'} spacing={1}>
          <Typography variant={"body2"} color={theme.palette.primary.main}>
            Learn more
          </Typography>
          <BsChevronRight fontSize={'12px'}/>
        </Stack>
      </Link>
    </Stack>
  );
};

export default ServiceCard;
