import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import vincCasCasTon2Plus from "./Images/caston-II PLUS.png"
import vincCasCasTon2PlusEkranGörüntüsü from "./Images/cas caston-II PLUS ekran görüntüsü.png"
import Template2 from './template2';

function VincCasCasTon2Plus() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>CASTON-II Plus</Typography>
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
          <img style={{marginLeft:"2%",marginTop:30}} src={vincCasCasTon2Plus} alt={"cl3000"} width={"18%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
              <Typography style={{fontSize:"18px",marginTop:5,fontWeight:"bold"}}>-Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:10}}>-Okunması kolay geniş  LED göstergeli</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-1,3,5 ve 10 Ton kapasite seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Uzaktan kumanda ile kontrol imkanı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Akü ile çalışma/akü zayıf uyarısı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-On/Off, Sıfır, Dara ve Hold (Manuel veya Otomatik) fonksiyonları</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Hareketli tartımlar için ağırlığı dondurma seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik dara alma imkanı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Opsiyonel; Yazıcı ve TWN el terminali</Typography>
          </Grid>
  
          <img style={{marginLeft:"36%",marginTop:50}} src={vincCasCasTon2PlusEkranGörüntüsü} alt={"cl3000"}width={"36%"}></img>
          
      </Grid>
        
  
      <Template2></Template2>
      </>
    )
}

export default VincCasCasTon2Plus