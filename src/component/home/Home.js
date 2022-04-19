import React from 'react'
import { Box, textAlign } from '@mui/system'
import { Typography, Stack } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ParallaxLayer, Parallax } from '@react-spring/parallax';
import Work from '../sections/Work'
import CSS from "../../images/css.png"
import AboutMe from '../sections/AboutMe';
import Hero from "../../images/hero.png"
import "./Particle.scss"
import "./ParticleBlue.scss"
import { Particles } from './Particles';
import { ParticlesBlue } from './ParticlesBlue';
import Li from "../../images/li.png"
import GitHub from "../../images/GitHub.png"
import { MilkmanModal } from '../sections/MilkmanModal';
import { CrateDiggerModal } from '../sections/CrateDiggerModal';
import { BeatBoxModal } from '../sections/BeatBoxModal';



function Home() {


  const [ openOne, setOpenOne ] = React.useState(false);
  const handleOpenOne = () => setOpenOne(true);
  const handleCloseOne = () => setOpenOne(false);

  const [ openTwo, setOpenTwo ] = React.useState(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);

  const [ openThree, setOpenThree ] = React.useState(false);
  const handleOpenThree = () => setOpenThree(true);
  const handleCloseThree = () => setOpenThree(false);


  return (
    <Parallax pages={3}>

      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          zIndex: -1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(216deg, rgba(0, 0, 0, 1) 0%, rgba(19, 3, 55, 1) 73%)"
        }}
      >
        <Particles />

      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          zIndex: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            background: "radial-gradient( circle 470px at 49.5% 48.5%,  rgba(3,76,153,1) 0%, rgba(0,0,0,1) 95.1% )",
            opacity: "50%",
          }}>

        </Box>

      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >


        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}

        >
          <Box
            height={{ xs: "25vh", sm: "25vh", md: "55vh" }}
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
                  }}>
                  <a href="https://github.com/Zaldana" target="blank">
                    <img
                      src={GitHub}
                      style={header.icons}
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/ruben-zaldana-75278a8a" target="blank">
                    <img
                      src={Li}
                      style={header.icons}
                    />
                  </a>
                </Box>
              </Box>
            </ThemeProvider>
          </Box>

        </Stack>
      </ParallaxLayer>


      {/* /////////////////////////PROJECTS//////////////////////////////////////////////////////// */}

      <ParallaxLayer
        offset={1}
        speed={0}
        style={{
          background: "linear-gradient(10deg, rgba(0, 0, 0, 1) 10%, rgba(5, 15, 55, 1) 73%)",
          zIndex: 0,
          boxShadow: "0px 0px 15px 6px rgba(123, 89, 255, 0.25)",
        }}
      >
        <ParticlesBlue />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={.3}
        style={{
          zIndex: 1
        }}
      >
        <Box
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          <Typography sx={style.projectMd}>
            Projects
          </Typography>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        speed={.6}
        offset={1}
        style={{
          zIndex: 1
        }}
      >
        <Box
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          <Typography sx={style.projectMd}>
            Projects
          </Typography>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        speed={.9}
        offset={1}
        style={{
          zIndex: 1
        }}
      >
        <Box
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          <Typography sx={style.projectMd}>
            Projects
          </Typography>
        </Box>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={1.3}
        style={{
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>

        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          alignItems={{ xs: "center", sm: "center", md: "center" }}
          justifyContent={{ xs: "center", sm: "center", md: "space-around" }}
          pl={{ xs: 0, sm: 0, md: 10 }}
          pr={{ xs: 0, sm: 0, md: 10 }}
        >
          <Box
            sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
          >
            <Typography sx={style.projectSm}>
              Projects
            </Typography>
          </Box>

          <MilkmanModal openOne={openOne} handleOpenOne={handleOpenOne} handleCloseOne={handleCloseOne} />

          <CrateDiggerModal openTwo={openTwo} handleOpenTwo={handleOpenTwo} handleCloseTwo={handleCloseTwo} />

          <BeatBoxModal openThree={openThree} handleOpenThree={handleOpenThree} handleCloseThree={handleCloseThree} />

        </Stack>
      </ParallaxLayer>

      {/* ///////////////////////////////////////////////About ME////////////////////////////////////////////////////// */}

      <ParallaxLayer
        offset={2}
        speed={0}
        style={{
          zIndex: 0,
          background: "linear-gradient(216deg, rgba(0, 0, 0, 1) 0%, rgba(19, 3, 55, 1) 73%)"
        }}
      >

        <Particles />

      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={.3}
        style={{
          zIndex: 1
        }}
      >
        <Box
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          <Typography sx={style.projectMd}>
            About Me
          </Typography>
        </Box>
      </ParallaxLayer>


      <ParallaxLayer
        speed={.6}
        offset={2}
        style={{
          zIndex: 1
        }}
      >
        <Box
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          <Typography sx={style.projectMd}>
            About Me
          </Typography>
        </Box>
      </ParallaxLayer>

      <ParallaxLayer
        speed={.9}
        offset={2}
        style={{
          zIndex: 1
        }}
      >
        <Box
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          <Typography sx={style.projectMd}>
            About Me
          </Typography>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        speed={.9}
        offset={2}
        style={{
          zIndex: 1
        }}
      >
        <Box
          sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
        >
          <Typography sx={style.projectSm}>
            About Me
          </Typography>
        </Box>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 5
        }}
      >
        
        <AboutMe />
      </ParallaxLayer>

    </Parallax>
  )
}

export default Home

const header = {

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

export const style = {
  bar: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 15px 6px rgba(123, 89, 255, 0.25)",

  },

  image: {
    borderRadius: "10px",
    height: "25vh",
    maxWidth: "400px",
    objectFit: "cover",
    cursor: "context-menu"
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'rgba(5, 15, 55, .86)',
    border: "1px solid rgb(5, 15, 55)",
    borderRadius: '10px',
    boxShadow: 24,
    p: 8,
    color: "white"
  },
  titleBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  titles: {
    fontFamily: "Bebas Neue",
    fontSize: "24px",
    color: "white",
    marginRight: 20
  },
  projectMd: {
    textAlign: "center",
    fontSize: "10vw",
    color: "white",
    fontFamily: "Bebas Neue",
    textShadow: "0px 0px 12px rgba(123, 89, 255, 0.86)"
  },
  projectSm: {
    textAlign: "center",
    fontSize: "15vw",
    color: "white",
    fontFamily: "Bebas Neue",
    textShadow: "0px 0px 7px rgba(123, 89, 255, 0.86)"
  }
}