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
        question: "What is XOLARIE?",
        answer: "XOLARIE is a next-generation technology studio engineering intelligent digital systems, scalable software, and future-ready products. We operate at the intersection of innovation, automation, and performance."
    },
    {
        question: "What solutions does XOLARIE build?",
        answer: "We design and develop advanced web and mobile applications, product designs, blockchain and decentralized systems, AI-powered systems, automation frameworks, and digital infrastructures built for speed, security, and scalability."
    },
    {
        question: "What technologies do you use?",
        answer: "Our stack includes modern frameworks and tools such as JavaScript/TypeScript, React, Next.js, Nuxt.js, Angular.js Vue.js, Nest.js, Node.js, Python, Flask, Django, cloud services, automation tools, and AI-driven systems. Technology selection is always based on performance, security, and long-term scalability."
    },
    {
        question: "Do you offer custom software development?",
        answer: "Yes. Every solution we build is tailored to your specific business goals, technical requirements, and scalability needs. We do not use one-size-fits-all templates."
    },
    {
        question: "Who is XOLARIE built for?",
        answer: "Startups, creators, enterprises, businesses, organizations and innovators seeking cutting-edge digital solutions that go beyond conventional development."
    },
    {
        question: "How does XOLARIE approach development?",
        answer: "We engineer with precision — combining clean architecture, performance optimization, and forward-thinking design. Every solution is built for longevity, scalability, and seamless user experience."
    },
    {
        question: "How do I start working with XOLARIE?",
        answer: "Initiate contact through our platform. We analyze your vision, design a strategic roadmap, and engineer a solution tailored to your goals."
    },
]

const testimonials = [
    {
        name: "Clarke Ward",
        company: "CEO, Techcorp",
        testimonial: "“Xolarie transformed our vision into a stunning reality. Their team delivered a web platform that not only looks beautiful but performs flawlessly. Our user engagement increased by 200% in the first month.”",
        star: 5,
        pics: "/images/clerk.png"
    },
    {
        name: "Ward",
        company: "CEO",
        testimonial: "“Their team delivered a web platform that not only looks beautiful but performs flawlessly. Our user engagement increased by 200% in the first month.”",
        star: 4,
        pics: "/images/clerk.png"
    },
    {
        name: "Clarke",
        company: "Techcorp",
        testimonial: "“Our user engagement increased by 200% in the first month.”",
        star: 5,
        pics: "/images/clerk.png"
    },
]

const footersLinks = [
    {
        name: "Services",
        link: ["Web Development", "App Development", "UI/UX Design", "AI & Automation", "Game Development", "Backend Systems"],
    },
    {
        name: "Solutions",
        link: ["E-commerce", "Saas Products", "Mobile App", "Enterprise Solutions", "Consulting"],
    },
    {
        name: "Company",
        link: ["About Us", "Our Works", "Careers", "Blogs", "Contact"],
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
            "Our work is guided by deep systems thinking and high engineering and design standards. We build scalable, maintainable solutions with long-term value in mind.", "Every decision is driven by how the technology will perform, grow, and endure."]
    },
]

const TeamMembers = [
    {
        name: "Salman Khan",
        role: "Founder and CEO of Khan Academy",
        image: "/images/aboutImg.png",
        description: "Salman Amin Khan (born 11 October 1976), known as Sal Khan, is a Bangladeshi-American educator and the founder of Khan Academy"
    },
    {
        name: "Salman Khan",
        role: "Founder and CEO of Khan Academy",
        image: "/images/aboutImg.png",
        description: "Salman Amin Khan (born 11 October 1976), known as Sal Khan, is a Bangladeshi-American educator and the founder of Khan Academy"
    },
    {
        name: "Salman Khan",
        role: "Founder and CEO of Khan Academy",
        image: "/images/aboutImg.png",
        description: "Salman Amin Khan (born 11 October 1976), known as Sal Khan, is a Bangladeshi-American educator and the founder of Khan Academy"
    },
    {
        name: "Salman Khan",
        role: "Founder and CEO of Khan Academy",
        image: "/images/aboutImg.png",
        description: "Salman Amin Khan (born 11 October 1976), known as Sal Khan, is a Bangladeshi-American educator and the founder of Khan Academy"
    },
    {
        name: "Salman Khan",
        role: "Founder and CEO of Khan Academy",
        image: "/images/aboutImg.png",
        description: "Salman Amin Khan (born 11 October 1976), known as Sal Khan, is a Bangladeshi-American educator and the founder of Khan Academy"
    },
    {
        name: "Salman Khan",
        role: "Founder and CEO of Khan Academy",
        image: "/images/aboutImg.png",
        description: "Salman Amin Khan (born 11 October 1976), known as Sal Khan, is a Bangladeshi-American educator and the founder of Khan Academy"
    },
]

