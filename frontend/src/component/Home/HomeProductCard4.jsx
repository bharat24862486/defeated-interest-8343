import { Box, Grid, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import why1 from "../../Images/why1.png"
import why2 from "../../Images/why2.png"
import why3 from "../../Images/why3.png"

const HomeProductCard4 = () => {
  return (
    <Box m={"4%"}>

        <SimpleGrid columns={[1,1,3]} gap={"10"} >
            <Box m={"auto"} textAlign={"center"}>
                <Image src={why3} w={["20%","20%","20%"]} m={"auto"}/>
                <Text fontWeight={"700"} fontSize={["3.5vw","5vw","1.7vw"]} p={"1% 0%"}>Wide range of Nutritional products</Text>
                
                <Text fontSize={["3.2vw","4.5vw","1.5vw"]}>One-stop fitness and health destination</Text>

            </Box>
            <Box m={"auto"} textAlign={"center"}>
                <Image src={why2} w={["20%","20%","20%"]} m={"auto"}/>
                <Text fontWeight={"700"} fontSize={["3.5vw","5vw","1.7vw"]} p={"1% 0%"}>100% Original & Authentic</Text>
                <Text fontSize={["3.2vw","4.5vw","1.5vw"]}>Tight control on sourcing and distribution</Text>

            </Box>
            <Box m={"auto"} textAlign={"center"}>
                <Image src={why1} w={["20%","20%","20%"]} m={"auto"}/>
                <Text fontWeight={"700"} fontSize={["3.5vw","5vw","1.7vw"]} p={"1% 0%"}>Guide to Fit and Healthy Lifestyle</Text>
                <Text fontSize={["3.2vw","4.5vw","1.5vw"]}>Your true partner in health & wellness journey</Text>

            </Box>
        </SimpleGrid>

        <hr style={{width:"100%" , fontWeight:"800", border:"2px solid #d5dde0", marginTop:"4%"}} />
      
    </Box>
  )
}

export default HomeProductCard4
