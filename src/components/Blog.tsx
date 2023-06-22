import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

export default function OurBlog1() {
  return (
    // <Flex w="100%" h="30vh">
    //   <bgImage w="100%" h="100%"  src="https://i.ibb.co/SKdszBK/unsplash-CZ9-Aj-MGKIFI-1.png">

    //   </bgImage>

    // </Flex>

    <Box
      width="100%"
      height="30vh"
      bgImage="https://i.ibb.co/SKdszBK/unsplash-CZ9-Aj-MGKIFI-1.png"
    >
      <Container>
        <Flex>
          <Box>
            <Heading textAlign="center" color="#FFFFFF">
              BLOG
            </Heading>
            <Text pt="10px" color="#FFFFFF" textAlign="center">
              We professionally deliver digital solutions using agile
              methodology to help established companies and startups perform by
              providing high-quality software development services.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
