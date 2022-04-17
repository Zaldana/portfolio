import React from 'react';
import Mui from '../../images/mui.png';
import Redux from '../../images/redux.png';
import ReactLogo from '../../images/react.png';
import Mongo from '../../images/mongo.png';
import Express from '../../images/express.png';
import Node from '../../images/node.png';
import Milkman from "../../images/milkman.png";
import Control from "../../images/control.png"
import { Link } from 'react-router-dom';
import {
    Typography,
    Box, Modal,
    Button
} from '@mui/material';
import { style } from './Work';

export function MilkmanModal(props) {
    return (<Box style={style.card}>
        <Box style={style.frame}>
            <img onClick={props.handleOpenOne} src={Milkman} style={style.image} alt="milkman website preview" />
        </Box>
        <Box sx={style.titleBox} pt={3} pb={3}>
            <Typography style={style.titles}>Milkman</Typography>
            <img src={Mongo} alt="mongo db logo" style={{
                height: "30px",
                width: "28px"
            }} />
            <img src={Express} alt="express js logo" style={{
                height: "25px",
                width: "25px",
                paddingRight: 5
            }} />
            <img src={ReactLogo} alt="react logo" style={{
                height: "30px",
                width: "30px"
            }} />
            <img src={Node} alt=" node js logo" style={{
                height: "35px",
                width: "35px"
            }} />
            <img src={Redux} alt="redux logo" style={{
                height: "20px",
                width: "20px"
            }} />
            <img src={Mui} alt="mui logo" style={{
                height: "35px",
                width: "35px"
            }} />
        </Box>
        <Modal open={props.openOne} onClose={props.handleCloseOne} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style.modal}>
                <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ fontFamily: "Bebas Neue"}}>
                    Milkman
                </Typography>
                <br />
                <Box style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                    <img onClick={props.handleOpenOne} src={Milkman} style={{ width: "45%", marginRight: "10px" }} alt="milkman website preview" />
                    <img onClick={props.handleOpenOne} src={Control} style={{ width: "45%" }} alt="milkman admin website preview" />
                </Box>
                <Typography id="modal-modal-description" sx={{
                    mt: 2
                }}>
                    <b>Milkman</b> is a MERN stack eCommerce site that emulates a store that sells milk and milk alternative products.
                    In addition, the site also features an admin mode where changes to the database can be made from the frontend 
                    with proper credentials.The shopping cart is created using Redux, and the site is styled with MUI.The database 
                    was populated using Kroger’s public API and their postman environment.
                </Typography>
                <br />
                <Typography>
                    <b>Click for site demo and code</b>
                </Typography>
                <br />
                <Box>
                    <Button variant="outlined" href="https://bejewelled-bonbon-6294ce.netlify.app/" style={{ marginRight: "10px" }} target="_blank">Milkman</Button>
                    <Button variant="outlined" href="https://github.com/Zaldana/milkman-frontend" target="_blank">GitHub</Button>
                </Box>
            </Box>
        </Modal>
    </Box>);
}