const whyChooseList = [
    {
        title: "Engineered for Scalability",
        desc: "Built to grow with your business, handling increased traffic and features without performance degradation.",
        icon: "/images/arrow.png",
    },
    {
        title: "Performance First Architecture",
        desc: "Lightning-fast load times and optimal user experience through cutting-edge optimization techniques.",
        icon: "/images/Vector.png",
    },
    {
        title: "Security Built in",
        desc: "Enterprise-grade security measures protect your data and users from the ground up.",
        icon: "/images/security.png",
    },
    {
        title: "Long term growth focus",
        desc: "Clean, documented code and modern tech stack ensure easy maintenance and future enhancements.",
        icon: "/images/source-code.png",
    },
]


const webDevelopmentContent = {
    h_span1: "High Performance",
    h_span2: "Web Solutions",
    h_span3: "Built to scale",
    h_desc: "We design and develop secure, fast, and future-ready websites and web applications engineered for long-term business growth.",
    h_list: ["Built for scalability and performance", "Clean architecture and secure infrastructure", "Optimized for conversions and business impact"],
    h_from: "web development",
    h_img: "/images/web_dev_img.png",

    sec_2_span1: "What We",
    sec_2_span2: "Build",
    sec_2_desc: "Tailored web solutions for startups, enterprises, and growing businesses.",
    sec_2_list: [
        {
            title: "Business & Corporate websites",
            desc: "Professional web presence designed to build credibility and drive leads for your brand.",
            img: "/images/web.png"
        },
        {
            title: "3D Interactive Websites",
            desc: "Immersive web experiences with 3D elements that captivate and engage your audience.",
            img: "/images/3d_web.png"
        },
        {
            title: "Progressive Web Apps (PWA)",
            desc: "Immersive web experiences with 3D elements that captivate and engage your audience.",
            img: "/images/web2.png"
        },
        {
            title: "Single Page Applications (SPA)",
            desc: "Lightning-fast, dynamic web apps with seamless user interactions and smooth navigation.",
            img: "/images/3d_web2.png"
        },
        {
            title: "Web3 Websites",
            desc: "Blockchain-integrated platforms for NFTs, DeFi, and decentralized applications.",
            img: "/images/web3.png"
        },
        {
            title: "E-commerce Platforms",
            desc: "Conversion-optimized online stores with secure payments and inventory management.",
            img: "/images/3d_web3.png"
        },
        {
            title: "Custom CMS Development",
            desc: "Tailored content management systems that empower your team to manage content easily.",
            img: "/images/web4.png"
        },
        {
            title: "Performance & SEO Optimization",
            desc: "Technical optimization to boost speed, search rankings, and overall user experience.",
            img: "/images/3d_web4.png"
        },
    ],

    sec_3_span1: "Our Proven",
    sec_3_span2: "Development",
    sec_3_span3: "Process",
    sec_3_desc: "Structured. Transparent. Built for results.",
    sec_3_list: [
        {
            title: "Requirement Analysis & Technical Planning",
            description: "We deeply understand your goals, audience, and technical needs to create a strategic roadmap aligned with your business objectives.",
        },
        {
            title: "UI/UX Design & Prototyping",
            description: "Our designers craft intuitive, conversion-focused interfaces with interactive prototypes for your feedback and validation.",
        },
        {
            title: "Clean, Modular Development",
            description: "We build scalable, maintainable code using modern frameworks and best practices for long-term growth and flexibility.",
        },
        {
            title: "Rigorous Testing & Optimization",
            description: "Comprehensive quality assurance across devices and browsers ensures flawless performance before launch.",
        },
        {
            title: "Deployment & Ongoing Support",
            description: "Seamless launch with continuous monitoring, updates, and technical support to keep your platform running smoothly.",
        },
    ],


}

