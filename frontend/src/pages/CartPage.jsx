import { Box, Button, Center, Divider, Grid, Heading, Image, Input, Text, VStack } from '@chakra-ui/react'
import { TbDiscount2 } from 'react-icons/tb';
import { AiOutlineRight } from 'react-icons/ai';
import SingleCartItem from './SingleCartItem';
import { useEffect, useState } from 'react';
import { deleteCartItem, getCartItems, updateQuantity } from '../redux/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../component/Footer/Footer'
import Nev2 from '../component/Navbar/Nev2'
import MobNav3 from '../component/Navbar/MobNav3'
import Nav from '../component/Navbar/Nav'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartPage = () => {
    const location = useLocation()
    // const [cartItems, setCartItems] = useState([]);
    const [totalP, setTotalP] = useState(0);
    const [disPrice, setDisPrice] = useState(0);
    const [check, setCheck] = useState(false)
    const dispatch = useDispatch();
    const cartItems = useSelector((data) => data.UserReducer.products)
    console.log(cartItems, "line 23   bhen ka")
    // let cartItems=[
    //     {
    //         img:"https://img8.hkrtcdn.com/14680/prd_1467907-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-90-tablets-Unflavoured_c_t.jpg",
    //         name:"HealthKart HK Vitals Multivitamin with Multimineral,Taurine & Ginseng Extract, 90 table",
    //         price:353,
    //         discount:40,
    //         quantity:2
    //     },
    //     {
    //         img:"https://img8.hkrtcdn.com/14680/prd_1467907-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-90-tablets-Unflavoured_c_t.jpg",
    //         name:"HealthKart HK Vitals Multivitamin with Multimineral,Taurine & Ginseng Extract, 90 table",
    //         price:353,
    //         quantity:1,
    //         discount:50
    //     }
    // ]
    console.log("cart", cartItems)
    const handlePayment = () => {
        // dispatch(ord)
        // let userId = JSON.parse(localStorage.getItem("userId"))
        // axios.post(`https://weak-ruby-bull-wear.cyclic.app/order/add/${userId}`, cartItems)
        // dispatch(deleteCartItem(userID));

    }
    function makeTrue() {
        console.log("true")
        setCheck(true)
    }
    function makeFalse() {
        console.log("false")
        setCheck(false)
    }


    // for (let i = 0; i < cartItems.length; i++) {
    //     setTotalP((prev) => prev + (cartItems[i].price) * cartItems[i].quantity);
    //     let disc = (cartItems[i].price - (cartItems[i].price * (cartItems[i].discount) / 100)) * cartItems[i].quantity;
    //     setDisPrice((prev) => prev + disc);
    // }


    let total = 0;
    for (var i = 0; i < cartItems?.length; i++) {
        total += cartItems[i]?.quantity * cartItems[i]?.price
    }

    console.log(total,"line no 67")


    function updateQ(Q, id) {
        // let obj = {
        //     quantity: Q
        // }
        // const token = JSON.parse(localStorage.getItem("token"))

        dispatch(updateQuantity(Q,id)).then(()=>dispatch(getCartItems()))

        



    }

    const navigate = useNavigate()

    function DELETE(id){
        dispatch(deleteCartItem(id)).then(()=>dispatch(getCartItems()))
    }

    useEffect(() => {
        dispatch(getCartItems())





    }, [location.search])

    // console.log(disPrice, "price total")




    return (<>
        <Box>{check ? <MobNav3 makeFalse={makeFalse} /> :
            <Box><Nav makeTrue={makeTrue} />
                <Nev2 />
                {
                    cartItems?.length == 0 ? <Center mt={'3%'}>
                        <VStack>
                            <Image src='https://static1.hkrtcdn.com/hknext/static/media/cart/empty-cart-new.svg' />
                            <Text fontWeight={'bold'} fontSize={'lg'}>Hey, it feels so light!</Text>
                            <Text fontSize={'sm'}>There is nothing in you bag. Let’s add some items.</Text>
                            <Button border={'1px solid #00ACC1'} background={'#E1F5FE'} color='#00ACC1'>Continue Shoping</Button>
                        </VStack>

                    </Center> : <>
                        <Heading pb={'1%'} pt={'3%'} bg='#EEEEEE'>Cart Page</Heading>
                        <Grid display={'flex'} justifyContent={['space-around', 'space-around', 'space-evenly']} bg='#EEEEEE' flexDirection={['column', 'column', 'row', 'row']} >
                            <Box w={['50%', "80%", '60%']} bg='white' mb={'5%'} ml={'auto'} mr='auto' borderRadius={'10'} >
                                <Text fontSize={'20'} m={'2%'} display={'flex'} alignItems={'start'}>Shopping Cart ({cartItems?.length} Items)</Text>
                                <Divider />
                                {
                                    cartItems?.map((ele) => {

                                        return <Box key={ele.id}>
                                            <SingleCartItem {...ele} images={ele.image[0]} updateQ={updateQ} DELETE={DELETE} />
                                            <Divider />
                                        </Box>
                                    })
                                }
                            </Box>
                            <Box w={['70%', "60%", '26%']} m={['auto', 'auto', 'auto']}>
                                <Grid gap={'3%'} mb={'70%'}>
                                    <Box display={'flex'} justifyContent={['space-around', 'space-around', 'space-evenly']} bg='white' borderRadius={'10'}>
                                        <Input border="none" placeholder="Enter Pincode" />
                                        <Button bg={'white'} color={'#00ACC1'} border="none" _hover={{ bg: "white" }}>Check</Button>
                                    </Box>
                                    <Button w='100%' justifyContent={"space-between"} bg="white" leftIcon={<TbDiscount2 fontSize={'27'} color='orange' />} rightIcon={<AiOutlineRight />}>Apply Coupon </Button>
                                    <Box bg='white' h='auto' p={'10%'} borderRadius={'10'}>
                                        <Text fontSize={'30'} fontWeight={'bold'}>Order Summary</Text>
                                        <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                                            <Text>Total MRP</Text>
                                            <Text color='#00ACC1'>₹ {total}</Text>
                                        </Box>
                                        
                                        <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                                            <Text>Shipping Charges</Text>
                                            <Text color="#00ACC1">FREE</Text>
                                        </Box>
                                        <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                                            <Text as='bold'>Payable Amount</Text>
                                            <Text as='bold'>₹ {total}</Text>
                                        </Box>
                                        <Divider mt='5%' fontWeight={'bold'} />
                                        <Button w='100%' mt="8%" onClick={()=>navigate("/payment")} pl={'20%'} pr={'20%'} as='bold' color='white' bg='#00ACC1' _hover={{ bg: "#0097A7" }}>
                                            Procced to pay
                                        </Button>

                                    </Box>
                                </Grid>
                            </Box>
                        </Grid>
                    </>
                }
                <Footer />
            </Box>}
        </Box>
    </>
    )

}

export default CartPage;
