import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import casCL3000 from "./Images/cas cl 3000.png"
import casCL3000ekranGoruntusu from "./Images/cas cl 3000 ekran görüntüsü.png"
import Template2 from './template2';
function BarkodluCasCl3000() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>CL-3000</Typography>
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
         <Typography style={{fontSize:"18px"}}>CL3000 barkodlu terazi modelimiz market, süpermarket, şarküteri, kuruyemişçi, manav ve zincir mağazalar için kullanıma uygundur. Kullanım alanına göre 15 kg veya 30 kg tartım kapasitesi seçeneği mevcuttur. Tezgahtar satışı, fiyat etiketleme ve tezgah üstü terazi modu vardır.</Typography>
      
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={casCL3000} alt={"cl3000"}width={"18%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
              <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Kullanım Alanı</Typography>
              <Typography style={{fontSize:"18px",marginTop:20}}>Fiyat etiketleme/Ön paketleme</Typography>
              <Typography style={{fontSize:"18px",marginTop:10}}>Tezgah kullanımı (30)</Typography>
              <Typography style={{fontSize:"18px",marginTop:10}}>Standart : 10.000 PLU hafızası </Typography>
              <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"bold"}}>Ürün ismi </Typography>
              <Typography style={{fontSize:"18px",marginTop:10,}}>Yazıcı : Etiket & Fiş modu </Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Etiket Boyutları:</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Genişlik: 40 mm ~ 60 mm:</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Uzunluk: 30 mm ~ 80 mm:</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Yüksek hızlı yazıcı (100mm/sn)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Etiket formatı : 45 adet  (Sabit Etiket Formatı)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Raporlama: X1/X2, Z1/Z2, Terazi, PLU, PLU Bazında, Grup, Kısım, Saatlik ve Tezgahtar raporu                              </Typography>
         
          </Grid>
  
            <img alt='cl3000screenshot' src={casCL3000ekranGoruntusu} width={"52%"} style={{marginLeft:"36%",marginTop:60}}></img>
      </Grid>
        
      <Template2></Template2>
      </>
    )
}

export default BarkodluCasCl3000