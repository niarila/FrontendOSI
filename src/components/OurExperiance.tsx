import {
  Stack,
  Image,
  Box,
  Heading,
  Text,
  Container,
  VStack,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";

export default function OurFact() {
  return (
    <Stack bgColor={""}>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            color={"#273B4A"}
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontWeight={"bold"}
          >
            Our Experiences
          </Heading>
          <Heading
            color={"#164875"}
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontWeight={"bold"}
          >
            The Amazing Clients
          </Heading>
          <Text color={"#757575"} fontSize={{ base: "sm", sm: "lg" }}>
            We are enthusiastic about using digital solutions to solve our
            client’s problems by developing outstanding projects. Take a look at
            this satisfied customer.
          </Text>
        </Stack>

        <SimpleGrid columns={7} spacingX="40px">
          <Image src="https://i.ibb.co/cxx6zhg/image-2.png"></Image>
          <Image src="https://i.ibb.co/Gn9gQ77/image-18.png"></Image>
          <Image src="https://i.ibb.co/c1Wt4ty/image-17-2.png"></Image>
          <Image src="https://i.ibb.co/dKbJb9F/image-16-4.png"></Image>
          <Image src="https://i.ibb.co/SR4JV8D/image-13-1.png"></Image>
          <Image src="https://i.ibb.co/SR4JV8D/image-13-1.png"></Image>
          <Image src="https://i.ibb.co/hcN5x5y/image-15.png"></Image>
        </SimpleGrid>
        {/* <HStack> */}
        <SimpleGrid columns={7} spacingX="40px" spacingY="50px">
          <Image src="https://i.ibb.co/gD84DhF/image-14.png"></Image>
          <Image src="https://i.ibb.co/gD84DhF/image-14.png"></Image>
          <Image src="https://i.ibb.co/gD84DhF/image-14.png"></Image>
          <Image src="https://i.ibb.co/gD84DhF/image-14.png"></Image>
          <Image src="https://i.ibb.co/Gd16xXz/image-4.png"></Image>
          <Image src="https://i.ibb.co/x1D7XMk/image-7.png"></Image>
          <Image src="https://i.ibb.co/ZMP486g/image-10.png"></Image>
        </SimpleGrid>
        {/* </HStack> */}
      </Box>
    </Stack>
  );
}

// <Stack bgColor={'#164875'}>
//   <Box p={4}>
//     <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
//       <Heading color={'#FFFFFF'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
//       Our Services
//       </Heading>
//       <Text color={'#FFFFFF'} fontSize={{ base: 'sm', sm: 'lg' }}>
//       Do the right digitalization, Do the digitalization right to create a fair world
//       </Text>
//     </Stack>
//   </Box>
// </Stack>

// <Container>

// </Container>

//   <Box w="full" px="200px" py="60px">
//     <Heading fontSize={43} letterSpacing="2px" color="#273B4A" pb="" alignItems="center">
//     Our Blog
//     </Heading>
//     </Box>
//     <Box>
//   );
// }
//         >
//           Our Experiences
//         </Heading>
//         <Heading
//           color={"#273B4A"}
//           fontSize={{ base: "2xl", sm: "4xl" }}
//           fontWeight={"bold"}
//         >
//           The Amazing Clients
//         </Heading>
//       </Stack>
//     </Stack>

// <HStack>
// <Stack direction="row">
//   <Image
//     // boxSize="200x"
//     objectFit="cover"
//     src="https://i.ibb.co/cxx6zhg/image-2.png"
//     alt="Dan Abramov"
//   />
//       <Image
//         boxSize="200x"
//         objectFit="cover"
//         src="https://i.ibb.co/Gn9gQ77/image-18.png"
//         alt="Dan Abramov"
//       />
//       <Image
//         boxSize="200x"
//         objectFit="cover"
//         src="https://i.ibb.co/c1Wt4ty/image-17-2.png"
//         alt="Dan Abramov"
//       />
//       <Image
//         boxSize="200x"
//         objectFit="cover"
//         src="https://i.ibb.co/k361sPX/image-16-3.png"
//         alt="Dan Abramov"
//       />
//       <Image
//         boxSize="200x"
//         objectFit="cover"
//         src="https://i.ibb.co/5L1tSnS/image-13.png"
//         alt="Dan Abramov"
//       />
//       <Image
//         boxSize="200x"
//         objectFit="cover"
//         src="https://i.ibb.co/5L1tSnS/image-13.png"
//         alt="Dan Abramov"
//       />
//       <Image
//         boxSize="200x"
//         objectFit="cover"
//         src="https://i.ibb.co/5L1tSnS/image-13.png"
//         alt="Dan Abramov"
//       />
//     </Stack>
//     </HStack>

{
  /* // </Box> */
}

// <Box>
//   <Stack direction="row">
//     <Image
//       boxSize="100px"
//       objectFit="cover"
//       src="https://i.ibb.co/cxx6zhg/image-2.png"
//       alt="Dan Abramov"
//     />
//     <Image
//       boxSize="150px"
//       objectFit="cover"
//       src="https://bit.ly/dan-abramov"
//       alt="Dan Abramov"
//     />
//     <Image
//       boxSize="200px"
//       src="https://bit.ly/dan-abramov"
//       alt="Dan Abramov"
//     />
//   </Stack>
// </Box>
