
// Update RecentWork.jsx
import React from 'react';
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import ProjectCarousel from '../components/ProjectCarousel';

export default function RecentWork() {
  const headingSize = useBreakpointValue({ 
    base: "3xl", 
    sm: "4xl", 
    md: "5xl",
    lg: "6xl" 
  });

  const Data = [
     {
      title: "Dental Clinic Management System",
      description:"PureSmile is a comprehensive, modern web application designed for dental clinics to manage appointments, patients, and clinical showcases. This project was developed as a personal application by a former dentist, combining clinical expertise with modern web development to create a tailored solution for the dental profession. Built with a focus on premium aesthetics and user experience, it provides both a patient-facing portal and a robust doctor dashboard.",
      photo: "/dentalclinic.png",
      github: "https://github.com/mariamhegazy24/Dental-Clinic.git",
      video: "https://drive.google.com/drive/folders/196AJWMZnV5m4ZKdTsDcpEw-4cC8_1Pli?usp=drive_link",
      technologies: ["React", "TypeScript", "Firebase", "Redux Toolkit", "Chakra UI"]
    },

    { 
      title: "Tech Blog APP", 
      description: "A modern blogging platform where users can browse posts, create new articles, edit, delete, and publish/unpublish content. Built with React, Tailwind CSS, and json-server authentication", 
      photo: "/tech1.png", 
      github: "https://github.com/mariamhegazy24/react-project.git", 
      video: "https://drive.google.com/file/d/1M7qR_ngw79uejTcfch6vJNjBS2KTK-pW/view?usp=drive_link",
      technologies: ["React", "Tailwind CSS", "JSON Server" , "JSON Server Auth"] 
    },
    { 
      title: "Tablya Homemade Food APP", 
      description: "A home-made food delivery app that connects chefs with customers looking for fresh, authentic meals. The app is built using React, Redux Toolkit, and Chakra UI",
      photo: "/tablya2.png", 
      github: "https://github.com/mariamhegazy24/TABLYA-APP.git", 
      video: "https://drive.google.com/file/d/1CPw-gTEyGo8ptvF05z5e2sLxvVdW0Iqw/view?usp=drive_link",
      technologies: ["React", "Chakra Ui", "Supabase", "Redux Toolkit"]
    },
    { 
      title: "Mobile To-Do List App (React Native)", 
      description: "A simple and efficient mobile app for managing daily tasks. Users can add tasks, mark them as completed, and delete them. Built with React Native, the app offers a clean interface and responsive, seamless interactions.", 
      photo: "/todolist.png", 
      github: "https://github.com/mariamhegazy24/Todo-list.git", 
      video: "https://github.com/mariamhegazy24/Todo-list.git" ,
      technologies: ["React Native"," Redux toolkit"]
    },
    { 
      title: "AI Chat Assistant — ChatGPT-like App", 
      description: "An intelligent chat application powered by an AI API to generate human-like responses. The app features a clean chat interface, fast message rendering, and real-time interaction for a smooth and engaging experience.", 
      photo: "/ai.png", 
      github: "https://github.com/mariamhegazy24/Ai-Chat-Assistant.git", 
      video: "https://drive.google.com/file/d/1jCFkZYFDmS7G4uDdqDm2OsatbIYHkWnh/view?usp=drive_link" ,
      technologies: ["React", "Chakra ui", "Express"]
    },
    { 
      title: "HR Management System", 
      description: "A complete HR platform that manages employees, tracks attendance, handles roles, and organizes essential HR operations. The system offers a simple and efficient interface designed for quick and easy management.", 
      photo: "/hr.png", 
      github: "https://github.com/mariamhegazy24/HR-Management-System.git", 
      video: "https://drive.google.com/file/d/1kdBmIOKsm-hf7ixcx-UUgmXfjjRsRRxT/view?usp=drive_link",
      technologies: ["javascript", "Bootstrap"]
    }
  ];

  return (
    <Box 
      w="100%" 
      minH="100vh" 
      bg="#000000" 
      color="white" 
      pt={{ base: "60px", md: "80px" }}
      pb={{ base: "40px", md: "60px" }}
      id="recentwork"
      px={{ base: 2, md: 8, lg: 12 }}

    >
      <Heading 
        textAlign="center" 
        fontSize={headingSize} 
        mb={{ base: "30px", md: "50px" }}
      >
        Recent Work
      </Heading>

      <Box 
        maxW="1800px" 
        mx="auto"
      >
        <ProjectCarousel data={Data} />
      </Box>
    </Box>
  );
}