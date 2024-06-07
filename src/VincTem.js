import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import temSHWD from './Images/tem sh wd.png'
import temEkoVinc from './Images/tem eko vinç.png'
import temSHSerisi from './Images/tem sh serisi.png'

function VincTem() {
    const [hovered1,setHovered1] = useState(false);
    const [hovered2,setHovered2] = useState(false);
    const [hovered3,setHovered3] = useState(false);

    const navigate = useNavigate();
    return (
      <>
       <Template></Template>
       <Typography style={{position:"absolute",top:610,left:"36%"}} fontSize={30}>TEM</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:"21%",marginTop:100}}>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid>
    

      <Grid container onMouseEnter={()=> setHovered1(true)} onMouseLeave={()=>setHovered1(false)} bgcolor={"white"} xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered1 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
          <Grid container justifyContent={"center"}><Typography sx={{fontSize:{xs:20,sm:12,md:14,lg:18},fontWeight:'bold'}}>SH-WD</Typography></Grid>
          <Grid container><img src={temSHWD} alt={"hs-2000"}height={280} width={"100%"}></img></Grid>
          <Grid container><Button onClick={()=>navigate("/Vinç Baskülü Tem SH-WD")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize:{xs: 20,sm:8,md:12,lg:16},color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
        </Grid> 
        
         <Grid container onMouseEnter={()=> setHovered2(true)} onMouseLeave={()=>setHovered2(false)} bgcolor={"white"} xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered2 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
          <Grid container justifyContent={"center"}><Typography sx={{fontSize:{xs:20,sm:12,md:14,lg:18},fontWeight:'bold'}}>EKO</Typography></Grid>
          <Grid container><img src={temEkoVinc} alt={"hs-2000"}height={280} width={"100%"}></img></Grid>
          <Grid container><Button onClick={()=>navigate("/Vinç Baskülü Tem Eko")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize:{xs: 20,sm:8,md:12,lg:16},color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
        </Grid>   
        
         <Grid container onMouseEnter={()=> setHovered3(true)} onMouseLeave={()=>setHovered3(false)} bgcolor={"white"} xs={12} sm={2} md={2} lg={2} style={{height:400,marginLeft:"2.8%",marginTop:hovered3 ? 60:80,padding:30,position:"relative",border:"1px solid white", borderRadius:10,boxShadow: "2px 2px 10px rgba(0, 0, 0,0.3)", transition: "margin-top 0.5s ease"}}>
          <Grid container justifyContent={"center"}><Typography sx={{fontSize:{xs:20,sm:12,md:14,lg:18},fontWeight:'bold'}}>SH Serisi</Typography></Grid>
          <Grid container><img src={temSHSerisi} alt={"hs-2000"}height={280} width={"100%"}></img></Grid>
          <Grid container><Button onClick={()=>navigate("/Vinç Baskülü Tem SH Serisi")} disableRipple sx={{bgcolor:"#133F67",width:"120px","&:hover":{bgcolor:"#0560bb"},transition:"background-color 0.5s ease"}}><Typography sx={{fontSize:{xs: 20,sm:8,md:12,lg:16},color:"white",textTransform:"none"}}>Ürün Detay</Typography></Button></Grid>
        </Grid> 

      </Grid>


     
      <Box height={200} bgcolor={"white"}></Box>
      </>
    )
}

export default VincTem