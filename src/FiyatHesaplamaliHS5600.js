import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import hana5600LCD from "./Images/hana 5600 lcd.png"
import hana5600ekranGörüntüsü from "./Images/hana 5600 lcd ekran görüntüsü.png"

function FiyatHesaplamaliHS5600() {

  const navigate = useNavigate();

  return (
    <>
        <Template></Template>
        <Typography style={{position:"absolute",top:610,left:"36%"}} fontSize={30}>HS-5600</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:"21%",marginTop:100}}>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid>
       <Grid xs={4} style={{marginTop:120,marginLeft:"2%"}}>
          <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Genel Özellikleri</Typography>
          <Typography style={{fontSize:"18px",marginTop:20}}>-RS-232 bilgisayar/Printer bağlantısı (Opsiyonel)</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-18 direkt fiyat hafızası</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Tek şarj ile 1000 saat akü kullanımı</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Büyük LCD Display</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Akü seviyesinin kademeli olarak görebilmesi</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Şarj olduğunu gösteren ikaz lambası</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-Karanlık ortamlarda görülmesini sağlayan uzun ömürlü yüksek parlak LED Back-Light</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>-265x340mm ölçülerinde 304 kalite paslanmaz çelik çukur kefe</Typography>
    
    </Grid>
        <img style={{marginLeft:"2%",marginTop:30}} src={hana5600LCD} alt={"cl3000"} width={"18%"}></img>

          <img alt='cl3000screenshot' src={hana5600ekranGörüntüsü} width={"36%"} style={{marginLeft:"36%",marginTop:60}}></img>
    </Grid>
      

    <Box height={500} bgcolor={"white"}></Box>
    </>
  )
}

export default FiyatHesaplamaliHS5600