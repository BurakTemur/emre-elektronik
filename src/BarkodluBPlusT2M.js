import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import mettlerBPlusT2M from "./Images/mettler b plus t2m.jpg"
import mettlerBcomEkranGörüntüsü from "./Images/mettler bcom ekran görüntüsü.PNG"

function BarkodluBPlusT2M() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>BPlus T2M</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px"}}>Kolay kullanım, yüksek performans, Türkçe menü, tuş takımı ve gösterge, Dayanıklı yapı döküm gövde ve anti-stick özelliği ile etiket yapışmayan gövde yüzeyi, Hızlı etiket çıkışı (125mm/sn), Mükemmel baskı kalitesi (203dbi), Kayan satıcı özelliği, 70X2=140 ön hafıza tuşu, 32mb hafıza ile çok yüksek ürün ve içerik metni hafızası, Ean8, Ean13, Ean128, UPC, Code ve QR/Kare barkod basabilme özelliği, Tüm arka ofis programları ile uyumlu,</Typography>
      
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={mettlerBPlusT2M} alt={"cl3000"}height={400} width={450}></img>
          <Grid xs={6} style={{marginLeft:679,fontSize:"18px"}}>
              <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Operatör Ekranı</Typography>
              <Typography style={{fontSize:"18px",marginTop:20}}>Yüksek kontrastlı LCD Nokta-Matris Ekran Ağırlık: 6 hane</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Fiyat/kg: 6 hane</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Toplam: 7 hane</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Dara: 5 hane</Typography>
              <Typography style={{fontSize:"18px",marginTop:5,}}>Metin Satırı: 16 Alfanümerik karakter (nokta matris satırı)</Typography>
              <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"bold"}}>Müşteri Ekranı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Yüksek kontrastlı LCD ekran</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Yüksek kontrastlı LCD Nokta-Matris Ekran Ağırlık: 6 hane</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Fiyat/kg: 6 hane</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Toplam: 7 hane</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Dara: 5 hane</Typography>
         
          </Grid>
  
            <img alt='cl3000screenshot' src={mettlerBcomEkranGörüntüsü} height={800} width={1000} style={{marginLeft:665,marginTop:60}}></img>
      </Grid>
        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default BarkodluBPlusT2M