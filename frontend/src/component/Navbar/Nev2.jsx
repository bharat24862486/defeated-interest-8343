import { Box, Button, Center, Flex, Grid, Popover, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineAlignLeft, AiFillGift } from 'react-icons/ai';
import { BsFillTagsFill, BsFillAwardFill, BsChatRightDotsFill } from 'react-icons/bs';
import { RiCoupon2Fill, RiCouponFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import State1 from './State1';
import Nev2Hover from './Nev2Hover';




const Nev2 = () => {
    const [state, setState] = useState(false)
    const show = () => {
        setState(!state)
    }
    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
      });
    
      const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
        });
      };
      useEffect(() => {
        window.addEventListener("resize", detectSize);
    
        return () => {
          window.removeEventListener("resize", detectSize);
        };
      }, [windowDimension])
    
      console.log(windowDimension.winWidth);
    
    return (
        <Box>
            {windowDimension.winWidth > 870?  <Popover isLazy>


<Box pl={"5%"} pr={"4%"} pt={"2%"} pb={"2%"} >
    <Grid templateColumns="repeat(5,1fr)">
    <PopoverTrigger><Box w={"20%"} gridColumnStart={1} gridColumnEnd={2} onClick={show} > <Button leftIcon={<AiOutlineAlignLeft color='teal' size="25" />} backgroundColor={"white"} border={"0.5px solid grey"} _hover={{ backgroundColor: "white" }} >Shop by category</Button></Box></PopoverTrigger>
        <Flex justifyContent={"space-around"} w={"100%"} gridColumnStart={2} gridColumnEnd={6}>
            <Flex alignItems={"center"} justifyContent={"space-between"} ><BsFillTagsFill color='teal' size={"20"} /> <Text fontSize={"1.4vw"} fontWeight={"500"}>Best Sellers</Text></Flex>
            <Flex alignItems={"center"} justifyContent={"space-between"} ><BsFillAwardFill color='teal' size={"20"} /> <Text fontSize={"1.4vw"} fontWeight={"500"}>Brands</Text></Flex>
            <Flex alignItems={"center"} justifyContent={"space-between"} ><RiCoupon2Fill color='teal' size={"20"} /> <Text fontSize={"1.4vw"} fontWeight={"500"}>Delas</Text></Flex>
            <Flex alignItems={"center"} justifyContent={"space-between"} ><RiCouponFill color='teal' size={"20"} /> <Text fontSize={"1.4vw"} fontWeight={"500"}>Blogs</Text></Flex>
            <Flex alignItems={"center"} justifyContent={"space-between"} ><AiFillGift color='teal' size={"20"} /> <Text fontSize={"1.4vw"} fontWeight={"500"}>Gift Cards</Text></Flex>
            <Flex alignItems={"center"} justifyContent={"space-between"} ><BsChatRightDotsFill color='teal' size={"20"} /> <Text fontSize={"1.4vw"} fontWeight={"500"}>Customer Support</Text></Flex>
            {/* <Flex alignItems={"center"} justifyContent={"space-between"} ><MdLocationPin color='teal' size={"22"} /> <Text fontSize={"1.4vw"} fontWeight={"500"}>Store Locator</Text></Flex> */}

        </Flex>
    </Grid>

    <Box>
        {state ? <Center><PopoverContent w={"110%"} p={"6% 2%"} ml={"6%"}><Nev2Hover /></PopoverContent></Center> : ""}
    </Box>


</Box>
</Popover>:''}
        </Box>
       
    )
}

export default Nev2
