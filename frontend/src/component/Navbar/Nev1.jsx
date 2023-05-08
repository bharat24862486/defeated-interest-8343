import React from 'react'

import { Box, Button, Flex, Image, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import logo from "../../Images/Healthcare.png";
import { BsCart } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';



const Nev1 = () => {
  return (
    <Box pl={20} pr={20} pt={"1%"} pb={"1%"} borderBottom={"2px solid #B0BEC5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>

        <Image src={logo} w={"20%"} />

        <InputGroup width={"40%"}>
          <InputLeftAddon children={<FiSearch />} backgroundColor={"white"} borderRight={"none"}/>
          <Input placeholder='Search for products & brands...' size='md'  borderLeft={"none"} _focus={{border:"none"}} focusBorderColor='grey' />
        </InputGroup>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"15%"}>
          <Button backgroundColor={'teal.300'} color={"white"} _hover={{ backgroundColor: "teal.400" }} >Login</Button>
          <BsCart size={"20%"} />

        </Flex>
      </Flex>
      

    </Box>
  )
}

export default Nev1
