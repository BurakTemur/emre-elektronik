import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import mettlerBcom from "./Images/metler bcom.jpg"
import mettlerBPlusT2MEkranGörüntüsü from "./Images/mettler b plus t2m ekran görüntüsü.PNG"


function BarkodluMettlerBCom() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>BCom</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px"}}>
Kolay kullanım, yüksek performans, Türkçe menü, tuş takımı ve gösterge, Dayanıklı yapı döküm gövde ve anti-stick özelliği ile etiket yapışmayan gövde yüzeyi, Hızlı etiket çıkışı (125mm/sn), Mükemmel baskı kalitesi (203dbi), Kayan satıcı özelliği, 70X2=140 ön hafıza tuşu, 10mb hafıza ile yüksek ürün ve içerik metni hafızası, Ean8, Ean13, Ean128, UPC, Code ve QR/Kare barkod basabilme özelliği, Tüm arka ofis programları ile uyumlu,• 1 x USB interface
1 x RS232 serial interfaces, 1 x RJ45 Ethernet interface,1 x RJ11 interface (12V) for controlling the cash register</Typography>
      
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={mettlerBcom} alt={"cl3000"}height={400} width={450}></img>
  
            <img alt='cl3000screenshot' src={mettlerBPlusT2MEkranGörüntüsü} height={800} width={1000} style={{marginLeft:665,marginTop:60}}></img>
      </Grid>
        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default BarkodluMettlerBCom