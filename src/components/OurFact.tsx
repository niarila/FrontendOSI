import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Stack,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { BsFillChatLeftFill } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { TiStopwatch } from "react-icons/ti";
import { BiHappy } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
// import { IconName } from "react-icons/fi";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated color={"#FFB703"}>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"} color={"#164875"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function OurFact() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          color={"#273B4A"}
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
        >
          Our Facts
        </Heading>
        <Text color={"#757575"} fontSize={{ base: "sm", sm: "lg" }}>
          We are enthusiastic about using digital solutions to solve our
          client’s problems by developing outstanding projects. Take a look at
          this satisfied customer.
        </Text>
      </Stack>

      {/* <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Our Facts
          We are enthusiastic about using digital solutions to solve our client’s 
          problems by developing outstanding projects. Take a look at this satisfied customer.
        </chakra.h1> */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Clients & Partners"}
          stat={"99+"}
          icon={<BsChatLeft size={"3em"} />}
        />
        <StatsCard
          title={"Problem solved"}
          stat={"50+"}
          icon={<BsLightbulb size={"3em"} />}
        />
        <StatsCard
          title={"Years experiences in this industry"}
          stat={"10+"}
          icon={<TiStopwatch size={"3em"} />}
        />
        <StatsCard
          title={"Line of code has been written"}
          stat={"10B+"}
          icon={<BsDisplay size={"3em"} />}
        />
        <StatsCard
          title={"OSI Talents"}
          stat={"100+"}
          icon={<BiUserCircle size={"3em"} />}
        />
        <StatsCard
          title={"Client’s smile"}
          stat={"INFINITE"}
          icon={<BiHappy size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
