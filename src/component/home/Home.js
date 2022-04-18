import React from 'react'
import { Box, textAlign } from '@mui/system'
import { Typography, Stack } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ParallaxLayer } from '@react-spring/parallax';
import Work from '../sections/Work'
import CSS from "../../images/css.png"
import AboutMe from '../sections/AboutMe';
import Hero from "../../images/hero.png"
import "./Particle.scss"
import { Particles } from './Particles';
import Li from "../../images/li.png"
import GitHub from "../../images/GitHub.png"
import { Link } from 'react-router-dom'


function Home() {
  return (
    <Box sx={style.background}>
      <ParallaxLayer
        offset={0}
        factor={.9}
        speed={2}
        style={{
          zIndex: -1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(216deg, rgba(0, 0, 0, 1) 0%, rgba(19, 3, 55, 1) 73%)"
        }}
      >
        <Particles />

        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
          mt={{ xs: 13, sm:13, md: 8 }}
        >
          <Box
            height={{ xs: "25vh", sm: "25vh", md: "40vh" }}
          >
            <img src={Hero}
              style={{
                height: "100%",
                objectFit: "cover"
              }}
            />
          </Box>

          <Box>
            <ThemeProvider theme={theme}>
              <Typography
                sx={{ fontFamily: "Bebas Neue", color: "white" }} variant="h1">
                Ruben Zaldana
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                  justifyContent: "center"
                }}>
              <Typography
                sx={{ fontFamily: "Bebas Neue", color: "white" }} variant="h3">
                Web Developer
                </Typography>
                <Box
                  sx={{
                    height: "50px",
                    marginTop: { xs: "20px", sm: "20px", md: "0px" }
                  }}>
                  <a href="https://github.com/Zaldana" target="blank">
                  <img
                    src={GitHub}
                    style={style.icons}
                  />
                  </a>
                  <a href="https://www.linkedin.com/in/ruben-zaldana-75278a8a" target="blank">
                  <img
                    src={Li}
                    style={style.icons}
                  />
                  </a>
                </Box>
              </Box>
            </ThemeProvider>
          </Box>

        </Stack>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.6}
        factor={.3}
        speed={1.5}
      >
        <Box sx={{ width: "100%" }}>
          <Work />
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        offset={.87}
        factor={1.5}
        speed={1}
        style={{
          zIndex: -1,
          background: "linear-gradient(216deg, rgba(0, 0, 0, 1) 0%, rgba(19, 3, 55, 1) 73%)"
        }}
      >
        <Box sx={{ width: "100%" }}>
          <AboutMe />
        </Box>
      </ParallaxLayer>
    </Box>
  )
}

export default Home

const style = {
  background: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(216deg, rgba(0, 0, 0, 1) 0%, rgba(19, 3, 55, 1) 73%)"
  },
  icons: {
    height: "100%",
    marginRight: "5px",
    marginLeft: "15px"
  }
}

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '3rem',
  '@media (min-width:886px)': {
    fontSize: '1.5rem',

  },
  [ theme.breakpoints.up('md') ]: {
    fontSize: '8rem',
    textAlign: 'left',
  },
};

theme.typography.h3 = {
  fontSize: '2rem',
  textAlign: "center",
  '@media (min-width:886px)': {
    fontSize: '3rem',
    textAlign: "left",
  }
}