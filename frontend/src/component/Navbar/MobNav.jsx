import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { BsChatLeft, BsSearch } from 'react-icons/bs';
import { CiShoppingCart } from 'react-icons/ci';
import MovNav2 from './MovNav2';





const MobNav = ({makeTrue}) => {
    const [handle,setHandle] = useState(false)
    





    return (
        <Box m={"1% 2%"}  w={["78%","90%","95%"]} >
            {handle?"":<Flex justifyContent={"space-between"}>
                <Box w={["15%","15%","15%"]}>
                    <Flex justifyContent={"space-between"} alignItems={"center"} p={"0% 1%"}>
                        <Box onClick={makeTrue} ><RxHamburgerMenu  size={"50%"}/></Box>
                        <Text   fontWeight={"650"} bgColor={"#00B5B7"} color={"white"} fontSize={["1rem","1.2rem","1.3rem"]}>HC</Text>
                    </Flex>

                </Box>
                <Box w={["15%","15%","20%"]}>
                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                        <IconButton bgColor={"white"}><BsChatLeft size={"45%"} /></IconButton>
                        <IconButton bgColor={"white"}><BsSearch size={"45%"} /></IconButton>
                        <IconButton bgColor={"white"}><CiShoppingCart size={"55%"} /></IconButton>
                    </Flex>



                </Box>
            </Flex>}

            


        </Box>
    )
}

export default MobNav
