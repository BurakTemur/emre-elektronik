import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import mettlerFreshBaseU2 from "./Images/mettler fresh base u2.png"
import mettlerFreshBaseU2EkranGörüntüsü from "./Images/mettler fresh base u2 ekran görüntüsü.png"

function BarkodluMettlerFreshBaseU2() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>FreshBase U2</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px"}}>Dokunmatik Barkodlu Terazi, Orjinal Wi-Fi kart terazi içerisinde takılıdır</Typography>
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={mettlerFreshBaseU2} alt={"cl3000"}height={400} width={450}></img> 
          <Grid container marginLeft={85}>
            <Typography style={{fontWeight:"bold", fontSize:20}}>Ürün Özellikleri</Typography>
          </Grid>
          
          <Grid xs={5} style={{border:"1px solid black",height:560,marginLeft:680,marginTop:30}}>
           
        <Box bgcolor={"#dee2e6"} height={35}><Typography  style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Yüksek çözünürlüklü LCD ekran, canlı ekran aydınlatma özelliği net görüntü kalitesi</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Müşteri ekranında slite resim geçişi</Typography></Box>
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Türkçe menü ve kolay kullanım</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Kullanıcı Satış ve Self Servis özelliği</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Ayarlanabilir hızlı tuş takım dizaynı ve gruplandırma sistemi ile kolay ulaşım</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Komple döküm gövde</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Antistatik özelliği ile kir ve etiket tutmaz gövde</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Terazi üzerinden wifi ayarlanabilme</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Backup özelliği ile kolay kurulum</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)"}}>Fiş ve etiket dizaynında kare barkod basabilme</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Kare barkod ile birden fazla ürünü tek barkoddan okutma</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)"}}>Etiket ve fişe logo basabilme</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Ayarlanabilen ve gruplandırılabilen ön hafıza tuş takımı</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)"}}>Etikete ve fişe logo basabilme</Typography></Box>
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Adetli, ağırlıklı, tutar ve birim fiyat barkoda basabilme</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)"}}>Saatlik, haftalık, aylık ve yıllık rapor alabilme</Typography></Box>

        </Grid>
            <img alt='cl3000screenshot' src={mettlerFreshBaseU2EkranGörüntüsü} height={800} width={1000} style={{marginLeft:665,marginTop:60}}></img>
      </Grid>
        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default BarkodluMettlerFreshBaseU2