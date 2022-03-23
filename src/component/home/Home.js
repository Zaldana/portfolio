import React from 'react'
import Layout from '../layout/Layout'
import { Box } from '@mui/system'
import { Typography, Stack } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Work from '../sections/Work'

function Home() {
  return (
      <Layout>
          <Box sx={style.background}>
              <Stack
                  direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}
                  spacing={{ xs: 1, sm: 2 }}
                  alignItems={{ xs: "center", sm: "center", md: "flex-end" }}
                  justifyContent={{ xs: "center", sm: "center", md: "center" }}
                  mt={"5%"}
              >
                <ThemeProvider theme={theme}>
                    <Typography
                        alignItems={{ xs: "center", sm: "center", md: "space-around" }}
                        sx={{ fontFamily: 'Righteous', color: "white" }} variant="h1">
                            Ruben<br />Zaldana
                    </Typography>
                </ThemeProvider>
                <Box sx={{ border: "solid 5px red", height: "40vw", width: "50vw" }}>
                </Box>
            </Stack>
              <Box>
                <Work />
              </Box>
              <Box sx={{ color: "white", height: "100px" }}>
                  Course work
              </Box>
              <Box sx={{ color: "white", height: "100px" }}>
                  Past Experience
              </Box>
              <Box sx={{ color: "white", height: "100px" }}>
                  About & Contact
              </Box>
        </Box>
    </Layout>
  )
}

export default Home

const style = {
    background: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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