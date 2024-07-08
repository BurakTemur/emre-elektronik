import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import casIE1700 from "./Images/IE-1700.png"
import casIE1700EkranGörüntüsü from "./Images/cas ıe 1700 ekran görüntüsü.png"
import Template2 from './template2';

function VincCasIE1700() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>IE-1700</Typography>
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
          <img style={{marginLeft:"2%",marginTop:30}} src={casIE1700} alt={"cl3000"} width={"18%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
              <Typography style={{fontSize:"18px",marginTop:5,fontWeight:"bold"}}>-Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:10}}>-500 kg ve 1000 kg kapasite seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-1/2000~1/3000 yüksek hassasiyetli çözünürlüktedir </Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Şarj edilebilir Akü </Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Su,nem ve toza karşı dayanıklı gövde</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>Hareketli tartımlar için ağırlığı dondurma seçeneği</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-OIML, CE gibi uluslararası kalite sertifikaları</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Uzaktan kumanda</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Kasapların kullanımına uygun et çengelli baskül</Typography>
          </Grid>
  
          <img style={{marginLeft:"36%",marginTop:50}} src={casIE1700EkranGörüntüsü} alt={"cl3000"}width={"45%"}></img>
          
      </Grid>
        
  
      <Template2></Template2>
      </>
    )
}

export default VincCasIE1700