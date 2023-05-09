import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Img,
    Input,
    Select,
    Text
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { useToast } from '@chakra-ui/react'
  import { Link, useNavigate } from "react-router-dom";

import { forSignup, forToast } from "../redux/user/actions";
  const Signup = () => {
  const intial=  {
    name: '',
    email: "",
    gender: "",
    age: 0,
    city: "",
    role: "",
    avatar : "",
    password: "",
  }
  const [signupData,setSignupData]=useState(intial);
  const dispatch=useDispatch();
  const toast=useToast()
  const navigate=useNavigate()


  const handlechange=(e)=>{
    let {name,value}=e.target;
    if(name=="age"){
          value=+value;
        }
    setSignupData({...signupData,[name]:value});
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(signupData);

    dispatch(forSignup(signupData)).then((res)=>{
      if(res){
        setSignupData(intial);
        forToast(toast,"Account created","success")
        navigate("/")
      }else{
        forToast(toast,"Somthing wrong!","error")
      }
 })  
  }
  
    return (
      <Box>
        <Heading size={"lg"} m="10px">
          Sign Up
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
            <Box w={['100%','100%','100%','50%']}  mb="5%">
              <Img src={'https://static1.hkrtcdn.com/hknext/static/media/login/slider/3.svg'} w={['100%','100%','100%']} borderRadius="10px" m='auto'/>
              <Text fontSize={'xl'} fontWeight={'bold'} mb={'5%'}>Please create a account to use our services!!</Text>
              <Text>Already have an account?</Text>
              <Heading size={'sm'} textDecoration='underline'><Link to='/login'>Login</Link></Heading>
            </Box>
            <Box bg={"white"} w={['90%',"90%","90%","50%"]} p="4%" gap={"2%"} borderRadius="3%" m='auto'>
            <FormControl isRequired>
              <FormLabel ml='3%'>Name </FormLabel>
              <Input placeholder="Enter Name" mb="2%" name="name" value={signupData.name} onChange={handlechange} />
              <FormLabel ml='3%'>Email</FormLabel>
              <Input placeholder="Enter email" type={"email"} mb="2%" name="email" value={signupData.email} onChange={handlechange}/>
              <Flex mb='2%'  mt={'3%'} ml='3%' textAlign={'start'}>
                <FormLabel m='auto' w={'40%'}>Gender :</FormLabel>
                    <Select mr={'30%'} name="gender" placeholder='Select Gender' value={signupData.gender} onChange={handlechange}>
                        <option value='male'>Male </option>
                        <option value='female'>Female</option>
                    </Select>
            </Flex>
            <FormLabel ml='3%'>Age</FormLabel>
              <Input placeholder="Enter Age" mb="2%" name="age" type='number' value={signupData.age} onChange={handlechange} />
              <FormLabel ml='3%'>Password</FormLabel>
              <Input placeholder="Enter password" type={"password"} mb="4%" name="password" value={signupData.password} onChange={handlechange} />
              <FormLabel ml='3%'>City</FormLabel>
              <Input placeholder="Enter City" type={"text"} mb="4%" name="city" value={signupData.city} onChange={handlechange} />
              <Flex mb='2%'  mt={'3%'} ml='3%' textAlign={'start'}>
                <FormLabel m='auto' w={'30%'}>Role :</FormLabel>
                    <Select mr={'30%'} name="role" placeholder='Select Role' value={signupData.role} onChange={handlechange}>
                        <option value='user'>User </option>
                        <option value='admin'>Admin</option>
                    </Select>
            </Flex>
            <FormLabel ml='3%'>Avatar</FormLabel>
              <Input placeholder="Enter avatar URL" type={"text"} mb="4%" name="avatar" value={signupData.avatar} onChange={handlechange} />
              <Button
                onClick={handlesubmit}
                mt="3%"
                fontWeight={"500"}
                cursor="pointer"
              >Sign Up</Button>
        </FormControl>
            </Box>
          </Flex>
      </Box>
    );
  };
  
  export default Signup;
  