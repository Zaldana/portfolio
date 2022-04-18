import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Particles } from '../home/Particles';
import Me from '../../images/me.jpg'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { IconTab } from './IconTab';

function AboutMe() {

    const [ value, setValue ] = React.useState('2');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Particles />
            <Box mt={90} display={{ sm: 'block', md: 'none' }} ></Box>
            <Typography sx={style.projectMd} display={{ xs: "none", sm: 'none', md: 'block' }}>
                About Me
            </Typography>
            <Box
                mr={{ xs: 5, sm: 5, md: 40 }}
                ml={{ xs: 5, sm: 5, md: 40 }}
                pl={{ xs: 5, sm: 5, md: 15 }}
                pr={{ xs: 5, sm: 5, md: 15 }}
                pt={{ xs: 2, sm: 2, md: 2 }}
                pb={{ xs: 2, sm: 2, md: 8 }}
                sx={{
                    height: "100%",
                    zIndex: 1,
                    position: "relative",
                    background: "rgba(5, 15, 55, .8)",
                    color: "white",
                    borderRadius: "25px"
                }}
                id="about"
            >
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered textColor="secondary" indicatorColor="secondary">
                            <Tab label="Skills" value="2" sx={{ color: "white", fontFamily: "Bebas Neue", fontSize: "24px" }}/>
                            <Tab label="Learn About Me" value="1" sx={{ color: "white", fontFamily: "Bebas Neue", fontSize: "24px" }}/>
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <img src={Me} style={{ borderRadius: "50%", height: "150px", boxShadow: "0px 0px 10px 3px rgba(123, 89, 255, 0.5)" }} alt="profile" />
                        <Typography variant="h4">
                            Hi, I'm Ruben
                        </Typography>
                        <br />
                        <Typography sx={{ textAlign: { sm: 'center', md: 'justify' }, fontSize: "17px" }}>
                            From 2014 - 2021 I worked as a civilian marketing specialist for the U.S. Air Force. Our mission was to promote
                            and establish morale and welfare programs for the military communities at Kadena Air Base in Japan and the
                            Royal Air Force Base Lakenheath in the UK. My responsibilities ranged from driving sales, photography,
                            video production, graphic design, social media marketing, and magazine design. Due to the pandemic our office
                            made a digital pivot, and I began working much closer with our webmaster. That’s where my love affair
                            with web development began.I found the cocktail of craft, creativity and problem solving very attractive.
                            As soon as I came back to the US, I enrolled in Code Immersives’ year long MERN based web development program.
                            During my attendance I have learned the basics of programing, created several full stack projects,
                            and I'm currently working on getting my AWS cloud practitioner certification.
                            I hope to take the skills I have learned and have a successful career as a front end developer.
                        </Typography>
                    </TabPanel>
                    <TabPanel value="2" >
                        {IconTab()}
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default AboutMe

export const style = {
    projectMd: {
        textAlign: "left",
        fontSize: "7vw",
        color: "white",
        fontFamily: "Bebas Neue",
        paddingLeft: "70px",
        textShadow: "0px 0px 7px rgba(123, 89, 255, 0.86)",
        marginTop: "150px",
        marginBottom: "70px",
       
    },
    projectSm: {
        textAlign: "center",
        fontSize: "15vw",
        color: "white",
        fontFamily: "Bebas Neue",
        textShadow: "0px 0px 7px rgba(123, 89, 255, 0.86)"
    },
    iconRow: {
        display: "flex",
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        justifyContent: "center",
        alignItems: "center"
    }

}


