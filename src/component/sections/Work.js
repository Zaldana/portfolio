import React from 'react'
import { Typography, Box, Stack } from '@mui/material'

function Work() {
    return (
        <Box
            mt={10}
            sx={{
                height: "50vh",
                width: "90vw",
                border: "rgba(253, 239, 255, 1) 2px solid",
                borderRadius: "10px",
                display: "flex",
                background: "white",
                boxShadow: "0px 0px 10px 3px rgba(123, 89, 255, 0.86)",
            }}
        >
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
                justifyContent={{ xs: "center", sm: "center", md: "space-around" }}
                sx={{ height: "85%", width: "100%" }}
                p={5}
            >
                <Box style={style.card}>
                    <Box style={style.frame}></Box>
                    <Typography>Milkman</Typography>
                </Box>
                <Box style={style.card}>
                    <Box style={style.frame}></Box>
                    <Typography>Crate Digger</Typography>
                    <img />
                </Box>
                <Box style={style.card}>
                    <Box style={style.frame}></Box>
                    <Typography>Drum Machine</Typography>
                </Box>
            </Stack>
    </Box>
  )
}

export default Work

const style = {
    card: {
        width: "28%",
        height: "100%",
        border: "solid 3px red",
    },
    frame: {
        width: "100%",
        height: "70%",
        border: "solid 3px blue",
        borderRadius: "10px"
    }
}