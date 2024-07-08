import React from 'react';
import Template from './template';
import { Grid, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import mettlerBcom from "./Images/metler bcom.jpg";
import mettlerBPlusT2M from "./Images/mettler b plus t2m.jpg";
import mettlerBPlusH2L from "./Images/mettler b plus h2l.jpg";
import mettlerFreshBaseU2 from "./Images/mettler fresh base u2.png";
import Template2 from './template2';
function BarkodluMettler() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Template />
      <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>METTLER</Typography>
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

    <Grid container onMouseEnter={()=> setHovered1(true)} onMouseLeave={()=>setHovered1(false)} bgcolor={"white"} xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered1 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
          <Grid container justifyContent={"center"}><Typography sx={{fontSize:{xs:20,sm:12,md:14,lg:18},fontWeight:'bold'}}>BCom-S</Typography></Grid>
          <Grid container><img src={mettlerBcom} alt={"hs-2000"}height={280} width={"100%"}></img></Grid>
          <Grid container><Button onClick={()=>navigate("/Barkodlu Mettler BCom")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize:{xs: 20,sm:8,md:12,lg:16},color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
        </Grid>  
        
        <Grid container onMouseEnter={()=> setHovered2(true)} onMouseLeave={()=>setHovered2(false)} bgcolor={"white"} xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered2 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
          <Grid container justifyContent={"center"}><Typography sx={{fontSize:{xs:20,sm:12,md:14,lg:18},fontWeight:'bold'}}>BPlus T2M</Typography></Grid>
          <Grid container><img src={mettlerBPlusT2M} alt={"hs-2000"}height={280} width={"100%"}></img></Grid>
          <Grid container><Button onClick={()=>navigate("/Barkodlu Mettler BPlus T2M")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize:{xs: 20,sm:8,md:12,lg:16},color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
        </Grid>   
        
        <Grid container onMouseEnter={()=> setHovered3(true)} onMouseLeave={()=>setHovered3(false)} bgcolor={"white"} xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered3 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
          <Grid container justifyContent={"center"}><Typography sx={{fontSize:{xs:20,sm:12,md:14,lg:18},fontWeight:'bold'}}>BPlus H2L-EE15D</Typography></Grid>
          <Grid container><img src={mettlerBPlusH2L} alt={"hs-2000"}height={280} width={"100%"}></img></Grid>
          <Grid container><Button onClick={()=>navigate("/Barkodlu Mettler BPlus H2L")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize:{xs: 20,sm:8,md:12,lg:16},color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
        </Grid>  
        
        <Grid container onMouseEnter={()=> setHovered4(true)} onMouseLeave={()=>setHovered4(false)} bgcolor={"white"} xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"36.2%",marginTop:hovered4 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
          <Grid container justifyContent={"center"}><Typography sx={{fontSize:{xs:20,sm:12,md:14,lg:18},fontWeight:'bold'}}>FreshBase U2</Typography></Grid>
          <Grid container><img src={mettlerFreshBaseU2} alt={"hs-2000"}height={280} width={"100%"}></img></Grid>
          <Grid container><Button onClick={()=>navigate("/Barkodlu Mettler FreshBase U2")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize:{xs: 20,sm:8,md:12,lg:16},color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
        </Grid>  
      

      </Grid>

      <Template2></Template2>
    </>
  )
}

export default BarkodluMettler;
