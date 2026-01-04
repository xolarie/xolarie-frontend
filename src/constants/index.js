const navDatas = [
    {page: "About Us",  path: "/about"
    },
    {page: "Services",
        dropdown: [
            {page: "Web Development", path: "/services/web-development"},
            {page: "App Development", path: "/services/app-development"},
            {page: "Backend and Database Management", path: "/services/backend-development"},
            {page: "UI/UX Design", path: "/services/ui-ux"},
            {page: "Gaming", path: "/services/gaming"},
            {page: "Animations", path: "/services/animations"},
            {page: "Robotics and AI Solutions", path: "/services/robotics-ai"},
            {page: "Project management", path: "/services/project-management"},
        ]
    },
    {page: "Solutions",
        dropdown: [
            {page: "Custom Software Solutions", path: "/solutions/software"},
            {page: "E-commerce Platforms", path: "/solutions/ecommerce"},
            {page: "AI-Powered Automation", path: "/solutions/ai-automation"},
            {page: "Enterprise System Integration", path: "/solutions/enterprise"}
        ]
    },

    {page: "Insights",
        dropdown: [
            {page: "Blog", path: "/insights/blog"},
            {page: "Tech News & Updates", path: "/insights/tech-news"},
            // {page: "Open Source Projects", path: "/resources/projects"},
            // {page: "Documentation", path: "/resources/documentation"},
            // {page: "API Documentation", path: "/resources/api-documentation"}
        ]
    },
    {page: "Careers",
        dropdown: [
            {page: "Jobs Openings", path: "/careers/job-opening"},
            {page: "Internship", path: "/careers/internship"},
            {page: "Recruitment Event", path: "/careers/recruitment"},
            {page: "FAQs", path: "/careers/faqs"}
        ]
    },
            {page: "Products", path: "/products"
        // dropdown: [
        //     {page: "Explore our products", path: "/products/explore"},
        // ]
    },
            {page: "Lab", path: "/lab",
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
import { GrGamepad } from "react-icons/gr";
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
        icon: GrGamepad,
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
    "TechCorp", "StartupX", "InnovationLab", "DigitalFlow", "Cloudsync",  "Datawave"
]

import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { TiInputChecked } from "react-icons/ti";

const process = [
    {
        step : "Discovery Call",
        description : "We start a conversation to understand your vision, goals and project requirement in detail.",
        color : "#A618E3",
        icon : MdOutlinePhoneCallback,
    },
    {
        step : "Strategy & Planning",
        description : "Our team crafts a comprehensive strategy, wire-frames, and roadmap tailored to your objectives",
        color : "#FF048F",
        icon : FaRegLightbulb
    },
    {
        step : "Design & Development",
        description : "We bring your product to life with pixel-perfect design and clean, scalable code.",
        color : "#0693F7",
        icon : FaCode
    },
    {
        step : "Testing & Launch",
        description : "Rigorous testing ensures everything works flawlessly before we launch your product.",
        color : "#A618E3",
        icon : GoRocket
    },
    {
        step : "Support & Growth",
        description : "Post-launch suppor monitoring and continuous improvements to help your product thrive.",
        color : "#4846FB",
        icon : TiInputChecked
    },
]

export { navDatas, servicesData,  trustedCompany, process };