const appDevelopmentContents = {
    h_span1: "SMART MOBILE",
    h_span2: "APPS BUILT",
    h_span3: "FOR REAL USER IMPACT AND GROWTH ",
    h_desc: "We create fast, reliable mobile applications designed to deliver great user experiences and support your product as it grows.",
    h_list: [
        "Built for performance across all devices",
        "Seamless and intuitive user experiences",
        "Designed to support long-term product growth",
    ],
    h_from: "",
    h_img: "/images/app_img.png",

    sec_2_span1: "OUR APP ",
    sec_2_span2: "CAPABILITIES",
    sec_2_desc: "Custom mobile solutions for startups, enterprises, and growing businesses.",
    sec_2_list: [
        {
            title: "Android App Development",
            desc: "High-quality Android applications designed for performance, reliability, and built to perform smoothly across a wide range of devices",
            img: ""
        },
        {
            title: "iOS App Development",
            desc: "Smooth, secure iOS applications built to meet modern design, performance standards and user satisfaction",
            img: ""
        },
        {
            title: "Cross-Platform Applications",
            desc: "Apps built to run seamlessly on both Android and iOS using a single, efficient codebase",
            img: ""
        },
        {
            title: "Augmented Reality (AR) Apps",
            desc: "Interactive applications that enhance user engagement through immersive digital experiences",
            img: ""
        },
        {
            title: "Mobile Game Development",
            desc: "Engaging mobile games with smooth performance, intuitive controls, and strong user retention ",
            img: ""
        },
        {
            title: "UI/UX Optimized Apps",
            desc: "Apps built with clear navigation and intuitive interactions for better usability",
            img: ""
        },
        {
            title: "App Store Deployment & Maintenance",
            desc: "End-to-end support for launching, updating, and maintaining your app across app stores",
            img: ""
        },
    ],

    sec_3_span1: "HOW WE",
    sec_3_span2: "BUILD",
    sec_3_span3: "YOUR APP",
    sec_3_desc: "Structured. Transparent. Built for results.",
    sec_3_list: [
        {
            title: "Discovery & Product Planning",
            description: "We define your app’s goals, features, and user experience before development begins"
        },
        {
            title: "Design & Prototyping",
            description: "We design clean interfaces and interactive prototypes to shape the user experience "
        },
        {
            title: "Development",
            description: "We build your app using modern, reliable development approaches"
        },
        {
            title: "Testing & Optimization",
            description: "We ensure your app works smoothly across devices and environments"
        },
        {
            title: "Launch & Continuous Support",
            description: "We handle deployment and provide ongoing updates and technical support for it’s growth"
        },
    ]

}

const backendDevelopmentContents = {
    h_span1: "STRONG BACKEND",
    h_span2: "SYSTEMS BUILT FOR",
    h_span3: "PERFORMANCE AND RELIABILITY",
    h_desc: "We design and develop reliable backend systems and database infrastructures that power your applications, handle your data securely, and support your product as it grows.",
    h_list: [
        "Built for stability and high performance",
        "Secure systems designed to protect your data",
        "Scalable architecture ready for growth",
    ],
    h_from: "",
    h_img: "/images/backend_img.png",

    sec_2_span1: "OUR BACKEND",
    sec_2_span2: "CAPABILITIES",
    sec_2_desc: "Reliable backend and database solutions for startups, enterprises, and growing digital products.",
    sec_2_list: [
        {
            title: "API Development & Integration",
            desc: "Secure and efficient systems that allow your applications and platforms to communicate smoothly and reliably.",
            img: ""
        },
        {
            title: "Backend System architecture",
            desc: "Well-structured systems designed to handle logic, processes, and data flow efficiently as your product grows.",
            img: ""
        },
        {
            title: "Database Design & Management",
            desc: "Optimized data systems built for speed, reliability, and efficient storage and retrieval",
            img: ""
        },
        {
            title: "Authentication & Authorization Systems",
            desc: "Secure user access systems that protect data and ensure controlled permissions.",
            img: ""
        },
        {
            title: "Cloud Integration & Server Infrastructure",
            desc: "Cloud-based systems designed for availability, flexibility, and long-term scalability.",
            img: ""
        },
        {
            title: "Realtime Systems",
            desc: "Backend systems that support live updates, messaging, and real-time interactions. ",
            img: ""
        },
        {
            title: "Performance & Security Optimization",
            desc: "Improvements that enhance system speed, stability, and protection against potential vulnerabilities",
            img: ""
        },
    ],

    sec_3_span1: "HOW WE",
    sec_3_span2: "BUILD YOUR",
    sec_3_span3: "BACKEND SYSTEM",
    sec_3_desc: "Structured. Transparent. Built for results.",
    sec_3_list: [
        {
            title: "System Planning & Architecture",
            description: "We define the structure, logic, and technical approach for your backend system."
        },
        {
            title: "Database Design",
            description: "We structure your data for efficiency, speed, and long-term reliability."
        },
        {
            title: "Backend Development",
            description: "We build secure and maintainable systems using modern development practices."
        },
        {
            title: "Testing and Optimization",
            description: "We ensure your system performs reliably under different conditions."
        },
        {
            title: "Deployment and Monitoring",
            description: "We handle launch, monitoring, and ongoing improvements to keep your system running smoothly."
        },
    ]
}

