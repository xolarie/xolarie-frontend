const navDatas = [
    {
        page: "About Us", path: "/about"
    },
    {
        page: "Services",
        dropdown: [
            { page: "Web Development", path: "/services/web-development" },
            { page: "App Development", path: "/services/app-development" },
            { page: "Backend and Database Management", path: "/services/backend-development" },
            { page: "UI/UX Design", path: "/services/ui-ux" },
            { page: "Gaming", path: "/services/gaming" },
            { page: "Animations", path: "/services/animations" },
            { page: "Robotics and AI Solutions", path: "/services/robotics-ai" },
            { page: "Project management", path: "/services/project-management" },
        ]
    },
    {
        page: "Solutions",
        dropdown: [
            { page: "Custom Software Solutions", path: "/solutions/software" },
            { page: "E-commerce Platforms", path: "/solutions/ecommerce" },
            { page: "AI-Powered Automation", path: "/solutions/ai-automation" },
            { page: "Enterprise System Integration", path: "/solutions/enterprise" }
        ]
    },

    {
        page: "Insights",
        dropdown: [
            { page: "Blog", path: "/insights/blog" },
            { page: "Tech News & Updates", path: "/insights/tech-news" },
            // {page: "Open Source Projects", path: "/resources/projects"},
            // {page: "Documentation", path: "/resources/documentation"},
            // {page: "API Documentation", path: "/resources/api-documentation"}
        ]
    },
    {
        page: "Careers",
        dropdown: [
            { page: "Jobs Openings", path: "/careers/job-opening" },
            { page: "Internship", path: "/careers/internship" },
            { page: "Recruitment Event", path: "/careers/recruitment" },
            { page: "FAQs", path: "/careers/faqs" }
        ]
    },
    {
        page: "Products", path: "/products"
        // dropdown: [
        //     {page: "Explore our products", path: "/products/explore"},
        // ]
    },
    {
        page: "Lab", path: "/lab",
        // dropdown: [
        //     {page: "Jobs Openings", path: "/careers/job-opening"},
        //     {page: "Internship", path: "/careers/internship"},
        //     {page: "Recruitment Event", path: "/careers/recruitment"},
        //     {page: "FAQs", path: "/careers/faqs"}
        // ]
    },
    // {page: "Hardware & Gadgets", path: "/solutions/hardware"},

];

import { TbWorld } from "react-icons/tb";
import { GrAppleAppStore } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
import { PiRobotDuotone } from "react-icons/pi";
import { VscGame } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";
// import { MdAnimation } from "react-icons/md";
// import { MdOutlineManageHistory } from "react-icons/md";

const servicesData = [
    {
        title: "App Development",
        description: "Create seamless native and cross-platform mobile experiences that users love on IOS and Android.",
        icon: GrAppleAppStore,
        color: "#FF048F",
    },
    {
        title: "Web Development",
        description: "Build fast, scalable, secure, futuristic and responsive web applications using cutting-edge technonologies.",
        icon: TbWorld,
        color: "#2758FB",
    },
    {
        title: "UI/UX Design",
        description: "Design beautiful, intuitive interfaces with user centered experiences that drive engagement and conversions.",
        icon: TfiGallery,
        color: "#FF048F",
    },
    {
        title: "AI & Automation",
        description: "Leverage artificial intelligence and smart automation to streamline workflows and unlock newpossibilities.",
        icon: PiRobotDuotone,
        color: "#8B22FA",
    },
    {
        title: "Gaming",
        description: "Craft immersive gaming experiences with stunning  graphics, smooth gameplay, and engaging mechanics.",
        icon: VscGame,
        color: "#2758FB",
    },
    {
        title: "Backend Systems",
        description: "Develop robust, secure, and scalable server infrastructure to power your digital products reliably.",
        icon: FaCode,
        color: "#8B22FA",
    },
    // {
    //     title: "Animation",
    //     description: "Bring your ideas to life with creative and impactful animations.",
    //     icon: MdAnimation,
    // },
    // {
    //     title: "Project Management",
    //     description: "Efficiently manage projects from concept to completion with our expert guidance and tools.",
    //     icon: MdOutlineManageHistory,
    // },
]

const trustedCompany = [
    "TechCorp", "StartupX", "InnovationLab", "DigitalFlow", "Cloudsync", "Datawave"
]

import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { RxRocket } from "react-icons/rx";
import { TiInputChecked } from "react-icons/ti";

