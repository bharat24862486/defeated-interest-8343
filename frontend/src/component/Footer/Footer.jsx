import { Box, Grid, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../../Images/Healthcare.png";
// import Footercont from './Footercont';
import formImage from "../../Images/formImage.png"
import Footercont from './Footercont';

const Footer = () => {
  return (
    <Box p={"2% 4%"} border={"1px solid black"} color={"white"} bgColor={'#0D2122'}>
        <Box w={["50%","40%","20%"]} m={"3% 0%"}>
            <Image src={logo}/>
        </Box>

        {/* care@healthkart.com
0124-4616444
The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp. government girls college, Anamika Enclave, Sector 14, Gurugram, Haryana */}

        <SimpleGrid columns={[2,2,6]} gap={"1%"} pb={"6%"}>
            <Box w={"100%"}><Footercont arr={["About Us", "Conatct Us", "Refer & Earn","Loyalti Program", "Brand Directory","Careers"]} title={"Healthcart"}/></Box>
            <Box w={"100%"}><Footercont arr={["MuscleBlaze", "Fit Foods", "HK Vitals","Loyalti Program", "TrueBasics","Gritzo","bGREEN"]} title={"Brands"}/></Box>
            <Box w={"100%"}><Footercont arr={["Hair & Skin Care", "Vitamins & Supplements", "Sports Nutrition","Ayurveda & Herbs", "Health Food & Drinks","Fitness","Wellness"]} title={"Health & Fitness"}/></Box>
            <Box w={"100%"}><Footercont arr={["My Account", "Track Your Order", "Store Locator","HK Cash", "HK Coupons","FAQs","Sell On HealthKar"]} title={"Quick Links"}/></Box>
            <Box w={"100%"}><Footercont arr={["0124-4616444", "The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp. government girls college, Anamika Enclave, Sector 14, Gurugram, Haryana"]} title={"care@healthkart.com"}/></Box>
            <Box w={"100%"}><Image src={formImage} borderRadius={"10px"} /></Box>
        </SimpleGrid>
        <hr/>  

        <SimpleGrid columns={[2,2]} gap={"10"} pb={"2%"}>
            <Text fontSize={["0.7rem","0.8rem","0.8rem"]}>Copyright © 2023, HealthKart.com, or its affiliates</Text>
            <Text fontSize={["0.7rem","0.8rem","0.8rem"]}>Terms & Conditions | Delivery Policy | Privacy Policy | Disclaimer | Returns Policy</Text>

        </SimpleGrid>    
    </Box>
  )
}

export default Footer
