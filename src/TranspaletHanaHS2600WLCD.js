import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import transpaletHanaHS2600WLCD from "./Images/hana hs-2600 wlcd transpalet.png"
import transpaletHanaHS2600WLCDEkranGörüntüsü from "./Images/hana hs-2600 wlcd transpalet ekran görüntüsü.png"


function TranspaletHanaHS2600WLCD() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} fontSize={30}>HS-2600 WLCD</Typography>
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
            <Typography style={{fontSize:"18px",marginTop:20}}>-Duman, su, nem,geçirmez indikatör ve junction box</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-26 mm büyük LCD Display + Back-Light (Arka-Işık)</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Ağırlığı üst üst toplama fonksiyonu</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-HOLD (ağırlığı bekletme) fonksiyonu</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Dayanıklılığı ve tartımın kalitesini arttıran alt</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Komple kapalı alt şase</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Alt şase 8 mm, üst şase 6 mm kalınlık</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Transpaletin toplam ağırlığı 135 kg</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Zemnie hasar vermeyen, sessiz ön ve arka poliüretan tekerlekler</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Dayanıklılığı ve tartımın kalitesini arttıran alt şase bitim noktasında 12 mm U dönüşler</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-2500 kg kapasiteli döküm pompa</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Kauçuk kaplama tutma kolu</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Direkt AC kablo (adaptörsüz kullanım)
</Typography>
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={transpaletHanaHS2600WLCD} alt={"cl3000"}height={300} width={"18%"}></img>
      </Grid>
          <img style={{marginLeft:"36%",marginTop:60}} src={transpaletHanaHS2600WLCDEkranGörüntüsü} alt={"cl3000"}width={"36%"}></img>
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default TranspaletHanaHS2600WLCD