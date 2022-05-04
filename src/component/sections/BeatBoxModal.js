import React from 'react';
import JQuery from "../../images/jquery.png";
import HTML from "../../images/html.png";
import CSS from "../../images/css.png";
import BeatBox from "../../images/beatboxSS.png";
import Seq from "../../images/seq.png"
import {
    Typography,
    Box, Modal,
    Button, IconButton
} from '@mui/material';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import { style } from './Work';

export function BeatBoxModal(props) {
    return (
        <Box style={style.card}>
            <Box sx={style.frame} mr={{ xs: 0, sm: 0, md: 2 }}>
                <img onClick={props.handleOpenThree} src={BeatBox} style={style.image} alt="beatbox website preview" />
            </Box>
            <Box sx={style.titleBox} pt={3} pb={3}>
                <Typography style={style.titles}>BeatBox</Typography>
                <img src={HTML} alt="html logo" style={{
                    height: "30px",
                    width: "30px",
                    padding: 3
                }} />
                <img src={CSS} alt="css logo" style={{
                    height: "30px",
                    width: "30px",
                    padding: 3
                }} />
                <img src={JQuery} alt="jquery logo" style={{
                    height: "30px",
                    width: "30px",
                    padding: 3
                }} />
            </Box>
            <Modal open={props.openThree} onClose={props.handleCloseThree} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">

                <Box sx={style.modal}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                        <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ fontFamily: "Bebas Neue" }}>
                            Beatbox
                        </Typography>
                        <IconButton aria-label="delete" size="large" color="secondary" onClick={props.handleCloseThree}>
                            <DoNotDisturbOnIcon fontSize="large" />
                        </IconButton>

                    </Box>

                    <br />
                    <Box style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <img src={BeatBox} style={{ width: "45%", marginRight: "10px" }} alt="milkman website preview" />
                        <img src={Seq} style={{ width: "45%" }} alt="milkman admin website preview" />
                    </Box>
                    <Typography id="modal-modal-description" sx={{
                        mt: 2
                    }}>
                        <b>BeatBox</b> is a music making toy featuring a drum-machine, a sequencer, and a playable piano. The drum machine
                        pads have five sounds that will play when selected. The Sequence Grid allows you to select which notes you would like to play at a particular beat by clicking on a cell.
                        The Keyboard section can be used by clicking on the keys with a mouse or by typing using the labeled keys. BeatBox
                        is made with HTML, CSS, and jquery, and uses local storage to keep selections persistent despite refreshing page.
                    </Typography>
                    <br />
                    <Box>
                        <Button color="secondary" size="large" variant="contained" href="https://zaldana.github.io/beat-box/" target="_blank" style={{ marginRight: "10px" }}>BeatBox</Button>
                        <Button color="secondary" size="large" variant="contained" href="https://github.com/Zaldana/beat-box" target="_blank">GitHub</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>);
}
