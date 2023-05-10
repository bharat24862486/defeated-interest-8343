import {
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Img,
    Input,
    Text
  } from "@chakra-ui/react";
  import React, { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import{BsTwitter} from 'react-icons/bs'
import { useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forLogin, forToast } from "../redux/user/actions";
import Footer from '../component/Footer/Footer'
import Nev2 from '../component/Navbar/Nev2'
import MobNav3 from '../component/Navbar/MobNav3'
import Nav from '../component/Navbar/Nav'
  const Login = () => {
  const intial={
    email:"",
    password:"",
  }
  const [loginData,setLoginData]=useState(intial);
  const dispatch=useDispatch();
  const toast=useToast();
  const navigate=useNavigate();
  const [check, setCheck] = useState(false)
  function makeTrue() {
    console.log("true")
    setCheck(true)
  }
  function makeFalse() {
    console.log("false")
    setCheck(false)
  }

  const handlechange=(e)=>{
    const {name,value}=e.target;
    // console.log(name,value);
    setLoginData({...loginData,[name]:value});
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
        console.log(loginData);
        dispatch(forLogin(loginData)).then((res)=>{
          if(res){
            forToast(toast,"Login successfull😊","success")
            setLoginData(intial)
            navigate('/')
        
          }else{
            forToast(toast,"wrong cradential❌","error")
        
          }
        })
  }
  
  
    return (
      <Box>{check ? <MobNav3 makeFalse={makeFalse} /> :
      <Box><Nav makeTrue={makeTrue} />
        <Nev2 />
      <Box mb={'5%'}>
        
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
            <Box w={['100%','100%','100%','50%']} mb="5%">
              <Img src={'https://static1.hkrtcdn.com/hknext/static/media/login/slider/1.svg'} w={['100%','100%','100%']} borderRadius="10px" m='auto'/>
              <Text fontSize={'xl'} fontWeight={'bold'} mb={'5%'}>Wide range of orignal and authenticatic Nutritional products</Text>
              <Text>Create new account</Text>
              <Heading size={'sm'} textDecoration='underline'> <Link to={'/signup'}>SignUp</Link>   </Heading>
            </Box>
            <Box bg={"white"} w={['90%',"90%","90%","40%"]} p="4%" gap={"2%"} borderRadius="3%" m='auto'>
            <FormControl isRequired>
              <FormLabel ml='3%'>Email</FormLabel>
              <Input placeholder="Enter email" type={"email"} mb="2%" name="email" value={loginData.email} onChange={handlechange}/>
              <FormLabel ml='3%'>Password</FormLabel>
              <Input placeholder="Enter password" type={"password"} mb="4%" name="password" value={loginData.password} onChange={handlechange} />
              <Box textAlign={'end'}><Text color={'#1E88E5'} fontSize="15" as={'u'}>Forgot Password?</Text></Box>
              <Button
                onClick={handlesubmit}
                mt="3%"
                fontWeight={"500"}
                cursor="pointer"
              >Log In</Button>
              <Divider mt='4%' mb={'2%'} />
              <Flex w={'100'} gap='5%' m='4%' alignContent={'space-evenly'} >
                <Button w={'28%'}><FcGoogle/></Button>
                <Button w={'28%'}><AiFillApple/> </Button>
                <Button w={'28%'} color="#039BE5"><BsTwitter/></Button>
              </Flex>
        </FormControl>
            </Box>
          </Flex>
      </Box>
      <Footer />
      </Box>}


    </Box>
    );
  };
  
  export default Login;
  