import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import b1 from "../../Images/bnr_2742248_o.jpg";
import b2 from "../../Images/bnr_2742256_o.jpg";
import b3 from "../../Images/bnr_2742266_o.jpg";
import b4 from "../../Images/bnr_2742296_o.jpg";

const Banner = () => {
  return (
    <Box>
        <Box>
            <Text textAlign={"center"} p={"0.6%"} backgroundColor={"#E0F7FA"}>Sale is Live Now | Get Extra 10% Off | Exciting Freebies & Extra 5% HK Cash, T&Cs Apply*</Text>

        </Box>
        <Box>
            <Carousel autoPlay={true} infiniteLoop={true} interval={3000} stopOnHover={true}> 
            <Image src={b1}  w={"100%"}/>
            <Image src={b2}  w={"100%"}/>
            <Image src={b3}  w={"100%"}/>
            <Image src={b4}  w={"100%"}/>
            </Carousel>
            

        </Box>
      
    </Box>
  )
}

export default Banner
