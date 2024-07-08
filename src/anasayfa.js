import React, { useState } from 'react';
import Template from './template';
import { Box, Typography ,Grid} from '@mui/material';
import teraziler from "./Images/teraziler.png";
import etiketler from "./Images/etiketler.jpg";
import streçler from "./Images/streçler.jpg";
import { useNavigate } from 'react-router-dom';
import Template2 from './template2';

function AnaSayfa() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter = (setter) => () => {
    setter(true);
  };

  const handleMouseLeave = (setter) => () => {
    setter(false);
  };

  return (
    <>
      <Template />
      <Box height={"30px"} ></Box>

      <Grid container>
  
        <Grid item style={{marginLeft:100}} xs={12} sm={6} md={4} lg={3} onClick={() => { navigate("/Teraziler") }}>
          <Box style={{ height: "150px", width: "110%" , display: 'flex', alignItems:"center"}} border={"1px solid black"} sx={{"&:hover" : {border: "1px solid #0d6efd ", transitionDelay:"0.1s"}}} onMouseEnter={handleMouseEnter(setIsHovered)} onMouseLeave={handleMouseLeave(setIsHovered)}>
            <img src={teraziler} style={{ height: 150, width: "30%" }} alt="Etiketler" />
            <Box height={"150px"} width={"1px"} bgcolor={"black"} sx={{  bgcolor : isHovered ? "#0d6efd": "black" , transitionDelay:"0.1s"}}></Box>
            <Typography variant="h6" style={{ color: "black"}}>Teraziler</Typography>
          </Box>
        </Grid>

        <Grid  item style={{marginLeft:100}} xs={12} sm={6} md={4} lg={3} onClick={() => { navigate("/Etiketler") }}>
          <Box style={{height: "150px", width: "110%" , display: 'flex', alignItems:"center"}} border={"1px solid black"} sx={{"&:hover" : {border: "1px solid #0d6efd ", transitionDelay:"0.1s"}}} onMouseEnter={handleMouseEnter(setIsHovered2)} onMouseLeave={handleMouseLeave(setIsHovered2)}>
            <img src={etiketler} style={{ height: 150, width: "30%" }} alt="Etiketler" />
            <Box height={"150px"} width={"1px"} bgcolor={"black"} sx={{  bgcolor : isHovered2 ? "#0d6efd": "black" , transitionDelay:"0.1s"}}></Box>
            <Typography variant="h6" style={{ color: "black"}}>Etiketler</Typography>
          </Box>
        </Grid>

        <Grid item style={{marginLeft:100}} xs={12} sm={6} md={4} lg={3} onClick={() => { navigate("/Streçler") }}>
          <Box style={{ height: "150px", width: "110%" , display: 'flex', alignItems:"center"}} border={"1px solid black"} sx={{"&:hover" : {border: "1px solid #0d6efd ",transitionDelay:"0.1s"}}} onMouseEnter={handleMouseEnter(setIsHovered3)} onMouseLeave={handleMouseLeave(setIsHovered3)}>
            <img src={streçler} style={{ height: 150, width: "30%" }} alt="Streçler" />
            <Box height={"150px"} width={"1px"} bgcolor={"black"} sx={{ bgcolor : isHovered3 ? "#0d6efd": "black" , transitionDelay:"0.1s"}}></Box>
            <Typography variant="h6" style={{ color: "black"}}>Streçler</Typography>
          </Box>
        </Grid>

      </Grid>

      <Template2></Template2>
    </>
  );
}

export default AnaSayfa;
