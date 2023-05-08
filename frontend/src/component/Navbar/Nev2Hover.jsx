import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi';
import State1 from './State1';
import State2 from './State2';


const Nev2Hover = () => {
    const [state, setState] = useState(1)
    return (
        <Box w={"100%"} margin={"auto"}>
            <Flex justifyContent={"space-between"}>
                <Box w={"20%"}>
                    <Flex alignItems={"center"} justifyContent={"space-between"} p={"5%"}><Text fontSize={"1rem"} fontWeight={"semibold"} onClick={()=>setState(1)}>Sports Nutrition</Text><FiChevronRight /></Flex>
                    <Flex alignItems={"center"} justifyContent={"space-between"} p={"5%"}><Text fontSize={"1rem"} fontWeight={"semibold"} onClick={()=>setState(2)}>Vitamin's & Supplements</Text><FiChevronRight /></Flex>
                    <Flex alignItems={"center"} justifyContent={"space-between"} p={"5%"}><Text fontSize={"1rem"} fontWeight={"semibold"} onClick={()=>setState(1)}>Ayurveda & Herbs</Text><FiChevronRight /></Flex>
                    <Flex alignItems={"center"} justifyContent={"space-between"} p={"5%"}><Text fontSize={"1rem"} fontWeight={"semibold"} onClick={()=>setState(1)}>Health Food & Drinks</Text><FiChevronRight /></Flex>
                    <Flex alignItems={"center"} justifyContent={"space-between"} p={"5%"}><Text fontSize={"1rem"} fontWeight={"semibold"} onClick={()=>setState(1)}>Fitness</Text><FiChevronRight /></Flex>
                    <Flex alignItems={"center"} justifyContent={"space-between"} p={"5%"}><Text fontSize={"1rem"} fontWeight={"semibold"} onClick={()=>setState(1)}>Wellness</Text><FiChevronRight /></Flex>

                </Box>
                <Box w={"100%"}>
                    {state == 1 ? <State1 /> : state == 2 ? <State2 />:''}
                </Box>
            </Flex>

        </Box>
    )
}

export default Nev2Hover
