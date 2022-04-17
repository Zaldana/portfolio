import React from 'react';
import Image from '../../images/missing-image.png'
import { ParallaxLayer } from '@react-spring/parallax';
import {
    Typography,
    Box,
    Stack,
    Button} from '@mui/material';
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
        <Box
            sx={{
                border: "rgba(0, 0, 0, .1) 2px solid",
                display: "flex",
                background: "linear-gradient(216deg, rgba(0, 0, 0, 1) 0%, rgba(19, 3, 55, 1) 73%)",
                boxShadow: "0px 0px 10px 3px rgba(123, 89, 255, 0.86)",
                flexDirection: "column",
            }}

        >
            <Box
                pt={15}
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                <ParallaxLayer
                    speed={1.5}
                    factor={0}
                    style={{
                        zIndex: -1
                    }}
                >
                    <Typography sx={style.projectMd}>Projects</Typography>
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
                justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
                pl={{ xs: 0, sm: 0, md: 10 }}
                pr={{ xs: 0, sm: 0, md: 10 }}
            >

                <MilkmanModal openOne={openOne} handleOpenOne={handleOpenOne} handleCloseOne={handleCloseOne} />

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
    card: {
        height: "100%",
    },
    frame: {
        minWidth: "25vw",
        height: "20vh",
        border: "solid 1px blue",
        boxShadow: "0px 0px 10px 2px rgba(123, 89, 255, 0.86)",
        borderRadius: "10px",
    },
    image: {
        borderRadius: "10px",
        height: "100%",
        width: "100%",
        objectFit: "cover"
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "80%",
        bgcolor: 'rgba(0,0,0,.85)',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
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
        fontSize: "10vw",
        color: "white",
        fontFamily: "Bebas Neue",
        paddingLeft: "50px",
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