const process = [
    {
        step: "Discovery Call",
        description: "We start a conversation to understand your vision, goals and project requirement in detail.",
        color: "#A618E3",
        icon: MdOutlinePhoneCallback,
    },
    {
        step: "Strategy & Planning",
        description: "Our team crafts a comprehensive strategy, wire-frames, and roadmap tailored to your objectives",
        color: "#FF048F",
        icon: FaRegLightbulb
    },
    {
        step: "Design & Development",
        description: "We bring your product to life with pixel-perfect design and clean, scalable code.",
        color: "#0693F7",
        icon: FaCode
    },
    {
        step: "Testing & Launch",
        description: "Rigorous testing ensures everything works flawlessly before we launch your product.",
        color: "#A618E3",
        icon: RxRocket
    },
    {
        step: "Support & Growth",
        description: "Post-launch suppor monitoring and continuous improvements to help your product thrive.",
        color: "#4846FB",
        icon: TiInputChecked
    },
]

const projects = [
    {
        name: "TechFlow Dashboard",
        description: "A comprehensive analytics platform with real-time data visualization and AI-powered insights for...",
        stacks: ["React", "Typescript", "Analysis"],
        services: "Web Development",
        image: "/images/project.png",
        colorFrom: "#2957FB",
        colorVia: "#9F1BF0",
        colorTo: "#DD0385"
    },
    {
        name: "TechFlow Dashboard",
        description: "A comprehensive analytics platform with real-time data visualization and AI-powered insights for...",
        stacks: ["React", "Typescript", "Analysis"],
        services: "Web Development",
        image: "/images/project.png",
        colorFrom: "#2957FB",
        colorVia: "#9F1BF0",
        colorTo: "#DD0385"
    },
    {
        name: "TechFlow Dashboard",
        description: "A comprehensive analytics platform with real-time data visualization and AI-powered insights for...",
        stacks: ["React", "Typescript", "Analysis"],
        services: "Web Development",
        image: "/images/project.png",
        colorFrom: "#2957FB",
        colorVia: "#9F1BF0",
        colorTo: "#DD0385"
    },
    {
        name: "TechFlow Dashboard",
        description: "A comprehensive analytics platform with real-time data visualization and AI-powered insights for...",
        stacks: ["React", "Typescript", "Analysis"],
        services: "Web Development",
        image: "/images/project.png",
        colorFrom: "#2957FB",
        colorVia: "#9F1BF0",
        colorTo: "#DD0385"
    },
    {
        name: "TechFlow Dashboard",
        description: "A comprehensive analytics platform with real-time data visualization and AI-powered insights for...",
        stacks: ["React", "Typescript", "Analysis"],
        services: "Web Development",
        image: "/images/project.png",
        colorFrom: "#2957FB",
        colorVia: "#9F1BF0",
        colorTo: "#DD0385"
    },
    {
        name: "TechFlow Dashboard",
        description: "A comprehensive analytics platform with real-time data visualization and AI-powered insights for...",
        stacks: ["React", "Typescript", "Analysis"],
        services: "Web Development",
        image: "/images/project.png",
        colorFrom: "#2957FB",
        colorVia: "#9F1BF0",
        colorTo: "#DD0385"
    },
]

const homeServices = [
  {
    service: "Web Development",
    description: "Modern websites and web applications built for performance, scalability, and cutting-edge technologies.",
    subServices: [
      "3D Interactive Websites",
      "Progressive Web Apps (PWA)",
      "Single Page Applications (SPA)",
            "Web3 Websites",
      "E-commerce Platforms",
      "Custom CMS Development",
      "Performance & SEO Optimization"
    ],
    isMostPopular: false
  },
  {
    service: "Mobile App Development",
    description: "High-quality mobile applications with smooth performance and scalable architecture.",
    subServices: [
      "Android Apps",
      "iOS Apps",
      "Cross-platform Apps (Flutter/React Native)",
      "Augmented Reality (AR) Apps",
      "Mobile Game Development",
      "UI/UX Optimized Apps",
      "App Store Deployment & Maintenance"
    ],
    isMostPopular: true
  },
  {
    service: "Backend Development",
    description: "Robust, secure, and scalable backend systems for modern web and mobile applications.",
    subServices: [
      "REST & GraphQL APIs",
      "Microservices Architecture",
      "SQL & NoSQL Databases",
      "Authentication & Authorization Systems",
      "Cloud Integration & Serverless",
      "Realtime Systems (WebSockets, Push)",
      "Performance & Security Optimization"
    ],
    isMostPopular: false
  },
  {
    service: "Branding & UI/UX",
    description: "Creative branding solutions and user-focused digital design.",
    subServices: [
      "Brand Identity & Strategy",
      "Logo & Style Guides",
      "User Interface (UI) Design",
      "User Experience (UX) Prototyping",
      "Motion Graphics & Animations",
      "Design System Creation",
      "Interactive Mockups & Wireframing"
    ],
    isMostPopular: false
  },
];


