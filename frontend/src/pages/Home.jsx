import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'

import b1 from "../Images/bnr_2742376_o.jpg"
import b2 from "../Images/bnr_2742394_o.jpg"
import b3 from "../Images/bnr_2742378_o.jpg"
import b4 from "../Images/bnr_2742442_o.jpg"
import b5 from "../Images/bnr_2743844_o.jpg"
import b6 from "../Images/b6.jpg"
import b7 from "../Images/b7.jpg"
import b8 from "../Images/b8.jpg"
import b9 from "../Images/b9.jpg"
import MobNav3 from '../component/Navbar/MobNav3'
import Nav from '../component/Navbar/Nav'
import Banner from '../component/Home/Banner'
import Homefetch from '../component/Home/Homefetch'
import HomeProductCard2 from '../component/Home/HomeProductCard2'
import HomeProductCard3 from '../component/Home/HomeProductCard3'
import HomeProductCard4 from '../component/Home/HomeProductCard4'
import HomeProductCard5 from '../component/Home/HomeProductCard5'
import HomeProductCard6 from '../component/Home/HomeProductCard6'
import Footer from '../component/Footer/Footer'
import Nev2 from '../component/Navbar/Nev2'
// import Nev2 from '../component/Nev2'


// import b6 from "."

const Home = () => {
  const [check, setCheck] = useState(false)
  function makeTrue() {
    console.log("true")
    setCheck(true)
  }
  function makeFalse() {
    console.log("false")
    setCheck(false)
  }

  return (
    <Box>{check ? <MobNav3 makeFalse={makeFalse} /> :
      <Box><Nav makeTrue={makeTrue} />
        <Nev2 />

        <Banner />
        <Homefetch url={`https://unusual-gold-button.cyclic.app/product?category=Ayurveda`} title={"Blockbuster Deals"} />
        <HomeProductCard2 img1={b1} img2={b2} img3={b3} img4={b4} img5={b5} m={"2% 4%"} />
        <Homefetch url={`https://unusual-gold-button.cyclic.app/product?category=Vitamin`} title={"Buy 1 Get 1 Free"} />
        <HomeProductCard3 img1={b6} img2={b7} img3={b8} img4={b9} />
        <Homefetch url={`https://unusual-gold-button.cyclic.app/product?category=Fitness`} title={"Extra 5% Off + 5% HK Cash"} />
        <HomeProductCard4 />
        <HomeProductCard5 />
        <HomeProductCard6 />
        <Footer />
      </Box>}


    </Box>
  )
}

export default Home
