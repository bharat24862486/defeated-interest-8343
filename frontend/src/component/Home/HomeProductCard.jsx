import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai';


import React, { useState } from 'react'

const HomeProductCard = ({image,title,price,off}) => {
    const [state,setState] = useState(false)
    const enter = () =>{
        setState(true)
    }

    const exit = () =>{
        setState(false)
    }
    let color1 = "#FF8F00"
    let color2 = "white"

  return (
    <Box textAlign={"center"} onMouseEnter={enter}  onMouseLeave={exit}>
        <Box border={"1px solid #B0BEC5"} borderTopEndRadius={"20px"} borderTopStartRadius={"20px"}><Box w={["40%","60%"]} m={"auto"} mt={"8%"} mb={"8%"} ><Image src={image} /></Box></Box>
        <Box border={"1px solid #B0BEC5"} borderBottomEndRadius={"20px"} borderBottomStartRadius={"20px"} borderTop={"none"}>
        <Text  fontWeight={"600"} fontSize={["3vw","2.5vw","1.5vw"]} p={"5% 0%"}>{title.substring(0,25)+"..."}</Text>
        <Flex justifyContent={"space-around"} p={"5%"}><Text fontSize={["3vw","2.2vw","1.8vw"]} fontWeight={"600"}>₹{price}</Text><Text fontSize={["3vw","2.2vw","1.8vw"]} fontWeight={"600"} color={"green.400"}>{off}% off</Text></Flex>
        <Box  w={"70%"} m={"auto"}><Button leftIcon={<AiOutlineShoppingCart /> }  p={["1% 10%","8% 15%"]} mb={"10%"}  border={"1px solid #FF8F00"} _hover={{bgColor:color1,color:color2}} fontSize={["3vw","2.2vw","1.5vw"]}  color={state?color2 : color1} backgroundColor={state?color1 : color2}>Add to Cart</Button></Box>
        </Box>
      
    </Box>
  )
}

export default HomeProductCard
