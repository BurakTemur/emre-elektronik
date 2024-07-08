import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import mettlerBPlusH2L from "./Images/mettler b plus h2l.jpg"
import mettlerBPlusH2LEkranGörüntüsü from "./Images/mettler b plus h2l ekran görüntüsü.PNG"
import Template2 from './template2';
function BarkodluMettlerBPlusH2L() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>BPlus H2L</Typography>
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
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px"}}>Balıkçı Terazisi,
Kolay kullanım, yüksek performans, Türkçe menü, tuş takımı ve gösterge, Dayanıklı yapı döküm gövde ve anti-stick özelliği ile etiket yapışmayan gövde yüzeyi, Hızlı etiket çıkışı (125mm/sn), Mükemmel baskı kalitesi (203dbi), Kayan satıcı özelliği, 70X2=140 ön hafıza tuşu, 32mb hafıza ile çok yüksek ürün ve içerik metni hafızası, Ean8, Ean13, Ean128, UPC, Code ve QR/Kare barkod basabilme özelliği, Tüm arka ofis programları ile uyumlu,</Typography>
      
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={mettlerBPlusH2L} alt={"cl3000"}width={"18%"}></img> 
          <Grid container marginLeft={"36%"} marginTop={5}>
            <Typography style={{fontWeight:"bold", fontSize:20}}>Ürün Özellikleri</Typography>
          </Grid>
          
          <Grid xs={5} style={{border:"1px solid black",height:560,marginLeft:"36%",marginTop:30}}>
           
        <Box bgcolor={"#dee2e6"} height={35}><Typography  style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Kolay Türkçe menü</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Ergonomik, dekoratif özel tasarım</Typography></Box>
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Dayanıklı yapı polimer yüzey</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Mükemmel baskı kalitesi</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Kapasitif dokunmatik ekran</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Yüksek çözünürlüklü LCD ekran, canlı ekran aydınlatma özelliği, net görüntü kalitesi</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Yürüyen mesaj özelliği</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Kaliteli ve kolay temizlenen tuş takımı</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Kolay rulo ve etiket değişimi</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)"}}>Kablolu ve kablosuz (wireless) iletişim seçenekleri</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Merkezden şubelerdeki terazilere uzak erişim</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)"}}>Tüm arka ofis programları ve pos kasalar ile entegreli</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Bilgisayar program desteği</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)"}}>Etikete ve fişe logo basabilme</Typography></Box>
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Adetli, ağırlıklı, tutar ve birim fiyat barkoda basabilme</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)"}}>Saatlik, haftalık, aylık ve yıllık rapor alabilme</Typography></Box>

        </Grid>
            <img alt='cl3000screenshot' src={mettlerBPlusH2LEkranGörüntüsü} width={"52%"} style={{marginLeft:"36%",marginTop:60}}></img>
      </Grid>
        
  
      <Template2></Template2>
      </>
    )
}

export default BarkodluMettlerBPlusH2L