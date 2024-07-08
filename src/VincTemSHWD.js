import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import vincTemSHWD from "./Images/tem sh wd.png"
import Template2 from './template2';

function VincTemSHWD() {
   
  const navigate = useNavigate();

  return (
    <>
        <Template></Template>
        <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>SH-WD</Typography>
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
          <Typography style={{fontSize:"18px",marginTop:20}}>-Lityum batarya ile uzun pil performansı</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Basit, kompakt, az yer kaplayan, portatif yapı</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Su sızdırmazlık özelliği</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Büyük askı yapısı ile birçok vinç uygulamasında kullanım uygunluğu</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-150m’ye kadar kablosuz haberleşme özelliği</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Sıfırlama, dara alma, kalibrasyon fonksiyonlarını kablosuz indikatör veya ağırlık göstergeli yazıcı ile uzaktan uygulayabilme</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Kolay okunabilir gösterge yapısı</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Kalibrasyon yapmadan hassasiyeti değiştirebilme özelliği</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-30dk kullanım olmadığında otomatik kapanma özelliği ile enerji tasarrufu sağlama</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-5 hane LED (el tipi gösterge) ya da 6 hane LCD (fiş yazıcı) gösterge ile ağırlığı 25m’ye kadar kolaylıkla görebilme</Typography>
    
    </Grid>
        <img style={{marginLeft:"2%",marginTop:30}} src={vincTemSHWD} alt={"cl3000"}height={300} width={"18%"}></img>
    </Grid>
      

    <Template2></Template2>
    </>
  )
}

export default VincTemSHWD