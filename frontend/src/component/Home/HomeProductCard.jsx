import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { AiOutlineShoppingCart,AiFillStar } from 'react-icons/ai';


import React, { useState } from 'react'

const HomeProductCard = ({all,hanleCartData}) => {
  // { image, title, price, off, rating }
  // console.log(rating)
  const [state, setState] = useState(false)
  const enter = () => {
    setState(true)
  }

  const exit = () => {
    setState(false)
  }
  let color1 = "#FF8F00"
  let color2 = "white"

  return (
    <Box textAlign={"center"} onMouseEnter={enter} onMouseLeave={exit} mt={['4%']} mb={['4%']}>
      <Box border={"1px solid #B0BEC5"} borderTopEndRadius={"20px"} borderTopStartRadius={"20px"} w={'100%'} h={['50%', '60%', '50%']}><Box w={["40%", "60%"]} m={"auto"} mt={"8%"} mb={"8%"} ><Image src={all.image[0].img} /></Box></Box>
      <Box border={"1px solid #B0BEC5"} borderBottomEndRadius={"20px"} borderBottomStartRadius={"20px"} borderTop={"none"}>
        <Flex  justifyContent={'center'} alignItems={'center'} w={['15%','15%','20%']} bgColor={'rgb(0,181,183)'}><Text color={'white'} fontSize={['0.8rem','0.8rem','1rem']}>{all.rating}</Text><AiFillStar color='white'/></Flex>
        <Text fontWeight={"500"} fontSize={["3vw", "2.5vw", "1.5vw"]} p={"5% 0%"}>{all.title.substring(0, 25) + "..."}</Text>
        <Flex mb={['0%','2%','10%']} justifyContent={"space-around"} p={"5%"}><Text fontSize={["2.2vw", "1.7vw", "1.4vw"]} fontWeight={"600"}>₹{all.price}</Text><Text fontSize={["2.2vw", "1.7vw", "1.4vw"]} fontWeight={"600"} color={"green.400"}>{all.discount}% off</Text></Flex>
        <Box w={"70%"} m={"auto"}><Button onClick={(e)=>hanleCartData(all)} leftIcon={<AiOutlineShoppingCart />} p={["1% 10%", "8% 15%"]} mb={"10%"} border={"1px solid #FF8F00"} _hover={{ bgColor: color1, color: color2 }} fontSize={["3vw", "2.2vw", "1.5vw"]} color={state ? color2 : color1} backgroundColor={state ? color1 : color2}>Add to Cart</Button></Box>
      </Box>

    </Box>
  )
}

export default HomeProductCard
