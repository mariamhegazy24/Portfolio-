import React from 'react';
import {
  Box,
  Text,
  Heading,
  Flex,
  Icon,
  Container
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaBootstrap
} from 'react-icons/fa';
import { SiChakraui, SiRedux, SiExpress } from 'react-icons/si';
import { RiSupabaseFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const MotionFlex = motion(Flex);

export default function About() {
  const accentColor = 'rgb(147, 51, 234)';
  const iconBg = 'rgb(22, 4, 40)';
  const bgColor = '#000000';

  const skills = [
    { icon: FaReact, name: 'React' },
    { icon: SiChakraui, name: 'Chakra UI' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: SiExpress, name: 'Express' },
    { icon: RiSupabaseFill, name: 'Supabase' },
    { icon: SiRedux, name: 'Redux' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: TbBrandReactNative, name: 'React Native' },
    { icon: FaBootstrap, name: 'Bootstrap' },
    { icon: RiTailwindCssFill, name: 'Tailwind' },
    { icon: SiTypescript, name: 'Typescript' },
  ];

  return (
    <Box
      as="section"
      w="100%"
      minH="100vh"
      color="white"
      bg={bgColor}
      id="about"
      py={20}
    >
      <Container maxW="container.lg" px={6}>
        <Flex direction="column" align="center" textAlign="center" gap={10}>
          <Heading
            fontSize={{ base: '5xl', md: '6xl' }}
            fontWeight="bold"
          >
            About <Box as="span" color={accentColor}>Me</Box>
          </Heading>

          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            color="gray.300"
            maxW="800px"
            lineHeight="tall"
          >
           I’m a passionate junior Front-end Developer focused on building high-quality, responsive, and interactive web applications. Skilled in React, React native, Tailwind , Redux and integrating APIs with Node.js, I create seamless, user-friendly experiences with clean, maintainable code.
I thrive on turning complex ideas into elegant, scalable solutions, combining creativity and technical expertise to deliver front-end experiences that perform beautifully across all devices.
          </Text>

          {/* Carousel using Framer Motion */}
          <Box w="full" overflow="hidden" mt={10}>
            <MotionFlex
              w="max-content"
              gap={6}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }}
            >
              {skills.concat(skills).map((skill, index) => ( // doubled for seamless loop
                <Flex
                  key={index}
                  direction="column"
                  align="center"
                  justify="center"
                  bg={iconBg}
                  p={6}
                  w="120px"  
                  h="120px"   
                 
                  borderRadius="full"
                  minW="120px"
                >
                  <Icon as={skill.icon} boxSize={12} color={accentColor} mb={3} />
                  <Text fontSize="sm" color="gray.300">{skill.name}</Text>
                </Flex>
              ))}
            </MotionFlex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
