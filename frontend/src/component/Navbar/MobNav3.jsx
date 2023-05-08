import React, { useState } from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { BsChatLeft, BsSearch } from 'react-icons/bs';
import { CiShoppingCart } from 'react-icons/ci';
import MovNav2 from './MovNav2';

const MobNav3 = ({makeFalse}) => {
    const [state1, setState1] = useState(false)
    const [state2, setState2] = useState(false)
    const [state3, setState3] = useState(false)
    const [state4, setState4] = useState(false)
    const [state5, setState5] = useState(false)
    const [state6, setState6] = useState(false)
    const [state7, setState7] = useState(false)
    return (
        <Box height={"100vh"}>
            <Box>
                <Flex justifyContent={"space-between"} alignItems={"center"} bgColor={"#00B5B7"} p={"2%"}>
                    <Box onClick={() => makeFalse()} width={["7%","8%","6%"]}><RxCross1 size={"100%"} color='white' /></Box>
                    <Button color={"#00B5B7"} bgColor={"white"} m={"0% 5%"}>Login/Sign Up</Button>
                </Flex>
                <Box>
                    <Box onClick={() => setState1(!state1)}><MovNav2 title={"Shop By Category"} arr={["Sports Nutrition", "Vitamin's & Supplements", "Ayurveda & Herbs", "Health Food & Drinks", "Fitness", "Wellness"]} value={state1} /></Box>
                    <Box onClick={() => setState2(!state2)}><MovNav2 title={"Best Sellers"} arr={["Sports Nutrition", "Health Nutrition", "Fitness", "Wellness"]} value={state2} /></Box>
                    <Box onClick={() => setState3(!state3)}><MovNav2 title={"Brands"} arr={["Sports Nutrition", "Vitamin's & Supplements", "Ayurveda & Herbs", "Health Food & Drinks", "Fitness", "Wellness"]} value={state3} /></Box>
                    <Box onClick={() => setState4(!state4)}><MovNav2 title={"Deals"} arr={["Sports Nutrition", "Vitamin's & Supplements", "Ayurveda & Herbs", "Health Food & Drinks", "Fitness", "Wellness"]} value={state4} /></Box>
                    <Box onClick={() => setState5(!state5)}><MovNav2 title={"Blogs"} arr={["Sports Nutrition", "Vitamin's & Supplements", "Ayurveda & Herbs", "Health Food & Drinks", "Fitness", "Wellness"]} value={state5} /></Box>
                    <Box onClick={() => setState6(!state6)}><MovNav2 title={"Customer Support"} arr={["Sports Nutrition", "Vitamin's & Supplements", "Ayurveda & Herbs", "Health Food & Drinks", "Fitness", "Wellness"]} value={state6} /></Box>
                </Box>

            </Box>
        </Box>
    )
}

export default MobNav3
