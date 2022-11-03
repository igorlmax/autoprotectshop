import React from "react";
import { Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-multi-lang';

const Footer = () => {
  const t = useTranslation();
  const theme = useTheme();
  return (
      <Grid container style={{ backgroundColor: theme.palette.primary.dark }} py={3}>
        <Container maxWidth={"xl"}>
          <Grid item lg={4}><Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto assumenda cupiditate debitis ex expedita iste iusto maiores modi natus nobis, non numquam, odit officia quis reiciendis, sint vel voluptatibus.</Typography>
          </Grid>
        </Container>
      </Grid>
  );
};

export default Footer;
