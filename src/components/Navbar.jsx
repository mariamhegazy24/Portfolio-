import { Box, Flex, Link, useBreakpointValue } from '@chakra-ui/react';

export default function Navbar() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#recentwork', label: 'Work' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <Box as="nav" py={4} px={4} w="100%">
      <Flex 
        maxW="container.lg"
        mx="auto"
        justify="center"
        align="center"
        gap={{ base: 4, md: 8, lg: 12 }}
        flexWrap="wrap"
      >
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            color="white"
            fontSize={{ base: 'md', md: 'lg' }}
            _hover={{ 
              color: 'rgb(168, 85, 247)',
              textDecoration: 'none'
            }}
            whiteSpace="nowrap"
            px={2}
            py={1}
          >
            {item.label}
          </Link>
        ))}
      </Flex>
    </Box>
  );
}