const uiuxDesignContent = {
    h_span1: "INTUITIVE",
    h_span2: "UI/UX DESIGN",
    h_span3: "BUILT FOR REAL USER EXPERIENCE",
    h_desc: "We design user-centered digital experiences that are intuitive, engaging, and optimized to improve usability, satisfaction, and conversion.",
    h_list: [
        "User-first design focused on real interactions",
        "Clean, modern, and scalable design systems",
        "Optimized for usability and engagement",
    ],
    h_from: "uiux design",
    h_img: "/images/uiux_img.png",

    sec_2_span1: "WHAT WE",
    sec_2_span2: "DESIGN",
    sec_2_desc: "Creative and functional design solutions for digital products and platforms.",
    sec_2_list: [
        {
            title: "Web & App UI Design",
            desc: "Clean and modern interfaces designed for usability, clarity, and engagement.",
            img: "/images/ui1.png"
        },
        {
            title: "User Experience (UX) Design",
            desc: "Structured user journeys and flows that ensure smooth and intuitive interactions.",
            img: "/images/ui2.png"
        },
        {
            title: "Wireframing & Prototyping",
            desc: "Interactive prototypes that visualize product functionality before development.",
            img: "/images/ui3.png"
        },
        {
            title: "Design Systems",
            desc: "Consistent design frameworks that scale across your entire product ecosystem.",
            img: "/images/ui4.png"
        },
        {
            title: "UX Research & Testing",
            desc: "Data-driven insights and usability testing to refine user experience.",
            img: "/images/ui5.png"
        },
    ],

    sec_3_span1: "OUR DESIGN",
    sec_3_span2: "PROCESS",
    sec_3_span3: "FLOW",
    sec_3_desc: "Structured. User-focused. Result-driven.",
    sec_3_list: [
        {
            title: "User Research & Analysis",
            description: "We study your users, competitors, and goals to define the right design direction."
        },
        {
            title: "Wireframing & Concept Design",
            description: "We map out layouts and flows to establish structure and usability."
        },
        {
            title: "UI Design & Prototyping",
            description: "We create visually engaging interfaces with interactive prototypes."
        },
        {
            title: "Testing & Refinement",
            description: "We test designs with real users and refine for optimal experience."
        },
        {
            title: "Handoff & Design Support",
            description: "We deliver developer-ready assets and support implementation."
        },
    ]
}

const gameDevelopmentContent = {
    h_span1: "IMMERSIVE",
    h_span2: "GAME DEVELOPMENT",
    h_span3: "BUILT FOR ENGAGEMENT",
    h_desc: "We create interactive and engaging games with smooth performance, captivating visuals, and strong user retention strategies.",
    h_list: [
        "Optimized for performance and scalability",
        "Engaging gameplay and immersive design",
        "Built for long-term player retention",
    ],
    h_from: "game development",
    h_img: "/images/game_img.png",

    sec_2_span1: "WHAT WE",
    sec_2_span2: "BUILD",
    sec_2_desc: "Interactive gaming solutions across platforms and genres.",
    sec_2_list: [
        {
            title: "Mobile Game Development",
            desc: "High-performance mobile games with smooth controls and engaging mechanics.",
            img: "/images/game1.png"
        },
        {
            title: "3D & 2D Games",
            desc: "Visually rich 2D and 3D games designed for immersive experiences.",
            img: "/images/game2.png"
        },
        {
            title: "Multiplayer Games",
            desc: "Real-time multiplayer systems with seamless online interactions.",
            img: "/images/game3.png"
        },
        {
            title: "Game UI/UX Design",
            desc: "User-friendly interfaces that enhance gameplay experience.",
            img: "/images/game4.png"
        },
        {
            title: "Game Optimization",
            desc: "Performance tuning for smooth gameplay across devices.",
            img: "/images/game5.png"
        },
    ],

    sec_3_span1: "HOW WE",
    sec_3_span2: "BUILD",
    sec_3_span3: "GAMES",
    sec_3_desc: "Creative. Technical. Engaging.",
    sec_3_list: [
        {
            title: "Concept & Game Design",
            description: "We define gameplay mechanics, story, and user engagement strategies."
        },
        {
            title: "Prototyping",
            description: "We create early versions to validate gameplay and experience."
        },
        {
            title: "Game Development",
            description: "We build using modern engines and optimized frameworks."
        },
        {
            title: "Testing & Balancing",
            description: "We refine gameplay mechanics and fix performance issues."
        },
        {
            title: "Launch & Updates",
            description: "We deploy and continuously improve the game experience."
        },
    ]
}

