import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import murbaySelesNHB from './Images/murbay seles nhb.jpg'
import murbaySelesNHBEkranGörüntüsü from './Images/murbay seles nhb ekran görüntüsü.jpg'
import Template2 from './template2';

function HassasTartimMurbaySelesNHB() {
    const navigate = useNavigate();

    return (    
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>SELES NHB</Typography>
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
              
              <Typography style={{fontSize:"18px",marginTop:20,fontWeight:"Bold"}}>Genel Özellikler</Typography>
              <Typography style={{fontSize:"18px",marginTop:15}}>-Sağlam yapısı (yük hücresi koruması, özel ön cam ve kolay okunur gösterge)</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Şarj kolaylığı (şarj edilebilir aküler kullanılır.) </Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Kompakt Tasarım</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Şarj edildikten sonra kablosuz kullanıma uygun bir hassas terazidir.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Karanlık ortamlarda kullanabilmeniz için aydınlatması bulunmaktadır.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Cam koruma fanusu sayesinde klimalı alanlarda stabil tartım yapılabilmektedir.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Numune ürün konularak sayım işlemi yapmaktadır.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Dahili otomatik kalibrasyon özelliği bulunmaktadır.</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Ön Lcd Ekran</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik sıfırlama ve dara alma</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Ayarlanabilen ayakları sayesinde her zemine uyumlu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Dahili aküsü ile 72 saat kullanma olanağı</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Otomatik kapanma fonksiyonu</Typography>
              <Typography style={{fontSize:"18px",marginTop:5}}>-Ağırlık birimini seçebilme (kg, g ,lb, oz )</Typography>

      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={murbaySelesNHB} alt={"cl3000"} height={400} width={"18%"}></img>
          <img style={{marginLeft:"36%",marginTop:50}} src={murbaySelesNHBEkranGörüntüsü} alt={"cl3000"} width={"45%"}></img>
          <Grid xs={6} style={{marginLeft:"36%",fontSize:"18px"}}>
          </Grid>
      </Grid>
      
      <Template2></Template2>
      </>
    )
}

export default HassasTartimMurbaySelesNHB