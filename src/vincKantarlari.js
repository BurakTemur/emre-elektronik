import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ie1700 from './Images/IE-1700.png'
import temSHWD from './Images/tem sh wd.png'
import murbaySelesOCSS1 from './Images/murbay seles ocs s1.jpg'

function VincKantarlari() {

  
  const [hovered1,setHovered1] = useState(false);
  const [hovered2,setHovered2] = useState(false);
  const [hovered3,setHovered3] = useState(false);
  const navigate = useNavigate();
  return (
    <>
     <Template></Template>
    <Typography style={{position:"absolute",top:610,left:"36%"}} fontSize={30}>Vinç Kantarları</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:"21%",marginTop:100}}>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid>
      <Grid onClick={()=>navigate("/Vinç Baskülü Cas")} onMouseEnter={()=> setHovered1(true)} onMouseLeave={()=>setHovered1(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginTop:hovered1 ? 60:80,marginLeft:"1.4%",padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
        <img src={ie1700} alt={"ie1700"}height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold'}}>CAS</Typography>
      </Grid>
      <Grid  onClick={()=>navigate("/Vinç Baskülü Tem")} onMouseEnter={()=>setHovered2(true)} onMouseLeave={()=>setHovered2(false)} bgcolor={"white"} container justifyContent={"center"} xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered2 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={temSHWD} alt={"castonIIPlus"} height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>TEM</Typography>
      </Grid> 
      <Grid  onClick={()=>navigate("/Vinç Baskülü Murbay")} onMouseEnter={()=>setHovered3(true)} onMouseLeave={()=>setHovered3(false)} bgcolor={"white"} container justifyContent={"center"}  xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered3 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={murbaySelesOCSS1} alt={"castonIIIPlus"} height={300} width={"100%"}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>MURBAY</Typography>
      </Grid> 
    </Grid>
    <Box height={200} bgcolor={"white"}></Box>
    </>
  )
}

export default VincKantarlari