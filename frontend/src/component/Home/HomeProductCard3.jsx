import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HomeProductCard3 = ({ img1, img2, img3, img4 }) => {
    return (
        <Box m={"5%"}>

            <Carousel autoPlay={true} infiniteLoop={true} interval={3000} stopOnHover={true}>


                <Image src={img1} borderRadius={"20px"} />
                <Image src={img2} borderRadius={"20px"} />
                <Image src={img3} borderRadius={"20px"} />
                <Image src={img4} borderRadius={"20px"} />



        
            </Carousel >

    <hr style={{ width: "100%", fontWeight: "800", border: "2px solid #d5dde0" }} />
    </Box >
  )
}

export default HomeProductCard3
