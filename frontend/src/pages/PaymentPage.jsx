import React, { useEffect, useState } from 'react'
import {
  Box,
  FormControl,
  Input,
  FormLabel,
  Heading,
  Button,
  Checkbox,
  Text,
  Grid,
  Divider
} from "@chakra-ui/react";

//   import { TbDiscount2 } from 'react-icons/tb';
// import { AiOutlineRight } from 'react-icons/ai';
import Footer from '../component/Footer/Footer'
import Nev2 from '../component/Navbar/Nev2'
import MobNav3 from '../component/Navbar/MobNav3'
import Nav from '../component/Navbar/Nav'
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../redux/user/actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const PaymentPage = () => {
  const cartItems = useSelector((data) => data.UserReducer.products)

  const dispatch = useDispatch();
  console.log(cartItems)
  const [check, setCheck] = useState(false)
  function makeTrue() {
    console.log("true")
    setCheck(true)
  }
  function makeFalse() {
    console.log("false")
    setCheck(false)
  }

  useEffect(() => {
    dispatch(getCartItems())





  }, [])

  const navigate = useNavigate()


  const handleOder = () => {
    let id = JSON.parse(localStorage.getItem("userId"))
    let token = JSON.parse(localStorage.getItem("token"))
    axios.post(`https://weak-ruby-bull-wear.cyclic.app/order/add/${id}`, cartItems, {
      headers: {
        Authorization: token,
      }
    }).then((res) => console.log(res))

    axios.delete(`https://weak-ruby-bull-wear.cyclic.app/cart/deleteAll`, {
      headers: {
        Authorization: token,
      }
    }).then((res) => navigate("/"))
  }

  let total = 0;
  for (var i = 0; i < cartItems?.length; i++) {
    total += cartItems[i]?.quantity * cartItems[i]?.price
  }

  console.log(total, "total value")
  return (
    <Box>{check ? <MobNav3 makeFalse={makeFalse} /> :
      <Box><Nav makeTrue={makeTrue} />
        <Nev2 />
        <Box
          w={'90%'}
          boxShadow="md"
          p="6"
          rounded="md"
          bg="#EEEEEE"
          mt="8%"
          mb={"8%"}
          display={"flex"}
          justifyContent={'space-around'}
          flexDirection={["column", "column", "column", "row"]}
          m={"auto"}
          gap={'4%'}
        >
          <Box bg={'white'} w={["80%", "80%", "80%", '70%']} borderRadius={'3%'} pr={'4%'} pl={'5%'} m={'auto'}>
            <Box>
              <FormControl isRequired>
                <Heading size={"md"} m="5%">
                  Shipping Information
                </Heading>
                <FormLabel ml={'2%'}>Full name</FormLabel>
                <Input placeholder="First name" type={"text"} />

                <FormLabel ml={'2%'} mt={'2%'}>Street address</FormLabel>
                <Input placeholder="Enter Address" type={"text"} />
                <FormLabel ml={'2%'} mt={'2%'}>Zipcode</FormLabel>
                <Input placeholder='Enter Zipcode' type={" number"} />
                <FormLabel ml={'2%'} mt={'2%'}>Email</FormLabel>
                <Input placeholder="Enter E-mail" type={"email"} />
                <Checkbox defaultChecked m={"4%"}>
                  Billing address same as shipping
                </Checkbox>
              </FormControl>
            </Box>
            <Box m={"5%"}>
              <FormControl isRequired>
                <Heading mb='2%' size={"md"}>Payment Information</Heading>
                <FormLabel ml={'2%'} mt={'2%'}>Debit card number</FormLabel>
                <Input placeholder="Card number" type={"number"} maxLength="11" />
                <FormLabel ml={'2%'} mt={'2%'}>Name on card name</FormLabel>
                <Input placeholder="Card name" type={"text"} maxLength="11" />
                <FormLabel ml={'2%'} mt={'2%'}>Expiry date</FormLabel>
                <Input placeholder="Phone number" type={"date"} />
                <FormLabel ml={'2%'} mt={'2%'}>CVV</FormLabel>
                <Input type={"number"} />
              </FormControl>
            </Box>
          </Box>
          <Box w={["70%", "70%", "70%", '30%']} alignSelf={'center'} mt={'5%'}>
            <Grid gap={'3%'} mb={'70%'}>
              <Box bg='white' w={'100%'} h='auto' p={'10%'} borderRadius={'10'}>
                <Text fontSize={'30'} fontWeight={'bold'}>Order Summary</Text>
                <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                  <Text>Total MRP</Text>
                  <Text color='#00ACC1'>{total}</Text>
                </Box>
                {/* <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                            <Text>Total Discount</Text>
                            <Text>-$224</Text>
                        </Box> */}
                <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                  <Text>Shipping Charges</Text>
                  <Text color="#00ACC1">FREE</Text>
                </Box>
                <Box mt='5%' display={'flex'} justifyContent={'space-between'}>
                  <Text as='bold'>Payable Amount</Text>
                  <Text as='bold'>{total}</Text>
                </Box>
                <Divider mt='5%' fontWeight={'bold'} />
                <Button onClick={handleOder} w='100%' mt="8%" pl={'20%'} pr={'20%'} as='bold' color='white' bg='#00ACC1' _hover={{ bg: "#0097A7" }}>
                  Confirm Payment
                </Button>

              </Box>
            </Grid>
          </Box>
        </Box>
        <Footer />
      </Box>}
    </Box>
  )
}

export default PaymentPage
