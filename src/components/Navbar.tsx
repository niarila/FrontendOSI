import {
  Spacer,
  Flex,
  Heading,
  HStack,
  Link,
  Icon,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightbulbOutline } from "react-icons/md";

const handleClick = () => {
  console.log("Link clicked");
};

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex={3}
      // position="fixed"
      backgroundColor={"white"}
      position="fixed"
      px="50px"
      py="20px"
      width="full"
      bg="withe.500"
      alignItems="flex-end"
      justifyContent="space-between"
      borderBottom="6px solid #164875"
    >
      <Flex alignItems="flex-end">
        <Image src="https://i.ibb.co/d5Kk707/Logo-Image.png"></Image>
        <Heading color="#164875" mr="50px" fontSize="30" letterSpacing="1,5px">
          Oemah Solution Indonesia
        </Heading>
        <HStack color="#164875" spacing="40px">
          <Link color="#FFB703" href="/" onClick={handleClick}>
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
      </Flex>
      <Spacer />
      <Button
        mr={5}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        colorScheme={"blue"}
        bg={"#164875"}
      >
        Get In Touch
      </Button>
      {/* <Spacer></Spacer> */}
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MdDarkMode /> : <MdLightbulbOutline />}
      </Button>
    </Flex>
  );
}

// import {Box, Flex, Heading, HStack, Link, Icon, Button, Image,  } from "@chakra-ui/react"

// const handleClick = () => {
//   console.log("Link clicked");
// };

// export default function Navbar() {
//   return (
//     <Flex
//       px="50px"
//       py="20px"
//       width= "full"
//       bg="with.500"
//       alignItems="flex-end"
//       justifyContent="space-between"
//     >
//       <Flex alignItems="flex-end" >
//         <Image src="https://i.ibb.co/d5Kk707/Logo-Image.png"></Image>
//         <Heading
//           color="#164875"
//           mr="60px"
//           fontSize="30"
//           letterSpacing="1,5px">
//         Oemah Solution Indonesia
//         </Heading>
//         <HStack color="#164875" spacing="40px">
//           <Link color="#FFB703" href="/" onClick={handleClick}>Home</Link>
//           <Link>Service</Link>
//           <Link>Work</Link>
//           <Link href="/aboutUs" onClick={handleClick} >About Us</Link>
//           <Link href="/blog" onClick={handleClick}>Blog</Link>
//           <Link>Careers</Link>
//         </HStack>
//       </Flex>
//         <Button
//         display={{ base: 'none', md: 'inline-flex' }}
//         fontSize={'sm'}
//         fontWeight={600}
//         color={'white'}
//         bg={'#164875'}>
//           Get In Touch
//         </Button>
//       </Flex>
//   );
// };

// // import {
// //   Box,
// //   Flex,
// //   Text,
// //   IconButton,
// //   Button,
// //   Stack,
// //   Collapse,
// //   Icon,
// //   Link,
// //   Popover,
// //   PopoverTrigger,
// //   PopoverContent,
// //   useColorModeValue,
// //   useBreakpointValue,
// //   useDisclosure,
// // } from '@chakra-ui/react';
// // import {
// //   HamburgerIcon,
// //   CloseIcon,
// //   ChevronDownIcon,
// //   ChevronRightIcon,
// // } from '@chakra-ui/icons';

// // export default function Navbar() {
// //   const { isOpen, onToggle } = useDisclosure();

// //   return (
// //     <Box>
// //       <Flex
// //         bg={useColorModeValue('white', 'gray.800')}
// //         color={useColorModeValue('gray.600', 'white')}
// //         minH={'60px'}
// //         py={{ base: 2 }}
// //         px={{ base: 4 }}
// //         borderBottom={1}
// //         borderStyle={'solid'}
// //         borderColor={useColorModeValue('gray.200', 'gray.900')}
// //         align={'center'}>
// //         <Flex
// //           flex={{ base: 1, md: 'auto' }}
// //           ml={{ base: -2 }}
// //           display={{ base: 'flex', md: 'none' }}>
// //           <IconButton
// //             onClick={onToggle}
// //             icon={
// //               isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
// //             }
// //             variant={'ghost'}
// //             aria-label={'Toggle Navigation'}
// //           />
// //         </Flex>
// //         <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
// //           <Text
// //             textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
// //             fontFamily={'heading'}
// //             color={'blue.800'}>
// //             Oemah Solution Indonesia
// //           </Text>

// //           <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
// //             <DesktopNav />
// //           </Flex>
// //         </Flex>

// //         <Stack
// //           flex={{ base: 1, md: 0 }}
// //           justify={'flex-end'}
// //           direction={'row'}
// //           spacing={6}>
// //           {/* <Button
// //               as={'a'}
// //               fontSize={'sm'}
// //               fontWeight={400}
// //               variant={'link'}
// //               href={'#'}>
// //               Sign In
// //             </Button> */}
// //           <Button
// //             as={'a'}
// //             display={{ base: 'none', md: 'inline-flex' }}
// //             fontSize={'sm'}
// //             fontWeight={600}
// //             color={'white'}
// //             bg={'blue.400'}
// //             href={'#'}
// //             _hover={{
// //               bg: 'blue.300',
// //             }}>
// //             Get In Touch
// //           </Button>
// //         </Stack>
// //       </Flex>

// //       <Collapse in={isOpen} animateOpacity>
// //         <MobileNav />
// //       </Collapse>
// //     </Box>
// //   );
// // }

