import React from 'react';
import Template from './template';
import { Grid, Typography } from '@mui/material';
import EmailIcon  from '@mui/icons-material/Email';
import PhoneIcon  from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Template2 from './template2';

function Iletisim() {
  return (
    <>
     <Template></Template>
     <Grid container lg={12}>
      <Grid lg={4} sx={{marginLeft:"16%",marginTop:"2%"}}>
        <Typography sx={{color:"#004b6a",fontWeight:"550",fontSize:"28px"}}>EMRE ETİKET (İMALATHANE)</Typography>
        <Typography sx={{color:"#333", fontSize:"22px",fontFamily:"unset",borderBottom:"1px solid #f7f7f7",marginTop:"15px"}}><LocationOnIcon sx={{marginRight:"15px",color:"#004b6a"}}></LocationOnIcon>2370/1 Sok. No:16  Kaynaklar/Buca/İzmir</Typography>
        <Typography sx={{color:"#333", fontSize:"22px",fontFamily:"unset",borderBottom:"1px solid #f7f7f7",marginTop:"15px"}}><EmailIcon sx={{marginRight:"15px",color:"#004b6a"}}></EmailIcon>yunusemretemur@hotmail.com</Typography>
        <Typography sx={{color:"#333", fontSize:"22px",fontFamily:"unset",borderBottom:"1px solid #f7f7f7",marginTop:"15px"}}><PhoneIcon sx={{marginRight:"15px",color:"#004b6a"}}></PhoneIcon>+90 532 324 09 88</Typography>
        <Typography sx={{color:"#333", fontSize:"22px",fontFamily:"unset",borderBottom:"1px solid #f7f7f7",marginTop:"15px"}}><PhoneIcon sx={{marginRight:"15px",color:"#004b6a"}}></PhoneIcon>+90 555 736 38 99</Typography>
        </Grid>

     <Grid lg={4} sx={{marginLeft:{lg:"3%" ,xs:"16.5%"},marginTop:{lg:"2%" ,xs:"4%"}}}>
        <Typography sx={{color:"#004b6a",fontWeight:"550",fontSize:"28px" ,whiteSpace:"nowrap"}}>EMRE ELEKTRONİK (MERKEZ)</Typography>
        <Typography sx={{color:"#333", fontSize:"22px",fontFamily:"unset",borderBottom:"1px solid #f7f7f7",marginTop:"15px"}}><LocationOnIcon sx={{marginRight:"15px",color:"#004b6a"}}></LocationOnIcon>Eğitim Mah. Ahmet Haşim Sok. No:6/A Balçova/İzmir</Typography>
        <Typography sx={{color:"#333", fontSize:"22px",fontFamily:"unset",borderBottom:"1px solid #f7f7f7",marginTop:"15px"}}><EmailIcon sx={{marginRight:"15px",color:"#004b6a"}}></EmailIcon>yunusemretemur@hotmail.com</Typography>
        <Typography sx={{color:"#333", fontSize:"22px",fontFamily:"unset",borderBottom:"1px solid #f7f7f7",marginTop:"15px"}}><PhoneIcon sx={{marginRight:"15px",color:"#004b6a"}}></PhoneIcon>+90 532 324 09 88</Typography>
        <Typography sx={{color:"#333", fontSize:"22px",fontFamily:"unset",borderBottom:"1px solid #f7f7f7",marginTop:"15px"}}><PhoneIcon sx={{marginRight:"15px",color:"#004b6a"}}></PhoneIcon>+90 232 259 23 43</Typography>
        </Grid>
    
      </Grid>

      <Template2></Template2>
    </>
  );
}

export default Iletisim;
