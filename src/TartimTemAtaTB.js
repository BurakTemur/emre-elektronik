import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import temAtaTB from "./Images/tem ata tb serisi lcd son.jpg"
import Template2 from './template2';
function TartimTemAtaTB() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>Ata TB</Typography>
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
              <Typography style={{fontSize:"18px",marginTop:15}}>-6 hane kırmızı LED gösterge. Rakam boyu: 20 mm</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-40 saate kadar akülü kullanım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Toplam Hafızası (M+, MR fonksiyonları) (Onaylı model hariç)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Üst üste ve maksimum çekere kadar dara alabilme</Typography>
              <Typography style={{fontSize:"18px",marginTop:5,}}>-Otomatik ve tuş ile sıfırlama</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Yazıcı, bilgisayar bağlantı opsiyonları</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Sense serisinde özel yüksek hassasiyet ve kalitede yük hücresi kullanılmaktadır.</Typography>
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={temAtaTB} alt={"cl3000"}width={"18%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
          </Grid>
      </Grid>
      
      <Template2></Template2>
      </>
    )
}

export default TartimTemAtaTB