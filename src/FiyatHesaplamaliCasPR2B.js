import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import casPR2B from "./Images/cas pr II b.png"


function FiyatHesaplamaliCasPR2B() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} fontSize={30}>PR-II B</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:"21%",marginTop:100}}>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:"2%"}}>
         <Typography style={{fontSize:"18px"}}>PR-II B , Fiyat hesaplamalı boyunsuz terazi ticari onaylı alım ve satım işlerinde kullanılır. Pastane, Şarküteri, Kasap, Manav, Kuruyemiş tezgahlarında paslanmaz geniş kefesi, sağlam yapısı ve kullanım kolaylığı ile güvenle kullanabilirsiniz. Terazi 8 saat şarj edilerek 300 saat kesintisiz akülü olarak kullanılabilir. </Typography>
      
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={casPR2B} alt={"cl3000"}width={"18%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",marginTop:40,fontSize:"18px"}}>
              <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:20}}>-Ticari onaylı (M)Belgeli</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Boyunsuz seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-LCD ve LED seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>- 6 / 15 / 30 kg kapasite seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5,}}>-Akülü kullanım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Ağırlık - Birim Fiyat - Toplam Fiyat Göstergesi</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-7 Adet ürün hafıza tuşu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Backlight aydınlatmalı LCD gösterge </Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Sıvı ve toz korumalı tuş takımı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Tartılan ürünlerin darasını alabilme</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Dara: 5 hane</Typography>
         
          </Grid>
      </Grid>
        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default FiyatHesaplamaliCasPR2B