import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import casERJR from "./Images/cas er jr.png"
import casERJREkranGörüntüsü from "./Images/cas er jr ekran görüntüsü.png"
import Template2 from './template2';

function FiyatHesaplamaliCasERJR() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>ER JR</Typography>
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
         <Typography style={{fontSize:"18px"}}>ER JR boyunlu fiyat hesaplamalı terazidir.  Pazar, pastane, kasap, kuruyemiş, şarküteri tezgahlarında paslanmaz geniş kefesi ve kullanım kolaylığı ile güvenle kullanabileceğiniz bir ürün. RS232 ile bağlantı sağlanmaktadır. Dokunmatik Pos PC yapılan bağlantılar da hızlı tartım verisi göndermektedir. </Typography>
      
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={casERJR} alt={"cl3000"}width={"18%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",marginTop:30,fontSize:"18px"}}>
              <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:20}}>-Sanayi bakanlığı (M) onaylı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Boyunlu model</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Kapasite 15 kg / 30 kg</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-LCD ekran </Typography>
              <Typography style={{fontSize:"18px",marginTop:5,}}>-İkili taksimat</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik kapanma özelliği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Paslanmaz kefe</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Dahili akü </Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Opsiyonel ( RS-232C PC bağlantı)</Typography>

          </Grid>

          
          <img alt='cl3000screenshot' src={casERJREkranGörüntüsü} width={"50%"} style={{marginLeft:"36%",marginTop:60}}></img>
      </Grid>
        
  
      <Template2></Template2>
      </>
    )
}

export default FiyatHesaplamaliCasERJR