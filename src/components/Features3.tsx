import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={useColorModeValue("blue.50", "blue.900")}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features3() {
  return (
    <Stack bgColor={"#164875"}>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              src="https://i.ibb.co/BPjBW1b/01-Mockup-3.png"
              rounded={"md"}
              alt={"feature image"}
              objectFit={"cover"}
              width="500px"
              height="500px"
            />
          </Flex>
          {/* <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text> */}
          <Stack>
            <Heading color={"white"}>DUMAI SIGAP</Heading>
            <Text color={"white"} fontSize={"lg"}>
              POLRES DUMAI 2022 - Design, Web Apps, Mobile Apps
            </Text>
            <Text textAlign={"justify"} color={"white"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit elit
              nascetur elementum neque euismod nisl arcu. Ullamcorper tortor
              augue diam egestas. Nullam sit purus sit vitae mi. Vel, dolor
              nunc, in sit tellus. A viverra nunc, quam odio condimentum natoque
              viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Elit elit nascetur elementum neque euismod nislarcu.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
