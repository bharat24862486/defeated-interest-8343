import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { RiArrowDropDownLine,RiArrowDropUpLine } from 'react-icons/ri';


const MovNav2 = ({arr,title,value}) => {
  return (
    <Box p="2%">
        <Flex justifyContent={"space-between"} alignItems={"center"}><Text fontWeight={"600"}>{title}</Text>{value?<RiArrowDropUpLine size={"7%"}/>:<RiArrowDropDownLine size={"7%"}/>}</Flex>
        {value? <UnorderedList listStyleType={"none"}>
            
            {arr.map((el)=>{
                return <ListItem p={"2%"} borderBottom={"0.5px solid #ECEFF1"}>{el}</ListItem>
            })}
        </UnorderedList> : ''}
      
    </Box>
  )
}

export default MovNav2
