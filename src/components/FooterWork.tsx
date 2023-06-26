import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Grid,
  Link,
  Button,
  AspectRatio,
  Flex,
  Spacer,
  HStack,
  VStack,
  Stack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const handleClick = () => {
  console.log("Link clicked");
};

export default function FooterBlog() {
  return (
    //     <Box bg="#164875">
    //       <Flex>
    //         <VStack>
    //         <Heading pb="15px">Get in Touch</Heading>
    //         <Button size="lg" color="#164875">+62 821 2345 6789</Button>
    //         <Button size="lg" color="#164875">admin@oemahsolution.com</Button>
    //         <Box bg="white">Yogyakarta Office</Box>
    //         <Text textAlign={"justify"}>Ruko DTA (Down Town Area) Square,Jl. Seturan Raya No. 9, Kledokan, Caturtunggal, Kec. Depok,
    // Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</Text>
    //         </VStack>

    //         <Spacer />
    //         <Box p="4" bg="green.400">
    //           Box 2
    //         </Box>
    //       </Flex>
    //     </Box>
    <Box bg="#164875" p={4}>
      <Container maxW={1400}>
        <SimpleGrid spacing="30px" py="30px" templateColumns="repeat(2, 1fr)">
          <Box>
            <Heading pb="15px" color="#FFFFFF">
              Get in Touch
            </Heading>
            <Flex>
              <Button color="#164875" mb={4}>
                +62 821 2345 6789
              </Button>
            </Flex>
            <Flex>
              <Button color="#164875" mb={4}>
                admin@oemahsolution.com
              </Button>
            </Flex>
            <Flex>
              <Box w="130px" h="7" bg="white" color="#000000" borderRadius="lg">
                Yogyakarta Office
              </Box>
            </Flex>
            <Flex>
              <Text color="#FFFFFF">
                Ruko DTA (Down Town Area) Square, Jl. Seturan Raya No. 9,
                Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah
                Istimewa Yogyakarta 55281
              </Text>
            </Flex>
            <Flex>
              <Button bg="#FFB703" rightIcon={<AiOutlineArrowRight />}>
                Show Map
              </Button>
            </Flex>
            {/* <VStack>
              <Button color="#164875">+62 821 2345 6789</Button>
              <Button color="#164875" fontSize={"sm"}>
                admin@oemahsolution.com
              </Button>
            </VStack>
            <Box w='130px' h='7' bg="white">Yogyakarta Office</Box>
            <Text>
              Ruko DTA (Down Town Area) Square, Jl. Seturan Raya No. 9,
              Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah
              Istimewa Yogyakarta 55281
            </Text>
            <Button bg="#FFB703" rightIcon={<AiOutlineArrowRight />}>
              Show Map
            </Button> */}
          </Box>

          <Box>
            <Heading color="#FFFFFF">Let’s Collaborate with Us</Heading>
            <Grid pt="30px">
              <Text color="#F4F4F4" textAlign={"justify"}>
                Every great work is started from a nice conversation and a cup
                of coffee. Share your business problem with us and let us be
                part of the solution, because we are Oemah Solution. Feel free
                to meet us in our office.
              </Text>
              <AspectRatio ratio={3 / 2}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1465584431844!2d110.40665597455384!3d-7.774279777123447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f21acfe64b%3A0x18afbcc417b9f332!2sOEMAH%20SOLUTION%20INDONESIA!5e0!3m2!1sen!2sid!4v1686647605388!5m2!1sen!2sid" />
              </AspectRatio>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
      <Divider mb={4} />
      <Box bg="#164875">
        <Flex justifyContent="space-between" alignItems="center">
          <HStack color="" spacing="20px">
            <Link color="" href="/" onClick={handleClick}>
              Home
            </Link>
            <Link>Service</Link>
            <Link href="/work" onClick={handleClick}>
              Work
            </Link>
            <Link href="/aboutUs" onClick={handleClick}>
              About Us
            </Link>
            <Link href="/blog" onClick={handleClick}>
              Blog
            </Link>
            <Link>Careers</Link>
          </HStack>
          <VStack>
            Copyright © 2023 All right reserved. PT. Oemah Solution Indonesia
          </VStack>
          {/* <Text>
          About Service Project Contact
          </Text> */}
          <Flex>
            <Icon as={FaFacebook} boxSize={6} mx={2} />
            <Icon as={FaInstagram} boxSize={6} mx={2} />
            <Icon as={FaLinkedin} boxSize={6} mx={2} />
            <Icon as={FaWhatsapp} boxSize={6} mx={2} />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
