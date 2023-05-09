import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { RiArrowDropDownLine,RiArrowDropUpLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';


const MovNav2 = ({arr,title,value}) => {
  const navigate = useNavigate()
  return (
    <Box p="2%">
        <Flex justifyContent={"space-between"} alignItems={"center"}><Text fontWeight={"600"}>{title}</Text>{value?<RiArrowDropUpLine size={"7%"}/>:<RiArrowDropDownLine size={"7%"}/>}</Flex>
        {value? <UnorderedList listStyleType={"none"}>
            
            {arr.map((el)=>{
                return <ListItem p={"2%"} onClick={()=>navigate("/product")} borderBottom={"0.5px solid #ECEFF1"}>{el}</ListItem>
            })}
        </UnorderedList> : ''}
      
    </Box>
  )
}

export default MovNav2
