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
import { MdDeleteOutline } from "react-icons/md";
import Search from "./Search";
import AddProduct from "./AddProduct";
import { TbEdit } from "react-icons/tb";
import Sidebar from "./Sidebar";
import { toast } from "react-hot-toast";
// import {
//   DeleteAdminProducts,
//   editAdminProducts,
//   getAdminProducts,
// } from "../../Redux/Admin/admin.action";

const AdminProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [edit, setEdit] = useState({});
  let i = 0;

  // const { adminProducts } = useSelector((store) => store.AdminReducer);

  useEffect(() => {
    // dispatch(getAdminProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    // dispatch(DeleteAdminProducts(id));
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

  const HandleSaveEdit = (id) => {
    // dispatch(editAdminProducts(id, edit));
    toast.success("Product updated successfully !", {
      style: {
        borderRadius: "50px",
        background: "#989898",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
  };

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
                <Tr key={i + 1}>
                  <Td>{i + 1}.</Td>
                  <Td>
                    <Image w="60px" src="" />
                  </Td>
                  <Td>category</Td>
                  <Td>title</Td>
                  <Td>Price</Td>
                  {/* <Td>{e.price.substring(0, 28).concat("...")}</Td> */}
                  <Td cursor={"pointer"}>
                    <>
                      <Text fontSize={"lg"} onClick={onOpen} color="">
                        <TbEdit />
                      </Text>
                      <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                      >
                        <ModalOverlay />
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
                              <Box m="40px 0">
                                <Button
                                  mr={3}
                                  // onClick={() => HandleSaveEdit(e._id)}
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
                    // onClick={() => handleDelete(e._id)}
                  >
                    <MdDeleteOutline />
                  </Td>
                </Tr>
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