const animationContent = {
    h_span1: "CREATIVE",
    h_span2: "ANIMATION",
    h_span3: "THAT TELLS YOUR STORY",
    h_desc: "We create high-quality animations that bring ideas to life, enhance storytelling, and engage your audience visually.",
    h_list: [
        "High-quality visual storytelling",
        "Creative and engaging motion design",
        "Optimized for digital platforms",
    ],
    h_from: "animation",
    h_img: "/images/animation_img.png",

    sec_2_span1: "OUR",
    sec_2_span2: "ANIMATION SERVICES",
    sec_2_desc: "Creative animation solutions for brands, products, and digital content.",
    sec_2_list: [
        {
            title: "2D Animation",
            desc: "Clean and engaging 2D animations for storytelling and branding.",
            img: "/images/anim1.png"
        },
        {
            title: "3D Animation",
            desc: "Realistic and immersive 3D animations for advanced visual experiences.",
            img: "/images/anim2.png"
        },
        {
            title: "Motion Graphics",
            desc: "Dynamic visuals for marketing, presentations, and digital platforms.",
            img: "/images/anim3.png"
        },
        {
            title: "Product Animation",
            desc: "Detailed animations showcasing product features and functionality.",
            img: "/images/anim4.png"
        },
        {
            title: "Explainer Videos",
            desc: "Simplified animated videos to communicate complex ideas clearly.",
            img: "/images/anim5.png"
        },
    ],

    sec_3_span1: "OUR",
    sec_3_span2: "ANIMATION",
    sec_3_span3: "PROCESS",
    sec_3_desc: "Creative. Structured. Impactful.",
    sec_3_list: [
        {
            title: "Concept & Storyboarding",
            description: "We define the message, style, and visual flow."
        },
        {
            title: "Design & Asset Creation",
            description: "We create visual elements and animation assets."
        },
        {
            title: "Animation Production",
            description: "We bring designs to life with smooth motion and transitions."
        },
        {
            title: "Review & Refinement",
            description: "We refine animations based on feedback."
        },
        {
            title: "Final Delivery",
            description: "We deliver optimized files ready for use."
        },
    ]
}

const aiRoboticsContent = {
    h_span1: "INTELLIGENT",
    h_span2: "AI & ROBOTICS",
    h_span3: "POWERING SMART SYSTEMS",
    h_desc: "We develop intelligent systems and automation solutions using AI and robotics to improve efficiency, decision-making, and innovation.",
    h_list: [
        "AI-powered automation and insights",
        "Smart systems for real-world applications",
        "Scalable and future-ready solutions",
    ],
    h_from: "ai & robotics",
    h_img: "/images/ai_img.png",

    sec_2_span1: "OUR",
    sec_2_span2: "SOLUTIONS",
    sec_2_desc: "Advanced AI and robotics solutions for modern businesses and industries.",
    sec_2_list: [
        {
            title: "Machine Learning Systems",
            desc: "AI models that learn from data to improve performance and predictions.",
            img: "/images/ai1.png"
        },
        {
            title: "Automation Systems",
            desc: "Intelligent automation to streamline operations and reduce manual work.",
            img: "/images/ai2.png"
        },
        {
            title: "Computer Vision",
            desc: "Image and video processing systems for detection and analysis.",
            img: "/images/ai3.png"
        },
        {
            title: "Robotics Integration",
            desc: "Smart robotics systems for industrial and real-world applications.",
            img: "/images/ai4.png"
        },
        {
            title: "AI Chatbots & Assistants",
            desc: "Conversational AI systems for customer support and engagement.",
            img: "/images/ai5.png"
        },
    ],

    sec_3_span1: "HOW WE",
    sec_3_span2: "BUILD",
    sec_3_span3: "INTELLIGENT SYSTEMS",
    sec_3_desc: "Innovative. Scalable. Efficient.",
    sec_3_list: [
        {
            title: "Problem Analysis",
            description: "We define the problem and identify AI opportunities."
        },
        {
            title: "Data Collection & Preparation",
            description: "We gather and structure data for training models."
        },
        {
            title: "Model Development",
            description: "We build and train intelligent algorithms."
        },
        {
            title: "Integration & Testing",
            description: "We integrate systems into real-world applications."
        },
        {
            title: "Deployment & Optimization",
            description: "We deploy and continuously improve system performance."
        },
    ]
}

