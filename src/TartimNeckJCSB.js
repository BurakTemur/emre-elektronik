import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import neckJCSB from "./Images/neck jcs-b.jpg"
import Template2 from './template2';

function TartimNeckJCSB() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>JCS-B</Typography>
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
              <Typography style={{fontSize:"18px",marginTop:20}}>-Şarj edilebilir batarya</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Terazi açıldığında otomatik sıfır ayarı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik sıfır izleme</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Arka ışık (backlight)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Buton tuş takımı </Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Basit sayım fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Maks. 1/3 dara</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik kapama</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Tartım, sayım ve yüzde özellikleri</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Akü 5V altında otomatik kapanma</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Çalışma Sıcaklığı 0°C ~+40°C</Typography>
      </Grid>
      <img style={{marginLeft:"2%",marginTop:30}} src={neckJCSB} alt={"cl3000"}width={"18%"}></img>
      </Grid>
  
      <Template2></Template2>
      </>
    )
}

export default TartimNeckJCSB