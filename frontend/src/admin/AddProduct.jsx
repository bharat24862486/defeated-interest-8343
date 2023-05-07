import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Input,
  Box,
  FormControl,
  FormLabel,
  Tooltip,
  Text,
} from "@chakra-ui/react";

import { TbEdit } from "react-icons/tb";

import React, { useRef, useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { AddAdminProducts } from "../redux/admin/admin.action";

let data = {
  title: "",
  category: "",
  brand: "",
  price: "",
  discount: "",
  rating: "",
  image: [],
};
function AddProduct() {
  const dispatch = useDispatch();
  const [addData, setAddData] = useState(data);
  let [img, setImg] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, category, price, discount, rating, brand, image } = addData;

  const handleImageAdd = (e) => {
    setImg(e.target.value);
  };
  const handleChange = (e) => {
    let val = e.target.value;
    setAddData({ ...addData, [e.target.name]: val });
  };

  const handleAddProd = () => {
    addData.image.push(img);
    // console.log(addData);
    if (
      title.length &&
      category.length &&
      price.length !== null &&
      image.length !== 0
    ) {
      dispatch(AddAdminProducts(addData));
      // console.log('added');
      toast.success("Product added successfully !", {
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    }
    // onclose();
  };

  return (
    <>
      <Box>
        <Tooltip label="Add product" placement="top">
          <Button
            bg="none"
            fontSize={"25px"}
            onClick={onOpen}
            position="left"
            _hover={{}}
          >
            <BiBookAdd />
          </Button>
        </Tooltip>
        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" color={"white"}>
              Add a new Product{" "}
              <span style={{ marginLeft: "5px" }}>
                <BiBookAdd />{" "}
              </span>
            </DrawerHeader>
            <DrawerBody>
              <FormControl w="400px" m="auto">
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="Add Title"
                  onChange={handleChange}
                  name="title"
                  value={title}
                />
                <FormLabel mt="10px">Category</FormLabel>
                <Input
                  placeholder="Add Category"
                  onChange={handleChange}
                  name="category"
                  value={category}
                />
                <FormLabel mt="10px">Image</FormLabel>
                <Input
                  placeholder="Add image URL"
                  onChange={handleImageAdd}
                  name="image"
                  value={img}
                />
                <FormLabel mt="10px">Brand</FormLabel>
                <Input
                  placeholder="Add Brand"
                  onChange={handleChange}
                  name="brand"
                  value={brand}
                />
                <FormLabel mt="10px">Price</FormLabel>
                <Input
                  type="number"
                  placeholder="Add the price"
                  onChange={handleChange}
                  name="price"
                  value={price}
                />
                <FormLabel mt="10px">Discount</FormLabel>
                <Input
                  type="text"
                  placeholder="Discount"
                  onChange={handleChange}
                  name="discount"
                  value={discount}
                />
                <Box m="40px 0">
                  <Button
                    mr={3}
                    onClick={handleAddProd}
                    _hover={{
                      background: "linear-gradient(to right, #90aefe, #0e61f9)",
                      color: "white",
                    }}
                    background="linear-gradient(to right, #50aefe, #0c61f4)"
                    color="white"
                  >
                    Save
                  </Button>
                  <Button
                    onClick={onClose}
                    _hover={{
                      background: "linear-gradient(to right, #90aefe, #0e61f9)",
                      color: "white",
                    }}
                    background="linear-gradient(to right, #50aefe, #0c61f4)"
                    color="white"
                  >
                    Cancel
                  </Button>
                </Box>
              </FormControl>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
export default AddProduct;
