import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import cas from "./Images/cas.jpg";
import cas2 from "./Images/cas2.jpg";
import { useNavigate } from 'react-router-dom';

function Template() {

  const navigate = useNavigate();

  const images = [cas, cas2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImages = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
    if (direction === "prev") {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000);

    return () => {
      clearInterval(interval);
    }
  }, [currentIndex, images.length]);

  return (
    <>
      <Grid container sx={{overflow: "hidden", position: "relative"}}>
        <Typography color={"#F4D35E"} style={{ paddingTop: 10, paddingLeft: 50, position: "absolute", top: 20, left: 20 }} fontSize={"20px"}>EMRE ELEKTRONİK</Typography>
        <img
          src={images[currentIndex]}
          alt='casImage'
          height={"600px"}
          width={"100%"}
        />
        <Button onClick={() => { changeImages("prev") }} disableRipple style={{ position: "absolute", top: 450, left: "5%" }} sx={{"&:hover": {background:"none"}}}><Typography fontSize={50} color={"white"}>{"<"}</Typography></Button>
        <Button onClick={() => { changeImages("next") }} disableRipple style={{ position: "absolute", top: 450, left: "90%" }} sx={{"&:hover": {background:"none"}}}><Typography fontSize={50} color={"white"}>{">"}</Typography></Button>
        <Grid xs={8}></Grid>
        <Grid container xs={4} style={{ position: "absolute", top: '10%', left: '40%' }}  >
          <Button onClick={()=>{navigate("/")}} style={{ marginRight: 15 }}><Typography variant='h5' textTransform={'none'} color={"white"} >Ana Sayfa</Typography></Button>
          <Button onClick={()=>{navigate("/İletişim")}} style={{ marginRight: 15 }}><Typography variant='h5' textTransform={'none'} color={"white"} >İletişim</Typography></Button>
          <Button onClick={()=>navigate("/Hakkımızda")}><Typography variant='h5' textTransform={'none'} color={"white"} >Hakkımızda</Typography></Button>
        </Grid>
      </Grid>
    
    </>
  );
}

export default Template;
