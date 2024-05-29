import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import sayiciDikomsanQC from './Images/dikomsan qc.jpg'
import dikomsanQCEkranGörüntüsü from './Images/dikomsan qc ekran görüntüsü.png'

function SayiciDikomsanQC() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>QC</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
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
          <img style={{marginLeft:60,marginTop:30}} src={sayiciDikomsanQC} alt={"cl3000"}height={400} width={450}></img>
          <img style={{marginLeft:665,marginTop:50}} src={dikomsanQCEkranGörüntüsü} alt={"cl3000"}height={400} width={550}></img>
          <Grid xs={6} style={{marginLeft:679,fontSize:"18px"}}>
          </Grid>
      </Grid>
      
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default SayiciDikomsanQC