const projectManagementContent = {
    h_span1: "EFFICIENT",
    h_span2: "PROJECT MANAGEMENT",
    h_span3: "DELIVERED WITH PRECISION",
    h_desc: "We manage projects with structured planning, clear communication, and efficient execution to ensure timely and successful delivery.",
    h_list: [
        "Clear planning and execution strategy",
        "Transparent communication and tracking",
        "Focused on timely delivery and quality",
    ],
    h_from: "project management",
    h_img: "/images/pm_img.png",

    sec_2_span1: "WHAT WE",
    sec_2_span2: "MANAGE",
    sec_2_desc: "Structured project management solutions for digital and technical projects.",
    sec_2_list: [
        {
            title: "Agile Project Management",
            desc: "Flexible and iterative project execution for fast-moving environments.",
            img: "/images/pm1.png"
        },
        {
            title: "Product Development Management",
            desc: "End-to-end management from idea to final product delivery.",
            img: "/images/pm2.png"
        },
        {
            title: "Team Coordination",
            desc: "Efficient collaboration between teams, stakeholders, and developers.",
            img: "/images/pm3.png"
        },
        {
            title: "Task & Workflow Management",
            desc: "Structured task tracking and workflow optimization.",
            img: "/images/pm4.png"
        },
        {
            title: "Performance Tracking & Reporting",
            desc: "Real-time insights into project progress and performance.",
            img: "/images/pm5.png"
        },
    ],

    sec_3_span1: "OUR",
    sec_3_span2: "PROJECT",
    sec_3_span3: "WORKFLOW",
    sec_3_desc: "Organized. Transparent. Result-driven.",
    sec_3_list: [
        {
            title: "Planning & Strategy",
            description: "We define scope, goals, and timelines clearly."
        },
        {
            title: "Task Breakdown",
            description: "We divide the project into manageable tasks."
        },
        {
            title: "Execution",
            description: "We coordinate teams and ensure smooth progress."
        },
        {
            title: "Monitoring & Reporting",
            description: "We track progress and communicate updates."
        },
        {
            title: "Delivery & Evaluation",
            description: "We deliver and analyze project success."
        },
    ]
}

const customSoftwareSolutionsContent = {
    h_span1: "TAILORED",
    h_span2: "SOFTWARE SYSTEMS",
    h_span3: "BUILT AROUND YOUR OPERATIONS",
    h_desc: "We design and engineer custom software systems that align precisely with your business logic—eliminating inefficiencies, streamlining workflows, and enabling scalable digital operations.",
    h_list: [
        "Engineered around your exact business processes",
        "Modular systems designed for long-term scalability",
        "Focused on performance, reliability, and operational clarity",
    ],
    h_from: "custom software solutions",
    h_img: "/images/custom_software.png",

    sec_2_span1: "WHAT WE",
    sec_2_span2: "ENGINEER",
    sec_2_desc: "Purpose-built software systems designed to support complex business operations.",
    sec_2_list: [
        {
            title: "Operational Software Systems",
            desc: "Custom-built platforms that structure, automate, and optimize your internal business processes.",
            img: "/images/software1.png"
        },
        {
            title: "Enterprise Dashboards & Control Panels",
            desc: "Centralized interfaces that give you real-time visibility and control over critical operations.",
            img: "/images/software2.png"
        },
        {
            title: "Custom Web Platforms",
            desc: "Robust, scalable web-based systems tailored to your product, users, and workflows.",
            img: "/images/software3.png"
        },
        {
            title: "Client & Partner Portals",
            desc: "Secure, user-focused portals designed to enhance collaboration, access, and communication.",
            img: "/images/software4.png"
        },
        {
            title: "Workflow Automation Systems",
            desc: "Intelligent systems that eliminate repetitive tasks and increase operational efficiency.",
            img: "/images/software5.png"
        },
        {
            title: "Analytics & Reporting Platforms",
            desc: "Data-driven systems that transform raw information into actionable insights.",
            img: "/images/software6.png"
        },
        {
            title: "Legacy System Transformation",
            desc: "Modernizing outdated systems into scalable, high-performance digital infrastructure.",
            img: "/images/software7.png"
        },
    ],

    sec_3_span1: "OUR APPROACH",
    sec_3_span2: "TO BUILDING",
    sec_3_span3: "CUSTOM SYSTEMS",
    sec_3_desc: "Strategic. Structured. Built for real-world execution.",
    sec_3_list: [
        {
            title: "Operational Analysis",
            description: "We map your workflows, bottlenecks, and system requirements in detail."
        },
        {
            title: "System Architecture Design",
            description: "We design scalable, modular systems aligned with your long-term goals."
        },
        {
            title: "Engineering & Development",
            description: "We build clean, maintainable systems using modern technologies and best practices."
        },
        {
            title: "Testing & System Validation",
            description: "We rigorously test performance, security, and reliability across real scenarios."
        },
        {
            title: "Deployment & Continuous Evolution",
            description: "We launch, monitor, and continuously refine your system as your business grows."
        },
    ]
}

