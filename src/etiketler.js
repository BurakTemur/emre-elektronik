import React from 'react'
import Template from './template'
import { Grid} from '@mui/material'
import Template2 from './template2'
import etiketler1 from './Images/etiketler1.png'
import etiketler2 from './Images/etiketler2.png'

function Etiketler() {
  return (
    <>
    <Template></Template>
    <Grid container xs={12} sm={12} md={9} lg={9} sx={{marginLeft:{xs:"3%",sm:"5%",md:"25%",lg:"25%"},marginTop:5}} >
    <img src={etiketler1} alt='etiketler' style={{ height: 600, width: "25%", minWidth: 200 }} />
    <img src={etiketler2} alt='etiketler' style={{ height: 600, width: "25%", minWidth: 200, marginLeft: "10%" }} />

      {/*<Grid container xs={1} style={{borderLeft:"1px solid black",borderRight:"1px solid black",borderTop:"1px solid black",marginLeft:450,marginTop:40}}>
        <Grid >       
          <Typography style={{marginLeft:26,marginTop:20,fontWeight:"bold"}}>Bıçak Ölçüsü</Typography>
          <Typography style={{marginLeft:35,fontWeight:"bold"}}>Eni / Akarı</Typography>
          <Box style={{marginTop:20}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>40x20</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>40x30</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>40x47</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>40x58</Typography> 
           <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>50x28</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>55x25</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>55x74</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>58x45</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>58x52</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>58x60</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>58x66</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>58x80</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>60x30</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>66x57</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>70x60</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          
        </Grid>
      </Grid>
      

      <Grid container xs={1}  style={{marginTop:40,borderLeft:"1px solid black",borderRight:"1px solid black",borderTop:"1px solid black"}}>
        <Grid >       
          <Typography textAlign={"center"} style={{marginTop:30,marginBottom:34,fontWeight:"bold"}}>Sarımı</Typography>
          <Box style={{marginTop:20}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>1000</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>1000</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>1000</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>600</Typography> 
           <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>1000</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>1000</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>450</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>450</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>450</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>1000</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>600</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
        
        </Grid>
      </Grid>
      
       <Grid container xs={1} style={{height:578,border:"1px solid black",marginLeft:100,marginTop:40}}>
        <Grid >       
        <Typography style={{marginLeft:26,marginTop:20,fontWeight:"bold"}}>Bıçak Ölçüsü</Typography>
          <Typography style={{marginLeft:35,fontWeight:"bold"}}>Eni / Akarı</Typography>
          <Box style={{marginTop:20}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>74x99</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>80x40</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>80x50</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>80x60</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>80x80</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>100x50</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>100x58</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>100x71</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>100x76</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>100x80</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>100x99</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>100x120</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>100x132</Typography>
          <Box style={{marginTop:5}} width={158} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>100x150</Typography>
        </Grid>
      </Grid>
      

  

      <Grid container xs={1}  style={{height:578,border:"1px solid black",marginTop:40}}>
        <Grid >       
          <Typography textAlign={"center"} style={{marginTop:30,marginBottom:34,fontWeight:"bold"}}>Sarımı</Typography>
          <Box style={{marginTop:20}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>1000</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>1000</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>1000</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>1000</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>250</Typography>
          <Box style={{marginTop:5}} width={156} height={"1px"} bgcolor={"black"}></Box>
          <Typography textAlign={"center"} style={{marginTop:5}}>500</Typography>
        </Grid>
      </Grid>*/}
    </Grid>
  
    <Template2></Template2>
    </>
  )
}

export default Etiketler