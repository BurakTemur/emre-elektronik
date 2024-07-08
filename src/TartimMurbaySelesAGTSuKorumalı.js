import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import murbaySelesAgtSuKorumalı from "./Images/murbay seles agt su korumalı.jpg"
import Template2 from './template2';

function TartimMurbaySelesAGTSuKorumalı() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>AGT Su Korumalı</Typography>
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
         <Typography style={{fontSize:"18px"}}> Seles Agt Su Korumalı Terazi, 6,15,30 Kg akülü kullanım seçenekleri mevcuttur. LCD göstergesi ile işletmelerin satış veya kontrol noktalarında kullanılabilir. IP 68 koruma sınıfında olan terazi ıslak ortamlarda güvenle kullanıma uygundur.</Typography>
        
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={murbaySelesAgtSuKorumalı} alt={"cl3000"}width={"18%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
              
          <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"Bold"}}>-Genel Özellikleri</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Lcd Ekran</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Profesyonel kurumlar tarafından dizayn edilmiştir ve su geçirmezlik seviyesi IP68’e çıkarılmıştır.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Daha verimli bir sonuç almak için, titreşim, en aza indirgenerek tasarlanmıştır.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Aşırı yüklemeye karşı otomatik koruma alarmı mevcuttur.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik kalibrasyon ve otomatik sıfırlama fonksiyonu mevcuttur.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Tartım uyarı fonksiyonu mevcuttur.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Sayma fonksiyonu mevcuttur.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Voltaj bildirimi ve düşük voltaj uyarısı mevcuttur..</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-6-15-30 kg kapasite seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Ergonomik dizayn</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Elektrik ve Pilli Kullanım İmkanı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Buton tuş takımı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Göstergedeki kullanışlı ikonlar sayesinde kolay anlaşılırlık</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik sıfırlama ve dara alma</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Ayarlanabilen ayakları sayesinde her zemine uyumlu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Hızlı işlem yüksek doğruluk</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik kapanma fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-IP 68 Su Korumalı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Su geçirmez güç konnektörü</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Paslanmaz kefe</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Kefe Ölçüleri 227 x 180 mm</Typography>
          </Grid>
  
      </Grid>
      
      <Template2></Template2>
      </>
    )
}

export default TartimMurbaySelesAGTSuKorumalı