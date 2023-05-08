import { Box, Grid, Heading, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import HomeProductCard from './HomeProductCard'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Homefetch = ({title,url}) => {
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








    return (
        <Box m={"2% 4%"}>
            <Heading fontSize={["1.4rem","1.6rem","1.8rem"]} fontWeight={"600"} m={"4% 0%"} >{title}</Heading>

            <Carousel >
               <Box>
               <SimpleGrid  columns={[2,2,4]} gap={"1%"}>
               {data3?.map((el)=>{
                    return <HomeProductCard image={el.image[0].img} price={el.price} title={el.title} off={el.discount}/>
                })}
               </SimpleGrid>
               </Box>

               <Box>
               <SimpleGrid columns={[2,2,4]} gap={"1%"}>
               {data4?.map((el)=>{
                    return <HomeProductCard image={el.image[0].img} price={el.price} title={el.title} off={el.discount}/>
                })}
               </SimpleGrid>
               </Box>
               
               
            </Carousel>






            <hr style={{width:"100%" , fontWeight:"800", border:"2px solid #d5dde0"}}/>
        </Box>
    )
}

export default Homefetch
