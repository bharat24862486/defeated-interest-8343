import { Box, Button, Center, Divider, Flex, Image, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { DeleteIcon } from '@chakra-ui/icons'

const SingleCartItem=({img,name,quantity,price})=>{
    return (
        <Flex m='15px' justifyContent={'space-between'}  gap={'10px'}>
            <Box display={'flex'} gap={'15px'} justifyContent={'space-between'} >
                <Image src={img} alt='image'  border={'1px solid #E0E0E0'} p='10px' borderRadius={'5px'}/>
                <Text w={'60%'} display={'flex'} alignItems={'center'} fontWeight={'500'}>{name}
                </Text>
                <Text display={'flex'}  alignItems={'center'} fontWeight={'800'}>₹{price}</Text>
            </Box>
            <Center>
                <Button>-</Button>
                <Text>{quantity}</Text>
                <Button>+</Button>
            </Center>
         
        </Flex>
      )
    }
    
    export default SingleCartItem