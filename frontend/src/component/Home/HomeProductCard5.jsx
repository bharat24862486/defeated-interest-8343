import { Box, Grid, Image } from '@chakra-ui/react'
import React from 'react'
import d1 from "../../Images/d1.jpg"
import d2 from "../../Images/d2.jpg"
import d3 from "../../Images/d3.jpg"

const HomeProductCard5 = () => {
  return (
    <Box m={"4%"}>
        <Grid templateColumns="repeat(2,1fr)" gap={"10"}>
            <Image src={d1}/>
            <Image src={d2} gridColumnStart={2} gridColumnEnd={3} gridRowStart={1} gridRowEnd={3}/>
            <Image src={d3}/>
        </Grid>

      
    </Box>
  )
}

export default HomeProductCard5
