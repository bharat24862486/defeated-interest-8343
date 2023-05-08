import { Box, Grid, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HomeProductCard2 = ({ img1, img2, img3, img4, img5 }) => {
    return (
        <Box m={"4%"}>

            <Carousel autoPlay={true} infiniteLoop={true} interval={10000} stopOnHover={true}>
                <Box>
                    <SimpleGrid columns={[2,2,4]} gap={"1%"}>
                    <Image src={img1} borderRadius={"20px"}/>
                    <Image src={img2} borderRadius={"20px"}/>
                    <Image src={img3} borderRadius={"20px"}/>
                    <Image src={img4} borderRadius={"20px"}/>
                    </SimpleGrid>
                </Box>


                <Box>
                    <SimpleGrid columns={[2,2,4]} gap={"1%"}>
                    <Image src={img2} borderRadius={"20px"}/>
                    <Image src={img3} borderRadius={"20px"}/>
                    <Image src={img4} borderRadius={"20px"}/>
                    <Image src={img5} borderRadius={"20px"}/>
                    </SimpleGrid>
                </Box>
            </Carousel>

            <hr style={{width:"100%" , fontWeight:"800", border:"2px solid #d5dde0"}}/>

        </Box>
    )
}

export default HomeProductCard2
