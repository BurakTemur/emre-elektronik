import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Template2 from './template2'
import tedea1260 from './Images/tedea 1260.png'
import tedea1263 from './Images/TEDEA 1263.png'
import tedea1510 from './Images/TEDEA 1510.png'
import mavinNa1 from './Images/Mavin NA1.png'
import mavinNa2 from './Images/mavin na2.png'
import mavinNa3 from './Images/mavin na3.png'
import mavinNa4 from './Images/mavin na4.png'
import mavinNa10 from './Images/mavin na10.png'
import mavinNa19 from './Images/mavin na19.png'
import mavinNa20 from './Images/mavin na20.png'
import mavinNa128 from './Images/mavin na128.png'
import mavinNa116 from './Images/mavin na116-117.png'
import mavinNa164 from './Images/mavin na164.png'
import mavinNB2NB3NB4 from './Images/mavin nb2 nb3 nb4.png'
import mavinNS1NS2 from './Images/mavin ns1 ns2.png'

function LoadcellDensi() {
 
    const [hovered1,setHovered1] = useState(false);
    const [hovered2,setHovered2] = useState(false);
    const [hovered3,setHovered3] = useState(false);
    const [hovered4,setHovered4] = useState(false);
    const [hovered5,setHovered5] = useState(false);
    const [hovered6,setHovered6] = useState(false);
    const [hovered7,setHovered7] = useState(false);
    const [hovered8,setHovered8] = useState(false);
    const [hovered9,setHovered9] = useState(false);
    const [hovered10,setHovered10] = useState(false);
    const [hovered11,setHovered11] = useState(false);
    const [hovered12,setHovered12] = useState(false);
    const [hovered13,setHovered13] = useState(false);
    const [hovered14,setHovered14] = useState(false);
    const [hovered15,setHovered15] = useState(false);



    const navigate = useNavigate();

  return (
    <>
    <Template></Template>
    <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 2.51vw, 30px)", whiteSpace:"nowrap"}}>Densi</Typography>
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

      <Grid  onMouseEnter={()=> setHovered1(true)} onMouseLeave={()=>setHovered1(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered1 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(16px, 2.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>TEDEA 1260</Typography>
        <img src={tedea1260} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi TEDEA 1260")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
         <Grid  onMouseEnter={()=> setHovered2(true)} onMouseLeave={()=>setHovered2(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered2 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(16px, 2.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>TEDEA 1263</Typography>
        <img src={tedea1263} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi TEDEA 1263")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
      <Grid  onMouseEnter={()=> setHovered3(true)} onMouseLeave={()=>setHovered3(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered3 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(16px, 2.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>TEDEA 1510</Typography>
        <img src={tedea1510} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi TEDEA 1510")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
      </Grid>
     
      <Grid container  sx={{marginLeft: {xs:"0%",sm:"33.3%" , md:"33.5%",lg:"33.3%"}}}>
      <Grid  onMouseEnter={()=> setHovered4(true)} onMouseLeave={()=>setHovered4(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered4 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NA1</Typography>
        <img src={mavinNa1} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NA1")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid> 
      <Grid  onMouseEnter={()=> setHovered5(true)} onMouseLeave={()=>setHovered5(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered5 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NA2</Typography>
        <img src={mavinNa2} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NA2")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
       <Grid  onMouseEnter={()=> setHovered6(true)} onMouseLeave={()=>setHovered6(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered6 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NA3</Typography>
        <img src={mavinNa3} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NA3")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
      </Grid>
      
       <Grid container  sx={{marginLeft: {xs:"0%",sm:"33.3%" , md:"33.5%",lg:"33.3%"}}}>
      <Grid  onMouseEnter={()=> setHovered7(true)} onMouseLeave={()=>setHovered7(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered7 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NA4-5</Typography>
        <img src={mavinNa4} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NA4")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid> 
      <Grid  onMouseEnter={()=> setHovered8(true)} onMouseLeave={()=>setHovered8(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered8 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NA10</Typography>
        <img src={mavinNa10} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NA10")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
       <Grid  onMouseEnter={()=> setHovered9(true)} onMouseLeave={()=>setHovered9(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered9 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NA19</Typography>
        <img src={mavinNa19} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NA19")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
      </Grid>  
      
      <Grid container  sx={{marginLeft: {xs:"0%",sm:"33.3%" , md:"33.5%",lg:"33.3%"}}}>
      <Grid  onMouseEnter={()=> setHovered10(true)} onMouseLeave={()=>setHovered10(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered10 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NA20</Typography>
        <img src={mavinNa20} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NA20")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid> 
      <Grid  onMouseEnter={()=> setHovered11(true)} onMouseLeave={()=>setHovered11(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered11 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NA128</Typography>
        <img src={mavinNa128} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NA128")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
       <Grid  onMouseEnter={()=> setHovered12(true)} onMouseLeave={()=>setHovered12(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered12 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NA116-117</Typography>
        <img src={mavinNa116} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NA116")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
      </Grid>
      
      <Grid container  sx={{marginLeft: {xs:"0%",sm:"33.3%" , md:"33.5%",lg:"33.3%"}}}>
      <Grid  onMouseEnter={()=> setHovered13(true)} onMouseLeave={()=>setHovered13(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered13 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NA164</Typography>
        <img src={mavinNa164} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NA164")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid> 
      <Grid  onMouseEnter={()=> setHovered14(true)} onMouseLeave={()=>setHovered14(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered14 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NB2 NB3 NB4</Typography>
        <img src={mavinNB2NB3NB4} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NB2")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
       <Grid  onMouseEnter={()=> setHovered15(true)} onMouseLeave={()=>setHovered15(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered15 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
      <Typography style={{fontSize: "clamp(10px, 1.5vw, 20px)",fontWeight:'bold',whiteSpace:"nowrap"}}>Mavin NS1 NS2</Typography>
        <img src={mavinNS1NS2} alt={"Loadcell"}height={300} width={"100%"}></img>
        <Grid container marginTop={"2px"}><Button onClick={()=>navigate("/Loadcell Densi Mavin NS1")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize: "clamp(4px, 1.5vw, 14px)" ,whiteSpace:"nowrap" ,color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
      </Grid>
      </Grid>

    <Template2></Template2>

    </>
  )
}

export default LoadcellDensi