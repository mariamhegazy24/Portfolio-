import React, { useState } from 'react'
import { Box, Heading, Textarea } from '@chakra-ui/react'
import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
} from "@chakra-ui/react"
import { toaster } from '../components/ui/toaster';

export default function Contact() {
  

const [status , setStatus ] = useState("");

const handleSubmit = async (e)=>{
  e.preventDefault();

const formData = new FormData (e.target);
 const res = await fetch ("https://formspree.io/f/xldyanyq" , 

  {
   method: "POST", 
   body: formData, 
   headers: {

     "Accept": "application/json"
   }

  });
 
if (res.ok){

  setStatus ("success");

   toaster.create({
               
                type: "success",
    
                description:" Message sent successfully! " ,
                
              })
  e.target.reset();

}else {

  setStatus("error")
   toaster.create({
                title: "Error",
                description: "Something went wrong. Try again.",
                type: "error",
              })

}


}


  return (
    <Box id={"contact"} bg="#000000"  width={"100%"} minHeight={"100vh"} color={"white"} py={["60px", "80px", "100px"]} px={[4, 6, 8]}>
      <Heading fontSize={["2.5rem", "3rem", "3.75rem"]} textAlign={"center"} mb={[6, 8, 10]}>
        Contact Me
      </Heading>

      <form 
        onSubmit={handleSubmit}
      >
        <Fieldset.Root size="lg" maxW="600px" mx={"auto"} color={"white"} w="100%" px={[0, 4]}>
          
          <Stack>
            <Fieldset.Legend>Contact Details</Fieldset.Legend>
            <Fieldset.HelperText>
              Feel free to send me a message anytime.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>

            {/* Name */}
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input 
                name="name" 
                required 
                placeholder="Enter your name"
                _focus={{
                  borderColor: "rgb(168, 85, 247)",
                  boxShadow: "0 0 0 1px rgb(168, 85, 247)"
                }}
                bg="black"
              />
            </Field.Root>

            {/* Email */}
            <Field.Root>
              <Field.Label>Email Address</Field.Label>
              <Input 
                name="email" 
                type="email" 
                required 
                placeholder="your@email.com"
                _focus={{
                  borderColor: "rgb(168, 85, 247)",
                  boxShadow: "0 0 0 1px rgb(168, 85, 247)"
                }}
                bg="black"
              />
            </Field.Root>

            {/* Phone */}
            <Field.Root>
              <Field.Label>Phone Number</Field.Label>
              <Input 
                name="phone"
                type="tel"
                required
                placeholder="Your phone number"
                _focus={{
                  borderColor: "rgb(168, 85, 247)",
                  boxShadow: "0 0 0 1px rgb(168, 85, 247)"
                }}
                bg="black"
              />
            </Field.Root>

            {/* Message */}
            <Field.Root>
              <Field.Label>Message</Field.Label>
              <Textarea 
                name="message"
                required
                placeholder="Write your message here..."
                minH={"120px"}
                _focus={{
                  borderColor: "rgb(168, 85, 247)",
                  boxShadow: "0 0 0 1px rgb(168, 85, 247)"
                }}
                bg="black"
              />
            </Field.Root>

          </Fieldset.Content>

          {/* Submit Button */}
          <Button 
            type="submit" 
            alignSelf="flex-start" 
            mt={6}
            mb={[4, 6, 8]}
            bg={"rgb(168, 85, 247)"} 
            width={"100%"}
            size={["md", "lg"]}
            _hover={{ bg: "rgb(147, 51, 234)" }}
          >
            Send
          </Button>

        </Fieldset.Root>
      </form>
    </Box>
  )
}
