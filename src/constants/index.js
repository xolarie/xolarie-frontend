const navDatas = [
    {page: "About Us", 
        dropdown : [
        {page: "About Us", path: "/about"}
        ]
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
    {page: "Resources",
        dropdown: [
            {page: "Blog", path: "/resources/blog"},
            {page: "Tech News & Updates", path: "/resources/tech-news"},
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
    // {page: "Hardware & Gadgets", path: "/solutions/hardware"},

];

const servicesData = [
    {
        title: "Web Development",
        description: "Build responsive, fast, and secure websites with modern technologies.",
        icon: "/images/web.png",
    },
    {
        title: "App Development",
        description: "Create powerful and intuitive mobile applications for both iOS and Android.",
        icon: "/images/app.png",
    },
    {
        title: "Backend & Database Management",
        description: "Optimize and manage your databases for performance, security, and scalability.",
        icon: "/images/backend.png",
    },
    {
        title: "UI/UX Design",
        description: "Enhance user experience through beautifully crafted designs that ensure usability and aesthetic appeal.",
        icon: "/images/uiux.png",
    },
    {
        title: "Gaming",
        description: "Develop captivating gaming experiences with cutting-edge game development technology.",
        icon: "/images/game.png",
    },
    {
        title: "Animation",
        description: "Bring your ideas to life with creative and impactful animations.",
        icon: "/images/animation.png",
    },
    {
        title: "Robotics & AI Solutions",
        description: "Harness the power of AI and robotics to automate processes and create innovative solutions.",
        icon: "/images/ai.png",
    },
    {
        title: "Project Management",
        description: "Efficiently manage projects from concept to completion with our expert guidance and tools.",
        icon: "/images/projectsmgt.png",
    },
]

const SolutionsData = [
    {
        title: "Custom Software Solutions",
        description: "Build tailor-made applications that align with your unique business needs, ensuring efficiency, flexibility, and growth.",
        image: "/images/css.jpg",
    },
    {
        title: "E-commerce Platforms ",
        description: "Launch high-performance online stores with seamless payment integration, intuitive UI/UX, and robust backend support.",
        image: "/images/ecom.jpg",
    },
    {
        title: "AI-Powered Automation",
        description: "Leverage artificial intelligence to automate workflows, enhance decision-making, and drive productivity like never before.",
        image: "/images/ai.jpg",
    },
    {
        title: "Enterprise System Integration",
        description: "Connect and streamline your enterprise applications, ensuring smooth data flow and operational efficiency.",
        image: "/images/esi.jpg",
    },
]

const teamMembers = [
    {
        name: "Mathew Solomon",
        role: "Software Engineer",
        image: "/images/solomon.png"
    },
    {
        name: "Judith Oluchi",
        role: "Backend Developer",
        image: "/images/oluchi.png"
    },
    {
        name: "Matti Nimot",
        role: "Frontend Developer",
        image: "/images/nimot.png"
    },
    {
        name: "Adegbaju Marvellous",
        role: "UI/UX Designer",
        image: "/images/marvelleous.png"
    },
    {
        name: "Olumide Ayomide",
        role: "Digital Marketting Mgr.",
        image: "/images/ayo.png"
    },
    {
        name: "Pinmiloye Daniel",
        role: "Asst. Digital Marketing Mgr.",
        image: "/images/daniel.png"
    },
    // {
    //     name: "",
    //     role: "",
    //     image: ""
    // },
    // {
    //     name: "",
    //     role: "",
    //     image: ""
    // },
    // {
    //     name: "",
    //     role: "",
    //     image: ""
    // },
]

const subWeb = [
    {
        gif: "/images/webgif1",
        content: "Custom website design and development"
    },
    {
        gif: "/images/webgif2",
        content: "Responsive UI/UX for all screen sizes"
    },
    {
        gif: "/images/webgif3",
        content: "SEO-optimized structure for better visibility"
    },
    {
        gif: "/images/webgif4",
        content: "Fast loading and secure websites"
    },
]

const subApp = [
    {
        gif: "/images/webgif4",
        content: "UI/UX design for mobile interfaces"
    },
    {
        gif: "/images/webgif4",
        content: "Native and cross-platform development (Flutter, React Native)"
    },
    {
        gif: "/images/webgif4",
        content: "Backend APIs and cloud integrati"
    },
    {
        gif: "/images/webgif4",
        content: "App store deployment & optimization"
    },
    {
        gif: "/images/webgif4",
        content: "Post-launch support & maintenance"
    },
]

const subBackend = [
    {
        gif: "/images/webgif4",
        content: "REST & GraphQL API developmen"
    },
    {
        gif: "/images/webgif4",
        content: "Secure cloud-based server deployment"
    },
    {
        gif: "/images/webgif4",
        content: "Database architecture (SQL/NoSQL)"
    },
    {
        gif: "/images/webgif4",
        content: "Data migration, backup & optimization"
    },
    {
        gif: "/images/webgif4",
        content: "Authentication & user management systems"
    },
]

const subUiux = [
    {
        gif: "/images/webgif4",
        content: "User research and persona development"
    },
    {
        gif: "/images/webgif4",
        content: "Wireframing and low-fidelity prototyping"
    },
    {
        gif: "/images/webgif4",
        content: "High-fidelity UI design with accessibility in mind"
    },
    {
        gif: "/images/webgif4",
        content: "Interactive prototyping"
    },
    {
        gif: "/images/webgif4",
        content: "Design systems and style guides"
    },
]

const subGame = [
    {
        gif: "/images/webgif4",
        content: "Concept ideation and character design"
    },
    {
        gif: "/images/webgif4",
        content: "2D/3D game development (Unity, Unreal Engine)"
    },
    {
        gif: "/images/webgif4",
        content: "Game logic, scoring, and physics integration"
    },
    {
        gif: "/images/webgif4",
        content: "Cross-platform publishing (iOS, Android, Web)"
    },
    {
        gif: "/images/webgif4",
        content: "Asset creation and sound integration"
    },
]

const subAnimation = [
    {
        gif: "/images/webgif4",
        content: "2D & 3D animation"
    },
    {
        gif: "/images/webgif4",
        content: "Motion graphics for web, apps, and videos"
    },
    {
        gif: "/images/webgif4",
        content: "Animated product explainers"
    },
    {
        gif: "/images/webgif4",
        content: "Logo and brand intro animations"
    },
    {
        gif: "/images/webgif4",
        content: "Storyboarding and script assistance"
    },
]

const subRobotics = [
    {
        gif: "/images/webgif4",
        content: "AI model development (ML, DL, NLP)"
    },
    {
        gif: "/images/webgif4",
        content: "Robotic system integration and prototyping"
    },
    {
        gif: "/images/webgif4",
        content: "Computer vision and object detection"
    },
    {
        gif: "/images/webgif4",
        content: "oT & sensor-based automation"
    },
    {
        gif: "/images/webgif4",
        content: "AI consulting for product ideas"
    },
]

const subProjectMgt = [
    {
        gif: "/images/webgif4",
        content: "Project planning and roadmap development"
    },
    {
        gif: "/images/webgif4",
        content: "Agile & Scrum project execution"
    },
    {
        gif: "/images/webgif4",
        content: "Team coordination and task tracking"
    },
    {
        gif: "/images/webgif4",
        content: "lient & stakeholder reporting"
    },
    {
        gif: "/images/webgif4",
        content: "Risk management and delivery assurance"
    },
]

export { navDatas, servicesData, SolutionsData, teamMembers, subWeb, subApp, subBackend, subUiux, subGame, subAnimation, subRobotics, subProjectMgt };
