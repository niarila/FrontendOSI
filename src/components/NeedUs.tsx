import {
  ChakraProvider,
  Box,
  Input,
  Flex,
  Text,
  Button,
  Heading
} from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Box
        width="99vw"
        height="77vh"
        bgGradient="linear(to-r, white, blue.200)"
        padding="20px"
      >
        <Heading fontSize="20px" marginBottom="30px" color="#164875">
          Need Us
        </Heading>
        <Flex direction="row" justify="space-between" marginBottom="20px">
          <Box width="45%">
            <Text>Nama</Text>
            <Input
              placeholder="abc"
              borderBottom="2px"
              borderColor="#FFB703"
            />
          </Box>
          <Box width="45%" >
            <Text>Email</Text>
            <Input
              placeholder="abc@abc.com"
              borderBottom="2px"
              borderColor="#FFB703"
            />
          </Box>
        </Flex>
        <Box width="45%" marginBottom="20px">
          <Text>Nomer HP</Text>
          <Input
            placeholder="+62 xxxx xxxx xxx"
            borderBottom="2px"
            borderColor="#FFB703"
          />
        </Box>
        <Box marginBottom="20px">
          <Text>Judul Project</Text>
          <Input
            placeholder="ketikkan judul project"
            borderBottom="2px"
            borderColor="#FFB703"
          />
        </Box>
        <Box marginBottom="20px">
          <Text>Jenis Project</Text>
          <Input
            placeholder="pilih jenis project"
            borderBottom="2px"
            borderColor="#FFB703"
          />
        </Box>
        <Box marginBottom="20px">
          <Text>Tentang Project</Text>
          <Input
            placeholder="pilih jenis project"
            borderBottom="2px"
            borderColor="#FFB703"
          />
        </Box>
        <Flex justifyContent="center" marginBottom="20px">
          <Button
            variant="solid"
            borderRadius="20px"
            width="200px"
            alignSelf="center"
            bgColor="#1A2EDB"
            color="#FFFFFF"
          >
            Send to Collaborate
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default App;

// import { ChakraProvider, Box, Input, Flex, Text, Button } from "@chakra-ui/react";

// const App = () => {
//   return (
//     <ChakraProvider>
//       <Box
//         width="100vw"
//         height="100vh"
//         bgGradient="linear(to-r, white, blue.200)"
//         padding="20px"
//       >
//         <Text fontSize="24px" fontWeight="bold" marginBottom="20px">
//           Need Us
//         </Text>
//         <Flex direction="row" justify="space-between" marginBottom="20px">
//           <Box width="45%">
//             <Text>Nama</Text>
//             <Input
//               placeholder="abc"
//               borderBottom="2px"
//               borderColor="yellow.500"
//             />
//           </Box>
//           <Box width="45%">
//             <Text>Email</Text>
//             <Input
//               placeholder="abc@abc.com"
//               borderBottom="2px"
//               borderColor="yellow.500"
//             />
//           </Box>
//         </Flex>
//         <Box >
//             <Text>Email</Text>
//             <Input
//               placeholder="abc@abc.com"
//               borderBottom="2px"
//               borderColor="yellow.500"
//             />
//           </Box>
//           <Flex justifyContent="center">
//           <Button borderRadius="full" variant="solid" bg="blue.500" color="white" px="20px">
//             Kirim
//           </Button>
//           </Flex>
//         {/* <Input placeholder="Masukkan Nomor HP" /> */}
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default App;
