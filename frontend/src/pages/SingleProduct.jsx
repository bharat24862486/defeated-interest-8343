import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";

import "../style/SingleProduct.css";
import { useState } from "react";

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
    const [imagedata,setImageData]=useState(data.img[0])
    const [res,setRes]=useState({})
  
  return (
    <div>
      <Box className="big-box">
        <Box className="first-img-box">
          <Box className="first-img-box-one">
            <Box border="2px solid #00B5B7" onClick={()=>setImageData(data.img[0])} cursor={"pointer"}>
              <Image src={data.img[0]} />
            </Box>
            <Box border="2px solid #00B5B7" onClick={()=>setImageData(data.img[1])} cursor={"pointer"}>
              <Image src={data.img[1]} />
            </Box>
            <Box border="2px solid #00B5B7" onClick={()=>setImageData(data.img[2])} cursor={"pointer"}>
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
            <Heading size={"md"} fontWeight={"semibold"}>By <span style={{color:"#00B5B7"}}>{data.category}</span></Heading>
            <br />
            <br />
            <Heading size={"sm"} fontWeight={"semibold"}>MRP:<span style={{textDecoration:"line-through"}}>₹{data.maxprice}</span></Heading>
            <Flex gap={"20px"}>
             <Heading size={"md"} fontWeight={"semibold"}>Price:<span>₹{data.price}</span></Heading>
             <p style={{color:"#00B5B7"}}>47% off</p>
            </Flex>
            <p style={{color:"#00B5B7"}}>Inclusive of all taxes</p>

        </Box>
      </Box>
    </div>
  );
}
export default SingleProduct;
