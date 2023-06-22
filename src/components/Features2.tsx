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

export default function Features2() {
  return (
    <Stack bgColor={"#164875"}>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
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
            <Heading color={"white"}>TRUST Polresta Bogor Kota</Heading>
            <Text color={"white"} fontSize={"lg"}>
              POLRESTA BOGOR KOTA 2021 - Design, Web Apps, Mobile Apps
            </Text>
            <Text textAlign={"justify"} color={"white"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit elit
              nascetur elementum neque euismod nisl arcu. Ullamcorper tortor
              augue diam egestas. Nullam sit purus sit vitae mi. Vel, dolor
              nunc, in sit tellus. A viverra nunc, quam odio condimentum natoque
              viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Elit elit nascetur elementum neque euismod nislarcu.
            </Text>
            {/* <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Business Planning'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Financial Planning'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Market Analysis'}
              />
            </Stack> */}
          </Stack>
          {/* <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}></Stack>
          <Heading>UPL Sales Tracking Apps</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            UPL INDONESIA 2022 - Design, Web Apps, Mobile Apps
            </Text>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
            elit nascetur elementum neque euismod nisl arcu.
            Ullamcorper tortor augue diam egestas. Nullam sit purus sit
            vitae mi. Vel, dolor nunc, in sit tellus. A viverra nunc, quam odio
            condimentum natoque viverra. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Elit elit nascetur elementum neque
            euismod nislarcu.
            </Text>
            </SimpleGrid>
      </Container> */}
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"https://i.ibb.co/d6yCRhq/IPHONE-MOCKUP-TMGRAPHICS-2-1.png"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
