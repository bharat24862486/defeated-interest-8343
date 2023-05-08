import React from 'react'

import { Box, Button, Flex, IconButton, Image, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import logo from "../../Images/Healthcare.png";
import { BsCart } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Home from '../../pages/Home';



const Nev1 = () => {
  const navigate = useNavigate()
  return (
    <Box pl={20} pr={20} pt={"1%"} pb={"1%"} borderBottom={"2px solid #B0BEC5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>

        <Image src={logo} w={"20%"} onClick={()=>navigate("/")} cursor={"pointer"}/>

        <InputGroup width={"40%"}>
          <InputLeftAddon children={<FiSearch />} backgroundColor={"white"} borderRight={"none"}/>
          <Input placeholder='Search for products & brands...' size='md'  borderLeft={"none"} _focus={{border:"none"}} focusBorderColor='grey' />
        </InputGroup>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"15%"} gap={"2%"}>
          <Button backgroundColor={'teal.300'} color={"white"} _hover={{ backgroundColor: "teal.400" }} onClick={()=>navigate("/login")}>Login</Button>
          <IconButton bgColor={"white"} onClick={()=>navigate("/cart")} _hover={{backgroundColor:"white"}}><BsCart size={"80%"} /></IconButton>
      </Flex>
      </Flex>
      

    </Box>
  )
}

export default Nev1
