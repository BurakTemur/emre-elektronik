import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import vincMurbaySelesOCSS1 from "./Images/murbay seles ocs s1.jpg"


function VincMurbaySelesOCSS1() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>SELES OCS-S1</Typography>
      <Grid container xs={12} bgcolor={"white"}>
      <Grid xs={1.5} style={{marginLeft:400,marginTop:100}}>
          <Grid item onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
          <Box height={10}></Box>
          <Grid item onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
      </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <Typography style={{fontSize:"18px"}}>Alüminyum döküm gövde, yüksek kaliteye sahip kanca ve kilit sistemi, güvenilir tartım sonuçları için özel yük hücresi. Uzun süreli kullanım ve istikrar için son teknoloji kullanılarak hazırlanmış kaliteli entegre devreler. Depolama, tekstil, otomotiv, metal işleri vb. birçok sanayi alanında kullanıma uygundur.</Typography>
      
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={vincMurbaySelesOCSS1} alt={"cl3000"}height={400} width={350}></img>
          <Grid xs={6} style={{marginLeft:679,fontSize:"18px"}}>
              <Typography style={{fontSize:"18px",marginTop:5,fontWeight:"bold"}}>-Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:10}}>-OIML R76, GB/T11883-2002 uygundur.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-ISO9001-2000 kalite sistemi sertifikası vardır.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Daha yüksek için paslanmaz çelik yük reseptörü ve aliminyum döküm niteliği vardır.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-20mm LCD, görsel mesafe 10m. Çıkarılabilir çengel.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-SMT teknoloji, bütünleştirilmiş devre kalitesi ve tesis edilmiş tartım loadcelli uzun süreli stabillik sağlar.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Düşük enerji tüketim dizaynı ile 3*AA bataryası</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Farklı renk seçenekleri. Taşıma kolaylığı.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Depolama, tekstil, otomotiv, metal işleri vb. bir çok sanayi alanında kullanıma uygundur.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Alüminyum döküm gövde, yüksek kaliteye sahip kanca ve kilit sistemi, güvenilir tartım sonuçları için özel yük hücresi.</Typography>
          </Grid>
  
    
          
      </Grid>
        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default VincMurbaySelesOCSS1