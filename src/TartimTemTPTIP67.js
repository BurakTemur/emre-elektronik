import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import temTPTIP67 from "./Images/tem TPT IP67.jpg"


function TartimTemTPTIP67() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>TPT-IP67</Typography>
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
              <Typography style={{fontSize:"18px",marginTop:15}}>-IP 67 koruma sınıfı (toz ve sıvıya karşı)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Zorlu çalışma koşulları için özel tasarım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Paslanmaz çelik gövde</Typography>
              <Typography style={{fontSize:"18px",marginTop:5,}}>-Rahat okunur, aydınlatmalı LCD gösterge</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-SAYICI ve sınıflandırma modları</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Hold Fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Yazıcı ve bilgisayar bağlantı opsiyonu</Typography>
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={temTPTIP67} alt={"cl3000"}height={400} width={450}></img>
          <Grid xs={6} style={{marginLeft:679,fontSize:"18px"}}>
          </Grid>
      </Grid>
      
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default TartimTemTPTIP67