const { v4: uuidv4 } = require("uuid");

export const NAV_LINKS = [
  { id: uuidv4(), label: "Home", href: "/" },
  { id: uuidv4(), label: "About", href: "/about-us" },
  { id: uuidv4(), label: "Products", subMenu: true },
  { id: uuidv4(), label: "Career", href: "/career" },
  { id: uuidv4(), label: "Blog", href: "/blog" },
  { id: uuidv4(), label: "Contact", href: "/contact-us" },
];

export const SUB_NAV_LINKS = [
  {
    category: "Rotary Wings",
    productLinks: [
      {
        id: uuidv4(),
        href: "/products/product/maviyom-x4",
        label: "Maviyom X4",
        description:
          "Agile and discreet, the X4 is your solution for high-definition surveillance and rapid deployment.",
        image: "/X4.webp",
      },

      {
        id: uuidv4(),
        href: "/products/product/maviyom-t-100-tethered-drone",
        label: "T-100 Tethered Drone",
        description:
          "Reliable and steady aerial oversight, providing continuous surveillance with an unwavering eye.",
        image: "/T100.webp",
      },
      {
        id: uuidv4(),
        href: "/products/product/maviyom-x8",
        label: "Maviyom X8",
        description:
          "Revolutionizing cargo delivery, the X8 brings speed and efficiency to critical logistics.",
        image: "/X8.webp",
      },

      
    ],
  },
  {
    category: "Fixed Wings",
    productLinks: [
      {
        id: uuidv4(),
        href: "/products/product/maviyom-vtol-2500-e-1",
        label: "Maviyom VTOL 2500-E",
        description:
          "Mapping and monitoring redefined,delivering expansive coverage and detailed imagery with exceptional flight endurance.",
        image: "/VTOL-2500E.webp",
      },
      {
        id: uuidv4(),
        href: "/products/product/maviyom-vtol-3800-h",
        label: "Maviyom VTOL V3800-H",
        description:
          "A hybrid UAV offering extensive range and payload capacity for in-depth aerial reconnaissance.",
        image: "/VTOL-3800H.webp",
      },
      {
        id: uuidv4(),
        href: "/products/product/maviyom-vtol-3900-h",
        label: "Maviyom VTOL 3900-H",
        description:
          "Pioneering long-duration flights for comprehensive mapping and critical data collection.",
        image: "/VTOL-3900H.webp",
      },
    ],
  },
];

export const Hero_Specs = [
  {
    id: uuidv4(),
    title: "Precision Targeting",
    desc: "50mm lens",
    info: "Capture your world with unparalleled clarity using our advanced imaging technology",
    image: "/camera_zoom_1.svg",
    bgColor: "#ffaa001c",
  },
  {
    id: uuidv4(),
    title: "Rapid Deployment",
    desc: "130 km/hr",
    info: "Experience the thrill of speed with drones designed for swift mobilization and response.",
    image: "/wing-1.svg",
    bgColor: "#f9485124",
  },
  {
    id: uuidv4(),
    title: "Enduring Performance",
    desc: "3-4 hours",
    info: "Benefit from extended flight times with our energy-efficient designs for long-lasting missions.",
    image: "/wing-2.svg",
    bgColor: "#6247fa24",
  },
];

export const whyMaviyomDetails = [
  {
    icon: "/feature-message-icon.svg",
    title: "Unparalleled Design",
    description:
      "Experience drone excellence with a design that seamlessly blends sophistication and functionality, elevating your overall user experience.",
  },
  {
    icon: "/feature-message-icon.svg",
    title: "Purposeful Engineering",
    description:
      "Our drones are meticulously crafted to tackle industry-specific challenges, providing purpose-built solutions tailored to meet your unique needs.",
  },
  {
    icon: "/feature-message-icon.svg",
    title: "Global Impact",
    description:
      "Harness the potential of our drones with a worldwide impact, contributing to positive advancements in various industries while ensuring regulatory compliance.",
  },
  {
    icon: "/feature-message-icon.svg",
    title: "Continuous Advancements",
    description:
      "Stay ahead in innovation with our commitment to continuous advancements, ensuring our drones evolve to meet the future demands of the industry.",
  },
];

