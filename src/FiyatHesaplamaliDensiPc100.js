import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import densiPC100 from "./Images/densi pc 100.png"
import densiPC100EkranGörüntüsü from "./Images/densi pc 100 ekran görüntüsü.png"

function FiyatHesaplamaliDensiPc100() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} fontSize={30}>PC-100</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid xs={1.5} style={{marginLeft:"21%",marginTop:100}}>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} color={"#6c757d"} fontSize={25}>Teraziler</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"}}} textTransform={"none"} fontSize={25} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
    </Grid>
         <Grid xs={4} style={{marginTop:120,marginLeft:40}}>
         <img style={{marginLeft:"2%",marginTop:30}} src={densiPC100} alt={"cl3000"}width={"60%"}></img> 
      </Grid>

      <Grid container>
        <Typography style={{fontWeight:"bold", fontSize:20,marginLeft:"36%",marginBottom:30}}>Ürün Özellikleri</Typography>   
        </Grid>
          <Grid xs={4} style={{border:"1px solid black",height:210,marginLeft:"36%"}}>

        <Box bgcolor={"#dee2e6"} height={35}><Typography  style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Fiyat hesaplar, hafızada tutar.</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Dahili şarj edilebilir akü ile elektrik kesintisinden etkilenmez.</Typography></Box>
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>32 tek tuşlu, ilave 200 kodlu fiyat hafızası vardır.</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Parlak, okunaklı, kırmızı iki taraflı göstergeye sahiptir.</Typography></Box> 
        <Box bgcolor={"#dee2e6"} height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Paslanmaz geniş kefe ve dayama desteği vardır.</Typography></Box>
        <Box height={35}><Typography style={{marginLeft:10,paddingTop:2,color:"rgba(0, 0, 0, 0.7)", fontSize:"18px"}}>Ağır çalışma şartlarına dayanıklı ve korumalıdır.</Typography></Box> 
        </Grid>
            <img alt='cl3000screenshot' src={densiPC100EkranGörüntüsü} width={"%30"} style={{marginLeft:"36%",marginTop:60}}></img>
      </Grid>
        
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default FiyatHesaplamaliDensiPc100