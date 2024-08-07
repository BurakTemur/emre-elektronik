import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import temEgeLed from "./Images/tem ege led.jpg"
import Template2 from './template2';
function FiyatHesaplamaliTemEgeLed() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>Ege Led</Typography>
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
         <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:20}}>-Büyük, dayanıklı gövde)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-İkili taksimat (Çok Aralıklı 2x3.000 taksimat)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-3 x 6 hane kırmızı LED gösterge. Rakam boyu: 13 mm</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-250 adet PLU (Birim Fiyat Hafızası) </Typography>
              <Typography style={{fontSize:"18px",marginTop:5,}}>-15 adet tek tuşla ulaşılabilir PLU</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-80 saate kadar akülü kullanım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Yazıcılı modellerde Toplam Hafızası (M+, MR fonksiyonları)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Üst üste ve maksimum çekere kadar dara alabilme </Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik ve tuş ile sıfırlama</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Yazıcı, bilgisayar bağlantı opsiyonları</Typography>
      </Grid>
      <img style={{marginLeft:"2%",marginTop:30}} src={temEgeLed} alt={"cl3000"} width={"16%"}></img>
 
      </Grid>
        
  
      <Template2></Template2>
      </>
    )
}

export default FiyatHesaplamaliTemEgeLed