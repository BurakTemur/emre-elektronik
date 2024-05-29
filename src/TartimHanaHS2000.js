import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import hanaHS2000LCD from "./Images/hana hs 2000.png"
import hanaHS2000LCDEkranGörüntüsü from "./Images/hana hs 2000 ekran görüntüsü.png"


function TartimHanaHS2000() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>HS-2000</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:20}}>-Geniş LED ekran</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-3 x 6 hane kırmızı LED gösterge. Rakam boyu: 13 mm</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Arka müşteri ekranı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-8 adet tek tuşla ulaşılabilir PLU </Typography>
              <Typography style={{fontSize:"18px",marginTop:5,}}>-40 saate kadar akülü kullanım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Parça sayma fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-HOLD (ağırlı dondurma-bekletme) fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-1/100000 dahili çözünürlük </Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Gr/kg/lb birim seçimi</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Alt değer üst değer alarm ayarı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Üst üste toplama ve toplama görme</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Akü ikaz sinyali</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Direkt AC kablo (adaptörsüz kullanım)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Çukur kefe opsiyonu</Typography>
      </Grid>
      <img style={{marginLeft:60,marginTop:30}} src={hanaHS2000LCD} alt={"cl3000"}height={400} width={450}></img>
      </Grid>
      <Grid style={{marginLeft:665,marginTop:50}}>
      <img src={hanaHS2000LCDEkranGörüntüsü} alt={"cl3000"}></img>  
      </Grid>        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default TartimHanaHS2000
