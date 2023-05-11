import { Box, Flex, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const State1 = () => {
    const navigate = useNavigate()
  return (
    <Box>
        <Flex justifyContent={"space-between"}>
            <Box cursor={"pointer"}>
                <UnorderedList listStyleType={"none"} w={"100%"}>
                    <ListItem p={"4%"} fontWeight={"700"}>Proteins</ListItem>
                    <ListItem p={"4%"}> </ListItem>
                    <ListItem p={"4%"} onClick={()=>navigate("/product")} >Whey Proteins</ListItem>
                    <ListItem p={"4%"}>Beginner Whey Proteins</ListItem>
                    <ListItem p={"4%"}>Whey Proteins Isolate</ListItem>
                    <ListItem p={"4%"}>Raw Whey Proteins</ListItem>
                    <ListItem p={"4%"}>Plant Proteins</ListItem>
                    <ListItem p={"4%"}>Protein for Women</ListItem>
                    <ListItem p={"4%"}>Protein Blends</ListItem>
                    <ListItem p={"4%"}>Casein Proteins</ListItem>
                    <ListItem p={"4%"}>Soy Proteins</ListItem>
                </UnorderedList>
            </Box>



            <Box cursor={"pointer"}>
                <UnorderedList listStyleType={"none"} w={"100%"}>
                    <ListItem p={"4%"} fontWeight={"700"}>Gainers</ListItem>
                    <ListItem p={"4%"}> </ListItem>
                    <ListItem p={"4%"}>Weight Gainers</ListItem>
                    <ListItem p={"4%"}>Mass Gainers</ListItem>
                    <ListItem p={"4%"}>Herbal Weight Gainers</ListItem>
                    
                </UnorderedList>
            </Box>
{/* 
            Protein Foods
Peanut Butter
Muesli
Protein Shakes
Oats
Cereals
Granola
Protein Bars
Protein Water */}

            <Box cursor={"pointer"}>
                <UnorderedList listStyleType={"none"} w={"100%"}>
                    <ListItem p={"4%"} fontWeight={"700"}>Protein Foods</ListItem>
                    <ListItem p={"4%"}> </ListItem>
                    <ListItem p={"4%"}>Peanut Butter</ListItem>
                    <ListItem p={"4%"}>Muesli</ListItem>
                    <ListItem p={"4%"}>Protein Shakes</ListItem>
                    <ListItem p={"4%"}>Oats</ListItem>
                    <ListItem p={"4%"}>Cereals</ListItem>
                    <ListItem p={"4%"}>Granola</ListItem>
                    <ListItem p={"4%"}>Protein Bars</ListItem>
                    <ListItem p={"4%"}>Protein Water</ListItem>
                    {/* <ListItem p={"4%"}>Soy Proteins</ListItem> */}
                </UnorderedList>
            </Box>

            {/* Pre/Post Workout
Pre-Workout
Creatine
Beta Alanine
BCAAs
Carb Blends
Electrolytes
EAA
Nitric Oxide
Other Supports
Citrulline Malate */}

            <Box cursor={"pointer"}>
                <UnorderedList listStyleType={"none"} w={"100%"}>
                    <ListItem p={"4%"} fontWeight={"700"}>Pre/Post Workout</ListItem>
                    <ListItem p={"4%"}> </ListItem>
                    <ListItem p={"4%"}>Pre-Workout</ListItem>
                    <ListItem p={"4%"}>Creatine</ListItem>
                    <ListItem p={"4%"}>Beta Alanine</ListItem>
                    <ListItem p={"4%"}>BCAAs</ListItem>
                    <ListItem p={"4%"}>Carb Blends</ListItem>
                    <ListItem p={"4%"}>Electrolytes</ListItem>
                    <ListItem p={"4%"}>EAA</ListItem>
                    <ListItem p={"4%"}>Nitric Oxide</ListItem>
                    <ListItem p={"4%"}>Other Supports</ListItem>
                </UnorderedList>
            </Box>


            {/* Workout Essentials
Fat Burners
L Carnitine
Multivitamins for Bodybuilding
Pre Hormone
ZMA */}




            <Box cursor={"pointer"}>
                <UnorderedList listStyleType={"none"} w={"100%"}>
                    <ListItem p={"4%"} fontWeight={"700"}> Workout Essentials</ListItem>
                    <ListItem p={"4%"}> </ListItem>
                    <ListItem p={"4%"}>Fat Burners</ListItem>
                    <ListItem p={"4%"}>L Carnitine</ListItem>
                    <ListItem p={"4%"}>Multivitamins for Bodybuilding</ListItem>
                    <ListItem p={"4%"}>Pre Hormone</ListItem>
                    <ListItem p={"4%"}>ZMA</ListItem>
                    
                    
                </UnorderedList>
            </Box>
        </Flex>
      
    </Box>
  )
}

export default State1