const faqs = [
    {
        question : "What is XOLARIE?",
        answer : "XOLARIE is a next-generation technology studio engineering intelligent digital systems, scalable software, and future-ready products. We operate at the intersection of innovation, automation, and performance."
    },
    {
        question : "What solutions does XOLARIE build?",
        answer : "We design and develop advanced web and mobile applications, product designs, blockchain and decentralized systems, AI-powered systems, automation frameworks, and digital infrastructures built for speed, security, and scalability."
    },
    {
        question : "What technologies do you use?",
        answer : "Our stack includes modern frameworks and tools such as JavaScript/TypeScript, React, Next.js, Nuxt.js, Angular.js Vue.js, Nest.js, Node.js, Python, Flask, Django, cloud services, automation tools, and AI-driven systems. Technology selection is always based on performance, security, and long-term scalability."
    },
    {
        question : "Do you offer custom software development?",
        answer : "Yes. Every solution we build is tailored to your specific business goals, technical requirements, and scalability needs. We do not use one-size-fits-all templates."
    },
    {
        question : "Who is XOLARIE built for?",
        answer : "Startups, creators, enterprises, businesses, organizations and innovators seeking cutting-edge digital solutions that go beyond conventional development."
    },
    {
        question : "How does XOLARIE approach development?",
        answer : "We engineer with precision — combining clean architecture, performance optimization, and forward-thinking design. Every solution is built for longevity, scalability, and seamless user experience."
    },
    {
        question : "How do I start working with XOLARIE?",
        answer : "Initiate contact through our platform. We analyze your vision, design a strategic roadmap, and engineer a solution tailored to your goals."
    },
]

const testimonials = [
    {
        name : "Clarke Ward",
        company : "CEO, Techcorp",
        testimonial : "“Xolarie transformed our vision into a stunning reality. Their team delivered a web platform that not only looks beautiful but performs flawlessly. Our user engagement increased by 200% in the first month.”",
        star : 5,
        pics : "/images/clerk.png"
    },
    {
        name : "Ward",
        company : "CEO",
        testimonial : "“Their team delivered a web platform that not only looks beautiful but performs flawlessly. Our user engagement increased by 200% in the first month.”",
        star : 4,
        pics : "/images/clerk.png"
    },
    {
        name : "Clarke",
        company : "Techcorp",
        testimonial : "“Our user engagement increased by 200% in the first month.”",
        star : 5,
       pics : "/images/clerk.png"
    },
]

const footersLinks = [
    {
        name : "Services",
        link : ["Web Development", "App Development", "UI/UX Design", "AI & Automation", "Game Development", "Backend Systems"],
    },
    {
        name : "Solutions",
        link : ["E-commerce", "Saas Products", "Mobile App", "Enterprise Solutions", "Consulting"],
    },
    {
        name : "Company",
        link : ["About Us", "Our Works", "Careers", "Blogs", "Contact"],
    },
    // {
    //     name : "Follow Us",
    //     link : [],
    // },
]

const aboutContents = [
    {
        title: "Who We Are",
        content: ["Xolarie is a collective of engineers, designers, and problem-solvers driven by a shared passion for technology. We think deeply about how systems work, how users interact with them, and how technology can be applied thoughtfully to create lasting value. ",
        "While we collaborate with businesses and organizations, our identity is rooted in building technology that stands on its own well-architected, user-focused, and future-ready."]
    },
    {
        title: "What We Do",
        content: ["We design, build, and evolve technology across multiple domains.",
            "From scalable software and digital products to internal systems. ",
            "Our work blends thoughtful UI UX with strong product thinking. ",
            "We focus on intelligent integrations, performance, and security.Every build is approached with care, clarity, and discipline."]
    },
    {
        title: "Our Mission",
        content: ["Our mission is to create purposeful, scalable, and accessible technology.",
            "We design solutions that help people build, interact, and grow in a digital world. ",
            "Our work focuses on clarity, usability, and long-term value.",
            "We build systems that solve real problems today while remaining flexible for tomorrow. Technology, to us, is a tool for progress, not complexity."]
    },
    {
        title: "Our Vision",
        content: ["Our vision is to build Xolarie into a globally respected technology brand.",
            "We aim to be known for smart, reliable, and forward-looking digital solutions. ",
            "We believe technology should be thoughtfully designed and responsibly built. ",
            "Our goal is to use technology as a tool for progress across industries and communities."]
    },
    {
        title: "Our Approach",
        content: ["Our approach is grounded in engineering discipline, design thinking, and collaboration. We take time to deeply understand the problem before building solutions. ",
            "Our process prioritizes intentional planning, system thinking, and user-centered design.We write clean, scalable, and maintainable code that supports long-term growth. ",
            "This allows us to build technology that lasts, scales, and evolves with ease."]
    },
    {
        title: "Why Xolarie",
        content: ["Xolarie is more than a development studio. We are a technology partner with a strong product mindset. ",
        "Our work is guided by deep systems thinking and high engineering and design standards. We build scalable, maintainable solutions with long-term value in mind.","Every decision is driven by how the technology will perform, grow, and endure."]
    },
]

export { navDatas, servicesData, trustedCompany, process, projects, homeServices, faqs, testimonials, footersLinks, aboutContents };
