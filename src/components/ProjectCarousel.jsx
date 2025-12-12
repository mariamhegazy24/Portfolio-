
// Update ProjectCarousel.jsx
import React, { useState, useEffect } from "react";
import { Box, IconButton, Heading, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { BiSolidVideos } from "react-icons/bi";

const MotionBox = motion(Box);

export default function ProjectCarousel({ data }) {
  const [index, setIndex] = useState(1); // Start at 1 because we'll add a clone at the beginning
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const cardWidth = useBreakpointValue({ base: '280px', sm: '320px', md: '360px', lg: '420px' });
  const cardHeight = useBreakpointValue({ base: '460px', sm: '480px', md: '520px', lg: '520px' });

  // Add clones of the first and last items for infinite effect
  const items = [data[data.length - 1], ...data, data[0]];

  const next = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const newIndex = index + 1;
    const isLastItem = newIndex >= items.length - 1;
    
    // Animate to the next item
    await controls.start({
      x: `-${newIndex * (parseInt(cardWidth) * 0.8 + 40)}px`,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5
      }
    });
    
    // If we're at the last clone, instantly jump to the first real item (index 1)
    // without animation to create seamless loop
    if (isLastItem) {
      await controls.set({ 
        x: `-${1 * (parseInt(cardWidth) * 0.8 + 40)}px`,
        transition: { duration: 0 }
      });
      setIndex(1);
    } else {
      setIndex(newIndex);
    }
    
    // Add a small delay before allowing the next animation
    await new Promise(resolve => setTimeout(resolve, 50));
    setIsAnimating(false);
  };

  const prev = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const newIndex = index - 1;
    await controls.start({
      x: `-${newIndex * (parseInt(cardWidth) * 0.8 + 40)}px`,
      transition: {
        type: "spring",
        mass: 0.7,
        damping: 30,
        stiffness: 200,
        velocity: 2,
        restDelta: 0.001
      }
    });
    
    // If we're at the first clone, instantly jump to the last real item
    if (newIndex <= 0) {
      await controls.set({ x: `-${(items.length - 2) * (parseInt(cardWidth) * 0.8 + 40)}px` });
      setIndex(items.length - 2);
    } else {
      setIndex(newIndex);
    }
    setIsAnimating(false);
  };

  // Auto-advance carousel with smooth timing and infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        next();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [index, data.length, isAnimating]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) next();
    if (touchStart - touchEnd < -50) prev();
  };

  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: '600px', sm: '600px', md: '600px' }}
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => {
        if (!isAnimating) {
          controls.start({
            x: `-${index * (parseInt(cardWidth) * 0.8 + 40)}px`,
            transition: { duration: 0.5, ease: "easeInOut" }
          });
        }
      }}
    >
      {items.map((card, i) => {
        const distance = i - index;
        const isCenter = distance === 0;

        return (
          <MotionBox
            key={i}
            position="absolute"
            width={isCenter ? cardWidth : `calc(${cardWidth} * 0.8)`}
            height={isCenter ? cardHeight : `calc(${cardHeight} * 0.8)`}
            borderRadius="20px"
            overflow="hidden"
            bg="gray.800"
            boxShadow="lg"
            drag={!isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -120) next();
              if (info.offset.x > 120) prev();
            }}
            animate={{
              x: isCenter ? 0 : distance * (parseInt(cardWidth) * 0.8 + 40),
              scale: isCenter ? 1 : 0.85,
              opacity: isCenter ? 1 : 0.6,
              filter: isCenter ? "blur(0px)" : "blur(1px)",
              zIndex: isCenter ? 1 : 0,
              transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 0.5
              }
            }}
            transition={{
              x: { 
                type: "spring",
                mass: 0.5,
                damping: 30,
                stiffness: 200,
                velocity: 2
              },
              scale: { 
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.4
              },
              opacity: { 
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1] 
              },
              filter: { 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
           
          >
            <Box
              width="100%"
              height={{ base: "200px", sm: "220px", md: "240px", lg: "250px" }}
              overflow="hidden"
              position="relative"
            >
              <Image
                src={card.photo}
                width="100%"
                height="100%"
                objectFit={{ base: "contain", sm: "contain", md: "cover" }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                alt={card.title}

              />
            </Box>

            <Box p={{ base: 3, md: "18px" }}
            
            >

              <Box
              
              >

                <Heading fontSize={{ base: "18px", md: "22px" }}>{card.title}</Heading>
                <Box
                  fontSize={{ base: "12px", md: "14px" }}
                  mt={{ base: 2, md: "10px" }}
                  opacity={0.9}
                  flex="1"

                >
                  {card.description}
                </Box>

              </Box>

              <HStack mt={{ base: 6, sm: 6, md: 8 }} spacing={{ base: 3, md: "14px" }}>
                <a href={card.video} target="_blank" rel="noopener noreferrer">
                  <Box
                    bg="purple.500"
                    px={{ base: 3, md: "16px" }}
                    py={{ base: 1, md: "8px" }}
                    borderRadius="10px"
                    color="white"
                    cursor="pointer"
                    display="flex"
                    alignItems="center"
                    gap="8px"
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Demo <BiSolidVideos />
                  </Box>
                </a>

                <a href={card.github} target="_blank" rel="noopener noreferrer">
                  <Box
                    border="1px solid white"
                    px={{ base: 3, md: "16px" }}
                    py={{ base: 1, md: "8px" }}
                    borderRadius="10px"
                    cursor="pointer"
                    display="flex"
                    alignItems="center"
                    gap="8px"
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Code <FaGithub />
                  </Box>
                </a>
              </HStack>
            </Box>
          </MotionBox>
        );
      })}

      <IconButton
        position="absolute"
        top="50%"
        left={{ base: 2, md: "40px" }}
        transform="translateY(-50%)"
        onClick={prev}
        variant="ghost"
        color="white"
        size={{ base: "sm", md: "lg" }}
        aria-label="Previous project"
        display={{ base: isMobile ? "none" : "flex", md: "flex" }}
      >
        <LuChevronLeft size={isMobile ? 24 : 32} />
      </IconButton>

      <IconButton
        position="absolute"
        top="50%"
        right={{ base: 2, md: "40px" }}
        transform="translateY(-50%)"
        onClick={next}
        variant="ghost"
        color="white"
        size={{ base: "sm", md: "lg" }}
        aria-label="Next project"
        display={{ base: isMobile ? "none" : "flex", md: "flex" }}
      >
        <LuChevronRight size={isMobile ? 24 : 32} />
      </IconButton>

      <HStack
        position="absolute"
        bottom={{ base: 4, md: "20px" }}
        left="50%"
        transform="translateX(-50%)"
        spacing={{ base: 2, md: "10px" }}
      >
        {data.map((_, i) => (
          <Box
            key={i}
            as="button"
            onClick={() => setIndex(i)}
            w={i === index ? { base: "12px", md: "16px" } : { base: "8px", md: "10px" }}
            h={{ base: "8px", md: "10px" }}
            borderRadius="50px"
            bg={i === index ? "purple.400" : "gray.500"}
            transition="all 0.3s"
            _hover={{ bg: i === index ? "purple.400" : "gray.400" }}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </HStack>
    </Box>
  );
}