// export const industries = [
//   {
//     id: uuidv4(),
//     title: "Agriculture",
//     subtitle: "Precision farming with drones.",
//     imgSrc:
//       "https://maviyom.com/wp-content/uploads/2023/07/agriculture-1024x468.png",
//   },
//   {
//     id: uuidv4(),
//     title: "Security",
//     subtitle: "Advanced surveillance systems. ",
//     imgSrc:
//       "https://maviyom.com/wp-content/uploads/2023/07/Surveillance-Security.png",
//   },
//   {
//     id: uuidv4(),
//     title: "Logistics",
//     subtitle: "Efficient delivery services.",
//     imgSrc: "https://maviyom.com/wp-content/uploads/2023/07/Logistics-1.png",
//   },
// ];

export const FOOTER_LINKS = [
  {
    title: "Products",
    links: [
      { label: "UAVs", href: "/products" },
      { label: "Career", href: "/career" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "About Maviyom", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

// export const AboutUsData = [
//   {
//     id: uuidv4(),
//     service: "#service 1",
//     title: `Where technology takes wings`,
//     subtitle: `Maviyom Aviation Pvt. Ltd. is an innovative startup dedicated to pioneering cutting-edge drone manufacturing in India.By harnessing the rapid progression in Artificial Intelligence (AI) and unmanned aerial vehicle (UAV) technology, we offer a novel approach to enhance operational efficiency, increase profitability, and create new business models. Integrating AI into our drones opens up limitless possibilities, enabling us to address complex challenges, facilitate better decision-making, and provide unique opportunities for growth and expansion across various sectors.
// `,
//     imgSrc: "/maviyom-25l-img.jpg",
//   },
//   {
//     id: uuidv4(),
//     service: "#service 2",
//     title: `Our Mission`,
//     subtitle: `Mission: Empower industries and individuals with groundbreaking UAV technology. Provide state-of-the-art solutions for effectiveness, sustainability, and security. Through accuracy and accessibility, forge pioneering UAVs for evolving industry needs.

// Collaborate with allies and educational initiatives to spark creativity, educate, and foster innovation. Facilitate humanitarian assistance, advocate for conscientious UAV use, and nurture a supportive ecosystem for ingenuity and advancement.`,
//     imgSrc: "/maviyom-25l-img.jpg",
//   },
//   {
//     id: uuidv4(),
//     service: "#service 3",
//     title: `Branding`,
//     subtitle: `We design consumer experience in a way that attracts loyalty to your brand. We understand and encompass who you are, take your unique offerings to the right people and clearly answers why consumers must choose you over the rest.`,
//     imgSrc: "/maviyom-25l-img.jpg",
//   },
//   {
//     id: uuidv4(),
//     service: "#service 4",
//     title: `Social Marketing`,
//     subtitle: `We have knowledge, tools and experiences since we have catered to many digital solutions and revolutions over the past decade. Digital and social makeovers certainly cannot be at the end of the tunnel of your growth strategy.`,
//     imgSrc: "/maviyom-25l-img.jpg",
//   },
// ];

export const GeneralUsageOfFixedWings = [
  "Monitoring, control, and measurement of mining sites and forests.",
  "Detection and measurement of irrigated agricultural areas.",
  "Detection of diseased plants and marking of infested areas on the map.",
  "Aerial control of hazard-prone regions and damage assessment.",
  "Monitoring, control, and security of oil pipelines.",
  "Monitoring, control, and security of critical civilian areas such as factories, petrochemical plants, granaries, rivers, reservoirs.",
  "Aerial monitoring and traffic control.",
  "City planning, 3D terrain modeling, orthophoto mapping, and mapping.",
  "Search and rescue missions.",
  "Determination of environmental pollution.",
  "City planning, 3D terrain modeling, orthophoto mapping, and mapping.",
  "Aerial control of disaster areas and damage assessment.",
  "Determination of coastal boundaries and marine pollution.",
  "Monitoring and damage detection of energy transmission lines.",
  "Agricultural and Municipality Usage.",
];

export const GCS_Details = [
  {
    GCS_Number: "1",
    droneSpecs: [
      { label: "Gross Weight", value: "5.98 kg" },
      { label: "Operating Temperature", value: "-20°C to +55°C" },
      {
        label: "CPU",
        value: "Intel i7 8565U (standard), Intel 10500U (upgrade for future)",
      },
      { label: "Operating System", value: "Win7/win10/Linux" },
      { label: "Serial Port", value: "RS232x3, SBUS in/out" },
      {
        label: "External Interface",
        value: "USB3.0, LAN, HDMI in, VGA out, Hi-fi",
      },
      { label: "Dimensions", value: "354mm (L) x 280mm (W) x 80mm (H)" },
      {
        label: "Display Screen",
        value:
          '13.3" 1920x1080, 1000 nit (top screen),/n 12.1" 1280x800, 1500 nit (bottom screen)',
      },
      { label: "Memory", value: "8 GB (standard), 32 GB max" },
      { label: "Storage", value: "256 GB SSD (standard), 1 TB Max." },
      {
        label: "Network Port",
        value: "WIFI/Bluetooth (standard), 4G (optional)",
      },
    ],
    images: ["/GCS_1_1.webp"], // Add image URLs or file names here
  },
  {
    GCS_Number: "2",
    droneSpecs: [
      { label: "Gross Weight", value: "0.61 kg" },
      { label: "Operation Temperature", value: "-20°C to +60°C" },
      { label: "Dimensions", value: "195mm (L) x 170mm (W) x 115mm (H)" },
      {
        label: "Display Screen",
        value: "2.8° 240x320 high brightness colorful LCD Screen",
      },
      { label: "Battery Life", value: "12 hours" },
      {
        label: "Output Channels",
        value: "26 Physical, 16 Sky Station Output Channels",
      },
    ],
    images: ["/GCS_2.webp"], // Add image URLs or file names here
  },
  {
    GCS_Number: "3",
    droneSpecs: [
      { label: "Gross Weight", value: "1.034 kg" },
      { label: "Operation Temperature", value: "-20°C to +60°C" },
      { label: "Dimensions", value: "272mm (L) x 183mm (W) x 94mm (H)" },
      {
        label: "Display Screen",
        value: "7” 1920x1200 high brightness colorful FHD Screen",
      },
      { label: "Battery Life", value: "6-12 hours" },
      { label: "Channels", value: "16 Channels" },
      { label: "Operating System", value: "Android" },
    ],
    images: ["/GCS_3.webp"], // Add image URLs or file names here
  },
  {
    GCS_Number: "4",
    droneSpecs: [
      { label: "Gross Weight", value: "3.1 kg" },
      { label: "Operation Temperature", value: "-10°C to +60°C" },
      { label: "CPU", value: "Intel i7 5th generation 5500U" },
      { label: "Operating System", value: "Win 10" },
      {
        label: "External Interface",
        value: "USB3.0, 4G card slot, LAN, Audio, Amplifier, HDMI",
      },
      { label: "Dimensions", value: "364mm (L) x 190mm (W) x 40mm (H)" },
      {
        label: "Display Screen",
        value:
          "10.1 inch + touch screen + 800cd /n sunlight readable screen 1920x1200px",
      },
      { label: "Memory", value: "8GB" },
      { label: "Storage", value: "128GB" },
      {
        label: "Network Port",
        value: "WIFI / Bluetooth(standard) 4G(optional)",
      },
    ],
    images: ["/GCS_4.webp"], // Add image URLs or file names here
  },
  // Repeat similar structures for other GCS items
];

export const TnCInfo = {
  title: "Terms and Conditions",
  info: "Welcome to Maviyom, a leading drone manufacturing and aviation company. By accessing and using our website, you agree to comply with the following Terms and Conditions:",
  sections: [
    {
      title: "Intellectual Property",
      content: [
        "All content, materials, logos, and trademarks displayed on our website are the property of Maviyom or their respective owners. You must not reproduce, distribute, modify, or use any of our intellectual property without obtaining prior written consent.",
      ],
    },
    {
      title: "Use of Website",
      content: [
        "You may use our website for personal, non-commercial purposes related to the exploration, purchase, or support of our drone products and services. Any unauthorized use or misuse of our website is strictly prohibited.",
      ],
    },
    {
      title: "Drone Operation and Safety",
      content: [
        "When operating our drones, you agree to comply with all applicable laws, regulations, and safety guidelines. This includes obtaining necessary licenses, respecting privacy, and adhering to airspace restrictions.",
        "It is your responsibility to operate our drones safely and responsibly.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "While we strive to provide accurate information, our website may contain errors or inaccuracies. We are not liable for any direct, indirect, incidental, or consequential damages arising from your use or reliance on the information provided on our website.",
        "Maviyom shall not be held responsible for any damages or losses incurred during the operation of our drones or as a result of their use.",
      ],
    },
    {
      title: "Indemnification",
      content: [
        "By using our website and services, you agree to indemnify and hold Maviyom, its affiliates, employees, and partners harmless from any claims, losses, damages, liabilities, and expenses (including legal fees) arising out of your use of our website, violation of these Terms and Conditions, or infringement of any third-party rights.",
      ],
    },
  ],
};

export const privacyInfo = {
  title: "Privacy Policy",
  info: "Maviyom, an innovative drone manufacturing and aviation company, prioritizes the privacy of your personal information. You can read this Privacy Policy to learn more about how we collect, utilize, and protect your personal information whenever you engage with our website and services. You agree to the terms of this Privacy Policy when you access or use our website.",
  sections: [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: When you engage with our website or services, we may collect personal information such as your name, email address, phone number, and shipping address. We may also collect additional information necessary for specific services or transactions.",
        "Usage Information: We may gather non-personal information about your interactions with our website, including IP address, browser type, device information, and usage patterns. This information helps us analyze and improve our website and services.",
        "Cookies: To enhance your browsing experience, we may utilize cookies and similar technologies. These cookies may collect information about your preferences, sessions, and interactions with our website.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "Personal Information: We use your personal information to fulfill orders, provide customer support, communicate important updates, and send promotional materials related to our drone products and services.",
        "Usage Information: Non-personal information is used to analyze website usage patterns, monitor website performance, and make enhancements to provide you with a seamless experience.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We employ industry-standard security measures to protect your personal information against unauthorized access, alteration, or disclosure. This includes encryption, firewalls, access controls, and regular security audits.",
        "However, please be aware that no data transmission over the internet or electronic storage method is completely secure. While we strive to protect your information, we cannot guarantee absolute security.",
      ],
    },
    {
      title: "Third-Party Websites and Services",
      content: [
        "Our website may contain links to third-party websites or services. Please note that we are not responsible for their content or privacy practices. We encourage you to review the privacy policies of these third parties before providing any personal information.",
      ],
    },
    {
      title: "Updates to the Privacy Policy",
      content: [
        "We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. By continuing to use our services after such changes, you accept and agree to the updated Privacy Policy.",
      ],
    },
  ],
};

export const allIndustries = [
  {
    id: uuidv4(),
    title: "Agriculture",
    detail:
      "Welcome to Maviyom, your trusted partner in the realm of agricultural drone technology. Our innovative lineup of drones is specifically designed to elevate farming practices, boost productivity, and promote sustainable agriculture. With a focus on efficiency, reliability, and advanced features, our drones are tailored to meet the diverse needs of modern farmers. Explore our range of drones and discover how they can revolutionize your agricultural operations",
    imageSrc: "/agriculture-industry.png",
  },
  {
    id: uuidv4(),
    title: "Surveillance & Security",
    detail:
      "Maviyom offers a diverse range of surveillance drones designed to meet the demanding needs of the security and surveillance industry. Our drones are equipped with advanced features and cutting-edge technology to ensure accurate and efficient surveillance operations. Let’s explore the specifications and applications of each drone.",
    imageSrc: "/surveillance-security-industry.png",
  },
  {
    id: uuidv4(),
    title: "Logistics",
    detail:
      "Introducing the Multi-rotor MX8, the ultimate logistics drone by Maviyom. Engineered with cutting-edge technology and designed for optimal performance, the MX8 is set to revolutionize the logistics industry. With its unrivaled capabilities and advanced features, the MX8 is poised to redefine the way goods are transported and delivered.",
    imageSrc: "/logistics-1-industry.png",
  },

  {
    id: uuidv4(),
    title: "Road Development, Management & Safety",
    detail:
      "Welcome to Maviyom, the leading provider of advanced drone solutions for road development, networking, management, and traffic control. Our range of specialized drones is designed to revolutionize the way highways and expressways are planned, monitored, and managed. Let’s explore our drones and their applications in the field",
    imageSrc: "/Road-Development-Management-Safety-1-industry.png",
  },
  {
    id: uuidv4(),
    title: "Disaster & Forest Assessment And Management",
    detail:
      "When disaster strikes, every second counts. At Maviyom, we understand the critical role that drones play in disaster assessment, control, and post-management. Our range of advanced drones is specifically designed to provide real-time data, situational awareness, and support in critical situations, enabling effective response and recovery operations.",
    imageSrc: "/Disaster-Forest-Assessment-And-Management-industry.png",
  },
  {
    id: uuidv4(),
    title: "Crowd Management & Traffic Control",
    detail:
      "At Maviyom, we recognize the critical role of drones in crowd control and management across various situations and circumstances. Our Multi-rotor MX6 drone, customized with advanced features such as sound and voice, and signal emitting equipment and devices, is specifically designed to address crowd control challenges effectively. Let’s explore the diverse applications of this drone in different scenarios",
    imageSrc: "/Crowd-Management-Traffic-Control-industry.png",
  },
];

export const IndustriesData = [
  {
    id: uuidv4(),
    imageBanner: "/agriculture-industry.png",
    title: "Agriculture",
    intro:
      "Welcome to Maviyom, your trusted partner in the realm of agricultural drone technology. Our innovative lineup of drones is specifically designed to elevate farming practices, boost productivity, and promote sustainable agriculture. With a focus on efficiency, reliability, and advanced features, our drones are tailored to meet the diverse needs of modern farmers. Explore our range of drones and discover how they can revolutionize your agricultural operations:",
    sections: [
      {
        title: "M X4: Multi-Rotor MX4 Drone",
        image: "/agriculture-industry.png", // Replace with the actual image URL
        desc: "Revolutionizing Agriculture with Precision",
        features: [
          {
            title: "Introduction",
            description:
              "Game-changing drone for surveillance, crop monitoring, and management with advanced features and cutting-edge technology.",
            shortDescription:
              "Introducing the Multi-Rotor MX4 drone, revolutionizing agriculture with advanced features and cutting-edge technology.",
          },
          {
            title: "Dual-Sensor Camera System",
            description:
              "Equipped with optical zoom (30X or 40X) and thermal cameras for comprehensive surveillance and monitoring of crop health.",
            shortDescription:
              "Advanced dual-sensor camera system for comprehensive surveillance and monitoring of crop health.",
          },
          {
            title: "Exceptional Performance",
            description:
              "Max payload 1-1.5 kg, 55-75 mins flight time, and aerodynamic design for stable and maneuverable flights, minimizing disruption to crops.",
            shortDescription:
              "Exceptional performance with max payload, extended flight time, and aerodynamic design for stable flights.",
          },
          {
            title: "Efficient Data Visualization",
            description:
              "Seamless integration with Maviyom’s Ground Station or Tablet, featuring a 7″ or 10″ display for real-time data visualization.",
            shortDescription:
              "Efficient data visualization with seamless integration and real-time display for effective crop management.",
          },
          {
            title: "Precision Agriculture Techniques",
            description:
              "Empowers precision agriculture techniques with advanced imaging, optimizing resource allocation and minimizing environmental impact.",
            shortDescription:
              "Empowers precision agriculture techniques with advanced imaging for optimized resource allocation.",
          },
          {
            title: "Setting a New Standard",
            description:
              "Sets a new standard in surveillance, crop monitoring, and management. Enhance agricultural practices, improve productivity, and unlock the full potential of your crops.",
            shortDescription:
              "Sets a new standard in surveillance, crop monitoring, and management, enhancing agricultural practices and productivity.",
          },
        ],
        specificationsList: [],
        conclusion:
          "Maviyom’s Multi-Rotor MX4 drone offers unparalleled capabilities, revolutionizing agriculture. With advanced imaging and precision features, it empowers farmers to make data-driven decisions, leading to sustainable and prosperous agricultural practices.",
      },
      {
        title: "M 25L Drone",
        image: "/agriculture-industry.png", // Replace with the actual image URL
        desc: "Efficient and Precise Agrochemical Application",
        features: [],
        specificationsList: [
          "Operating size of 2150x2100x620mm, ensuring optimal coverage and maneuverability.",
          "Folded, transportation size of 1840x480x620mm, facilitating easy transportation and storage.",
          "Maximum takeoff weight of 52Kg, enabling it to carry a substantial payload.",
          "Aircraft weight of 19Kg, ensuring stability and efficient flight performance.",
          "Aircraft agrochemical tank capacity of 25L, minimizing the need for frequent refills.",
          "Flight altitude of ≤20 meters, allowing precise and targeted spraying.",
          "Fly time of 20-25 minutes (unloaded) and 10-13 minutes (loaded), balancing speed and efficiency.",
          "Flight speed of 1-10 m/sec, ensuring thorough coverage of the agricultural area.",
          "Structural life span of ≥10 years, offering long-term reliability and durability.",
          "Spray width of 4-8 meters, maximizing productivity while minimizing waste.",
          "Adjustable spray flow of 3-10L/min with double pumps, providing precise control over chemical application.",
          "Atomization point size of 60-90μm, ensuring effective coverage and absorption.",
          "Spray efficiency of ≥10 hectares/hour, improving operational efficiency and saving time.",
          "Motor speed of 5000 rpm, delivering optimal performance for spraying applications.",
        ],
        conclusion:
          "The M 25L drone with its cutting-edge features offers efficient and precise agrochemical application, empowering farmers to optimize spraying operations and improve overall operational efficiency.",
      },
      {
        title: "M 30L Drone",
        image: "/agriculture-industry.png", // Replace with the actual image URL
        desc: "Precision and Productivity for Demanding Farming Requirements",
        features: [],
        specificationsList: [
          "Product material comprising aerospace-grade carbon fiber and aluminium, guaranteeing durability and reliability.",
          "Operating size of 2690x2620x885mm, ensuring comprehensive coverage of agricultural areas.",
          "Folded, transportation size of 1190x885x620mm, facilitating ease of transportation and storage.",
          "Maximum takeoff weight of 72Kg, enabling it to handle substantial payloads.",
          "Aircraft weight of 24Kg, ensuring stability and maneuverability during flight.",
          "Aircraft agrochemical tank capacity of 30L, reducing the need for frequent refills.",
          "Flight altitude of ≤20 meters, allowing precise and targeted spraying operations.",
          "Fly time of 20-22 minutes (unloaded) and 6-8 minutes (loaded), optimizing operational efficiency.",
          "Flight speed of 1-10 m/sec, ensuring thorough and efficient coverage.",
          "Structural life span of ≥10 years, providing long-term reliability and durability.",
          "Spray width of 6-10 meters, maximizing productivity and minimizing waste.",
          "Spray flow of 6-10L/min, delivering precise control over agrochemical application.",
          "Atomization point size of 200-500μm, ensuring effective coverage and absorption.",
          "Spray efficiency of ≥18 hectares/hour, enhancing operational productivity.",
          "Optional 40L capacity agriculture drone, providing customization options based on specific requirements.",
        ],
        conclusion:
          "The M 30L drone, with its advanced features, offers exceptional precision and productivity, setting a new standard in agricultural drone technology. Its durability, reliability, and customization options make it the ideal choice for farmers with demanding farming requirements.",
      },

      // Add more sections as needed
    ],

    // Add other data fields
  },
];

export const locations = [
  {
    title: "Head Office",
    address: "New Delhi, India",
  },
  {
    title: "Manufacturing Facility",
    address: "Haridwar, Uttarakhand ",
  },
  {
    title: "Overseas office",
    address: "Maputo, Mozambique ",
  },
];

export const camerasData = [
  {
    id: "40XZQPR02",
    type: "Daylight Camera",
    features: ["40x Optical Camera"],
  },
  {
    id: "TR50M6X512",
    type: "Thermal Camera",
    features: ["640×512 Thermal", "50mm Thermal Lens"],
  },
  {
    id: "30XL00TR25",
    type: "Daylight + Thermal Camera",
    features: [
      "30X Optical Zone",
      "640×512 Pixel Thermal",
      "25mm Thermal Lens",
    ],
  },
  {
    id: "30XL15TR19",
    type: "Daylight + Thermal + LRF Camera",
    features: ["40x Optical Camera"],
  },
  {
    id: "TR50M6X512",
    type: "Daylight + Thermal + LRF Camera",
    features: ["640×512 Thermal", "50mm Thermal Lens"],
  },
  {
    id: "30XL00TR25",
    type: "Daylight + Thermal + LRF Camera",
    features: [
      "30X Optical Zone",
      "640×512 Pixel Thermal",
      "25mm Thermal Lens",
    ],
  },
];

export const teamMembers = [
  {
    name: "Manmohan Aggarwal",
    role: "Chairman of the Board",
    description:
      "With over 27 years of experience across global markets, Mr. Manmohan Aggarwal, our Chairman, is known for his market intuition and exceptional ability to transform trends into business victories. His leadership is a cornerstone, setting our course towards remarkable achievements.",
  },
  {
    name: "Mridul Aggarwal",
    role: "CEO",
    description:
      "Mridul Aggarwal, our CEO, combines youthful energy with deep expertise in mechanical and aerospace engineering, steering Maviyom with sharp business insights and a passion for innovation that challenges the frontiers of the drone industry.",
  },
  {
    name: "Brijesh Sharma",
    role: " COO",
    description:
      "Brijesh Sharma, our COO, is a virtuoso of technology whose masterful understanding of aerospace engineering and production propels our operational excellence. His strategic and technological expertise ensures Maviyom's operations remain efficient and on the cutting edge",
  },
  {
    name: "Akshay Verma",
    role: " CTO",
    description:
      "Akshay Verma, our CTO, is at the helm of our technological strategy, integrating AI and software development with an ethical approach that guides Maviyom's responsible yet pioneering advancements in UAV technology.",
  },
];

export const droneLists = [
  {
    id: uuidv4(),

    label: "Multi-Rotor Maviyom X4",
    image: "/x4.jpg",
  },
  {
    id: uuidv4(),

    label: "Multi-Rotor Maviyom X8",
    image: "/x8.jpg",
  },
 

  {
    id: uuidv4(),

    label: "T-100 Tethered Drone",
    image: "/T100.jpg",
  },

  // vtol
  {
    id: uuidv4(),

    label: "Maviyom VTOL 2500-E",
    image: "/VTOL-2500E.jpg",
  },

  // vtol
  {
    id: uuidv4(),

    label: "Maviyom VTOL V3800-H",
    image: "/VTOL-3800H.jpg",
  },

  // vtol
  {
    id: uuidv4(),

    label: "Maviyom VTOL V3900-H",
    image: "/VTOL-3900H.jpg",
  },

  // vtol
];

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
  },
};
