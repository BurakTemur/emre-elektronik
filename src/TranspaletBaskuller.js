import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import temOnayliTranspalet from './Images/tem onaylı transpalet.png'
import hanaHS2600WLCDTranspalet from './Images/hana hs-2600 wlcd transpalet.png'



function TranspaletBaskuller() {
  const [hovered1,setHovered1] = useState(false);
  const [hovered2,setHovered2] = useState(false);

  const navigate = useNavigate();

  return (
    <>
    <Template></Template>
    <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>Transpalet Basküller</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
        <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid> 
     <Grid onClick={()=>navigate("/Transpalet Tem")} onMouseEnter={()=> setHovered1(true)} onMouseLeave={()=>setHovered1(false)} bgcolor={"white"} container justifyContent={"center"}  xs={2} style={{height:400,marginTop:hovered1 ? 60:80,marginLeft:30,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
        <img src={temOnayliTranspalet} alt={"hana"}height={300} width={250}></img>
        <Typography style={{fontSize:20,fontWeight:'bold'}}>TEM</Typography>
      </Grid>
      <Grid onClick={()=>navigate("/Transpalet Hana")} onMouseEnter={()=> setHovered2(true)} onMouseLeave={()=>setHovered2(false)} bgcolor={"white"} container justifyContent={"center"}  xs={2} style={{height:400,marginTop:hovered2 ? 60:80,marginLeft:30,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
        <img src={hanaHS2600WLCDTranspalet} alt={"hana"}height={300} width={250}></img>
        <Typography style={{fontSize:20,fontWeight:'bold'}}>HANA</Typography>
      </Grid>
      
      
    </Grid>
  
    <Box height={200} bgcolor={"white"}></Box>
    </>
  )
}

export default TranspaletBaskuller