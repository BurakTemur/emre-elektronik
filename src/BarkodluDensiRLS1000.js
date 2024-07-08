import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DensiRLS1000 from "./Images/densi rls1000.jpg"
import BarkodluDensiRLS1000EkranGörüntüsü from "./Images/densi rls1000 ekran görüntüsü.jpg"
import Template2 from './template2';

function BarkodluDensiRLS1000() {
  const navigate = useNavigate();

  return (
    <>
        <Template></Template>
        <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>RLS-1000</Typography>
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
           <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>GÖSTERGELER</Typography>
          <Typography style={{fontSize:"18px",marginTop:20}}>Parlak ve Okunaklıdır.</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>7 Haneye Kadar Fiyatları Yazar ve Gösterir.</Typography>
          <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"bold"}}>YAZICI ÜNİTESİ</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>Baskısı Net ve Okunaklıdır.</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>Hızı yüksek (80-100 mm/sn)</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>Grafik Termal Yazıcıya Sahiptir.</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>Geniş Rulo Haznesine Sahiptir. (1200 Etiket/40 mm)</Typography>
          <Typography style={{fontSize:"18px",marginTop:5}}>30,35,40,60,80,90 mm uzunlukta etiket seçenekleri mevcuttur.</Typography>
    
    </Grid>
        <img style={{marginLeft:"2%",marginTop:30}} src={DensiRLS1000} alt={"cl3000"} width={"18%"}></img>

          <img alt='cl3000screenshot' src={BarkodluDensiRLS1000EkranGörüntüsü} width={"36%"} style={{marginLeft:"36%",marginTop:60}}></img>
    </Grid>
      

    <Template2></Template2>
    </>
  )
}

export default BarkodluDensiRLS1000 
