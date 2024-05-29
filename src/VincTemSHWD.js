import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import vincTemSHWD from "./Images/tem sh wd.png"

function VincTemSHWD() {
   
  const navigate = useNavigate();

  return (
    <>
        <Template></Template>
        <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>SH-WD</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
        <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid>
       <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
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
        <img style={{marginLeft:60,marginTop:30}} src={vincTemSHWD} alt={"cl3000"}height={300} width={350}></img>
    </Grid>
      

    <Box height={500} bgcolor={"white"}></Box>
    </>
  )
}

export default VincTemSHWD