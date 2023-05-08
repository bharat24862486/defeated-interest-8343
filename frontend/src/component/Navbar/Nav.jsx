import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Nev1 from './Nev1'
import MobNav from './MobNav'

const Nav = ({makeTrue}) => {

    // const [state,setState] = useState(true)

    // useEffect(()=>{
    //     if(window.screen.width > 857){
    //         setState(true)
    //     } else{
    //         setState(false)
    //     }
    // },[window.screen.width])


    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
      });
    
      const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
        });
      };
      useEffect(() => {
        window.addEventListener("resize", detectSize);
    
        return () => {
          window.removeEventListener("resize", detectSize);
        };
      }, [windowDimension])
    
      console.log(windowDimension.winWidth);


  return (
    <Box>
        {windowDimension.winWidth > 870? <Nev1 /> : <MobNav  makeTrue={makeTrue}/>}
      
    </Box>
  )
}

export default Nav
