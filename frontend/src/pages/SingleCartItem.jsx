import { Box, Button, Center, Flex, IconButton, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux';
import { deleteCartItem } from '../redux/user/actions';

const SingleCartItem=({img,name,quantity,price,discount,id})=>{
    const [Qcount,setQcount]=useState(quantity);
    const dispatch=useDispatch();

    const handleChange=(num)=>{
        setQcount((prev)=>{return prev+num});
    }
    const handleDelete=(id)=>{
        dispatch((deleteCartItem(id)));
    }


    useEffect(()=>{

    },[Qcount])
    return (
        <Flex m='15px' justifyContent={'space-between'}  gap={'10px'}>
            <Box w={'15%'} display={'flex'} gap={'15px'} justifyContent={'space-between'} >
                <Image src={img} alt='image'  border={'1px solid #E0E0E0'} p='10px' borderRadius={'5px'}/>
            </Box>
            <VStack display={'flex'}  w={['70%']}>
                <Text display={'flex'} pl={'3%'} textAlign={'start'} fontWeight={'500'}>{name}</Text>
                <Text display={'flex'} w={'100%'} pl={'5%'} textAlign={'start'} fontWeight={'550'}>₹{price}</Text>
            <Flex display={'flex'}  w={'100%'} gap={'2'}>
                <Center pl={'3%'} gap={'2'}>
                    <Button disabled={Qcount<=1} onClick={()=>handleChange(-1)} size={'sm'} bg={'#F5F5F5'} _hover={{bg:'#F5F5F5'}}>-</Button>
                    <Text color={'#05a1b6'}>{quantity}</Text>
                    <Button size={'sm'} onClick={()=>handleChange(1)} bg={'#F5F5F5'} _hover={{bg:'#F5F5F5'}}>+</Button>
                </Center>
            </Flex>
            </VStack>
            <Button m={'auto'} bg={'white'} _hover={{bg:'white'}}>
            <IconButton onClick={()=>handleDelete(id)}><DeleteIcon color={'red.400'} boxSize={'6'} _hover={{color:'red.600'}}/></IconButton>
            </Button>
         
        </Flex>
      )
    }
    
    export default SingleCartItem