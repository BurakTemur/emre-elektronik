import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import casSW2 from './Images/cas sw2.png'
import casSW2SuKorumalı from './Images/cas sw2 su korumalı.png'


function TartimCas() {
    const [hovered1,setHovered1] = useState(false);
    const [hovered2,setHovered2] = useState(false);

    const navigate = useNavigate();
  
    return (
      <>
      <Template></Template>
      <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>CAS</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
        <Grid onMouseEnter={()=> setHovered1(true)} onMouseLeave={()=>setHovered1(false)} bgcolor={"white"} container justifyContent={"center"}  xs={2} style={{height:435,marginTop:hovered1 ? 60:80,marginLeft:30,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
          <Typography style={{fontSize:20,fontWeight:'bold'}}>SWII</Typography> 
          <img src={casSW2} alt={"sw2"}height={300} width={250}></img>
          <Button onClick={()=>navigate("/Tartım Cas SW2")} disableRipple sx={{bgcolor:"#133F67",marginRight:19,marginTop:2,"&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize:16,fontWeight:'400',textAlign:"center",color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button>
        </Grid>
        <Grid onMouseEnter={()=> setHovered2(true)} onMouseLeave={()=>setHovered2(false)} bgcolor={"white"} container justifyContent={"center"}  xs={2} style={{height:435,marginTop:hovered2 ? 60:80,marginLeft:30,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
          <Typography style={{fontSize:20,fontWeight:'bold'}}>SWII-W Su Korumalı</Typography>
          <img src={casSW2SuKorumalı} alt={"sw2 su korumalı"}height={300} width={250}></img>
          <Button onClick={()=>navigate("/Tartım Cas SW2 Su Korumalı")} disableRipple sx={{bgcolor:"#133F67",marginRight:19,marginTop:2,"&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize:16,fontWeight:'400',textAlign:"center",color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button>
        </Grid>
      </Grid>
  
      <Box height={200} bgcolor={"white"}></Box>
      </>
    )
}

export default TartimCas