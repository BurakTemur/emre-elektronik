import React from 'react'
import {Grid, Typography} from '@mui/material'
import EmailIcon  from '@mui/icons-material/Email';
import PhoneIcon  from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom'


function Template2() {

    const navigate = useNavigate();

  return (
    <>
    <Grid container lg={12} sx={{backgroundColor:"#133F67",height:"400px", width:"100%",marginTop:"400px"}}>
        <Grid lg={1.5} sx={{marginLeft:{ xs:"1%",sm:"12%",md:"22%",lg:"22%"}}}>
            <Typography sx={{color:"white",borderBottom:"2px solid #ffffff52",fontSize:"22px",fontWeight:600,marginTop:"30px"}}>Perakende</Typography>
            <Typography onClick={()=>navigate("/Teraziler")} sx={{marginTop:"10px",color: "rgba(255, 255, 255, 0.8)",fontSize:{lg:"22px",xs:"12px"},"&:hover":{cursor:"pointer"}}}>Teraziler</Typography>
            <Typography onClick={()=>navigate("/Basküller")} sx={{color: "rgba(255, 255, 255, 0.8)",fontSize:{lg:"22px",xs:"12px"},marginTop:"5px", "&:hover": {cursor:"pointer"}}}>Basküller</Typography>
            <Typography onClick={()=>navigate("/Vinç Kantarları")} sx={{color: "rgba(255, 255, 255, 0.8)",fontSize:{lg:"22px",xs:"12px"},marginTop:"5px","&:hover": {cursor:"pointer"}}}>Vinç Kantarları</Typography>
        </Grid>
        <Grid lg={2} marginLeft={"1%"}>
            
            <Typography sx={{color:"white",borderBottom:"2px solid #ffffff52",fontSize:"22px",fontWeight:600,marginLeft:"30%",marginTop:"30px"}}>Endüstriyel</Typography>
            <Typography onClick={()=>navigate("/Endüstriyel Basküller")} sx={{whiteSpace:"nowrap", color: "rgba(255, 255, 255, 0.8)",fontSize:{lg:"22px",xs:"12px"},marginLeft:"30%",marginTop:"10px","&:hover": {cursor:"pointer"}}}>Endüstriyel Tartılar</Typography>
            <Typography onClick={()=>navigate("/Endüstriyel Malzemeler")} sx={{whiteSpace:"nowrap", color: "rgba(255, 255, 255, 0.8)",fontSize:{lg:"22px",xs:"12px"},marginLeft:"30%",marginTop:"10px","&:hover": {cursor:"pointer"}}}>Endüstriyel Malzemeler</Typography>
        </Grid>
        <Grid xs={2} sm={5} lg={3}  sx={{marginLeft:{xs:"10%",sm:"1%",md:"2%",lg:"1%"}}}>
            <Typography sx={{color:"white",borderBottom:"2px solid #ffffff52",fontSize:{lg:"22px"},fontWeight:600,marginLeft:"30%",marginTop:"30px"}}>İletişim Bilgileri</Typography>
            <Typography sx={{color: "rgba(255, 255, 255, 0.8)",fontSize:{lg:"22px",xs:"12px"},marginLeft:"30%",marginTop:"10px"}}><LocationOnIcon sx={{marginRight:"15px"}}></LocationOnIcon>Eğitim Mah. Ahmet Haşim Sok. No:6/A Balçova/İzmir</Typography>
            <Typography sx={{color: "rgba(255, 255, 255, 0.8)",fontSize:{lg:"22px",xs:"12px"},marginLeft:"30%",marginTop:"10px"}}><EmailIcon sx={{marginRight:"15px"}}></EmailIcon>yunusemretemur@hotmail.com</Typography>
            <Typography sx={{color: "rgba(255, 255, 255, 0.8)",fontSize:{lg:"22px",xs:"12px"},marginLeft:"30%",marginTop:"10px"}}><PhoneIcon sx={{marginRight:"15px"}}></PhoneIcon>+90 532 324 09 88</Typography>
        </Grid>
    </Grid>
    
    </>
  )
}

export default Template2