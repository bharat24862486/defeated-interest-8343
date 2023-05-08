import { Box, Button, Flex, Grid, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillCartFill,BsWatch,BsGooglePlay } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import { AiFillApple } from 'react-icons/ai';





const HomeProductCard6 = () => {
    return (
        <Box m={"4%"}>
            <SimpleGrid columns={[1,1,2]} gap={"1%"}>
                <Box>
                    <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/misc/download-App-IMG.svg' />
                </Box>
                <Box p={"2% 4%"}>
                    <Heading m={"4% 0%"}>Download the Healthkart Mobile app</Heading>
                    <Flex display={["none","none","block"]} p={"4% 0%"} m={"2% 0%"} alignItems={"start"} _hover={{border:"1px solid #00B5B8", borderRadius:"20px"}} ><BsFillCartFill size={"7%"} color='#00B5B8' /><Box fontSize={"1.1rem"} p={"0% 2%"} fontWeight={"600"}><Text fontSize={"1.4rem"} fontWeight={"700"}> Easier, Faster Shopping</Text><Text>Get Authentic supplements, Fitness solutions, and a healthy lifestyle</Text></Box></Flex>
                    <Flex display={["none","none","block"]} p={"4% 0%"} m={"2% 0%"} alignItems={"start"} _hover={{border:"1px solid #00B5B8", borderRadius:"20px"}} ><BsWatch size={"7%"} color='#00B5B8' /><Box fontSize={"1.1rem"} p={"0% 2%"} fontWeight={"600"}><Text fontSize={"1.4rem"} fontWeight={"700"}>Fuel your Fitness Goals</Text><Text>Complete challenges to build habit & win HK cash</Text></Box></Flex>
                    <Flex display={["none","none","block"]} p={"4% 0%"} m={"2% 0%"} alignItems={"start"} _hover={{border:"1px solid #00B5B8", borderRadius:"20px"}} ><TiTick size={"7%"} color='#00B5B8' /><Box fontSize={"1.1rem"} p={"0% 2%"} fontWeight={"600"}><Text fontSize={"1.4rem"} fontWeight={"700"}>Get Exclusive App Only Benefits</Text><Text>Extra discounts, offers and cashbacks</Text></Box></Flex>
                    <Button color={"White"} bgColor={"black"} _hover={{color:"white",backgroundColor:"black"}} leftIcon={<BsGooglePlay />} m={"2%"}>Google Play</Button>
                    <Button color={"White"} bgColor={"black"} _hover={{color:"white",backgroundColor:"black"}} leftIcon={<AiFillApple />} m={"2%"}>App Store</Button>
                </Box>

            </SimpleGrid>

        </Box>
    )
}

export default HomeProductCard6
