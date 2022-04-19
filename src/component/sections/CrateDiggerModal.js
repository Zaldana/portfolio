import React from 'react';
import ReactLogo from '../../images/react.png';
import Mongo from '../../images/mongo.png';
import Express from '../../images/express.png';
import Node from '../../images/node.png';
import Bootstrap from "../../images/bootstrap.png";
import CrateDigger from "../../images/cratedigger.png";
import CrateDiggerHome from "../../images/cratediggerhome.png";
import {
    Typography,
    Box, Modal,
    Button
} from '@mui/material';
import { style } from './Work';

export function CrateDiggerModal(props) {
    return (<Box style={style.card}>
        <Box sx={style.frame} mr={{ xs: 0, sm: 0, md: 2 }}>
            <img onClick={props.handleOpenTwo} src={CrateDigger} style={style.image} alt="cratedigger website preview" />
        </Box>
        <Box sx={style.titleBox} pt={3} pb={3}>
            <Typography ml={1} style={style.titles}>CrateDigger</Typography>
            <img src={Mongo} alt="mongodb logo" style={{
                height: "30px",
                paddingRight: 8
            }} />
            <img src={Express} alt="expressjs logo" style={{
                height: "25px",
                width: "25px",
                paddingRight: 5
            }} />
            <img src={ReactLogo} alt="react logo" style={{
                height: "30px",
                width: "30px"
            }} />
            <img src={Node} alt="node js logo" style={{
                height: "30px",
                paddingRight: 5,
                paddingLeft: 5
            }} />
            <img src={Bootstrap} alt="bootstrap logo" style={{
                height: "30px",
                width: "30px"
            }} />
        </Box>
        <Modal open={props.openTwo} onClose={props.handleCloseTwo} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style.modal}>
                <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ fontFamily: "Bebas Neue" }}>
                    Cratedigger
                </Typography>
                <br />
                <Box style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                    <img onClick={props.handleOpenOne} src={CrateDiggerHome} style={{ width: "45%", marginRight: "10px" }} alt="milkman website preview" />
                    <img onClick={props.handleOpenOne} src={CrateDigger} style={{ width: "45%" }} alt="milkman admin website preview" />
                </Box>
                <Typography id="modal-modal-description" sx={{
                    mt: 2
                }}>
                    <b>CrateDigger</b> is designed to focus the abilities of the Discogs public API to help curate the user’s personal vinyl record library, and to help make
                    quick purchasing decisions through organization of a wish list. The front-end is styled with Bootstrap, Chart.js library to visualize 
                    user data, and React-Toastify for alerts. The site has three collections in the database that stores the user’s information, 
                    the main vinyl collection, and the wish list collection. The user is authenticated with JWT-Passport. 
                </Typography>
                <br />
   
                <Box>
                    <Button color="secondary" size="large" variant="contained" href="https://suspicious-bartik-1a8959.netlify.app/" target="blank" style={{ marginRight: "10px" }}>CrateDigger</Button>
                    <Button color="secondary" size="large" variant="contained" href="https://github.com/Zaldana/crate-digger-frontend-2" target="blank">GitHub</Button>
                </Box>
            </Box>
        </Modal>
    </Box>);
}
