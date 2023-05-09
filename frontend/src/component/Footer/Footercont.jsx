import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const Footercont = ({arr,title}) => {
  return (
    <Box >
        <UnorderedList listStyleType={"none"}>
            <ListItem p={"5% 0%"} fontWeight={"700"}>{title}</ListItem>
        {arr.map((el)=>{
            return <ListItem p={"3% 0%"} fontSize={["0.7rem","0.8rem","0.8rem"]}>{el}</ListItem>
        })}
        </UnorderedList>
      
    </Box>
  )
}

export default Footercont
