import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import barkodluTeraziler from "./Images/barkodlu teraziler.png"
import fiyatHesaplamalıTeraziler from "./Images/fiyat hesaplamalı teraziler.png"
import tartımTeraziler from "./Images/tartım teraziler.png"
import sayıcıTeraziler from "./Images/sayıcı teraziler.png"
import hassasTartım from "./Images/hassas tartım.png"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Template2 from './template2';


function Teraziler() {

  const [hovered1,setHovered1] = useState(false);
  const [hovered2,setHovered2] = useState(false);
  const [hovered3,setHovered3] = useState(false);
  const [hovered4,setHovered4] = useState(false);
  const [hovered5,setHovered5] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    <Template></Template>
    <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>Teraziler</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid style={{marginLeft:"19.2%",marginTop:100}}>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"} , fontSize: "clamp(10px, 1.2vw, 23px)", whiteSpace:"nowrap"}} textTransform={"none"} color={"#6c757d"} fontSize={23}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"} , fontSize: "clamp(10px, 1.2vw, 23px)", whiteSpace:"nowrap"}} textTransform={"none"} fontSize={23} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"} , fontSize: "clamp(10px, 1.2vw, 23px)", whiteSpace:"nowrap"}} textTransform={"none"} fontSize={23} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Endüstriyel Malzemeler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"} , fontSize: "clamp(10px, 1.2vw, 23px)", whiteSpace:"nowrap"}} textTransform={"none"}  color={"#6c757d"}>Endüstriyel Malzemeler</Typography></Button></Grid>
    </Grid>
      <Grid  onClick={()=>navigate("/Barkodlu Teraziler")} onMouseEnter={()=> setHovered1(true)} onMouseLeave={()=>setHovered1(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered1 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
        <img src={barkodluTeraziler} alt={"barkodlu teraziler"}height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold'}}>Barkodlu Teraziler</Typography>
      </Grid>
      <Grid onClick={()=>navigate("/Fiyat Hesaplamalı Teraziler")} onMouseEnter={()=>setHovered2(true)} onMouseLeave={()=>setHovered2(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered2 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={fiyatHesaplamalıTeraziler} alt={"fiyat hesaplamalı teraziler"} height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>Fiyat Hesaplamalı Teraziler</Typography>
      </Grid> 
      <Grid onClick={()=>navigate("/Tartım Teraziler")}  onMouseEnter={()=>setHovered3(true)} onMouseLeave={()=>setHovered3(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered3 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={tartımTeraziler} alt={"tartım teraziler"} height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>Tartım Teraziler</Typography>
      </Grid> 
    </Grid>

    <Grid container xs={12}>
    <Grid onClick={()=>navigate("/Sayıcı Teraziler")}  onMouseEnter={()=>setHovered4(true)} onMouseLeave={()=>setHovered4(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"35%",marginTop:hovered4 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={sayıcıTeraziler} alt={"sayıcı teraziler"} height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>Sayıcı Teraziler</Typography>
      </Grid> 
        <Grid onClick={()=>navigate("/Hassas Tartım")}  onMouseEnter={()=>setHovered5(true)} onMouseLeave={()=>setHovered5(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered5 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={hassasTartım} alt={"hassas tartım"} height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>Hassas Tartım</Typography>
      </Grid>
    </Grid>
    <Template2></Template2>
    </>
  )
}

export default Teraziler 


