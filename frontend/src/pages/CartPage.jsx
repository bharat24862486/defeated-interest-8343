import { Box, Button, Center, Divider, Grid, Heading, Image, Input, Text, VStack } from '@chakra-ui/react'
import { TbDiscount2 } from 'react-icons/tb';
import { AiOutlineRight } from 'react-icons/ai';
import SingleCartItem from './SingleCartItem';
import { useState } from 'react';

const CartPage=()=>{
const [cartItem,setCartItem]=useState([]);
const [totalP,setTotalP]=useState(0);
const [disPrice,setDisPrice]=useState(0);

    let cartItems=[
        {
            img:"https://img8.hkrtcdn.com/14680/prd_1467907-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-90-tablets-Unflavoured_c_t.jpg",
            name:"HealthKart HK Vitals Multivitamin with Multimineral,Taurine & Ginseng Extract, 90 table",
            price:353,
            discount:40,
            quantity:2
        },
        {
            img:"https://img8.hkrtcdn.com/14680/prd_1467907-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-90-tablets-Unflavoured_c_t.jpg",
            name:"HealthKart HK Vitals Multivitamin with Multimineral,Taurine & Ginseng Extract, 90 table",
            price:353,
            discount:60,
            quantity:3
        },
        {
            img:"https://img8.hkrtcdn.com/14680/prd_1467907-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-90-tablets-Unflavoured_c_t.jpg",
            name:"HealthKart HK Vitals Multivitamin with Multimineral,Taurine & Ginseng Extract, 90 table",
            price:353,
            quantity:1,
            discount:50
        }
    ]
const handlePayment=()=>{

}
return (<>

{ 
cartItems.length==0?<Center mt={'3%'}>
    <VStack>
    <Image src='https://static1.hkrtcdn.com/hknext/static/media/cart/empty-cart-new.svg'/>
    <Text fontWeight={'bold'} fontSize={'lg'}>Hey, it feels so light!</Text>
    <Text fontSize={'sm'}>There is nothing in you bag. Let’s add some items.</Text>
    <Button border={'1px solid #00ACC1'} background={'#E1F5FE'} color='#00ACC1'>Continue Shoping</Button>
    </VStack>

</Center>:<>
<Heading pb={'1%'} pt={'3%'} bg='#EEEEEE'>Cart Page</Heading>
        <Grid display={'flex'} justifyContent={['space-around','space-around','space-evenly']} bg='#EEEEEE' flexDirection={['column','column','row','row']} >
            <Box w={['50%',"80%",'60%']} bg='white' mb={'5%'} ml={'auto'} mr='auto'borderRadius={'10'} >
                <Text fontSize={'20'} m={'2%'} display={'flex'} alignItems={'start'}>Shopping Cart ({cartItems.length} Items)</Text>
                <Divider/>
                {
          cartItems.map((ele)=>{
                    // setTotalP((prev)=>prev+ele.price);
                    // let disc=ele.price-(ele.price*(ele.discount)/100);
                    // setDisPrice((prev)=>prev+disc);
              return <Box key={ele.id}>
                    <SingleCartItem {...ele}/>
                    <Divider/>
                </Box>
            })
        }
            </Box>
            <Box w={['70%',"60%",'26%']} m={['auto','auto','auto']}>
                <Grid gap={'3%'} mb={'70%'}>
                    <Box display={'flex'} justifyContent={['space-around','space-around','space-evenly']} bg='white' borderRadius={'10'}>
                        <Input border="none" placeholder="Enter Pincode"/>
                        <Button bg={'white'} color={'#00ACC1'} border="none" _hover={{bg:"white"}}>Check</Button>
                    </Box>
                    <Button w='100%'  justifyContent={"space-between"} bg="white" leftIcon={<TbDiscount2 fontSize={'27'} color='orange'/>} rightIcon={<AiOutlineRight/>}>Apply Coupon </Button>
                    <Box bg='white' h='auto' p={'10%'} borderRadius={'10'}>
                        <Text fontSize={'30'} fontWeight={'bold'}>Order Summary</Text>
                        <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                            <Text>Total MRP</Text>
                            <Text color='#00ACC1'>${totalP}</Text>
                        </Box>
                        <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                            <Text>Total Discount</Text>
                            <Text>-${totalP-disPrice}</Text>
                        </Box>
                        <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                            <Text>Shipping Charges</Text>
                            <Text color="#00ACC1">FREE</Text>
                        </Box>
                        <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                            <Text as='bold'>Payable Amount</Text>
                            <Text as='bold'>$ {disPrice}</Text>
                        </Box>
                        <Divider mt='5%' fontWeight={'bold'}/>
                        <Button w='100%' mt="8%" onClick={handlePayment} pl={'20%'} pr={'20%'} as='bold' color='white' bg='#00ACC1' _hover={{bg:"#0097A7"}}>
                            Procced to pay
                        </Button>
                        
                    </Box>
                </Grid>
            </Box>
        </Grid>
        </>
}
        </>
    )
    
}

export default CartPage;
