import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import casSW2SuKorumalı from "./Images/cas sw2 su korumalı.png"
import Template2 from './template2';
function TartimCasSw2SuKorumalı() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>SWII Su Korumalı</Typography>
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
         <Grid xs={4} style={{marginTop:120,marginLeft:"25"}}>
         <Typography style={{fontSize:"18px"}}>CAS SWII-W SU KORUMALI TARTIM TERAZİSİ 6,15,30 Kg akülü ve pilli kullanım seçenekleri mevcuttur. Sanayi bakanlığı M onayı, LCD veya LED göstergesi ile işletmelerin satış veya kontrol noktalarında kullanılabilir. IP 68 koruma sınıfında olan terazi ıslak ortamlarda güvenle kullanıma uygundur.</Typography>
      
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={casSW2SuKorumalı} alt={"cl3000"}width={"18%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",marginTop:30,fontSize:"18px"}}>
              
              <Typography style={{fontSize:"18px",marginTop:20}}>-Sanayi bakanlığı (M) onaylı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Kapasite 15 kg / 30 kg</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-IP68 Su Korumalı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-LCD ve LED ekran seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5,}}>-İkili taksimat</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik kapanma fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Su geçirmez güç konektörü</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Paslanmaz kefe</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Pil yaklaşık 400 saat kullanım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Buton tuş takımı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Kefe ölçüleri 23.7*19.2 cm</Typography>
         
          </Grid>
  
      </Grid>
      
      <Template2></Template2>
      </>
    )
}

export default TartimCasSw2SuKorumalı