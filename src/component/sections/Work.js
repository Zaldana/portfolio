import React from 'react';
import { ParallaxLayer, Parallax } from '@react-spring/parallax';
import {
    Typography,
    Box,
    Stack,
    Button
} from '@mui/material';
import { MilkmanModal } from './MilkmanModal';
import { CrateDiggerModal } from './CrateDiggerModal';
import { BeatBoxModal } from './BeatBoxModal';


function Work() {

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
    
        <Box sx={style.bar} >
            <Box
                pt={15}
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                <ParallaxLayer
                    speed={1.5}
                    offset={1}
                    style={{
                        zIndex: -1
                    }}
                >
                    <Typography mt={5} sx={style.projectMd}>Projects</Typography>
                </ParallaxLayer>
            </Box>
            <Box
                pt={5} pb={4}
                sx={{ display: { xs: 'block', sm: 'none' } }}
            >
                <Typography sx={style.projectSm}>Projects</Typography>
            </Box>

            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                alignItems={{ xs: "center", sm: "center", md: "center" }}
                justifyContent={{ xs: "center", sm: "center", md: "space-around" }}
                pl={{ xs: 0, sm: 0, md: 10 }}
                pr={{ xs: 0, sm: 0, md: 10 }}
            >


                <CrateDiggerModal openTwo={openTwo} handleOpenTwo={handleOpenTwo} handleCloseTwo={handleCloseTwo} />

                <BeatBoxModal openThree={openThree} handleOpenThree={handleOpenThree} handleCloseThree={handleCloseThree} />

            </Stack>

            <Box
                pb={12}
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
            </Box>
            </Box>

    )
}

export default Work

export const style = {
    bar: {
        display: "flex",
        background: "rgb(5, 15, 55)",
        background: "linear-gradient(10deg, rgba(0, 0, 0, 1) 10%, rgba(5, 15, 55, 1) 73%)",
        flexDirection: "column",
        boxShadow: "0px 0px 15px 6px rgba(123, 89, 255, 0.25)",
    
    },
    card: {
        height: "100%",
    },
    frame: {
        height: "25vh",
        borderRadius: "10px",
        '&:hover': {
            boxShadow: "0px 0px 15px 8px rgba(123, 89, 255, 0.7)",
        }
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
        p: 5,
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
        textAlign: "left",
        fontSize: "7vw",
        color: "white",
        fontFamily: "Bebas Neue",
        paddingLeft: "70px",
        textShadow: "0px 0px 7px rgba(123, 89, 255, 0.86)"
    },
    projectSm: {
        textAlign: "center",
        fontSize: "15vw",
        color: "white",
        fontFamily: "Bebas Neue",
        textShadow: "0px 0px 7px rgba(123, 89, 255, 0.86)"
    }
}