import { Box, Button, Flex, Grid, Heading, Image, Input } from "@chakra-ui/react";

import "../style/SingleProduct.css";
import { useState } from "react";
import { FiShoppingCart, } from "react-icons/fi";
import {FaCarSide} from "react-icons/fa"
import {GiTakeMyMoney} from "react-icons/gi"
import {BiTransferAlt} from "react-icons/bi"

let data = {
  _id: 1,
  img: [
    "https://img1.hkrtcdn.com/27250/pck_2724920_o.jpg",
    "https://img3.hkrtcdn.com/27250/pck_2724922_o.jpg",
    "https://img5.hkrtcdn.com/27250/pck_2724924_o.jpg",
  ],
  title: "MuscleBlaze Biozyme Performance Whey 2kg Rich Chocolate & Gallon",
  price: 4499,
  maxprice: 8847,
  ratings: 4.5,
  review: "1.6k",
  category: "MuscleBlaze",
};

function SingleProduct() {
  const [imagedata, setImageData] = useState(data.img[0]);
  const [quantity, setQuantity] = useState(1);
  const [res, setRes] = useState({});

  return (
    <div>
      <Box className="big-box">
        <Box className="first-img-box">
          <Box className="first-img-box-one">
            <Box
              border="2px solid #00B5B7"
              onClick={() => setImageData(data.img[0])}
              cursor={"pointer"}
            >
              <Image src={data.img[0]} />
            </Box>
            <Box
              border="2px solid #00B5B7"
              onClick={() => setImageData(data.img[1])}
              cursor={"pointer"}
            >
              <Image src={data.img[1]} />
            </Box>
            <Box
              border="2px solid #00B5B7"
              onClick={() => setImageData(data.img[2])}
              cursor={"pointer"}
            >
              <Image src={data.img[2]} />
            </Box>
          </Box>
          <Box className="first-img-box-two">
            <Image src={imagedata} />
          </Box>
        </Box>
        <Box className="second-title-box">
          <Heading fontWeight={"semibold"}>{data.title}</Heading>
          <br />
          <Heading size={"md"} fontWeight={"semibold"}>
            By <span style={{ color: "#00B5B7" }}>{data.category}</span>
          </Heading>
          <br />
          <Heading size={"sm"} fontWeight={"semibold"}>
            MRP:
            <span style={{ textDecoration: "line-through" }}>
              ₹{data.maxprice}
            </span>
          </Heading>
          <Flex gap={"20px"}>
            <Heading size={"md"} fontWeight={"semibold"}>
              Price:<span>₹{data.price}</span>
            </Heading>
            <p style={{ color: "#00B5B7" }}>47% off</p>
          </Flex>
          <p style={{ color: "#00B5B7" }}>Inclusive of all taxes</p>
          <br />
          <Flex gap={"20px"} alignItems={"center"}>
            <Flex
              border={"1px solid #00B5B7"}
              alignItems={"center"}
              borderRadius={"6px"}
            >
              <Button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <Button color={"#00B5B7"}>{quantity}</Button>
              <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
            </Flex>
            <Box className="Add-to-cart-button-box">
              <p>
                <FiShoppingCart />
              </p>
              <p>Add to Cart</p>
            </Box>
            <Box className="quick-buy-button">
              <p>Quick Buy</p>
            </Box>
          </Flex>
          <br />
          <Box className="delivery-services">
            <h1 style={{fontSize:"22px"}}>Delivery & Services</h1>
            <br />
            <Flex>
              <Input border={"1px solid #00B5B7"} width={"50%"}/>
              <Button border={"1px solid #00B5B7"} color={"#00B5B7"}>Check</Button>
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
      <Box width={"77%"} margin={"auto"}>
        <Heading>How to Consume</Heading>
        <br />
        <Image src="http://hkprod.s3.amazonaws.com/20000/normal_1999930_o.jpg"/>
      </Box>
      <br />
      
    </div>
  );
}
export default SingleProduct;
