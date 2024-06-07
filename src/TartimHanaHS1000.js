import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import hanaHS1000LCD from "./Images/hana hs 1000.png"
import hanaHS1000LCDEkranGörüntüsü from "./Images/hana hs 1000 ekran görüntüsü.png"
function TartimHanaHS1000() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} fontSize={30}>HS-1000</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:"21%",marginTop:100}}>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:"2%"}}>
         <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:20}}>-Çukur kefe ve düz kefeli kullanım imkanı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Geniş LED ekran</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Parça sayma fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-HOLD (ağırlı dondurma-bekletme) fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-1/100000 dahili çözünürlük </Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Gr/kg/lb birim seçimi</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Alt değer üst değer alarm ayarı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Üst üste toplama ve toplama görme</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Akü ikaz sinyali</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Direkt AC kablo (adaptörsüz kullanım)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-195x280mm ölçülerinde 304 kalite paslanmaz çelik düz kefe,200x285mm ölçülerinde çukur kefe kullanımı</Typography>
      </Grid>
      <img style={{marginLeft:"2%",marginTop:30}} src={hanaHS1000LCD} alt={"cl3000"}width={"18%"}></img>
      </Grid>
      <Grid style={{marginLeft:"36%",marginTop:50}}>
      <img src={hanaHS1000LCDEkranGörüntüsü} alt={"cl3000"}></img>  
      </Grid>        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default TartimHanaHS1000