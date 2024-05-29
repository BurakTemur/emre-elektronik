import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import temGTC from './Images/tem gtc.jpg'
import hanaHS7500 from './Images/hana hs7500.png'
import dikomsanJCSA from './Images/dikomsan jcs-a.png'


function SayiciTeraziler() {
  const [hovered1,setHovered1] = useState(false);
  const [hovered2,setHovered2] = useState(false);
  const [hovered3,setHovered3] = useState(false);

  const navigate = useNavigate();

  return (
    <>
    <Template></Template>
    <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>Sayıcı Teraziler</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
        <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid>
      <Grid onClick={()=>navigate("/Sayıcı Tem")} onMouseEnter={()=> setHovered1(true)} onMouseLeave={()=>setHovered1(false)} bgcolor={"white"} container justifyContent={"center"}  xs={2} style={{height:400,marginTop:hovered1 ? 60:80,marginLeft:30,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
        <img src={temGTC} alt={"hana"}height={300} width={250}></img>
        <Typography style={{fontSize:20,fontWeight:'bold'}}>TEM</Typography>
      </Grid>
      <Grid onClick={()=>navigate("/Sayıcı Hana")}  onMouseEnter={()=>setHovered2(true)} onMouseLeave={()=>setHovered2(false)} bgcolor={"white"} container justifyContent={"center"}  xs={2} style={{height:400,marginLeft:50,marginTop:hovered2 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={hanaHS7500} alt={"neck"} height={300} width={250}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>HANA</Typography>
      </Grid> 
      <Grid onClick={()=>navigate("/Sayıcı Dikomsan")}  onMouseEnter={()=>setHovered3(true)} onMouseLeave={()=>setHovered3(false)} bgcolor={"white"} container justifyContent={"center"}  xs={2} style={{height:400,marginLeft:50,marginTop:hovered3 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)",transition: "margin-top 0.5s ease"}} >
        <img src={dikomsanJCSA} alt={"cas"} height={300} width={250}></img>
        <Typography style={{fontSize:20,fontWeight:'bold',textAlign:"center"}}>DİKOMSAN</Typography>
      </Grid>  
    </Grid>
    <Box height={200} bgcolor={"white"}></Box>
    </>
  )
}

export default SayiciTeraziler