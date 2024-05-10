

import "./Contact.css";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Avatar, Chip, Divider, IconButton, SvgIcon } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Phone } from "@mui/icons-material";

const Contact = () => {
  const defaultTheme = createTheme();
  return (
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60512.81034634269!2d2.2985780285218977!3d48.880703121560614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f83b73cffd3%3A0x40b82c3688b3db0!2s92300%20Levallois-Perret!5e0!3m2!1sfr!2sfr!4v1715347290465!5m2!1sfr!2sfr"></iframe>
          </Grid>

          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Top section */}
              <Grid marginBottom="15%">
                <Grid display="flex" justifyContent="center" item>
                  <Avatar
                    alt="Hugo avatar photo"
                    src="/src/assets/hugo.jpg"
                    sx={{ width: 156, height: 156 }}
                  ></Avatar>
                </Grid>
                <Grid display="flex" justifyContent="center" item textAlign="center">
                  <h3 height="60px" level="title-lg">Let’s work together !</h3>
                </Grid>
                <Grid item xs zeroMinWidth textAlign="center">
                  <Typography variant="subtitle2" maxWidth="250px">
                  Libérez le potentiel de vos projets digitaux avec des solutions sur mesure conçues spécialement pour vous
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                {/* Address Media Box */}
                <Grid  marginBottom="10%" container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar><LocationOnIcon/></Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography fontWeight="600" noWrap>Address</Typography>
                    <Typography noWrap>Paris, France</Typography>
                  </Grid>
                </Grid>
                {/* Email Box */}
                <Grid  marginBottom="10%" container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar><EmailIcon/></Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography fontWeight="600" noWrap>Email</Typography>
                    <Typography noWrap>hugo.varloud@gmail.com</Typography>
                  </Grid>
                </Grid>
                {/* Phone Box */}
                <Grid  marginBottom="10%" container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar><Phone/></Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography fontWeight="600" noWrap>Téléphone</Typography>
                    <Typography noWrap>+33 6 13 02 80 26</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
};

export default Contact;