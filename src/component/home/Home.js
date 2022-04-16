import React from 'react'
import { Box } from '@mui/system'
import { Typography, Stack } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ParallaxLayer } from '@react-spring/parallax';
import Work from '../sections/Work'

function Home() {
  return (
          <Box sx={style.background}>
            <ParallaxLayer offset={0} style={{ zIndex: -1, background: "linear-gradient(216deg, rgba(0, 0, 0, 1) 0%, rgba(19, 3, 55, 1) 73%)"}}>
              <Stack
                  direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}
                  spacing={{ xs: 1, sm: 2 }}
                  mt={"5%"}
                  sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                  }}
              >
                        <ThemeProvider theme={theme}>
                            <Typography
                                alignItems={{ xs: "center", sm: "center", md: "space-around" }}
                                sx={{ fontFamily: "Bebas Neue", color: "white" }} variant="h1">
                                    Ruben<br />Zaldana
                            </Typography>
                        </ThemeProvider>
                        <Box sx={{ border: "solid 5px red", height: "40vw", width: "50vw" }}>
                        </Box>
                    </Stack>
                  </ParallaxLayer>
                  <ParallaxLayer offset={1}>
                    <Box sx={{width: "100%"}}>
                        <Work />
                      </Box>
                  </ParallaxLayer>
                  <ParallaxLayer>
                <Box sx={{ color: "white", height: "100px" }}>
                    Course work
                      </Box>
                  </ParallaxLayer>
                  <ParallaxLayer>
                <Box sx={{ color: "white", height: "100px" }}>
                    Past Experience
                  </Box>
                  </ParallaxLayer>
                  <ParallaxLayer>
                <Box sx={{ color: "white", height: "100px" }}>
                    About & Contact
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
}

const theme = createTheme();

theme.typography.h1 = {
    fontSize: '2.5rem',
    '@media (min-width:886px)': {
        fontSize: '1.5rem',
    },
    [ theme.breakpoints.up('md') ]: {
        fontSize: '8rem',
        textAlign: 'right'
    },
};