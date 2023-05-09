import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { BsPerson } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import Sidebar from "./Sidebar";
import axios from "axios";
import { getProductsCount } from "../redux/admin/admin.action";
import Orders from "./Orders";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export const Deshboard = () => {
  let [count, setCount] = useState(0);
  const [proCount, setProCount] = useState(0);
  const [orders, setOrder] = useState([]);

  const CountFun = () => {
    axios
      .get(`http://localhost:0880/product/product_count/`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProCount(res.data.product.length);
      })
      .catch((err) => console.log(err));
  };

  const OrderFun = () => {
    axios
      .get(`http://localhost:0880/order/`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setOrder(res.data.orderData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    CountFun();
    OrderFun();
  }, []);

  return (
    <Flex w={"100%"}>
      <Sidebar />
      <Box w="100%" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={"left"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"600"}
        >
          Dashboard
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={"Total Products"}
            stat={proCount}
            icon={<FiShoppingBag size={"3em"} />}
          />
          <StatsCard
            title={"Sales"}
            stat={"10,000"}
            icon={<BiDollar size={"2.9em"} />}
          />
          <StatsCard
            title={"Users"}
            stat={"7"}
            icon={<BsPerson size={"3em"} />}
          />
        </SimpleGrid>
        <chakra.h1
          textAlign={"left"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"600"}
        >
          Recent Orders
        </chakra.h1>
        <Orders orders={orders} />
      </Box>
    </Flex>
  );
};
