import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import hana5600LCD from './Images/hana 5600 lcd.png'
import casIIP from './Images/cas pr II b.png'
import densiPC100 from './Images/densi pc 100.png'
import temEgeLed from './Images/tem ege led.jpg'
 
function FiyatHesaplamaliTeraziler() {

  const [hovered1,setHovered1] = useState(false);
  const [hovered2,setHovered2] = useState(false);
  const [hovered3,setHovered3] = useState(false);
  const [hovered4,setHovered4] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    <Template></Template>
    <Typography style={{position:"absolute",top:610,left:"36%"}} fontSize={30}>Fiyat Hesaplamalı Teraziler</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:"21%",marginTop:100}}>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid>
      <Grid onClick={()=>navigate("/Fiyat Hesaplamalı Hana")} onMouseEnter={()=> setHovered1(true)} onMouseLeave={()=>setHovered1(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered1 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
        <img src={hana5600LCD} alt={"hana"}height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold'}}>HANA</Typography>
      </Grid>
      <Grid onClick={()=>navigate("/Fiyat Hesaplamalı Cas")} onMouseEnter={()=>setHovered2(true)} onMouseLeave={()=>setHovered2(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered2 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={casIIP} alt={"cas"} height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>CAS</Typography>
      </Grid> 
      <Grid onClick={()=>navigate("/Fiyat Hesaplamalı Densi")} onMouseEnter={()=>setHovered3(true)} onMouseLeave={()=>setHovered3(false)} bgcolor={"white"} container justifyContent={"center"} xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered3 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={densiPC100} alt={"densi"} height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>DENSİ</Typography>
      </Grid>  
    </Grid>
    <Grid container xs={12}>
    <Grid onClick={()=>navigate("/Fiyat Hesaplamalı Tem")} onMouseEnter={()=>setHovered4(true)} onMouseLeave={()=>setHovered4(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"36.3%",marginTop:hovered4 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={temEgeLed} alt={"tem"} height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>TEM</Typography>
      </Grid> 
       
    </Grid>

    <Box height={200} bgcolor={"white"}></Box>
    </>
  )
}

export default FiyatHesaplamaliTeraziler