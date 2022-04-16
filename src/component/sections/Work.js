import React from 'react';
import Image from '../../images/missing-image.png'
import Mui from '../../images/mui.png'
import Redux from '../../images/redux.png'
import ReactLogo from '../../images/react.png'
import Mongo from '../../images/mongo.png'
import Express from '../../images/express.png'
import Node from '../../images/node.png'
import Bootstrap from "../../images/bootstrap.png"
import JQuery from "../../images/jquery.png"
import HTML from "../../images/html.png"
import CSS from "../../images/css.png"
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
            sx={{
                border: "rgba(0, 0, 0, .1) 2px solid",
                display: "flex",
                background: "rgba(10, 10, 10, 0.5)",
                boxShadow: "0px 0px 10px 3px rgba(123, 89, 255, 0.86)",
                flexDirection: "column",
            }}
        >
            <Box
                pt={2}
                sx={{ width: "100%", }}
            >
                <Typography sx={style.project}>Projects</Typography>
            </Box>
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                alignItems={{ xs: "center", sm: "center", md: "center" }}
                justifyContent={{ xs: "center", sm: "center", md: "space-between"  }}
                pl={{ xs: 0, sm: 0, md: 10 }}
                pr={{ xs: 0, sm: 0, md: 10 }}
            >    
                <Box style={style.card} >
                    <Box
                        style={style.frame}>
                        <img onClick={handleOpenOne} src={Image} style={style.image} alt="website preview"/>
                    </Box>
                    <Box
                        sx={style.titleBox}
                        pt={3} pb={3}
                    >
                        <Typography style={style.titles}><b>M</b>ilkman</Typography>
                        <img src={Mongo} alt="mongo db logo" style={{ height: "30px", width: "28px" }} />
                        <img src={Express} alt="express js logo" style={{ height: "25px", width: "25px", paddingRight: 5 }} />
                        <img src={ReactLogo} alt="react logo" style={{ height: "30px", width: "30px" }} />
                        <img src={Node} alt=" node js logo" style={{ height: "35px", width: "35px" }} />
                        <img src={Redux} alt="redux logo" style={{ height: "20px", width: "20px" }} />
                        <img src={Mui} alt="mui logo" style={{ height: "35px", width: "35px" }} />
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
                        <img onClick={handleOpenTwo} src={Image} style={style.image} alt="image" />
                    </Box>
                    <Box
                        sx={style.titleBox}
                        pt={3} pb={3}
                    >
                        <Typography ml={1} style={style.titles}><b>M</b>ilkman</Typography>
                        <img src={Mongo} alt="mongodb logo" style={{ height: "30px", width: "28px" }} />
                        <img src={Express} alt="expressjs logo" style={{ height: "25px", width: "25px", paddingRight: 5 }} />
                        <img src={ReactLogo} alt="react logo" style={{ height: "30px", width: "30px" }} />
                        <img src={Node} alt="node js logo" style={{ height: "35px", width: "35px" }} />
                        <img src={Bootstrap} alt="bootstrap logo" style={{ height: "30px", width: "30px" }} />
                    </Box>
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
                        <img onClick={handleOpenThree} src={Image} style={style.image} alt="image" />
                    </Box>
                    <Box
                        sx={style.titleBox}
                        pt={3} pb={3}
                    >
                        <Typography style={style.titles}><b>B</b>eat<b>B</b>ox</Typography>
                        <img src={HTML} alt="html logo" style={{ height: "30px", width: "30px", padding: 3 }} />
                        <img src={CSS} alt="css logo" style={{ height: "30px", width: "30px", padding: 3 }} />
                        <img src={JQuery} alt="jquery logo" style={{ height: "30px", width: "30px", padding: 3 }} />
                    </Box>
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
        height: "100%",
    },
    frame: {
        minWidth: "25vw",
        height: "20vh",
        border: "solid 1px blue",
        boxShadow: "0px 0px 15px 3px rgba(123, 89, 255, 0.86)",
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
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    titleBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    titles: {
        fontFamily: "Outfit",
        fontSize: "24px",
        color: "white",
        marginRight: 20
    },
    project: {
        textAlign: "right",
        fontSize: "20vw",
        textShadow: "2px 2px 10px 3px rgba(123, 89, 255)",
        color: "white", 
        fontFamily: "Bebas Neue",
    }
}