// // const DesktopNav = () => {
// //   const linkColor = useColorModeValue('blue.600', 'blue.200');
// //   const linkHoverColor = useColorModeValue('blue.800', 'white');
// //   const popoverContentBgColor = useColorModeValue('white', 'gray.800');

// //   return (
// //     <Stack direction={'row'} spacing={4}>
// //       {NAV_ITEMS.map((navItem) => (
// //         <Box key={navItem.label}>
// //           <Popover trigger={'hover'} placement={'bottom-start'}>
// //             <PopoverTrigger>
// //               <Link
// //                 p={2}
// //                 href={navItem.href ?? '#'}
// //                 fontSize={'sm'}
// //                 fontWeight={500}
// //                 color={linkColor}
// //                 _hover={{
// //                   textDecoration: 'none',
// //                   color: linkHoverColor,
// //                 }}>
// //                 {navItem.label}
// //               </Link>
// //             </PopoverTrigger>

// //             {navItem.children && (
// //               <PopoverContent
// //                 border={0}
// //                 boxShadow={'xl'}
// //                 bg={popoverContentBgColor}
// //                 p={4}
// //                 rounded={'xl'}
// //                 minW={'sm'}>
// //                 <Stack>
// //                   {navItem.children.map((child) => (
// //                     <DesktopSubNav key={child.label} {...child} />
// //                   ))}
// //                 </Stack>
// //               </PopoverContent>
// //             )}
// //           </Popover>
// //         </Box>
// //       ))}
// //     </Stack>
// //   );
// // };

// // const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
// //   return (
// //     <Link
// //       href={href}
// //       role={'group'}
// //       display={'block'}
// //       p={2}
// //       rounded={'md'}
// //       _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
// //       <Stack direction={'row'} align={'center'}>
// //         <Box>
// //           <Text
// //             transition={'all .3s ease'}
// //             _groupHover={{ color: 'pink.400' }}
// //             fontWeight={500}>
// //             {label}
// //           </Text>
// //           <Text fontSize={'sm'}>{subLabel}</Text>
// //         </Box>
// //         <Flex
// //           transition={'all .3s ease'}
// //           transform={'translateX(-10px)'}
// //           opacity={0}
// //           _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
// //           justify={'flex-end'}
// //           align={'center'}
// //           flex={1}>
// //           <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
// //         </Flex>
// //       </Stack>
// //     </Link>
// //   );
// // };

// // const MobileNav = () => {
// //   return (
// //     <Stack
// //       bg={useColorModeValue('white', 'gray.800')}
// //       p={4}
// //       display={{ md: 'none' }}>
// //       {NAV_ITEMS.map((navItem) => (
// //         <MobileNavItem key={navItem.label} {...navItem} />
// //       ))}
// //     </Stack>
// //   );
// // };

// // const MobileNavItem = ({ label, children, href }: NavItem) => {
// //   const { isOpen, onToggle } = useDisclosure();

// //   return (
// //     <Stack spacing={4} onClick={children && onToggle}>
// //       <Flex
// //         py={2}
// //         as={Link}
// //         href={href ?? '#'}
// //         justify={'space-between'}
// //         align={'center'}
// //         _hover={{
// //           textDecoration: 'none',
// //         }}>
// //         <Text
// //           fontWeight={600}
// //           color={useColorModeValue('gray.600', 'gray.200')}>
// //           {label}
// //         </Text>
// //         {children && (
// //           <Icon
// //             as={ChevronDownIcon}
// //             transition={'all .25s ease-in-out'}
// //             transform={isOpen ? 'rotate(180deg)' : ''}
// //             w={6}
// //             h={6}
// //           />
// //         )}
// //       </Flex>

// //       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
// //         <Stack
// //           mt={2}
// //           pl={4}
// //           borderLeft={1}
// //           borderStyle={'solid'}
// //           borderColor={useColorModeValue('gray.200', 'gray.700')}
// //           align={'start'}>
// //           {children &&
// //             children.map((child) => (
// //               <Link key={child.label} py={2} href={child.href}>
// //                 {child.label}
// //               </Link>
// //             ))}
// //         </Stack>
// //       </Collapse>
// //     </Stack>
// //   );
// // };

// // interface NavItem {
// //   label: string;
// //   subLabel?: string;
// //   children?: Array<NavItem>;
// //   href?: string;
// // }

// // const NAV_ITEMS: Array<NavItem> = [
// //   {
// //     label: 'Home',
// //     children: [
// //       // {
// //       //   label: 'Explore Design Work',
// //       //   subLabel: 'Trending Design to inspire you',
// //       //   href: '#',
// //       // },
// //       // {
// //       //   label: 'New & Noteworthy',
// //       //   subLabel: 'Up-and-coming Designers',
// //       //   href: '#',
// //       // },
// //     ],
// //   },
// //   {
// //     label: 'Service',
// //     children: [
// //       // {
// //       //   label: 'Job Board',
// //       //   subLabel: 'Find your dream design job',
// //       //   href: '#',
// //       // },
// //       // {
// //       //   label: 'Freelance Projects',
// //       //   subLabel: 'An exclusive list for contract work',
// //       //   href: '#',
// //       // },
// //     ],
// //   },
// //   {
// //     label: 'Works',
// //     href: '#',
// //   },
// //   {
// //     label: 'About Us',
// //     href: '#',
// //   },
// //   {
// //     label: 'Blog',
// //     href: '#',
// //   },
// //   {
// //     label: 'Careers',
// //     href: '#',
// //   },
// // ];
