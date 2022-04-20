import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import JQuery from "../../images/jquery.png";
import HTML from "../../images/html.png";
import CSS from "../../images/css.png";
import ReactLogo from '../../images/react.png';
import Mongo from '../../images/mongo.png';
import Express from '../../images/express.png';
import Node from '../../images/node.png';
import Bootstrap from "../../images/bootstrap2.png";
import Mui from '../../images/mui.png';
import Redux from '../../images/redux.png';
import JS from '../../images/js.png';
import Figma from '../../images/figma.png';
import AWS from '../../images/aws.png';
import { style } from './AboutMe';

export function IconTab() {
    return <Box
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { sm: "row", md: "column" }
        }}>
        <Box
            sx={{
                height: "70px",
                display: { xs: 'none', sm: 'block' },
                marginBottom: "15px"
            }}
        >
            <Typography variant={"h2"}>
                Skills
            </Typography>
        </Box>

        <Box sx={style.iconRow}>
            <img src={HTML} alt="html logo" style={{
                height: "80px",
                padding: 4
            }} />
            <img src={CSS} alt="css logo" style={{
                height: "80px",
                padding: 4
            }} />
            <img src={JS} alt="javascript logo" style={{
                height: "70px",
                padding: 4
            }} />
            <img src={Figma} alt="figma logo" style={{
                height: "70px",
                padding: 4
            }} />
        </Box>
        <Box sx={style.iconRow}>
            <Box sx={{ marginBottom: "10px", display: { xs: 'block', sm: 'none' } }}>
                <Typography variant={"h3"}>
                    Skills
                </Typography>
            </Box>

            <img src={ReactLogo} alt="react logo" style={{
                height: "80px",
                padding: 4
            }} />
            <img src={Redux} alt="redux logo" style={{
                height: "68px",
                padding: 4
            }} />
            <img src={JQuery} alt="jquery logo" style={{
                height: "80px",
                padding: 4
            }} />
            <img src={Bootstrap} alt="bootstrap logo" style={{
                height: "70px",
                padding: 4
            }} />
            <img src={Mui} alt="mui logo" style={{
                height: "80px",
                padding: 4
            }} />
        </Box>
        <Box sx={style.iconRow}>
            <img src={Express} alt="express logo" style={{
                height: "80px",
                padding: 4
            }} />
            <img src={Node} alt="node logo" style={{
                height: "80px",
                padding: 6
            }} />
            <img src={AWS} alt="aws logo" style={{
                height: "55px",
                padding: 6
            }} />
            <img src={Mongo} alt="mongodb logo" style={{
                height: "78px",
                paddingLeft: 15
            }} />
        </Box>
    </Box>;
}