const ecommercePlatformsContent = {
    h_span1: "HIGH-CONVERSION",
    h_span2: "E-COMMERCE",
    h_span3: "PLATFORMS BUILT TO SCALE",
    h_desc: "We design and develop e-commerce platforms that combine seamless user experience, secure infrastructure, and performance optimization to drive consistent growth and revenue.",
    h_list: [
        "Optimized for conversion and user experience",
        "Secure, scalable commerce infrastructure",
        "Built to support high traffic and growth",
    ],
    h_from: "e-commerce platforms",
    h_img: "/images/ecommerce.png",

    sec_2_span1: "WHAT WE",
    sec_2_span2: "DELIVER",
    sec_2_desc: "E-commerce systems engineered for performance, scalability, and revenue growth.",
    sec_2_list: [
        {
            title: "Custom Commerce Platforms",
            desc: "Fully tailored online stores designed around your products, audience, and growth strategy.",
            img: "/images/ecom1.png"
        },
        {
            title: "Conversion-Focused Checkout Systems",
            desc: "Streamlined checkout experiences designed to reduce friction and maximize sales.",
            img: "/images/ecom2.png"
        },
        {
            title: "Secure Payment Integrations",
            desc: "Reliable payment systems built for trust, security, and global transactions.",
            img: "/images/ecom3.png"
        },
        {
            title: "Inventory & Fulfillment Systems",
            desc: "Backend systems that simplify inventory tracking, orders, and logistics management.",
            img: "/images/ecom4.png"
        },
        {
            title: "Multi-Vendor Marketplaces",
            desc: "Scalable platforms supporting vendors, listings, transactions, and commission systems.",
            img: "/images/ecom5.png"
        },
        {
            title: "Mobile Commerce Optimization",
            desc: "Responsive and mobile-first experiences designed for modern shopping behavior.",
            img: "/images/ecom6.png"
        },
        {
            title: "Performance & Growth Optimization",
            desc: "Continuous improvements focused on speed, UX, and revenue performance.",
            img: "/images/ecom7.png"
        },
    ],

    sec_3_span1: "HOW WE",
    sec_3_span2: "BUILD COMMERCE",
    sec_3_span3: "SYSTEMS",
    sec_3_desc: "Strategic. Data-driven. Growth-focused.",
    sec_3_list: [
        {
            title: "Business & Market Analysis",
            description: "We align your platform with your products, audience, and market strategy."
        },
        {
            title: "UX & Conversion Architecture",
            description: "We design user journeys optimized for engagement and sales."
        },
        {
            title: "Platform Engineering",
            description: "We build scalable, secure e-commerce systems tailored to your needs."
        },
        {
            title: "Testing & Performance Optimization",
            description: "We refine speed, usability, and checkout performance."
        },
        {
            title: "Launch & Continuous Growth Support",
            description: "We support your platform with ongoing improvements and scaling strategies."
        },
    ]
}

