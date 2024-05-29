import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import sayiciHanaHS7500 from './Images/hana hs7500.png'
import hanaHS7500EkranGörüntüsü from './Images/hana hs7500 ekran görüntüsü.png'


function SayiciHanaHS7500() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>HS-7500 C</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
              
              <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"Bold"}}>Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:15}}>-26 mm geniş LCD ekran</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Profosyonel parça sayma fonksiyonları</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-HOLD (ağırlı dondurma-bekletme) fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-1/100000 dahili çözünürlük</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Gr/kg/lb birim seçimi</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Alt değer üst değer alarm ayarı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Üst üste toplama ve toplama görme</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Akü ikaz sinyali</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Direkt AC kablo (adaptörsüz kullanım)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Çukur kefe opsiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-290x230mm ölçülerinde 304 kalite paslanmaz çelik düz kefe,</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-310x235mm ölçülerinde çukur kefe (opsiyonel) kullanımı</Typography>
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={sayiciHanaHS7500} alt={"cl3000"}height={400} width={450}></img>
          <img style={{marginLeft:665,marginTop:50}} src={hanaHS7500EkranGörüntüsü} alt={"cl3000"}height={600} width={650}></img>
          <Grid xs={6} style={{marginLeft:679,fontSize:"18px"}}>
          </Grid>
      </Grid>
      
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default SayiciHanaHS7500