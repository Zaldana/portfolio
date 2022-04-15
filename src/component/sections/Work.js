import React from 'react';
import Image from '../../images/missing-image.png'
import Mlogo from '../../images/mlogo.png'
import {
    Typography,
    Box,
    Stack,
    Button,
    Modal
} from '@mui/material';

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
            mt={10}
            sx={{
                height: "50vh",
                width: "100%",
                border: "rgba(253, 239, 255, 1) 2px solid",
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
                <Box style={style.card} >
                    <Box style={style.frame}>
                        <img onClick={handleOpenOne} src={Image} style={{ borderRadius: "10px", height: "100%", width: "100%", objectFit: "cover" }} alt="image"/>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <img src={Mlogo} alt="milkman.com logo" style={{height: "20px", width: "20px"}} />
                        <Typography style={style.titles}><b>M</b>ilkman</Typography>
                    </Box>
                    <Modal
                        open={openOne}
                        onClose={handleCloseOne}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style.modal}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Modal 1
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </Box>
                <Box style={style.card}>
                    <Box style={style.frame}>
                        <img onClick={handleOpenTwo} src={Image} style={{ borderRadius: "10px", height: "100%", width: "100%", objectFit: "cover" }} alt="image" />
                    </Box>
                    <Typography>Crate Digger</Typography>
                    <Modal
                        open={openTwo}
                        onClose={handleCloseTwo}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style.modal}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Modal 2
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </Box>
                <Box style={style.card}>
                    <Box style={style.frame}>
                        <img onClick={handleOpenThree} src={Image} style={{ borderRadius: "10px", height: "100%", width: "100%", objectFit: "cover" }} alt="image" />
                    </Box>
                    <Typography>Beat Box</Typography>
                    <Modal
                        open={openThree}
                        onClose={handleCloseThree}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style.modal}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Modal 3
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
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
    },
    frame: {
        width: "100%",
        height: "70%",
        border: "solid 1px blue",
        boxShadow: "0px 0px 10px 3px rgba(123, 89, 255, 0.86)",
        borderRadius: "10px"
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    titles: {
        fontFamily: "Outfit",
        marginTop: "10%",
        fontSize: "2rem"

        
    }
}