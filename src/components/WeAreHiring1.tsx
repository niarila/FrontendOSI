import { Box, Center, ChakraProvider, Text, Heading } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <ChakraProvider>
      <Box
        backgroundImage="https://i.ibb.co/34pTvJg/WE-ARE-HIRING.png"
        backgroundSize="cover"
        backgroundPosition="center"
        height="520px"   
      >    
      </Box>
    </ChakraProvider>
  );
};

export default App;

// import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

// export default function WeAreHiring1() {
//   return (
//     <Box bgImage="https://i.ibb.co/34pTvJg/WE-ARE-HIRING.png">
//       <Container maxW={1400}>
//         <Flex pt="150px" pb="100px" px="40px">
//           <Box flexBasis="100%" px="40px">
//             <Heading textAlign="center" color="#FFFFFF">
//               BLOG
//             </Heading>
//             <Text pt="10px" color="#FFFFFF" textAlign="center">
//               We professionally deliver digital solutions using agile
//               methodology to help established companies and startups perform by
//               providing high-quality software development services.
//             </Text>
//           </Box>
//         </Flex>
//       </Container>
//     </Box>
//   );
// }
