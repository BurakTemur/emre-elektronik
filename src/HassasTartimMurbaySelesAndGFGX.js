import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import murbaySelesAndGFGX from './Images/murbay seles and gf-gx.jpg'
import Template2 from './template2';


function HassasTartimMurbaySelesAndGFGX() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>SELES And GF-GX</Typography>
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
              
              <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"Bold"}}>Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:15}}>-Tam otomatik dahili kalibrasyon (FZ-i)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-GLP/GMP/ISO uyumlu dokümantasyon (FZ)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Saat / Tarih (FZ)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-PC bağlantısı (WinCT)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-İstatistik hesabı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Komparatör</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Formülasyon</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Kapasite indikatörü</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-RS-232</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Yoğunluk hesabı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Parça sayım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Alttan tartım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Hayvan tartım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-% tartım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik açılma / kapanma</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-13 farklı tartım birimde ölçüm yapabilme</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-3 kademeli ortam filtresi</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Işıklı vakum flüoresan ekran (VFD)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Anti-manyetik alaşım kasa</Typography>
              
      </Grid>
          <img style={{marginLeft:"2%",marginTop:200}} src={murbaySelesAndGFGX} alt={"cl3000"} height={200} width={"20%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
          </Grid>
      </Grid>
      
      <Template2></Template2>
      </>
    )
}

export default HassasTartimMurbaySelesAndGFGX