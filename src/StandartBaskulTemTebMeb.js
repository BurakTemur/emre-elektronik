import React from 'react'
import Template from './template'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import standartBaskulTemTebMeb from "./Images/tem teb meb.png"
import standartBaskulTemTebMebEkranGörüntüsü from "./Images/tem teb meb ekran görüntüsü.png"

function StandartBaskulTemTebMeb() {
    const navigate = useNavigate();

    return (
      <>
          <Template></Template>
          <Typography style={{position:"absolute",top:610,left:680}} fontSize={30}>TEB MEB</Typography>
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
            <Typography style={{fontSize:"18px",marginTop:20}}>-Tek Yük Hücreli Basküller (30cmx40cm’den 90cmx100cm’e kadar)</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-TEB-MEB serilerinde döner boyun aparatı (İstenirse sabit boyun aparatı da kullanılabilir) EKO serilerinde ise sadece sabit boyun aparatı kullanılır</Typography>
            <Typography style={{fontSize:"18px",marginTop:5}}>-EKO serilerine yazıcı bağlanamamaktadır.</Typography>
      </Grid>
          <img style={{marginLeft:60,marginTop:30}} src={standartBaskulTemTebMeb} alt={"cl3000"}height={300} width={350}></img>
      </Grid>
      <img style={{marginLeft:665,marginTop:60}} src={standartBaskulTemTebMebEkranGörüntüsü} alt={"cl3000"}height={250} width={850}></img>
  
      <Box height={500} bgcolor={"white"}></Box>
      </>
    )
}

export default StandartBaskulTemTebMeb