const aiPoweredAutomationContent = {
    h_span1: "INTELLIGENT",
    h_span2: "AUTOMATION SYSTEMS",
    h_span3: "POWERED BY AI",
    h_desc: "We design AI-driven automation systems that enhance decision-making, eliminate inefficiencies, and enable businesses to operate with greater speed, precision, and intelligence.",
    h_list: [
        "Reduces operational complexity and manual effort",
        "Improves accuracy and decision-making",
        "Scales seamlessly with business growth",
    ],
    h_from: "ai-powered automation",
    h_img: "/images/ai_automation.png",

    sec_2_span1: "WHAT WE",
    sec_2_span2: "AUTOMATE",
    sec_2_desc: "Advanced automation systems designed to optimize business operations and workflows.",
    sec_2_list: [
        {
            title: "Intelligent Workflow Automation",
            desc: "AI-driven systems that automate repetitive tasks and streamline operations.",
            img: "/images/ai_auto1.png"
        },
        {
            title: "Conversational AI Systems",
            desc: "Smart assistants and chatbots designed for customer interaction and support.",
            img: "/images/ai_auto2.png"
        },
        {
            title: "Predictive Analytics Systems",
            desc: "AI models that provide forecasts, recommendations, and insights for decision-making.",
            img: "/images/ai_auto3.png"
        },
        {
            title: "Data Processing Automation",
            desc: "Systems that intelligently process and manage large-scale business data.",
            img: "/images/ai_auto4.png"
        },
        {
            title: "Customer Experience Automation",
            desc: "Automation solutions that improve personalization, response time, and engagement.",
            img: "/images/ai_auto5.png"
        },
        {
            title: "Operational Monitoring Systems",
            desc: "Real-time tracking systems that detect anomalies and trigger automated responses.",
            img: "/images/ai_auto6.png"
        },
    ],

    sec_3_span1: "OUR APPROACH",
    sec_3_span2: "TO AI",
    sec_3_span3: "AUTOMATION",
    sec_3_desc: "Intelligent. Practical. Scalable.",
    sec_3_list: [
        {
            title: "Process Identification",
            description: "We identify high-impact areas where automation delivers real value."
        },
        {
            title: "Solution Architecture",
            description: "We design AI models and workflows aligned with your operations."
        },
        {
            title: "System Development",
            description: "We build reliable automation systems integrated into your environment."
        },
        {
            title: "Testing & Optimization",
            description: "We ensure accuracy, efficiency, and real-world reliability."
        },
        {
            title: "Deployment & Continuous Learning",
            description: "We deploy systems that evolve and improve over time."
        },
    ]
}

const enterpriseSystemIntegrationContent = {
    h_span1: "CONNECTED",
    h_span2: "ENTERPRISE SYSTEMS",
    h_span3: "BUILT FOR UNIFIED OPERATIONS",
    h_desc: "We integrate and unify enterprise systems to create seamless data flow, eliminate silos, and enable efficient, connected business operations at scale.",
    h_list: [
        "Eliminates disconnected systems and data silos",
        "Ensures smooth and secure data flow",
        "Built for scalability and enterprise reliability",
    ],
    h_from: "enterprise system integration",
    h_img: "/images/enterprise_integration.png",

    sec_2_span1: "WHAT WE",
    sec_2_span2: "INTEGRATE",
    sec_2_desc: "Enterprise-grade integration solutions for complex business environments.",
    sec_2_list: [
        {
            title: "API & Platform Integration",
            desc: "Seamless connections between applications, services, and business systems.",
            img: "/images/enterprise1.png"
        },
        {
            title: "ERP & CRM Synchronization",
            desc: "Unified systems that align operations, sales, and customer data.",
            img: "/images/enterprise2.png"
        },
        {
            title: "Cloud & Infrastructure Integration",
            desc: "Connecting cloud services with internal systems for flexibility and scalability.",
            img: "/images/enterprise3.png"
        },
        {
            title: "Data Synchronization Systems",
            desc: "Real-time data flow across platforms to ensure consistency and accuracy.",
            img: "/images/enterprise4.png"
        },
        {
            title: "Legacy System Integration",
            desc: "Bridging older systems with modern platforms without disrupting operations.",
            img: "/images/enterprise5.png"
        },
        {
            title: "Middleware Architecture",
            desc: "Custom integration layers that simplify complex system interactions.",
            img: "/images/enterprise6.png"
        },
    ],

    sec_3_span1: "HOW WE",
    sec_3_span2: "CONNECT",
    sec_3_span3: "SYSTEMS",
    sec_3_desc: "Structured. Secure. Enterprise-ready.",
    sec_3_list: [
        {
            title: "System Audit & Mapping",
            description: "We analyze your systems, data flows, and integration requirements."
        },
        {
            title: "Integration Architecture Design",
            description: "We define secure, scalable integration strategies."
        },
        {
            title: "Implementation & Integration",
            description: "We connect systems with minimal disruption to operations."
        },
        {
            title: "Testing & Validation",
            description: "We ensure reliability, performance, and data integrity."
        },
        {
            title: "Monitoring & Continuous Support",
            description: "We maintain and optimize your integrated ecosystem over time."
        },
    ]
}



export { navDatas, servicesData, trustedCompany, process, projects, homeServices, faqs, testimonials, footersLinks, aboutContents, TeamMembers, whyChooseList, webDevelopmentContent, appDevelopmentContents, backendDevelopmentContents, uiuxDesignContent, gameDevelopmentContent, animationContent, aiRoboticsContent, projectManagementContent, enterpriseSystemIntegrationContent, aiPoweredAutomationContent, ecommercePlatformsContent, customSoftwareSolutionsContent };
