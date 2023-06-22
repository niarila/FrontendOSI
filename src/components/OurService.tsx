import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import { FiGlobe } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { RiCompasses2Line } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";
import { BiRectangle } from "react-icons/bi";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Stack bgColor={"white"}>
      <Box
        maxW={{ base: "full", md: "275px" }}
        w={"full"}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        color={"white"}
      >
        <Stack align={"start"} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"blue"}
            rounded={"full"}
            bg={useColorModeValue("gray.100", "blue.700")}
          >
            {icon}
          </Flex>
          <Box color={"white"} mt={2}>
            <Heading color={"#164875"} size="md">
              {heading}
            </Heading>
            <Text color={"#273B4A"} mt={1} fontSize={"sm"}>
              {description}
            </Text>
          </Box>
          <Button
            color={"#0689FF"}
            variant={"link"}
            colorScheme={""}
            size={"sm"}
          >
            See Detail
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default function OurService() {
  return (
    <Stack bgColor={"#164875"}>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            color={"#FFFFFF"}
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontWeight={"bold"}
          >
            Our Services
          </Heading>
          <Text color={"#FFFFFF"} fontSize={{ base: "sm", sm: "lg" }}>
            Do the right digitalization, Do the digitalization right to create a
            fair world
          </Text>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={"Website Development"}
              icon={<Icon as={FiGlobe} w={10} h={10} />}
              description={
                "We give web development solutions that will create an opportunity to generate more leads and achieve your business goals."
              }
              href={"#"}
            />
            <Card
              heading={"Mobile Apps Development"}
              icon={<Icon as={FaMobileAlt} w={10} h={10} />}
              description={
                "We combine vision, creativity, and empathy to build user-friendly mobile apps for IOS and Android, or Hybrid technology (Flutter or React Native)."
              }
              href={"#"}
            />
            <Card
              heading={"UI/UX Design"}
              icon={<Icon as={RiCompasses2Line} w={10} h={10} />}
              description={
                "We provide UI/UX Design service to change the appearance your web or mobile apps."
              }
              href={"#"}
            />
            <Card
              heading={"Cyber Security"}
              icon={<Icon as={GrShieldSecurity} w={10} h={10} />}
              description={
                "We can provide protection for your computer network."
              }
              href={"#"}
            />
            <Card
              heading={
                "Start you business today and let us help you to solve your problem."
              }
              icon={<Icon as={BiRectangle} w={10} h={10} />}
              description={""}
              href={"#"}
            />
          </Flex>
        </Container>
      </Box>
    </Stack>
  );
}
