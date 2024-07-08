import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import paslanmazBaskulMurbaySelesXK3108B from "./Images/murbay seles xk3108b paslanmaz baskül.jpg"
import Template2 from './template2';

function PaslanmazBaskulMurbaySelesXK3108B() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>SELES XK3108B</Typography>
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
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px"}}>Seles XK3108B Serisi Paslanmaz Tartım Baskülleri, yüksek hassasiyet performansı ile doğru tartım ve ihtiyaca uygun kapasite & hassasiyet seçenekleri ile tüm sektörlere hitap etmektedir.  </Typography>
      
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={paslanmazBaskulMurbaySelesXK3108B} alt={"cl3000"} width={"18%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
              <Typography style={{fontSize:"18px",marginTop:5,fontWeight:"bold"}}>-Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:10}}>-Elektrostatik toz boyalı platforma sahiptir.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik sıfırlama ve dara alma</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Ayarlanabilen ayakları sayesinde her zemine uyumlu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Dara alma ve sıfırlama özelliği mevcuttur.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-304 veya 316 paslanma dış gövdeye sahiptir.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-360 derece dönebilen gösterge</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Opsiyonel yazıcı bağlantısı.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Opsiyonel RS-232 bağlantısı sayesinde pc veri aktarımı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Dahili aküsü ile 72 saat kullanma olanağı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Yukarı aşağı hareket edebilen gösterge</Typography>
          </Grid>
      </Grid>
      <Template2></Template2>
      </>
    )
}

export default PaslanmazBaskulMurbaySelesXK3108B