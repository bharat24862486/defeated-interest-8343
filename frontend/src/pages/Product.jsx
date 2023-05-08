import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Radio,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
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
import { data } from "../component/data";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductError,
  getProductRequest,
  getProductSuccess,
} from "../redux/ProductReducer/action";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

function Product() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialsort = searchParams.getAll("sort")[0];
  const [sort, setSort] = useState(initialsort || "");

  const initialcategory = searchParams.getAll("category")[0];
  const [category, setCategory] = useState(initialcategory || "");

  const initialdiscount = searchParams.getAll("discount")[0];
  const [discount, setDiscount] = useState(initialdiscount || 0);
  
  const initialrating = searchParams.getAll("rating")[0];
  const [rating, setRating] = useState(initialrating || 0);

  const initialprice = searchParams.getAll("price")[0];
  const [price, setPrice] = useState(initialprice || 0);

  const initialpage=searchParams.getAll("page")[0]
  const [page, setPage] = useState(initialpage || 1);

  const location = useLocation();
  const navigate=useNavigate()
  const toast = useToast()

  useEffect(() => {
    let params = {};
    if (sort) {
      params.sort = sort;
    }
    if (category) {
      params.category = category;
    }
    if (discount) {
      params.discount = discount;
    }
    if (rating) {
      params.rating = rating;
    }
    if(price) {
      params.price = price;
    }
    if(page){
      params.page=page
    }
    setSearchParams(params);
  }, [
    sort,
    category,
    discount,
    rating,
    price,
    page,
   
    location.search
    
  ]);

  useEffect(() => {
    if(sort || category || discount || rating || price){
      getProductData({ sort, category, discount, rating, price, page });

    }else{
      getProductData1()
    }
  }, [sort, category, discount, rating, price,page]);

  const dispatch = useDispatch();
  const { isLoading, isError, product } = useSelector(
    (store) => store.productReducer
  );
  console.log(product);

  const getProductData = ({ sort, category, discount, rating, price, page }) => {
    dispatch(getProductRequest());
    axios
      .get("https://unusual-gold-button.cyclic.app/product", {
        params: {
          sort: sort,
          category: category,
          discount: discount,
          rating: rating,
          price: price,
          page:page
        },
      })
      .then((res) => {
        //console.log("res",res)
        dispatch(getProductSuccess(res.data.product));
      })
      .catch((err) => {
        dispatch(getProductError());
      });
  };
  //https://unusual-gold-button.cyclic.app/
  //https://frantic-lime-gabardine.cyclic.app/

  const getProductData1 = () => {
    dispatch(getProductRequest());
    axios
      .get("https://unusual-gold-button.cyclic.app/product")
      .then((res) => {
        //console.log("res",res)
        dispatch(getProductSuccess(res.data.product));
      })
      .catch((err) => {
        dispatch(getProductError());
      });
  };

  const handleNavigate=(id)=>{
    navigate(`/product/${id}`)
  }

  const hanleCartData=(item)=>{
    fetch("https://unusual-gold-button.cyclic.app/cart/add",{
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
                      By Category
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
                  
                    <Checkbox
                      value={"Fitness"}
                      onChange={(e) => setCategory(e.target.value)}
                      isChecked={category=="Fitness"}
                    >
                      Fitness
                    </Checkbox>
                    <p>1</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox
                      value="Vitamin"
                      onChange={(e) => setCategory(e.target.value)}
                      isChecked={category=="Vitamin"}
                    >
                      Vitamin
                    </Checkbox>
                    <p>185</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox
                      value="Ayurveda"
                      onChange={(e) => setCategory(e.target.value)}
                      isChecked={category=="Ayurveda"}
                    >
                      Ayurveda
                    </Checkbox>
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
                  <Checkbox
                    value={10}
                    onChange={(e) => setDiscount(e.target.value)}
                    isChecked={discount==10}
                  >
                    10% And Above
                  </Checkbox>
                  <br />
                  <br />
                  <Checkbox
                    value={20}
                    onChange={(e) => setDiscount(e.target.value)}
                    isChecked={discount==20}
                  >
                    20% And Above
                  </Checkbox>
                  <br />
                  <br />
                  <Checkbox
                    value={30}
                    onChange={(e) => setDiscount(e.target.value)}
                    isChecked={discount==30}
                  >
                    30% And Above
                  </Checkbox>
                  <br />
                  <br />
                  <Checkbox
                    value={40}
                    onChange={(e) => setDiscount(e.target.value)}
                    isChecked={discount==40}
                  >
                    40% And Above
                  </Checkbox>
                  <br />
                  <br />
                  <Checkbox
                    value={50}
                    onChange={(e) => setDiscount(e.target.value)}
                    isChecked={discount==50}
                  >
                    50% And Above
                  </Checkbox>
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
                  <Checkbox
                    value={5}
                    onChange={(e) => setRating(e.target.value)}
                    isChecked={rating==5}
                  >
                    5 Ratings
                  </Checkbox>
                  <br />
                  <br />
                  <Checkbox
                    value={4}
                    onChange={(e) => setRating(e.target.value)}
                    isChecked={rating==4}
                  >
                    4 Ratings And Above
                  </Checkbox>
                  <br />
                  <br />
                  <Checkbox
                    value={3}
                    onChange={(e) => setRating(e.target.value)}
                    isChecked={rating==3}
                  >
                    3 Ratings And Above
                  </Checkbox>
                  <br />
                  <br />
                  <Checkbox
                    value={2}
                    onChange={(e) => setRating(e.target.value)}
                    isChecked={rating==2}
                  >
                    2 Ratings And Above
                  </Checkbox>
                  <br />
                  <br />
                  <Checkbox
                    value={1}
                    onChange={(e) => setRating(e.target.value)}
                    isChecked={rating==1}
                  >
                    1 And Above
                  </Checkbox>
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
                    <Checkbox
                      value={500}
                      onChange={(e) => setPrice(e.target.value)}
                      isChecked={price==500}
                    >
                      500 And Above
                    </Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox
                      value={1501}
                      onChange={(e) => setPrice(e.target.value)}
                      isChecked={price==1501}
                    >
                      1,501 And Above
                    </Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox
                      value={3001}
                      onChange={(e) => setPrice(e.target.value)}
                      isChecked={price==3001}
                    >
                      3,001 And Above
                    </Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox
                      value={4501}
                      onChange={(e) => setPrice(e.target.value)}
                      isChecked={price==4501}
                    >
                      4,501 And Above
                    </Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox
                      value={6001}
                      onChange={(e) => setPrice(e.target.value)}
                      isChecked={price==6001}
                    >
                      6,001 And Above
                    </Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox
                      value={7501}
                      onChange={(e) => setPrice(e.target.value)}
                      isChecked={price==7501}
                    >
                      7,501 And Above
                    </Checkbox>
                  </Flex>
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
        <Box className="secondbox">
          <Box>
            <Image
              src="https://img9.hkrtcdn.com/23185/bnr_2318418_o.png"
              alt="poster"
            />
          </Box>
          <br />
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading fontSize={["xl","2xl","3xl"]}>Whey Protein Powder</Heading>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              gap="10px"
            >
              <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/authentic-plp.svg" />
              <h2>100% Original & Authentic</h2>
            </Flex>
          </Flex>
          <br />
          <Flex gap={"20px"}>
            <p style={{ fontSize: "25px", color: "orange" }}>{Star(4.4)}</p>
            <p style={{ fontSize: "17px" }}>4.4(18.3k Reviews)</p>
          </Flex>
          <br />
          <Text fontSize={["md","lg","xl"]} textAlign={"left"}>
            Whey protein provides all the necessary protein and nutrients, helps
            in improving great energy levels, and allows you to achieve your
            bodybuilding goals safely and effectively. It also benefits the
            overall health of the body with better metabolism, right nutrition,
            immune health, muscle growth & recovery, etc while being easily
            digestible and low in calories. If you want a powerful tool to get
            the results from the work you are putting in your training or your
            daily well being, then buying a quality whey protein supplement
            should be your next move.
          </Text>
          <br />
          <br />
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading size="md">({product.length} items)</Heading>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Heading fontSize={"md"}>Sort:</Heading>
              <Select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="1">Price --Low to High</option>
                <option value="-1">Price --High to Low</option>
              </Select>
            </Flex>
          </Flex>
          <br />
          <br />
          <Box className="productboxes">
            {product && product.map((el) => (
              <Box key={el._id} className="productboxeschild" >
                <Flex>
                  <Box fontSize={"25px"}>
                    <FiHeart />
                  </Box>
                </Flex>
                <Image onClick={()=>handleNavigate(el._id)} src={el.image[0].img} />
                <hr />
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  marginTop={"5px"}
                >
                  <Flex
                    alignItems={"center"}
                    padding="3px 7px"
                    backgroundColor={"#00B5B7"}
                    color="white"
                  >
                    <p>{el.rating}</p>
                    <p>
                      <CiStar />
                    </p>
                  </Flex>
                  <p style={{ fontWeight: "bold" }}>{el.brand}</p>
                </Flex>
                <br />
                <Box noOfLines={2} style={{ fontWeight: "bold" }}>
                  {el.title}
                </Box>
                <br />
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <p style={{ fontWeight: "bold" }}>₹{el.price}</p>
                  <p className="maxprice">
                    ₹{(el.price * (100 / el.discount)).toFixed()}
                  </p>
                  <p>{el.discount}% off</p>
                </Flex>
                <br />
                <Box className="Add-to-cart-button" onClick={()=>hanleCartData(el)}>
                  <p>
                    <FiShoppingCart />
                  </p>
                  <p>Add to Cart</p>
                </Box>
              </Box>
            ))}
          </Box>
          <br />
          <br />
          <SimpleGrid columns={[6,6,10]} justifyContent={"center"} align={"center"} gap={"5px"}>
            <Button border={"1px solid #00B5B7"} onClick={()=>setPage(1)}>1</Button>
            <Button border={"1px solid #00B5B7"} onClick={()=>setPage(2)}>2</Button>
            <Button border={"1px solid #00B5B7"} onClick={()=>setPage(3)}>3</Button>
            <Button border={"1px solid #00B5B7"} onClick={()=>setPage(4)}>4</Button>
            <Button border={"1px solid #00B5B7"} onClick={()=>setPage(5)}>5</Button>
            <Button border={"1px solid #00B5B7"} onClick={()=>setPage(6)}>6</Button>
            <Button border={"1px solid #00B5B7"} onClick={()=>setPage(7)}>7</Button>
            <Button border={"1px solid #00B5B7"} onClick={()=>setPage(8)}>8</Button>
            <Button border={"1px solid #00B5B7"} onClick={()=>setPage(9)}>9</Button>
            <Button border={"1px solid #00B5B7"} onClick={()=>setPage(10)}>10</Button>
          </SimpleGrid>
          <br />
        </Box>
      </Box>
    </div>
  );
}
export default Product;
