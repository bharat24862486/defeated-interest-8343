import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Img,
    Input,
    Text
  } from "@chakra-ui/react";
  import React, { useState } from "react";

  const Login = () => {
  const intial={
    email:"",
    password:"",
  }
  const [loginData,setLoginData]=useState(intial);
  const handlechange=(e)=>{

    const {name,value}=e.target;
    console.log(name,value);
    setLoginData({...loginData,[name]:value});
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
        console.log(loginData);
  }
  
  
    return (
      <Box>
        <Heading size={"lg"} m="10px">
           Login Page
        </Heading>
        
          <Flex
            w={["90%",'80%','80%']}
            m="auto"
            bg={"#EEEEEE"}
            p={"2%"}
            pb={'3%'}
            gap={"5%"}
            borderRadius="4%"
            direction={['column','column','column','row']}
          >
            <Box w={['100%','100%','100%','50%']} >
              <Img src={'https://static1.hkrtcdn.com/hknext/static/media/login/slider/1.svg'} w={['100%','100%','100%']} borderRadius="10px" m='auto'/>
              <Text fontSize={'xl'} fontWeight={'bold'} mb={'5%'}>Wide range of orignal and authenticatic Nutritional products</Text>
            </Box>
            <Box bg={"white"} w={['90%',"90%","90%","40%"]} p="4%" gap={"2%"} borderRadius="3%" m='auto'>
            <FormControl isRequired onSubmit={handlesubmit}>
              <FormLabel ml='3%'>Email</FormLabel>
              <Input placeholder="Enter email" type={"email"} mb="2%" name="email" value={loginData.email} onChange={handlechange}/>
              <FormLabel ml='3%'>Password</FormLabel>
              <Input placeholder="Enter password" type={"password"} mb="4%" name="password" value={loginData.password} onChange={handlechange} />
              <Input
                type={"submit"}
                bg="#03A9F4"
                mt="3%"
                fontWeight={"500"}
                cursor="pointer"
              />
        </FormControl>
            </Box>
          </Flex>
      </Box>
    );
  };
  
  export default Login;
  