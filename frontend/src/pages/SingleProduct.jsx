import { Box, Button, Flex, Grid, Heading, Image, Input, SimpleGrid } from "@chakra-ui/react";

import "../style/SingleProduct.css";
import { useEffect, useState } from "react";
import { FiShoppingCart, } from "react-icons/fi";
import {FaCarSide} from "react-icons/fa"
import {GiTakeMyMoney} from "react-icons/gi"
import {BiTransferAlt} from "react-icons/bi"
import { useParams } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import Footer from "../component/Footer/Footer";
import Nev2 from "../component/Navbar/Nev2";
import Nav from "../component/Navbar/Nav";
import MobNav3 from "../component/Navbar/MobNav3";


function SingleProduct() {
  const [sdata, setSdata] = useState({});
  const [imagedata, setImageData] = useState(sdata?.image && sdata?.image[0].img)
  const [quantity, setQuantity] = useState(1);

  const [check, setCheck] = useState(false)
  function makeTrue(){
    console.log("true")
    setCheck(true)
  }
  function makeFalse(){
    console.log("false")
    setCheck(false)
  }

  const {id}=useParams()
  console.log("id",id)
  const toast = useToast()
  
  
  useEffect(()=>{
    handleGetData()

  },[id,quantity,imagedata])

  

  const handleGetData=()=>{
    fetch(`https://weak-ruby-bull-wear.cyclic.app/product/single_product/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      setSdata(res.product)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  const hanleCartData1=(item)=>{
    fetch("https://weak-ruby-bull-wear.cyclic.app/cart/add",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Authorization":`${localStorage.getItem("token")}`
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      toast({
        description: "Product Added in Cart",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
    .catch((err)=>{
      console.log(err)
      toast({
        description: "Something Went Wrong",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    })
  }
  

  
//  let imageData=sdata?.image && sdata?.image[0].img
//  console.log("img",imageData)
  
  console.log("data",sdata)
  return (
    <div>
      {check ? <MobNav3 makeFalse={makeFalse}/> :
        <Box><Nav makeTrue={makeTrue} />
        <Nev2 /> : <Box className="big-box">
        <Box className="first-img-box">
          <Box className="first-img-box-one">
            <Box
              border="2px solid #00B5B7"
              onClick={() => setImageData(sdata?.image && sdata?.image[0].img)}
              cursor={"pointer"}
            >
              <Image src={sdata?.image && sdata?.image[0].img} />
            </Box>
            <Box
              border="2px solid #00B5B7"
              onClick={() => setImageData(sdata?.image && sdata?.image[1].img)}
              cursor={"pointer"}
            >
              <Image src={sdata?.image && sdata?.image[1].img} />
            </Box>
            <Box
              border="2px solid #00B5B7"
              onClick={() => setImageData(sdata?.image && sdata?.image[0].img)}
              cursor={"pointer"}
            >
              <Image src={sdata?.image && sdata?.image[0].img} />
            </Box>
            <Box
              border="2px solid #00B5B7"
              onClick={() => setImageData(sdata?.image && sdata?.image[1].img)}
              cursor={"pointer"}
            >
              <Image src={sdata?.image && sdata?.image[1].img} />
            </Box>
          </Box>
          <Box className="first-img-box-two">
            <Image src={sdata?.image && sdata?.image[0].img} />
          </Box>
        </Box>
        <Box className="second-title-box">
          <Heading fontSize={["lg","xl","2xl"]} fontWeight={"semibold"}>{sdata && sdata?.title}</Heading>
          <br />
          <Heading fontSize={["lg","lg","xl"]} fontWeight={"semibold"}>
            Category: <span style={{ color: "#00B5B7" }}>{sdata?.category}</span>
          </Heading>
          <br />
          <Heading fontSize={["lg","lg","xl"]} fontWeight={"semibold"}>
            Brand: <span style={{ color: "#00B5B7" }}>{sdata?.brand}</span>
          </Heading>
          <br />
          <Heading fontSize={["lg","lg","xl"]} fontWeight={"semibold"}>
            MRP:
            <span style={{ textDecoration: "line-through" }}>
            ₹{(quantity*(sdata?.price * (100 / sdata?.discount)).toFixed())}
            </span>
          </Heading>
          <Flex gap={"20px"}>
            <Heading fontSize={["lg","lg","xl"]} fontWeight={"semibold"}>
              Price:<span>₹{(quantity*sdata?.price)}</span>
            </Heading>
            <p style={{ color: "#00B5B7" }}>{sdata?.discount}% off</p>
          </Flex>
          <p style={{ color: "#00B5B7" }}>Inclusive of all taxes</p>
          <br />
          <SimpleGrid columns={[1, 2,2,2]} spacing='20px' alignItems={"center"}>
            <Flex
              border={"1px solid #00B5B7"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderRadius={"6px"}
            >
              <Button
                fontSize={["lg","lg","xl"]}
                onClick={() => setQuantity(quantity - 1)}
                isDisabled={quantity <= 1}
              >
                -
              </Button>
              <Button fontSize={["lg","lg","xl"]} color={"#00B5B7"}>{quantity}</Button>
              <Button fontSize={["lg","lg","xl"]} onClick={() => setQuantity(quantity + 1)}>+</Button>
            </Flex>
            <Box className="Add-to-cart-button-box" onClick={()=>hanleCartData1(sdata)}>
              <p>
                <FiShoppingCart />
              </p>
              <p>Add to Cart</p>
            </Box>
            {/* <Box className="quick-buy-button">
              <p>Quick Buy</p>
            </Box> */}
          </SimpleGrid>
          <br />
          <Box className="delivery-services">
            <Heading fontSize={["lg","xl","2xl"]}>Delivery & Services</Heading>
            <br />
            <Flex>
              <Input border={"1px solid #00B5B7"} width={"50%"}/>
              <Button fontSize={["lg","lg","xl"]} border={"1px solid #00B5B7"} color={"#00B5B7"}>Check</Button>
            </Flex>
            <br />
            <Flex alignItems={"center"} gap="10px"> 
              <p style={{fontSize:"22px"}}><FaCarSide/></p>
              <p>Free Shipping</p>
            </Flex >
            <br />
            <Flex alignItems={"center"} gap="10px">
              <p style={{fontSize:"22px"}}><GiTakeMyMoney/></p>
              <p>Cash on Delivery Available</p>
            </Flex>
            <br />
            <Flex alignItems={"center"} gap="10px">
              <p style={{fontSize:"22px"}}><BiTransferAlt/></p>
              <p>14 days Return policy</p>
            </Flex>
          </Box>
        </Box>
      </Box>
      <br />
      <br />
      {/* <Box width={"77%"} margin={"auto"}>
        <Heading fontSize={["xl","2xl","3xl"]}>How to Consume</Heading>
        <br />
        <Image src="http://hkprod.s3.amazonaws.com/20000/normal_1999930_o.jpg"/>
      </Box> */}
      <br />
      <Footer/>
      </Box>}
      
    </div>
  );
}
export default SingleProduct;
