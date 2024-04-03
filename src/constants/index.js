import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    education,
    artificial
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Tracks",
    },
    {
      id: "contact",
      title: "Registration",
    },
  ];
  
  const services = [
    {
      title: "Prizes",
      subtitle: "Prizes worth 15K+",
      icon: web,
    },
    {
      title: "Location",
      subtitle: "Sushant University",
      icon: mobile,
    },
    {
      title: "Dates",
      subtitle: "19th-20th April",
      icon: backend,
    },
    {
      title: "Registration Fees",
      subtitle: "Rs. 120 per participant",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "",
      company_name: "Education",
      icon: education,
      iconBg: "#383E56",
      date: "Education",
      points: [
        "This theme is centered around leveraging web development to enhance various aspects of education.",
        "Participants are encouraged to brainstorm, design, and implement web-based solutions that address challenges in education, promote inclusivity, foster engagement, and improve learning outcomes.",
        "Theme Overview: The theme of this hackathon is centered around leveraging web development to enhance various aspects of education.",
        "Participants are encouraged to brainstorm, design, and implement web-based solutions that address challenges in education, promote inclusivity, foster engagement, and improve learning outcomes.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: artificial,
      iconBg: "#E6DEDD",
      date: "AI Based Utility Tools",
      points: [
        "The theme of this hackathon is centered around leveraging AI technologies to develop innovative utility tools that enhance the software development process.", 
        "Develop AI-powered tools that assist developers in generating code snippets, automating repetitive tasks, and optimizing code quality, readability, and performance.",
        "Participants are encouraged to explore the capabilities of AI, machine learning (ML), natural language processing (NLP), computer vision, and other AI-related domains to create intelligent solutions that address challenges faced by developers, streamline workflows, and improve productivity."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:["Sushant University (Erstwhile Ansal University) was established in 2012 under the Haryana Private Universities Act 2006. Located in the heart of Gurugram, India’s largest hub of National and Fortune 500 companies. We have eight schools offering programmes in Architecture, Design, Law, Management, Hospitality, Engineering, Health Sciences and Planning & Development.", "We are a university with the core ideology of being futuristic with the mission AHEAD FOR LIFE. The curriculum design is guided by inter and trans-disciplinary approach incorporating pedagogies that expand learning opportunities, ensuring higher order learning outcomes."],
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  const formUrl= "https://docs.google.com/forms/d/e/1FAIpQLSeBKW_-sV2AgSJYjjJh_dwga7IDMbbNMW2uS6i9I-EzMo7GKg/viewform?usp=sf_link";
  
  export { services, technologies, experiences, testimonials, projects, formUrl };
  