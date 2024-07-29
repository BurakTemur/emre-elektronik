import React from 'react'
import Template from './template'
import { Typography,Grid } from '@mui/material'
import Template2 from './template2';
function Hakkimizda() {
  return (
    <>
    <Template></Template>
    <Grid container xs={12} sm={8} md={8} lg={6}  sx={{marginLeft:{xs:"3%",sm:"15%",md:"20%",lg:"25%"},marginTop:"60px"}}>
    <Grid container sx={{backgroundColor:"#004b6a" ,height:"50px", width:"30%", justifyContent:"center" ,alignItems:"center"}}>
      <Typography sx={{color:"white",fontWeight:"bold",fontSize:"20px"}}>Hakkımızda</Typography>
    </Grid>
    <Grid  >
    <Typography sx={{fontSize:"20px",marginTop:"40px",fontFamily:"-sans-serif",letterSpacing:"0rem"}}>Firmamız 1991 yılında kurulmuş olup sürekli yenilikleri takip eden güncel piyasa şartlarına göre yönünü belirleyen bir kuruluştur. Terazi sektörü dışında taleplere cevap
      vermek için etiket ve streç imalatına girmiştir.
    </Typography>
     <Typography sx={{fontSize:"20px",marginTop:"20px",fontFamily:"-sans-serif",letterSpacing:"0rem"}}>Firmamız ilimizin en büyük işletmeleriyle ticaret yapmaktadır. Yılların vermiş olduğu deneyim ve bize olan güvenle müşteri portföyümüzü
      genişlettik. Yenilikçi bir anlayış ve müşteri odaklı çalışma prensibimiz devam etmektedir.
    </Typography> 
    <Typography sx={{fontSize:"20px",marginTop:"20px",fontFamily:"-sans-serif",letterSpacing:"0rem"}}>Sizleri mağdur etmemek için ekip olarak gerekli gayreti göstermekteyiz. Birlikte 
    başarıya ulaşmak için var gücümüzle çalışmaktayız.
    </Typography>
    </Grid>
    </Grid>
    <Template2></Template2>
    </>
  )
}

export default Hakkimizda