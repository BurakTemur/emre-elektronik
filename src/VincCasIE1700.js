import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import casIE1700 from "./Images/IE-1700.png"
import casIE1700EkranGörüntüsü from "./Images/cas ıe 1700 ekran görüntüsü.png"


function VincCasIE1700() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>IE-1700</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px"}}>IE 1700A Vinç Baskülü IE 1700A serisi hafif ve sağlam yüksek hassasiyetli çengel basküldür.</Typography>
      
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={casIE1700} alt={"cl3000"}height={400} width={350}></img>
          <Grid xs={6} style={{marginLeft:679,fontSize:"18px"}}>
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
  
          <img style={{marginLeft:665,marginTop:50}} src={casIE1700EkranGörüntüsü} alt={"cl3000"}height={500} width={900}></img>
          
      </Grid>
        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default VincCasIE1700