import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ParallaxLayer } from '@react-spring/parallax';
import { Particles } from '../home/Particles';

function Resume() {
    return (
        <Box>
            <Particles />
            <Typography sx={style.projectMd}>
                About Me
            </Typography>

            <Box mr={25} ml={25} sx={{ textAlign: "left", color: "white" }}>
                <br />
                <Box>
                    <Typography variant="h3">
                        2021 - Present
                    </Typography>
                </Box>
                <br />
                <Box>
                    <Typography variant="h5">
                       <b>Code Immersives, NY (Education)</b>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" mb={5}>
                        I'm baby beard selvage succulents austin yuccie swag celiac, pinterest cray thundercats
                        squid drinking
                        vinegar chartreuse organic adaptogen. Actually raclette forage waistcoat before
                        they sold out shabby
                        chic pour-over green juice la croix hammock chicharrones master cleanse humblebrag.
                        Tumblr sriracha artisan,
                        flannel blue bottle woke wolf copper mug helvetica slow-carb freegan. 90's shabby
                        chic neutra authentic
                        celiac tilde locavore adaptogen everyday carry tote bag chambray craft beer cliche
                        heirloom. La croix vice art party hell of cred neutra master cleanse tousled.
                    </Typography>
                </Box>

                <br />
                <Box>
                    <Typography variant="h3">
                        2014 - 2021
                    </Typography>
                </Box>
                <br />
                <Box>
                    <Typography variant="h6">
                        I'm baby beard selvage succulents austin yuccie swag celiac, pinterest cray thundercats
                        squid drinking
                        vinegar chartreuse organic adaptogen. Actually raclette forage waistcoat before
                        they sold out shabby
                        chic pour-over green juice la croix hammock chicharrones master cleanse humblebrag.
                        Tumblr sriracha artisan,
                        flannel blue bottle woke wolf copper mug helvetica slow-carb freegan. 90's shabby
                        chic neutra authentic
                        celiac tilde locavore adaptogen everyday carry tote bag chambray craft beer cliche
                        heirloom. La croix vice art party hell of cred neutra master cleanse tousled.
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default Resume

export const style = {
    projectMd: {
        textAlign: "left",
        fontSize: "7vw",
        color: "white",
        fontFamily: "Bebas Neue",
        paddingLeft: "50px",
        textShadow: "0px 0px 7px rgba(123, 89, 255, 0.86)",
        marginTop: "40px"
    },
    projectSm: {
        textAlign: "center",
        fontSize: "15vw",
        color: "white",
        fontFamily: "Bebas Neue",
        textShadow: "0px 0px 7px rgba(123, 89, 255, 0.86)"
    },
}