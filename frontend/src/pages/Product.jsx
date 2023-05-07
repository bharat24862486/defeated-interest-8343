import { Box, Checkbox, Container, Flex, Heading, Image, Input, Radio, Select, Stack, Text } from "@chakra-ui/react";
import "../style/Product.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { RiHome2Fill } from "react-icons/ri";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import {data} from "../component/data"
import { FiHeart,FiShoppingCart } from "react-icons/fi";
import {CiStar} from "react-icons/ci"
import {useDispatch,useSelector} from "react-redux"
import { getProductError, getProductRequest, getProductSuccess } from "../redux/ProductReducer/action";
import axios from "axios"
import { useEffect } from "react";


function Product() {

  const dispatch=useDispatch()
  const {isLoading,isError,product}=useSelector((store)=>store.productReducer)
  console.log(product)

  const getProductData=()=>{
    dispatch(getProductRequest())
    axios.get("https://vast-puce-salamander-hat.cyclic.app/product")
    .then((res)=>{
      console.log(res)
      dispatch(getProductSuccess(res))
    })
    .catch((err)=>{
      dispatch(getProductError())
    })
  }

  useEffect(()=>{
    getProductData()
  },[])

  

  function Star(rating) {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "orange" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
      </Box>
    );
  }
  return (
    <div className="productspage">
      <Box>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem style={{ fontSize: "25px", color: "#00B5B7" }}>
            <BreadcrumbLink href="/">
              <RiHome2Fill />
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* <BreadcrumbItem>
            <BreadcrumbLink href="#">Sports Nutrition</BreadcrumbLink>
          </BreadcrumbItem> */}
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Proteins</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage style={{ fontWeight: "bold" }}>
            <BreadcrumbLink href="#">Whey Proteins</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <br />
      <Box className="mainbox">
        <Box className="firstbox">
          <Heading
            fontSize={"18px"}
            fontFamily={"sans-serif"}
            textAlign={"left"}
          >
            Browse By
          </Heading>
          <br />
          <Box className="first-1-child">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      Offers
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflowY={"scroll"}
                  height="250px"
                  textAlign={"left"}
                >
                  <Radio>Extra 5% off</Radio>
                  <br />
                  <br />
                  <Radio>Snack Bar 6 Bar Choco Almond @ Rs. 234</Radio>
                  <br />
                  <br />
                  <Radio>MuscleBlaze Fish Oil 60 Softgels @ Rs. 474</Radio>
                  <br />
                  <br />
                  <Radio>Get High Protein Muesli @ Rs. 99</Radio>
                  <br />
                  <br />
                  <Radio>Free Gym Bag, Shaker & 1 Year Membership Plan</Radio>
                  <br />
                  <br />
                  <Radio>Get Healthkart Fish Oil 60 Tabs @ Rs. 325</Radio>
                  <br />
                  <br />
                  <Radio>MB CreaPRO @ Rs. 599 || Flat 33% Off</Radio>
                  <br />
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <br />
          <Heading
            fontSize={"18px"}
            fontFamily={"sans-serif"}
            textAlign={"left"}
          >
            Filter Options
          </Heading>
          <br />
          <Box className="first-1-child">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      By Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflowY={"scroll"}
                  height="250px"
                  textAlign={"left"}
                >
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>HealthKart</Checkbox>
                    <p>1</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>MuscleBlaze</Checkbox>
                    <p>185</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>ON</Checkbox>
                    <p>16</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>Ultimate Nutrition</Checkbox>
                    <p>1</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>Myproteins</Checkbox>
                    <p>5</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>MuscleTech</Checkbox>
                    <p>23</p>
                  </Flex>
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <br />
          <Box className="first-1-child">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      Discount
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflowY={"scroll"}
                  height="250px"
                  textAlign={"left"}
                >
                  <Radio>10% And Above</Radio>
                  <br />
                  <br />
                  <Radio>20% And Above</Radio>
                  <br />
                  <br />
                  <Radio>30% And Above</Radio>
                  <br />
                  <br />
                  <Radio>40% And Above</Radio>
                  <br />
                  <br />
                  <Radio>50% And Above</Radio>
                  <br />
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <br />
          <Box className="first-1-child">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      Ratings
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflowY={"scroll"}
                  height="250px"
                  textAlign={"left"}
                >
                  <Radio>5 Ratings</Radio>
                  <br />
                  <br />
                  <Radio>4 Ratings And Above</Radio>
                  <br />
                  <br />
                  <Radio>3 Ratings And Above</Radio>
                  <br />
                  <br />
                  <Radio>2 Ratings And Above</Radio>
                  <br />
                  <br />
                  <Radio>1 And Above</Radio>
                  <br />
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <br />
          <Box className="first-1-child">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflowY={"scroll"}
                  height="250px"
                  textAlign={"left"}
                >
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>1500 And Below</Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>1,501-3,000</Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>3,001-4,500</Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>4,501-6,000</Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>6,001-7,500</Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>7,501-9,000</Checkbox>
                  </Flex>
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
        <Box className="secondbox">
          <Box>
            <Image src="https://img9.hkrtcdn.com/23185/bnr_2318418_o.png" alt="poster"/>
          </Box>
          <br />
          <Flex justifyContent={"space-between"} alignItems={"center"}>
           <Heading size='md'>Whey Protein Powder</Heading>
           <Flex justifyContent={"space-between"} alignItems={"center"} gap="10px">
            <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/authentic-plp.svg"/>
            <h2>100% Original & Authentic</h2>
           </Flex>
          </Flex>
          <br />
          <Flex gap={"20px"}>
            <p style={{fontSize:"25px",color:"orange"}}>{Star(4.4)}</p>
            <p style={{fontSize:"17px"}}>4.4(18.3k Reviews)</p>
          </Flex>
          <br />
          <Text fontSize='md' textAlign={"left"}>
            Whey protein provides all the necessary protein and nutrients, helps in improving great energy levels, and allows you to achieve your bodybuilding goals safely and effectively. It also benefits the overall health of the body with better metabolism, right nutrition, immune health, muscle growth & recovery, etc while being easily digestible and low in calories. If you want a powerful tool to get the results from the work you are putting in your training or your daily well being, then buying a quality whey protein supplement should be your next move.
          </Text>
          <br />
          <br />
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading size='md'>(746 items)</Heading>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Heading fontSize={"md"}>Sort:</Heading>
              <Select>
                <option value="">Price --Low to High</option>
                <option value="">Price --High to Low</option>
                <option value="">Rating --High to Low</option>
              </Select>

            </Flex>
          </Flex>
          <br />
          <br />
          <Box className="productboxes">
            {data.map((el)=>(
              <Box key={el._id} className="productboxeschild">
                <Flex>
                  <Box fontSize={"25px"}><FiHeart/></Box>
                </Flex>
                <Image src={el.img}/>
                <hr />
                <Flex justifyContent={"space-between"} alignItems={"center"} marginTop={"5px"}>
                  <Flex alignItems={"center"} padding="3px 7px" backgroundColor={"#00B5B7"} color="white">
                    <p>{el.ratings}</p>
                    <p><CiStar/></p>
                  </Flex>
                  <p>{el.review} review</p>
                </Flex>
                <br />
                <Box noOfLines={2} style={{fontWeight:"bold"}}>{el.title}</Box>
                <br />
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <p style={{fontWeight:"bold"}}>₹{el.price}</p>
                  <p className="maxprice">₹{el.maxprice}</p>
                  <p>{Math.floor((el.price/el.maxprice)*100)}% off</p>
                </Flex>
                <br />
                <Box className="Add-to-cart-button">
                  <p><FiShoppingCart/></p>
                  <p>Add to Cart</p>
                </Box>
              </Box>
            ))}
          </Box>
          
        </Box>
        

      </Box>
    </div>
  );
}
export default Product;
