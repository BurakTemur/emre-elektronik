import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import endustriyelBaskullerTemMLB1001 from "./Images/tem mlb 1001.png"
import Template2 from './template2';

function EndustriyelBaskullerTemMLB1001() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>MLB 1001</Typography>
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
         <Grid xs={4} style={{marginTop:120,marginLeft:"2%"}}>
            <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Genel Özellikleri</Typography>
            <Typography style={{fontSize:"18px",marginTop:20}}>-MLB-1001 Serisi Çok Yük Hücreli Tek Şase Basküller</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Basküller standart 3.000 taksimatlı olarak üretilir.</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-IP67 koruma sınıfı çelik lama tipi loadcell kullanımı</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Genişlikte 2.40m, uzunlukta 6m’ye kadar istenilen her türlü değişik ve özel ebatta üretim seçeneği</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-300kg’dan 6.000kg’a kadar maksimum kapasite seçenekleri</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-İsteğe bağlı olarak harici rampa, siper, seyyar boyun, indikatör duvar aparatı, İndikatör masa aparatı kullanımı</Typography>
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={endustriyelBaskullerTemMLB1001} alt={"cl3000"}height={300} width={"18%"}></img>
      </Grid>

  
      <Template2></Template2>
      </>
    )
}

export default EndustriyelBaskullerTemMLB1001