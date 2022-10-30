import React from "react";
import { Stack, Typography } from "@mui/material";

const ServiceCard = ({ icon, title, description }: any) => {
  return (
    <Stack direction={"column"} spacing={2} flexWrap={"wrap"}>
      {icon}
      <Typography style={{fontSize: 16}} fontWeight={"500"}>
        {title}
      </Typography>
      <Typography variant={"subtitle2"}>{description}</Typography>
    </Stack>
  );
};

export default ServiceCard;
