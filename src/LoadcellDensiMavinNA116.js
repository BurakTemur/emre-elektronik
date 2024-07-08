import Template from './template'
import Template2 from './template2'
import { Grid ,Box, Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MavinNa116EkranGörüntüsü from './Images/Mavin NA116 Ekran Görüntüsü.png'

function LoadcellDensiMavinNA116() {

    const navigate = useNavigate();

  return (
    <>
     <Template></Template>
     <Typography style={{position:"absolute",top:610,left:"36%"}} sx={{"&:hover":{color:"black"} , fontSize: "clamp(20px, 2.51vw, 30px)", whiteSpace:"nowrap"}}>Mavin NA116 - NA117</Typography>
    <Grid container xs={12} bgcolor={"white"}>
    <Grid style={{marginLeft:"21%",marginTop:100}}>
    <Grid item  xs={12} lg={12} onClick={()=>navigate("/Teraziler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover":{bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"} , fontSize: "clamp(10px, 1.2vw, 23px)", whiteSpace:"nowrap"}} textTransform={"none"} color={"#6c757d"} fontSize={23}>Teraziler</Typography></Button> </Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Basküller")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"} , fontSize: "clamp(10px, 1.2vw, 23px)", whiteSpace:"nowrap"}} textTransform={"none"} fontSize={23} color={"#6c757d"}>Basküller</Typography></Button></Grid>    
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Vinç Kantarları")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"} , fontSize: "clamp(10px, 1.2vw, 23px)", whiteSpace:"nowrap"}} textTransform={"none"} fontSize={23} color={"#6c757d"}>Vinç kantarları</Typography></Button></Grid>
        <Box height={10}></Box>
        <Grid item  xs={12} lg={12} onClick={()=>navigate("/Endüstriyel Malzemeler")} bgcolor={"#f8f9fa"}><Button disableRipple sx={{"&:hover": {bgcolor:"#f8f9fa"}}}><Typography sx={{"&:hover":{color:"black"} , fontSize: "clamp(10px, 1.2vw, 23px)", whiteSpace:"nowrap"}} textTransform={"none"}  color={"#6c757d"}>Endüstriyel Malzemeler</Typography></Button></Grid>
    </Grid>
    <Grid sx={{marginLeft:"2%",marginTop:15}}>
            <Typography fontSize={"20px"}>Körüklü Tip - Paslanmaz Çelik Load Cell </Typography>
            <Grid container alignItems="end" marginTop={2}>
                <Typography fontSize={"20px"} sx={{fontWeight:"bold"}}>Kapasite(kg) :</Typography>
                <Typography sx={{marginLeft:"10px"}} fontSize={"16px"}>250 - 500 - 7500 - 1000 - 2000</Typography>
            </Grid>
            <Grid container alignItems="end" marginTop={2} marginBottom={5}>
                <Typography fontSize={"20px"} sx={{fontWeight:"bold"}}>Koruma Sınıfı :</Typography>
                <Typography sx={{marginLeft:"10px", textAlign:"end"}} fontSize={"16px"}>IP66 / IP67</Typography>
            </Grid>
            <img src={MavinNa116EkranGörüntüsü} height={400} alt={"Mavin NA1"} width={"100%"}></img>

     </Grid>
      </Grid>
          
      
      <Template2></Template2>
      </>
  )
}

export default LoadcellDensiMavinNA116