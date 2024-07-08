import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import vincTemEko from "./Images/tem eko vinç.png"
import Template2 from './template2';

function VincTemEko() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>EKO</Typography>
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
         <Grid xs={4} style={{marginTop:120,marginLeft:"2%"}}>
            <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Genel Özellikleri</Typography>
            <Typography style={{fontSize:"18px",marginTop:20}}>-EKO+ Serisi Vinç Baskülleri (ONAYLI)</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-150kg’dan 1ton’a kadar maksimum çekerli ürün üretebilme</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-6 hane LCD gösterge. Rakam boyu: 28mm / 6 hane LED gösterge. Rakam boyu: 20mm</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-LCD göstergeli modellerde standart gösterge aydınlatması (backlight)</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-5 tuşlu basit kullanım</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-LCD göstergeli modellerde 100 saate kadar / LED göstergeli modellerde 40 saate kadar akülü kullanım</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-PC çıkış opsiyonu</Typography>

      
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={vincTemEko} alt={"cl3000"}height={300} width={"18%"}></img>
      </Grid>
        
  
      <Template2></Template2>
      </>
    )
}

export default VincTemEko