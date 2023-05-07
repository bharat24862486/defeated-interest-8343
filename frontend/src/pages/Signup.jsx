import {
    Box,
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
  import { Link } from "react-router-dom";
  const Signup = () => {
  const intial={
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  }
  const [signupData,setSignupData]=useState(intial);
  const handlechange=(e)=>{

    const {name,value}=e.target;
    console.log(name,value);
    setSignupData({...signupData,[name]:value});
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
        console.log(signupData);
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
            <Box w={['100%','100%','100%','50%']} >
              <Img src={'https://static1.hkrtcdn.com/hknext/static/media/login/slider/3.svg'} w={['100%','100%','100%']} borderRadius="10px" m='auto'/>
              <Text fontSize={'xl'} fontWeight={'bold'} mb={'5%'}>Please create a account to use our services!!</Text>
              <Text>Already have an account?</Text>
              <Heading size={'sm'} textDecoration='underline'><Link to='/login'>Login</Link></Heading>
            </Box>
            <Box bg={"white"} w={['90%',"90%","90%","50%"]} p="4%" gap={"2%"} borderRadius="3%" m='auto'>
            <FormControl isRequired onSubmit={handlesubmit}>
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
  
  export default Signup;
  