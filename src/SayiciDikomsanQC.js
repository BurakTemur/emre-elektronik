import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import sayiciDikomsanQC from './Images/dikomsan qc.jpg'
import dikomsanQCEkranGörüntüsü from './Images/dikomsan qc ekran görüntüsü.png'
import Template2 from './template2';

function SayiciDikomsanQC() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>QC</Typography>
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
         <Grid xs={4} style={{marginTop:120,marginBottom:40,marginLeft:"2%"}}>
              <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"Bold"}}>Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:15}}>-Endüstriyel Sayıcı Terazi</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Geniş Açılı LCD Gösterge</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Parlak Ekran Işığı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Adet Sayma Fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Adet Toplama Fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik Birim Ağırlık Alma Fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik Kapanma Fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Sayım Alarm (ikaz sesi) Fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Çalışma Hızı Ayarlanabilir</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Şarj Edilebilir Akü veya Adaptör ile Kullanım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-RS-232 Bağlantısı</Typography>
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={sayiciDikomsanQC} alt={"cl3000"}width={"18%"}></img>
          <img style={{marginLeft:"36%",marginTop:50}} src={dikomsanQCEkranGörüntüsü} alt={"cl3000"} width={"40%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
          </Grid>
      </Grid>
      
      <Template2></Template2>
      </>
    )
}

export default SayiciDikomsanQC