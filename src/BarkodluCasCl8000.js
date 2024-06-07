import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import casCL8000 from "./Images/cas cl 8000.png"

function BarkodluCasCl8000() {

    const navigate = useNavigate();

  return (
    <>
        <Template></Template>
        <Typography style={{position:"absolute",top:610,left:"36%"}} fontSize={30}>CL-8000</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:"21%",marginTop:100}}>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid>
       <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
       <Typography style={{fontSize:"18px"}}>15" dokunmatik ekranlı yeni model CAS CL-8000, kullanışlı ve modern bir arayüze sahip süpermarketler için bir standart satış ve self servis modu bulunan terazi sistemidir.</Typography>
    
    </Grid>
        <img style={{marginLeft:"2%",marginTop:"2%"}} src={casCL8000} alt={"cl3000"} width={"18%"}></img>
        <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
            <Typography style={{fontSize:"18px",marginTop:5}}>9,7" ikinci ekran, kablolu ve kablosuz bağlantı, PLU arzu edilen pozisyon ve size göre yerleştirilebilir. PLU image, font, arka plan  rengi istenildiği değiştirilebilir.</Typography>
            <Typography style={{fontSize:"18px",marginTop:20}}>-Gelişmiş Raporlama Fonksiyonu</Typography>
            <Typography style={{fontSize:"18px",marginTop:10}}>-Günlük Satış Raporları</Typography>
            <Typography style={{fontSize:"18px",marginTop:10}}>-Grafik Satış Raporları</Typography>
            <Typography style={{fontSize:"18px",marginTop:20}}>Çeşitli Rapor Türleri</Typography>
            <Typography style={{fontSize:"18px",marginTop:10,marginLeft:20}}>- Yıllık, aylık, haftalık, günlük</Typography>
            <Typography style={{fontSize:"18px",marginTop:10,marginLeft:20}}>- Belli bir dönemde raporlama</Typography>
            <Typography style={{fontSize:"18px",marginTop:10,marginLeft:20}}>- Ürün bazında raporlama</Typography>
        </Grid>

        <Grid xs={5} style={{border:"1px solid black",height:350,marginLeft:"36%",marginTop:40}}>
        <Box bgcolor={"#dee2e6"} height={35}><Typography  style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Intel J1900 (2.42 GHz)</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>DDR3L 4GB</Typography></Box>
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>64GB SSD</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>15 inç TFT LED ekran, 1024x768 çözünürlük</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Kapasitif dokunmatik ekran</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Kefe boyutu 368 mm x 288 mm</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Etiket Uzunluğu: Maks. 200 mm, Baskı Genişliği: 56 mm,</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Kağıt Genişliği: 65 mmÖnde 4, arkada 2 toplam 6 adet USB 2.0</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>1x 9-pin COM, 2x RJ45 COM</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)"}}>Opsiyonel wifi</Typography></Box>

        </Grid>
        
    </Grid>
      

    <Box height={500} bgcolor={"white"}></Box>
    </>
  )
}

export default BarkodluCasCl8000