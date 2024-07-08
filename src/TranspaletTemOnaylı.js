import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import transpaletTemOnaylı from "./Images/tem onaylı transpalet.png"
import Template2 from './template2';

function TranspaletTemOnaylı() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 1.51vw, 30px)", whiteSpace:"nowrap"}}>ONAYLI</Typography>
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
            <Typography style={{fontSize:"18px",marginTop:5 , fontWeight:"bold"}}>Genel Özellikleri</Typography>
            <Typography style={{fontSize:"18px",marginTop:20}}>-Elektronik transpalet baskülü</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Her türlü çalışma ortamında kolay kullanım</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Ağır iş şartlarında çalışabilmesi için uygun tasarım</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-100 saate kadar akülü kullanım</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Yazıcı ve PC çıkışı opsiyonları</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Sayıcı indikatör kullanımı ile parça sayımı özelliği</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-2000kg ya da 3000kg maksimum tartım kapasiteleri</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-Paslanmaz model ile suya dayanıklı, gıda standartlarına uygun yapı</Typography>
      </Grid>
          <img style={{marginLeft:"2%",marginTop:30}} src={transpaletTemOnaylı} alt={"cl3000"}height={300} width={"18%"}></img>
      </Grid>

  
      <Template2></Template2>
      </>
    )
}

export default TranspaletTemOnaylı