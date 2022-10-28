import React from "react";
import { Stack } from "@mui/material";

const HeroSection = () => {
  return (
    <Stack
      style={{ position: "relative", height: 200 }}
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Stack>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam
        asperiores beatae delectus est explicabo fuga ipsa laborum mollitia
        necessitatibus nostrum placeat quos, repudiandae saepe temporibus
        voluptates voluptatibus? Ipsam, obcaecati?
      </Stack>
      <Stack>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam
        asperiores beatae delectus est explicabo fuga ipsa laborum mollitia
        necessitatibus nostrum placeat quos, repudiandae saepe temporibus
        voluptates voluptatibus? Ipsam, obcaecati?
      </Stack>
    </Stack>
  );
};

export default HeroSection;
