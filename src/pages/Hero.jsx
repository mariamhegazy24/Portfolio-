
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { HStack, Box, Flex, Text } from '@chakra-ui/react'
import TextPressure from '../components/Text'
import DarkVeil from '../components/DarkVeil'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Icon } from '@chakra-ui/react'

function useWindowSizeTick() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const handleResize = () => setTick((t) => t + 1)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return tick
}


const links = [
  { 
    icon: FaLinkedin, 
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mariam-hegazy-a12051358/' 
  },
  { 
    icon: FaGithub, 
    name: 'GitHub',
    url: 'https://github.com/mariamhegazy24' 
  },
  { 
    icon: SiGmail, 
    name: 'Email',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mariamhegazy24@gmail.com' 
  },
];

export default function Hero() {

  const tick = useWindowSizeTick();

  return (<>






    <Box position="relative" height="100vh" width="100%"  >
      <div style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}>
        <DarkVeil />
      </div>
      {/* NAV */}
      <Box position="absolute" top="0" left="0" width="100%" zIndex={10} p={6}>
        <Navbar />
      </Box>

      {/* HERO CONTENT */}
      <Flex
      
        height="100%"
        width="100%"
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
        gap={4}
        zIndex={5}
        pt={20}
      >
        <Text fontSize={{ base: "40px ", md: "50px" }} color="white">Hi, I am</Text>

        {/* IMPORTANT: give a large height to grow the font */}
        <Box 
          style={{
            position: "relative",
            width: "90%",
            maxWidth: "1200px",
          }}
          
          height={{base: "120px" ,  md: "200px"}}   >
          <TextPressure
            key={tick}
            text="Mariam Hegazy!"
            flex={true}
            width={true}
            weight={true}
            italic={true}
            alpha={false}
            stroke={false}
            textColor="#ffffff"
            minFontSize={40}
          />
        </Box>

        <Text fontSize={{ base: "20px", md: "30px" }} color="white" mb={4}>
          Junior Front-End Developer
        </Text>
        
        <HStack spacing={4} mt={4}>
          {links.map((link, index) => (
            <Box
              key={index}
              as="a"
              href={link.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              _hover={{
                transform: 'translateY(-2px)',
                transition: 'all 0.2s',
              }}
            >
              <Icon 
                as={link.icon} 
                boxSize={10} 
                color={"rgb(71, 11, 193)"}
                _hover={{
                  color: 'white',
                }}
              />
            </Box>
          ))}
        </HStack>
      </Flex>


    </Box>

  </>
  )
}
