
import React from 'react'
import { Box } from '@chakra-ui/react'
import Hero from './pages/Hero'
import About from './pages/About'
import RecentWork from './pages/RecentWork'
import Contact from './pages/Contact'
import { Toaster } from './components/ui/toaster'


export default function App() {
  return (
   <>
   
   <Hero/>
   <About/>
   <RecentWork/>
   <Toaster/>
   <Contact/>
   
   
   
   </>
  )
}
