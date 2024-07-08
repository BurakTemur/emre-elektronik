import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import murbaySelesT28 from "./Images/murbay seles t28.jpg"
import Template2 from './template2';

function TartimMurbaySelesT28() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>T28</Typography>
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
         <Typography style={{fontSize:"18px"}}>Seles T28 Tartım Terazisi, ticari (M) onaylı terazi; 6,15, 30 kg kapasite seçenekleri ile istenilen ağırlıkta tartım hassasiyeti, fırın, paketleme, mal alım işlemlerinde pratik ve sorunsuz kullanım.</Typography>
      
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={murbaySelesT28} alt={"cl3000"}width={"18%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
              
                <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"Bold"}}>-Genel Özellikleri</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Lcd Ekran</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-6-15-30 kg kapasite seçeneği</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Ergonomik dizayn</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Elektrik ve Pilli Kullanım İmkanı</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Buton tuş takımı</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-İkili taksimat sayesinde daha hassas tartım</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Göstergedeki kullanışlı ikonlar sayesinde kolay anlaşılırlık</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik sıfırlama ve dara alma</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Ayarlanabilen ayakları sayesinde her zemine uyumlu</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Hızlı işlem yüksek doğruluk</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik kapanma fonksiyonu</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Plastik kefe</Typography>
                <Typography style={{fontSize:"18px",marginTop:5}}>-Kefe Ölçüleri 230×190 mm</Typography>

          </Grid>
  
      </Grid>
      
      <Template2></Template2>
      </>
    )
}


export default TartimMurbaySelesT28