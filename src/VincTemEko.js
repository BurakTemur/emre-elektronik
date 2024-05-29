import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import vincTemEko from "./Images/tem eko vinç.png"

function VincTemEko() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>EKO</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
            <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Genel Özellikleri</Typography>
            <Typography style={{fontSize:"18px",marginTop:20}}>-EKO+ Serisi Vinç Baskülleri (ONAYLI)</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-150kg’dan 1ton’a kadar maksimum çekerli ürün üretebilme</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-6 hane LCD gösterge. Rakam boyu: 28mm / 6 hane LED gösterge. Rakam boyu: 20mm</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-LCD göstergeli modellerde standart gösterge aydınlatması (backlight)</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-5 tuşlu basit kullanım</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-LCD göstergeli modellerde 100 saate kadar / LED göstergeli modellerde 40 saate kadar akülü kullanım</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-PC çıkış opsiyonu</Typography>

      
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={vincTemEko} alt={"cl3000"}height={300} width={350}></img>
      </Grid>
        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default VincTemEko