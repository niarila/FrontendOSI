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
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ClientSay() {
  return (
    <Box bg="">
      <Container maxW={1400}>
        <SimpleGrid spacing="30px" py="30px" templateColumns="repeat(2, 1fr)">
          <Box>
            <VStack>
              <Heading pb="15px" color="#273B4A">
                What Client’s Says
              </Heading>
              <Heading pb="15px" color="#273B4A">
                About Us
              </Heading>
              <AvatarGroup size="md" max={4}>
                <Avatar name="" src="https://i.ibb.co/74FVm2D/Ellipse-3.png" />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
            </VStack>

            {/* <VStack>
              <Button color="#164875">+62 821 2345 6789</Button>
              <Button color="#164875" fontSize={"sm"}>
                admin@oemahsolution.com
              </Button>
            </VStack> */}
            {/* <Box w='130px' h='7' bg="white">Yogyakarta Office</Box>
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
            {/* <Heading color="#FFFFFF">Let’s Collaborate with Us</Heading> */}
            <Grid pt="30px">
              <Text color="#000000" textAlign={"justify"}>
                “ I think it was difficult to understand the specifications
                unique to Japan in the HariServe Project, but we were able to
                successfully release it. ”
              </Text>
              <HStack>
                <Text>- Cameron Williamson</Text>
                <Text>UPL INDONESIA</Text>
              </HStack>
              <Text>System Developer</Text>

              {/* <AspectRatio ratio={16 / 9}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1465584431844!2d110.40665597455384!3d-7.774279777123447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f21acfe64b%3A0x18afbcc417b9f332!2sOEMAH%20SOLUTION%20INDONESIA!5e0!3m2!1sen!2sid!4v1686647605388!5m2!1sen!2sid" />
              </AspectRatio> */}
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
