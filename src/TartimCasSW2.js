import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import casSW2 from "./Images/cas sw2.png"
import casSW2EkranGörüntüsü from "./Images/cas sw2 ekran görüntüsü.png"

function TartimCasSW2() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>SWII</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px"}}>SWII Tartım Terazisi SWII Tartım terazisi , ticari (M) onaylı terazi; 6,15, 30 kg kapasite seçenekleri ile istenilen ağırlıkta tartım hassasiyeti, 300 saat akü veya pilli kullanım seçeneği. Ayrıca fırın, paketleme, mal alım işlemlerinde pratik ve sorunsuz kullanım. Paslanmaz geniş kefe opsiyonu ile de tartım kapasitesini arttırabilirsiniz.</Typography>
      
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={casSW2} alt={"cl3000"}height={400} width={450}></img>
          <Grid xs={6} style={{marginLeft:679,fontSize:"18px"}}>
              
              <Typography style={{fontSize:"18px",marginTop:20}}>-Kapasite 6/15/30 (kg) seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Sanayi bakanlığı (M) onaylı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Elektrik veya Pil ve Akü ile Çalıştırma Seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Enerji tasarrufu sağlayan otomatik kapanma fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5,}}>-Buton tuş takımı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Az yer kaplayan tasarım & plastik kefe</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-SW-II : On/ Off, Sıfırlama, Dara, Hold (kg/ lb/ oz)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-AC adaptörü</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Kefe ölçüleri 22.5*19 cm</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Paslanmaz Çukur Kefe</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-RS232C Bilgisayar bağlantı</Typography>
         
          </Grid>
  
            <img alt='cl3000screenshot' src={casSW2EkranGörüntüsü} height={600} width={1000} style={{marginLeft:665,marginTop:60}}></img>
      </Grid>
        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default TartimCasSW2