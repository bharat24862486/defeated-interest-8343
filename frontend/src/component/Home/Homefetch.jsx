import { Box, Grid, Heading, SimpleGrid, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import HomeProductCard from './HomeProductCard'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Homefetch = ({title,url}) => {
    const toast = useToast()
    const [data, setData] = useState([])
    let data1 = []

    let [data3, setData3] = useState([])
    let [data4, setData4] = useState([])
    
    let data2 = []
    useEffect(() => {
        console.log(url)
        axios.get(url)
            .then((res) => {
                console.log(res.data.product, "line 12")

                for (let i = 0; i < res.data.product.length; i++) {
                    if (i <= 3) {
                        if(i > 1){
                            data2.push(res.data.product[i])
                        }
                        data1.push(res.data.product[i])
                    } else if (i > 3 && i < 7) {
                        data2.push(res.data.product[i])
                    }
                }
                setData3(data1)
                setData4(data2)


                return setData(res.data)
            })
            .catch((err) => console.log(err))




    }, [])

    console.log(data3,data4)



    const hanleCartData=(item)=>{
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






    return (
        <Box m={"2% 4%"}>
            <Heading fontSize={["1.4rem","1.6rem","1.8rem"]} fontWeight={"600"} m={"4% 0%"} >{title}</Heading>

            <Carousel >
               <Box>
               <SimpleGrid  columns={[2,2,4]} gap={"1%"}>
               {data3?.map((el)=>{
                console.log(el)
                    return <HomeProductCard key={el._id} all={el} hanleCartData={hanleCartData}/>
                })}
               </SimpleGrid>
               </Box>

               <Box>
               <SimpleGrid columns={[2,2,4]} gap={"1%"}>
               {data4?.map((el)=>{
                    return <HomeProductCard key={el._id} all={el} hanleCartData={hanleCartData}/>
                })}
               </SimpleGrid>
               </Box>
               
               
            </Carousel>






            <hr style={{width:"100%" , fontWeight:"800", border:"2px solid #d5dde0"}}/>
        </Box>
    )
}

export default Homefetch
