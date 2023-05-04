import { Box, Checkbox, Flex, Heading, Input, Radio } from "@chakra-ui/react";
import "../style/Product.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { RiHome2Fill } from "react-icons/ri";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function Product() {
  return (
    <div className="productspage">
      <Box>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem style={{ fontSize: "25px", color: "#00B5B7" }}>
            <BreadcrumbLink href="/">
              <RiHome2Fill />
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Sports Nutrition</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Proteins</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage style={{ fontWeight: "bold" }}>
            <BreadcrumbLink href="#">Whey Proteins</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <br />
      <Box className="mainbox">
        <Box className="firstbox">
          <Heading
            fontSize={"18px"}
            fontFamily={"sans-serif"}
            textAlign={"left"}
          >
            Browse By
          </Heading>
          <br />
          <Box className="first-1-child">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      Offers
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflowY={"scroll"}
                  height="250px"
                  textAlign={"left"}
                >
                  <Radio>Extra 5% off</Radio>
                  <br />
                  <br />
                  <Radio>Snack Bar 6 Bar Choco Almond @ Rs. 234</Radio>
                  <br />
                  <br />
                  <Radio>MuscleBlaze Fish Oil 60 Softgels @ Rs. 474</Radio>
                  <br />
                  <br />
                  <Radio>Get High Protein Muesli @ Rs. 99</Radio>
                  <br />
                  <br />
                  <Radio>Free Gym Bag, Shaker & 1 Year Membership Plan</Radio>
                  <br />
                  <br />
                  <Radio>Get Healthkart Fish Oil 60 Tabs @ Rs. 325</Radio>
                  <br />
                  <br />
                  <Radio>MB CreaPRO @ Rs. 599 || Flat 33% Off</Radio>
                  <br />
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <br />
          <Heading
            fontSize={"18px"}
            fontFamily={"sans-serif"}
            textAlign={"left"}
          >
            Filter Options
          </Heading>
          <br />
          <Box className="first-1-child">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      By Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflowY={"scroll"}
                  height="250px"
                  textAlign={"left"}
                >
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>HealthKart</Checkbox>
                    <p>1</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>MuscleBlaze</Checkbox>
                    <p>185</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>ON</Checkbox>
                    <p>16</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>Ultimate Nutrition</Checkbox>
                    <p>1</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>Myproteins</Checkbox>
                    <p>5</p>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>MuscleTech</Checkbox>
                    <p>23</p>
                  </Flex>
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <br />
          <Box className="first-1-child">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      Discount
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflowY={"scroll"}
                  height="250px"
                  textAlign={"left"}
                >
                  <Radio>10% And Above</Radio>
                  <br />
                  <br />
                  <Radio>20% And Above</Radio>
                  <br />
                  <br />
                  <Radio>30% And Above</Radio>
                  <br />
                  <br />
                  <Radio>40% And Above</Radio>
                  <br />
                  <br />
                  <Radio>50% And Above</Radio>
                  <br />
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <br />
          <Box className="first-1-child">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      Ratings
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflowY={"scroll"}
                  height="250px"
                  textAlign={"left"}
                >
                  <Radio>5 Ratings</Radio>
                  <br />
                  <br />
                  <Radio>4 Ratings And Above</Radio>
                  <br />
                  <br />
                  <Radio>3 Ratings And Above</Radio>
                  <br />
                  <br />
                  <Radio>2 Ratings And Above</Radio>
                  <br />
                  <br />
                  <Radio>1 And Above</Radio>
                  <br />
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <br />
          <Box className="first-1-child">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"bold"}
                    >
                      Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflowY={"scroll"}
                  height="250px"
                  textAlign={"left"}
                >
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>1500 And Below</Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>1,501-3,000</Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>3,001-4,500</Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>4,501-6,000</Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>6,001-7,500</Checkbox>
                  </Flex>
                  <br />

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Checkbox>7,501-9,000</Checkbox>
                  </Flex>
                  <br />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
        <Box className="secondbox"></Box>
      </Box>
    </div>
  );
}
export default Product;
