import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Box,
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";
import {
  DeleteAdminProducts,
  editAdminProducts,
  getAdminProducts,
} from "../redux/admin/admin.action";
import { MdDeleteOutline } from "react-icons/md";
import Search from "./Search";
import AddProduct from "./AddProduct";
import { TbEdit } from "react-icons/tb";
import Sidebar from "./Sidebar";
import { toast } from "react-hot-toast";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  let [updateId, setUpdateid] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [edit, setEdit] = useState({});
  const [change, setChange] = useState(false);
  const { adminProducts, loading } = useSelector((store) => store.AdminReducer);
  // console.log(adminProducts);
  let i = 0;

  useEffect(() => {
    dispatch(getAdminProducts);
    // console.log(adminProducts);
  }, [location.search, updateId, change]);

  const handleGetId = (id) => {
    setUpdateid(id);
  };

  const handleDelete = (id) => {
    dispatch(DeleteAdminProducts(id));
    dispatch(getAdminProducts);
    toast.success("Product deleted successfully !", {
      style: {
        borderRadius: "50px",
        background: "#989898",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
    // console.log(id, 'deleted');
  };

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const HandleSaveEdit = () => {
    dispatch(editAdminProducts(updateId, edit));
    dispatch(getAdminProducts);
    setChange(!change);
    // console.log(updateId);
    toast.success("Product updated successfully !", {
      style: {
        borderRadius: "50px",
        background: "#989898",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
    onClose();
  };
  // console.log(change);

  return (
    <>
      <Flex w={"100%"}>
        <Sidebar />
        <Box w="100%" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={"left"}
            fontSize={"4xl"}
            py={10}
            fontWeight={"600"}
          >
            Products
          </chakra.h1>

          <Box display={"flex"}>
            <AddProduct />
            <Search />
          </Box>

          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Product</Th>
                  <Th>Category</Th>
                  <Th>Description</Th>
                  <Th>Price</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* Map Products */}
                {loading ? "Please wait...." : ""}
                {adminProducts.product &&
                  adminProducts.product.map((ele, i) => (
                    <Tr key={i + 1}>
                      <Td>{i + 1}.</Td>
                      <Td>
                        <Image w="60px" src={ele.image[0].img} />
                      </Td>
                      <Td>{ele.category}</Td>
                      <Td>{ele.title}</Td>
                      <Td>
                        {typeof ele.price === "string"
                          ? "$" + ele.price.substring(0, 4)
                          : ele.price}
                      </Td>
                      <Td cursor={"pointer"}>
                        <>
                          {/*  */}
                          <Text
                            fontSize={"lg"}
                            onClick={() => {
                              onOpen();
                              handleGetId(ele._id);
                            }}
                            color=""
                          >
                            <TbEdit />
                          </Text>
                          <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                          >
                            <ModalOverlay />
                            {/*  */}
                            <ModalContent>
                              <ModalHeader color="white">
                                Edit Product details
                              </ModalHeader>
                              <ModalCloseButton />
                              <ModalBody pb={6}>
                                <FormControl w="400px" m="auto">
                                  <FormLabel>Title</FormLabel>
                                  <Input
                                    placeholder="Add Title"
                                    onChange={handleEdit}
                                    name="title"
                                  />
                                  <FormLabel mt="10px">Category</FormLabel>
                                  <Input
                                    placeholder="Add Category"
                                    onChange={handleEdit}
                                    name="category"
                                  />
                                  <FormLabel mt="10px">Image</FormLabel>
                                  <Input
                                    placeholder="Add image URL"
                                    onChange={handleEdit}
                                    name="image"
                                  />
                                  <FormLabel mt="10px">Price</FormLabel>
                                  <Input
                                    type="number"
                                    placeholder="Add the price"
                                    onChange={handleEdit}
                                    name="price"
                                  />
                                  <FormLabel mt="10px">Brand</FormLabel>
                                  <Input
                                    type="text"
                                    placeholder="Brand"
                                    onChange={handleEdit}
                                    name="brand"
                                  />
                                  <Box m="40px 0">
                                    <Button
                                      mr={3}
                                      onClick={HandleSaveEdit}
                                      _hover={{
                                        background:
                                          "linear-gradient(to right, #90aefe, #0e61f9)",
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
                                        background:
                                          "linear-gradient(to right, #90aefe, #0e61f9)",
                                        color: "white",
                                      }}
                                      background="linear-gradient(to right, #50aefe, #0c61f4)"
                                      color="white"
                                    >
                                      Cancel
                                    </Button>
                                  </Box>
                                </FormControl>
                              </ModalBody>
                            </ModalContent>
                          </Modal>
                        </>
                      </Td>
                      <Td
                        cursor={"pointer"}
                        onClick={() => handleDelete(ele._id)}
                      >
                        <MdDeleteOutline />
                      </Td>
                    </Tr>
                  ))}
                {/*  */}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </>
  );
};

export default AdminProducts;
