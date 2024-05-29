import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import murbaySelesS29SuKorumalı from "./Images/murbay seles s29 su korumalı.jpg"


function TartimMurbaySelesS29() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>S29 Su Korumalı</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px"}}>Seles S29 Su Korumalı Terazi, paslanmaz tartım terazisi,  IP 65 koruma sınıfında olan terazi ıslak ortamlarda güvenle kullanıma uygundur. Geniş ve paslanmaz kefesi ve arka gösterge seçeneği ile aynı anda ikili paketleme veya satış noktasında müşteri ekranı olarak kullanabilme imkanı verir.</Typography>
      
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={murbaySelesS29SuKorumalı} alt={"cl3000"}height={400} width={400}></img>
          <Grid xs={6} style={{marginLeft:679,fontSize:"18px"}}>
              
                <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"Bold"}}>-Genel Özellikleri</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Lcd Ekran</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-6-15-25 kg kapasite seçeneği</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Ergonomik dizayn</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Komple Paslanmaz Dış Yüzey Yapısı ile Tozlu ve Kimyasal Ortam Korumalı</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-İkili taksimat sayesinde daha hassas tartım</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-TGöstergedeki kullanışlı ikonlar sayesinde kolay anlaşılırlık</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik sıfırlama ve dara alma</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Ayarlanabilen ayakları sayesinde her zemine uyumlu</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Hızlı işlem yüksek doğruluk</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik kapanma fonksiyonu</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Dara Alır, Otomatik veya Tuş ile Sıfırlama Yapar</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Balık Üretimi Çiftlikleri, Gıda Üretim Alanları Vb.</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Islak, Yoğun ve Hijyenik Alanlarda Kullanıma Uygundur.</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-IP 65 Su Korumalı Paslanmaz Çelik Kasa</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Paslanmaz Kefe</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Kefe Ölçüleri 230×190 mm</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Ürün Ölçüleri 243x300x127 mm</Typography>
         
          </Grid>
  
      </Grid>
      
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default TartimMurbaySelesS29             