import React, { useEffect, useState } from 'react'

import { Box, Button, Flex, IconButton, Image, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import logo from "../../Images/Healthcare.png";
import { BsCart } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Home from '../../pages/Home';
import axios from 'axios';





const Nev1 = () => {

  const [logout, setlogout] = useState(false)
  const [search, setsearch] = useState("")
  const [data, setdata] = useState([])

  let token = JSON.parse(localStorage.getItem("token"))

  useEffect(() => {
    if (token) {
      setlogout(true)
    } else {
      setlogout(false)
    }
  }, [logout])

  let Display
  let D2

  if (logout) {
    Display = "inline"
    D2 = "none"
  } else {
    Display = "none"
    D2 = "inline"
  }

  const logouts = () => {
    localStorage.setItem("token", JSON.stringify(""))
    localStorage.setItem("userId", JSON.stringify(""))
    setlogout(false)
  }

  const navigate = useNavigate()



  const SearchData = (e) => {
    setsearch(e.target.value)
  }

  useEffect(() => {
    fetchData(search)
    console.log("search", search)
  }, [search])
  


  const fetchData = (data) => {
    axios.get(`https://weak-ruby-bull-wear.cyclic.app/product?title=${data}`).then((res) => {
      console.log("hkjhdkahkdhkahdkashk", res.data.product)
      setdata(res.data.product)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleNavigate1 = (id) => {
    navigate(`/product/${id}`)
  }




  return (

    <Box pl={20} pr={20} pt={"1%"} pb={"1%"} borderBottom={"2px solid #B0BEC5"}>
    <Flex alignItems={"center"} justifyContent={"space-between"}>

      <Image src={logo} w={"20%"} onClick={() => navigate("/")} cursor={"pointer"} />

      <Box pos='relative'>
      <InputGroup width={"150%"}>
        <InputLeftAddon children={<FiSearch />} backgroundColor={"white"} borderRight={"none"} />
        <Input onChange={SearchData} value={search} placeholder='Search for products & brands...' size='md' borderLeft={"none"} _focus={{ border: "none" }} focusBorderColor='grey' />
      </InputGroup>
      {search!==""&&data.length>0?<> <Box   >
           <Box overflow={'scroll'} width={"52vh"} maxH={'71vh'} zIndex={'100000'} bg='white' pos='absolute' borderRadius={"14px"} color='black' p='2' pt={"10"}>
          {
            data?.map((el)=>(
              <Flex justifyContent={"space-between"} alignItems={"center"} gap={"20px"} padding={"5px"} cursor={"pointer"}>
                <Image w={"30%"} src={el.image[0]?.img}/>
                <h1 onClick={()=>handleNavigate1(el._id)}>{el.title}</h1>
              </Flex>
            ))
          }
         </Box></Box></>:""}
         </Box>
          
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"15%"} gap={"2%"}>
        <Button backgroundColor={'teal.300'} color={"white"} _hover={{ backgroundColor: "teal.400" }} display={D2} onClick={() => navigate("/login")}>Login</Button>
        <Button backgroundColor={'teal.300'} color={"white"} _hover={{ backgroundColor: "teal.400" }} display={Display} onClick={logouts}>Logout</Button>
        <IconButton bgColor={"white"} onClick={() => navigate("/cart")} _hover={{ backgroundColor: "white" }}><BsCart size={"80%"} /></IconButton>
      </Flex>
    </Flex>


  </Box>
  )
}

export default Nev1
