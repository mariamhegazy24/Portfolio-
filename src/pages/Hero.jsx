// import React from 'react'
// import Navbar from '../components/Navbar'
// import { HStack, Box, Flex, Text } from '@chakra-ui/react'
// import TextPressure from '../components/Text'
// import { useState, useEffect } from "react";


// function useWindowSizeTick() {
//   const [tick, setTick] = useState(0);

//   useEffect(() => {
//     const handleResize = () => setTick((t) => t + 1);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return tick;
// }



// export default function Hero() {

//     const tick = useWindowSizeTick();
//     return (
        

//         <Box position="relative" height="100vh" width="100%">


//             <Box position="absolute" top="0" left="0" width="100%" zIndex={10} p={6} >
//                 <Navbar />
//             </Box>


        
//             <Box

//               display={"flex"} justifyContent={"center"}
            
//             >


//                 <Flex direction={"column"} alignContent={"center"}  justifyContent={"center"}>

//                     <Text fontSize={"50px"} color={"white"} >Hi, I am</Text>

//                     <Box style={{ position: 'relative', height: '300px' , width:'70%',  maxWidth: "1000px", }}>
//                         <TextPressure
//                          key={tick}
//                             text="Mariam Hegazy!"
//                             flex={true}
//                             alpha={false}
//                             stroke={false}
//                             width={true}
//                             weight={true}
//                             italic={true}
//                             textColor="#ffffff"
//                             strokeColor="#ff0000"
//                             minFontSize={36}
//                         />
//                     </Box>

//                     {/* <Text fontSize={"80px"} fontWeight={"semibold"} color={"white"}>Mariam Hegazy</Text> */}
//                     <Text color={"white"}>Front-end Developer & cross platform </Text>


//                 </Flex>

//             </Box>

//         </Box>


//     )
// }






import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { HStack, Box, Flex, Text } from '@chakra-ui/react'
import TextPressure from '../components/Text'
import DarkVeil from '../components/DarkVeil'

function useWindowSizeTick() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const handleResize = () => setTick((t) => t + 1)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return tick
}

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
      >
        <Text fontSize="50px" color="white">Hi, I am</Text>

        {/* IMPORTANT: give a large height to grow the font */}
        <Box
          style={{
            position: "relative",
            height: "200px",
            width: "90%",
            maxWidth: "1200px",
          }}
        >
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

        <Text fontSize="30px" color="white">
        Junior Front-End Developer 
        </Text>
    

      </Flex>

    </Box>
  
  </>
  )
}
