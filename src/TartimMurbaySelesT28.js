import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import murbaySelesT28 from "./Images/murbay seles t28.jpg"

function TartimMurbaySelesT28() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>T28</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px"}}>Seles T28 Tartım Terazisi, ticari (M) onaylı terazi; 6,15, 30 kg kapasite seçenekleri ile istenilen ağırlıkta tartım hassasiyeti, fırın, paketleme, mal alım işlemlerinde pratik ve sorunsuz kullanım.</Typography>
      
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={murbaySelesT28} alt={"cl3000"}height={400} width={400}></img>
          <Grid xs={6} style={{marginLeft:679,fontSize:"18px"}}>
              
                <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"Bold"}}>-Genel Özellikleri</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Lcd Ekran</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-6-15-30 kg kapasite seçeneği</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Ergonomik dizayn</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Elektrik ve Pilli Kullanım İmkanı</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Buton tuş takımı</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-İkili taksimat sayesinde daha hassas tartım</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Göstergedeki kullanışlı ikonlar sayesinde kolay anlaşılırlık</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik sıfırlama ve dara alma</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Ayarlanabilen ayakları sayesinde her zemine uyumlu</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Hızlı işlem yüksek doğruluk</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik kapanma fonksiyonu</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Plastik kefe</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Kefe Ölçüleri 230×190 mm</Typography>

          </Grid>
  
      </Grid>
      
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}


export default TartimMurbaySelesT28