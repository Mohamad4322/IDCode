// Case studies data for the website
export const caseStudies = [
  {
    id: 'healthcare-patient-portal',
    title: "Healthcare Patient Portal Transformation",
    slug: "healthcare-patient-portal",
    industry: "Healthcare",
    client: "Regional Medical Center",
    duration: "8 months",
    teamSize: "12 specialists",
    challenge: "The client faced significant challenges with their legacy patient management system. Patient satisfaction was declining due to cumbersome appointment scheduling, limited access to medical records, and inefficient communication channels. Staff were spending excessive time on administrative tasks, reducing their capacity for patient care.",
    solution: "We developed a comprehensive patient portal that integrated with their existing EHR system. The solution included secure patient authentication, intuitive appointment scheduling, access to medical records and test results, secure messaging with healthcare providers, prescription refill requests, and bill payment functionality. The portal was designed with a mobile-first approach to ensure accessibility across all devices.",
    results: [
      "45% increase in patient engagement",
      "60% reduction in administrative phone calls",
      "30% decrease in appointment no-shows",
      "85% patient satisfaction rating",
      "Estimated $1.2M annual cost savings"
    ],
    technologies: [
      "React", "Node.js", "MongoDB", "AWS", "FHIR API", "OAuth 2.0"
    ],
    testimonial: {
      quote: "The patient portal has transformed how we interact with our patients. The system is intuitive, secure, and has dramatically improved our operational efficiency while enhancing the patient experience.",
      author: "Dr. Sarah Johnson",
      position: "Chief Medical Officer, Regional Medical Center"
    },
    images: [
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7578794/pexels-photo-7578794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Financial Services Digital Transformation",
      path: "/case-studies/fintech-digital-transformation"
    }
  },
  {
    id: 'fintech-digital-transformation',
    title: "Financial Services Digital Transformation",
    slug: "fintech-digital-transformation",
    industry: "Fintech",
    client: "Global Financial Group",
    duration: "12 months",
    teamSize: "18 specialists",
    challenge: "The client was struggling with outdated legacy systems that were hindering their ability to compete with newer, more agile fintech companies. Their customer onboarding process was lengthy and paper-based, their mobile banking experience was subpar, and their internal operations were inefficient due to siloed data and manual processes.",
    solution: "We implemented a comprehensive digital transformation strategy that included a new cloud-based core banking system, a streamlined digital onboarding process, an enhanced mobile banking application, and automated back-office operations. The solution also included advanced data analytics capabilities to provide personalized customer insights and improve decision-making.",
    results: [
      "30% reduction in operational costs",
      "75% faster customer onboarding",
      "42% increase in mobile banking usage",
      "68% improvement in customer satisfaction scores",
      "25% increase in cross-selling opportunities"
    ],
    technologies: [
      "AWS", "Kubernetes", "React Native", "Node.js", "PostgreSQL", "TensorFlow", "Apache Kafka"
    ],
    testimonial: {
      quote: "ID Code's digital transformation strategy has revolutionized our operations and customer experience. We've seen significant improvements in efficiency, cost reduction, and customer satisfaction. Their expertise in financial technology and commitment to our success made them the ideal partner for this critical initiative.",
      author: "Jennifer Martinez",
      position: "CTO, Global Financial Group"
    },
    images: [
      "https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Government Citizen Services Portal",
      path: "/case-studies/government-portal"
    }
  },
  {
    id: 'retail-ecommerce-platform',
    title: "Retail E-commerce Platform Modernization",
    slug: "retail-ecommerce-platform",
    industry: "Retail & E-commerce",
    client: "Global Retail Chain",
    duration: "9 months",
    teamSize: "14 specialists",
    challenge: "The client was struggling with an outdated e-commerce platform that couldn't keep up with growing customer demands and increasing competition. The legacy system had poor performance during peak shopping periods, limited mobile functionality, and inadequate integration with their inventory management system, resulting in customer frustration and lost sales opportunities.",
    solution: "We developed a modern, scalable e-commerce platform with a responsive design optimized for all devices. The solution included real-time inventory synchronization, personalized product recommendations powered by AI, streamlined checkout process, and integration with multiple payment gateways. We also implemented a robust analytics system to provide actionable insights on customer behavior and sales patterns.",
    results: [
      "35% increase in online sales",
      "42% improvement in mobile conversion rates",
      "65% reduction in cart abandonment",
      "99.9% uptime during peak shopping seasons",
      "28% increase in average order value through AI recommendations"
    ],
    technologies: [
      "React", "Node.js", "GraphQL", "MongoDB", "Redis", "AWS", "Elasticsearch", "TensorFlow"
    ],
    testimonial: {
      quote: "The new e-commerce platform has completely transformed our online business. Not only has it significantly improved the customer experience, but it has also given us valuable insights into customer behavior that drive our business decisions. ID Code delivered a solution that exceeded our expectations and has become a critical component of our growth strategy.",
      author: "Lisa Chen",
      position: "VP of Digital Commerce, Global Retail Chain"
    },
    images: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Manufacturing IoT Implementation",
      path: "/case-studies/manufacturing-iot"
    }
  },
  {
    id: 'manufacturing-iot',
    title: "Manufacturing IoT Implementation",
    slug: "manufacturing-iot",
    industry: "Manufacturing",
    client: "Industrial Manufacturing Corporation",
    duration: "11 months",
    teamSize: "16 specialists",
    challenge: "The client was facing challenges with equipment downtime, quality control issues, and inefficient production processes. They lacked real-time visibility into their manufacturing operations, making it difficult to identify bottlenecks and optimize production. Maintenance was primarily reactive, resulting in costly unplanned downtime and production delays.",
    solution: "We implemented a comprehensive IoT solution that connected manufacturing equipment, environmental sensors, and quality control systems to a centralized platform. The solution included real-time monitoring dashboards, predictive maintenance algorithms, automated quality control processes, and production optimization tools. We also developed mobile applications for floor managers and maintenance teams to access critical information on the go.",
    results: [
      "38% reduction in unplanned downtime",
      "25% improvement in overall equipment effectiveness (OEE)",
      "22% decrease in defect rates",
      "18% increase in production throughput",
      "$2.4M annual cost savings"
    ],
    technologies: [
      "Azure IoT Hub", "Node.js", "React", "Power BI", "TensorFlow", "MQTT", "Docker", "Kubernetes"
    ],
    testimonial: {
      quote: "The IoT implementation has transformed our manufacturing operations. We now have unprecedented visibility into our processes and can predict and prevent issues before they impact production. The system has paid for itself many times over through improved efficiency and reduced downtime.",
      author: "David Rodriguez",
      position: "Director of Operations, Industrial Manufacturing Corporation"
    },
    images: [
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Energy Management Platform",
      path: "/case-studies/energy-management-platform"
    }
  },
  {
    id: 'energy-management-platform',
    title: "Energy Management Platform",
    slug: "energy-management-platform",
    industry: "Energy",
    client: "Renewable Energy Provider",
    duration: "10 months",
    teamSize: "13 specialists",
    challenge: "The client needed a comprehensive platform to monitor and optimize their growing portfolio of renewable energy assets across multiple locations. They struggled with disparate monitoring systems, inefficient maintenance scheduling, and limited ability to predict energy production and optimize grid integration.",
    solution: "We developed an integrated energy management platform that consolidated data from wind farms, solar installations, and battery storage facilities. The solution included real-time monitoring, predictive maintenance, weather-based production forecasting, and grid integration optimization. Advanced analytics provided insights for investment decisions and operational improvements.",
    results: [
      "22% increase in energy production efficiency",
      "35% reduction in maintenance costs",
      "95% accuracy in energy production forecasting",
      "28% improvement in grid integration efficiency",
      "15% increase in overall ROI for renewable assets"
    ],
    technologies: [
      "Python", "React", "TensorFlow", "AWS", "Time-series databases", "MQTT", "GraphQL", "Docker"
    ],
    testimonial: {
      quote: "The energy management platform has given us unprecedented visibility and control over our renewable energy portfolio. The predictive capabilities have transformed how we maintain our assets and interact with the grid, significantly improving our operational efficiency and profitability.",
      author: "Elena Vasquez",
      position: "CTO, Renewable Energy Provider"
    },
    images: [
      "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Insurance Claims Processing Automation",
      path: "/case-studies/insurance-claims-automation"
    }
  },
  {
    id: 'insurance-claims-automation',
    title: "Insurance Claims Processing Automation",
    slug: "insurance-claims-automation",
    industry: "Insurance",
    client: "National Insurance Company",
    duration: "7 months",
    teamSize: "10 specialists",
    challenge: "The client was struggling with a labor-intensive, error-prone claims processing system that resulted in long processing times, high operational costs, and customer dissatisfaction. Manual document handling and verification were creating bottlenecks, while inconsistent decision-making led to compliance risks.",
    solution: "We implemented an AI-powered claims processing automation system that included intelligent document processing, fraud detection algorithms, and automated decision-making for straightforward claims. The solution integrated with existing systems and provided a user-friendly interface for claims adjusters to handle complex cases, supported by AI-generated insights and recommendations.",
    results: [
      "75% reduction in claims processing time",
      "40% decrease in operational costs",
      "30% improvement in fraud detection",
      "92% customer satisfaction rating",
      "65% reduction in manual document handling"
    ],
    technologies: [
      "Python", "TensorFlow", "OCR", "Natural Language Processing", "React", "Node.js", "MongoDB", "Azure"
    ],
    testimonial: {
      quote: "The claims automation system has transformed our operations. What used to take days now happens in hours or even minutes, with greater accuracy and consistency. Our adjusters can focus on complex cases where their expertise adds value, while routine claims are handled automatically. The impact on our business efficiency and customer satisfaction has been remarkable.",
      author: "Thomas Williams",
      position: "Claims Operations Director, National Insurance Company"
    },
    images: [
      "https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Hospitality Guest Experience Platform",
      path: "/case-studies/hospitality-guest-experience"
    }
  },
  {
    id: 'hospitality-guest-experience',
    title: "Hospitality Guest Experience Platform",
    slug: "hospitality-guest-experience",
    industry: "Hospitality",
    client: "Luxury Hotel Chain",
    duration: "8 months",
    teamSize: "12 specialists",
    challenge: "The client was facing increasing competition and needed to differentiate through exceptional guest experiences. Their existing systems were fragmented, making it difficult to provide personalized service and efficiently manage guest requests. They lacked a unified view of guest preferences and history across their properties.",
    solution: "We developed a comprehensive guest experience platform that integrated with their property management system, CRM, and operational systems. The solution included a guest mobile app for digital check-in/out, room service, and amenity booking; a staff mobile app for real-time request management; and an AI-powered recommendation engine for personalized guest experiences.",
    results: [
      "32% increase in guest satisfaction scores",
      "45% improvement in request fulfillment time",
      "28% increase in ancillary revenue",
      "22% reduction in front desk workload",
      "18% increase in repeat bookings"
    ],
    technologies: [
      "React Native", "Node.js", "GraphQL", "MongoDB", "AWS", "TensorFlow", "WebSockets", "Redis"
    ],
    testimonial: {
      quote: "The guest experience platform has revolutionized how we interact with our guests and manage our properties. We can now provide truly personalized service at scale, anticipate guest needs, and resolve issues before they impact the guest experience. The platform has become a key differentiator for our brand in a competitive market.",
      author: "Maria Gonzalez",
      position: "VP of Guest Experience, Luxury Hotel Chain"
    },
    images: [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Logistics Route Optimization System",
      path: "/case-studies/logistics-route-optimization"
    }
  },
  {
    id: 'logistics-route-optimization',
    title: "Logistics Route Optimization System",
    slug: "logistics-route-optimization",
    industry: "Logistics",
    client: "Global Logistics Provider",
    duration: "9 months",
    teamSize: "11 specialists",
    challenge: "The client was struggling with inefficient delivery routes, high fuel costs, and missed delivery windows. Their manual route planning process couldn't effectively account for traffic patterns, vehicle capacity, delivery priorities, and other complex variables, resulting in suboptimal routes and excessive operational costs.",
    solution: "We developed an AI-powered route optimization system that considered multiple variables including traffic patterns, weather conditions, vehicle capacity, delivery time windows, and driver schedules. The solution included real-time tracking, dynamic rerouting capabilities, and comprehensive analytics for continuous improvement. Mobile apps for drivers provided turn-by-turn navigation and delivery management.",
    results: [
      "22% reduction in fuel consumption",
      "35% improvement in on-time delivery rate",
      "18% increase in deliveries per vehicle",
      "28% decrease in route planning time",
      "$3.2M annual cost savings"
    ],
    technologies: [
      "Python", "React", "React Native", "Google Maps API", "TensorFlow", "Node.js", "PostgreSQL", "Redis", "AWS"
    ],
    testimonial: {
      quote: "The route optimization system has transformed our logistics operations. We're now able to deliver more packages with fewer vehicles, significantly reduce our fuel consumption, and provide more reliable delivery windows to our customers. The system paid for itself within the first six months and continues to drive operational improvements.",
      author: "Carlos Mendez",
      position: "Operations Director, Global Logistics Provider"
    },
    images: [
      "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Automotive Connected Vehicle Platform",
      path: "/case-studies/automotive-connected-vehicle"
    }
  },
  {
    id: 'automotive-connected-vehicle',
    title: "Automotive Connected Vehicle Platform",
    slug: "automotive-connected-vehicle",
    industry: "Automotive",
    client: "Premium Automotive Manufacturer",
    duration: "14 months",
    teamSize: "18 specialists",
    challenge: "The client needed to develop a next-generation connected vehicle platform to enhance driver experience, enable new service offerings, and gather valuable data for product improvement. Their existing systems were fragmented, with limited connectivity and outdated user interfaces that couldn't meet modern customer expectations.",
    solution: "We developed a comprehensive connected vehicle platform that included an in-vehicle infotainment system, mobile companion apps, and a cloud backend for data analytics and service delivery. The solution featured over-the-air updates, predictive maintenance alerts, personalized driver experiences, advanced navigation with real-time traffic and charging station information, and integration with smart home systems.",
    results: [
      "42% increase in customer satisfaction with vehicle technology",
      "35% reduction in diagnostic service visits through predictive maintenance",
      "28% improvement in vehicle software update completion rates",
      "65% increase in connected services subscription retention",
      "Valuable data insights driving product development decisions"
    ],
    technologies: [
      "Android Automotive", "iOS/Android", "React", "Kotlin", "Swift", "AWS", "Kafka", "TensorFlow", "PostgreSQL"
    ],
    testimonial: {
      quote: "The connected vehicle platform has transformed our relationship with customers from a traditional transaction model to an ongoing service relationship. We're now able to continuously improve the vehicle experience, offer new services, and gather invaluable data that informs our product development. ID Code's expertise in both automotive systems and consumer-facing applications was crucial to the project's success.",
      author: "Dr. Marcus Schneider",
      position: "Chief Digital Officer, Premium Automotive Manufacturer"
    },
    images: [
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Media Content Management Platform",
      path: "/case-studies/media-content-management"
    }
  },
  {
    id: 'media-content-management',
    title: "Media Content Management Platform",
    slug: "media-content-management",
    industry: "Media & Entertainment",
    client: "Global Media Corporation",
    duration: "12 months",
    teamSize: "15 specialists",
    challenge: "The client was struggling with an outdated content management system that couldn't handle their growing volume of digital assets across multiple platforms and regions. Content workflows were inefficient, metadata management was inconsistent, and they lacked the ability to quickly repurpose content for different platforms and audiences.",
    solution: "We developed a cloud-based content management platform with advanced asset management, automated workflows, AI-powered metadata tagging, and multi-platform publishing capabilities. The solution included powerful search functionality, version control, rights management, and analytics to track content performance across channels.",
    results: [
      "65% reduction in content publishing time",
      "40% improvement in content discovery and reuse",
      "30% decrease in content localization costs",
      "25% increase in content engagement metrics",
      "Seamless management of 500,000+ digital assets"
    ],
    technologies: [
      "React", "Node.js", "GraphQL", "AWS S3", "Elasticsearch", "TensorFlow", "FFmpeg", "Redis", "PostgreSQL"
    ],
    testimonial: {
      quote: "The content management platform has transformed how we create, manage, and distribute content globally. What used to take days now happens in minutes, and we can easily adapt content for different markets and platforms. The AI-powered features for metadata tagging and content recommendations have been game-changers for our workflow efficiency and content discovery.",
      author: "Jessica Kim",
      position: "SVP of Digital Content, Global Media Corporation"
    },
    images: [
      "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Agricultural Management System",
      path: "/case-studies/agricultural-management-system"
    }
  },
  {
    id: 'agricultural-management-system',
    title: "Agricultural Management System",
    slug: "agricultural-management-system",
    industry: "Agriculture",
    client: "Large-Scale Agricultural Producer",
    duration: "10 months",
    teamSize: "12 specialists",
    challenge: "The client was facing challenges with inefficient farm management, limited visibility into field conditions, and difficulty optimizing resource usage. Their manual processes for tracking planting, irrigation, fertilization, and harvesting were time-consuming and error-prone, making it difficult to make data-driven decisions for improving yield and reducing costs.",
    solution: "We developed a comprehensive agricultural management system that integrated IoT sensors, satellite imagery, weather data, and farm operations tracking. The solution included real-time monitoring of soil conditions and crop health, predictive analytics for yield forecasting, resource optimization algorithms for irrigation and fertilization, and mobile apps for field workers to record and access information.",
    results: [
      "18% increase in crop yield",
      "25% reduction in water usage",
      "22% decrease in fertilizer application",
      "35% improvement in operational efficiency",
      "15% reduction in overall production costs"
    ],
    technologies: [
      "Python", "React", "React Native", "TensorFlow", "IoT sensors", "Satellite imagery APIs", "Weather APIs", "PostgreSQL", "AWS"
    ],
    testimonial: {
      quote: "The agricultural management system has revolutionized how we operate our farms. We now have unprecedented visibility into field conditions and crop health, allowing us to make precise, data-driven decisions that have significantly improved our yields while reducing resource usage. The system has not only improved our profitability but also enhanced our environmental sustainability.",
      author: "Robert Anderson",
      position: "Operations Director, Large-Scale Agricultural Producer"
    },
    images: [
      "https://images.pexels.com/photos/2389022/pexels-photo-2389022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Healthcare Patient Portal Transformation",
      path: "/case-studies/healthcare-patient-portal"
    }
  },
  {
    id: 'government-portal',
    title: "Government Citizen Services Portal",
    slug: "government-portal",
    industry: "Government",
    client: "Metropolitan City Government",
    duration: "10 months",
    teamSize: "15 specialists",
    challenge: "The city government was facing increasing citizen dissatisfaction due to inefficient service delivery, long wait times for basic services, and lack of transparency in government processes. Citizens had to visit multiple departments in person to complete related tasks, and there was no way to track the status of their requests online.",
    solution: "We developed a comprehensive citizen services portal that digitized over 200 government services, from permit applications to tax payments. The solution included secure citizen authentication, digital form submission, online payment processing, service request tracking, and a transparent view of government processes. The portal was designed with accessibility in mind, ensuring all citizens could easily navigate and use the services.",
    results: [
      "85% reduction in processing time for citizen requests",
      "3M+ citizens served digitally in the first year",
      "60% cost savings in service delivery",
      "95% user satisfaction rate",
      "40% reduction in in-person visits to government offices"
    ],
    technologies: [
      "React", "Node.js", "PostgreSQL", "Azure", "OAuth 2.0", "Docker", "Kubernetes"
    ],
    testimonial: {
      quote: "The citizen services portal has transformed how our city government interacts with residents. What used to take days or weeks can now be completed in minutes, and the transparency it provides has significantly improved public trust in our operations. ID Code delivered a solution that exceeded our expectations and has become a model for other municipalities.",
      author: "Mayor Robert Thompson",
      position: "Metropolitan City Government"
    },
    images: [
      "https://images.pexels.com/photos/1652361/pexels-photo-1652361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Healthcare Patient Portal Transformation",
      path: "/case-studies/healthcare-patient-portal"
    }
  },
  {
    id: 'retail-digital-transformation',
    title: "Retail Digital Transformation",
    slug: "retail-digital-transformation",
    industry: "Retail & E-commerce",
    client: "Luxury Retail Chain",
    duration: "10 months",
    teamSize: "14 specialists",
    challenge: "The client was struggling with declining in-store sales and needed to establish a strong online presence to compete with e-commerce giants. Their existing website was outdated, not mobile-friendly, and lacked integration with their inventory management system. Customer data was siloed, preventing personalized marketing and a unified shopping experience.",
    solution: "We developed a comprehensive omnichannel retail solution that included a modern e-commerce platform, mobile app, and in-store digital touchpoints. The solution featured real-time inventory synchronization, personalized product recommendations, integrated loyalty program, and advanced analytics for business intelligence. We also implemented a unified customer data platform to enable personalized marketing and seamless shopping experiences across all channels.",
    results: [
      "42% increase in online sales within first quarter",
      "28% improvement in customer retention",
      "35% increase in average order value through personalization",
      "60% reduction in inventory management time",
      "Unified view of customer behavior across channels"
    ],
    technologies: [
      "React", "Node.js", "MongoDB", "AWS", "Elasticsearch", "Redis", "TensorFlow"
    ],
    testimonial: {
      quote: "The digital transformation initiative has revolutionized how we engage with our customers. We now have a truly omnichannel experience that has not only increased our online sales but also driven more traffic to our physical stores. The data insights we're gaining are invaluable for our business strategy.",
      author: "Sarah Chen",
      position: "Chief Digital Officer, Luxury Retail Chain"
    },
    images: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Hospitality Guest Experience Platform",
      path: "/case-studies/hospitality-guest-experience"
    }
  },
  {
    id: 'hospitality-digital-platform',
    title: "Luxury Hotel Digital Experience Platform",
    slug: "hospitality-digital-platform",
    industry: "Hospitality",
    client: "International Hotel Group",
    duration: "9 months",
    teamSize: "12 specialists",
    challenge: "The client, a luxury hotel chain with properties across the Middle East and Asia, was facing increasing competition from both traditional hotels and alternative accommodation platforms. They needed to enhance their digital guest experience to maintain their premium positioning and improve operational efficiency. Their existing systems were fragmented, leading to inconsistent guest experiences and operational inefficiencies.",
    solution: "We developed a comprehensive digital experience platform that transformed the entire guest journey from pre-booking to post-stay. The solution included a redesigned website and mobile app with virtual room tours, AI-powered chatbot for instant assistance, digital check-in/out, mobile room key, in-room tablet controls, personalized recommendations, and integrated feedback system. On the operational side, we implemented staff mobile apps for real-time task management and guest request handling.",
    results: [
      "38% increase in direct bookings",
      "42% improvement in guest satisfaction scores",
      "25% increase in ancillary revenue through personalized offers",
      "30% reduction in check-in time",
      "22% improvement in operational efficiency"
    ],
    technologies: [
      "React Native", "Node.js", "GraphQL", "AWS", "IoT", "AI/ML", "MongoDB"
    ],
    testimonial: {
      quote: "The digital platform has transformed how our guests experience our properties. From the moment they book until after they check out, every touchpoint is now seamless and personalized. Our staff are also more efficient, allowing them to focus on delivering exceptional service rather than administrative tasks.",
      author: "James Richardson",
      position: "VP of Digital Innovation, International Hotel Group"
    },
    images: [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Automotive Connected Vehicle Platform",
      path: "/case-studies/automotive-connected-vehicle"
    }
  },
  {
    id: 'automotive-connected-platform',
    title: "Automotive Connected Vehicle Platform",
    slug: "automotive-connected-platform",
    industry: "Automotive",
    client: "Leading Automotive Manufacturer",
    duration: "12 months",
    teamSize: "16 specialists",
    challenge: "The client, a major automotive manufacturer, was facing increasing pressure to deliver connected vehicle experiences to meet changing consumer expectations and compete with tech-forward competitors. Their existing vehicle software was outdated, with limited connectivity features and no ability to provide over-the-air updates. They needed a comprehensive connected vehicle platform that would enhance the driving experience, provide valuable data insights, and enable new service offerings.",
    solution: "We developed a state-of-the-art connected vehicle platform that integrated with the vehicle's systems and provided a seamless digital experience for drivers. The solution included an in-vehicle infotainment system, companion mobile app, cloud backend for data analytics, and secure over-the-air update capabilities. Key features included real-time vehicle diagnostics, predictive maintenance alerts, location-based services, personalized driver profiles, voice control, and integration with smart home systems.",
    results: [
      "35% increase in customer satisfaction with vehicle technology",
      "28% reduction in service visits through predictive maintenance",
      "40% improvement in software update completion rates",
      "New revenue streams from premium connected services",
      "Valuable data insights for product development"
    ],
    technologies: [
      "Android Automotive", "iOS/Android", "Kotlin", "Swift", "AWS", "Kafka", "TensorFlow"
    ],
    testimonial: {
      quote: "The connected vehicle platform has transformed our relationship with customers from a one-time transaction to an ongoing service relationship. We're now able to continuously improve the vehicle experience, offer new services, and gather invaluable data that informs our product development. This has been a game-changer for our brand in a highly competitive market.",
      author: "Michael Johnson",
      position: "Chief Digital Officer, Leading Automotive Manufacturer"
    },
    images: [
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Media Content Management Platform",
      path: "/case-studies/media-content-management"
    }
  },
  {
    id: 'media-streaming-platform',
    title: "Media Streaming Platform Development",
    slug: "media-streaming-platform",
    industry: "Media & Entertainment",
    client: "Regional Media Conglomerate",
    duration: "14 months",
    teamSize: "18 specialists",
    challenge: "The client, a major media conglomerate in the Middle East, needed to develop a streaming platform to compete with global streaming services while catering to local content preferences and cultural considerations. They faced challenges with content management at scale, multi-device support, regional content licensing, and building a recommendation system that understood regional viewing preferences.",
    solution: "We developed a comprehensive streaming platform with web, mobile, and smart TV applications, supported by a robust content management system and analytics backend. The solution featured personalized content recommendations using AI, multi-language support including Arabic with right-to-left interface, region-specific content libraries, flexible subscription models, offline viewing capabilities, and advanced analytics for content performance and user behavior.",
    results: [
      "2.5 million subscribers within first year of launch",
      "45% higher retention rate compared to industry average",
      "32% increase in viewing time through personalized recommendations",
      "Successful expansion to 8 countries in the MENA region",
      "60% reduction in content management workload"
    ],
    technologies: [
      "React", "React Native", "Node.js", "AWS", "Elasticsearch", "Redis", "TensorFlow", "FFmpeg"
    ],
    testimonial: {
      quote: "The streaming platform has exceeded our expectations in every way. Not only did it allow us to successfully enter the competitive streaming market, but it has given us a significant advantage through its localization features and understanding of regional preferences. The platform's scalability has supported our rapid growth across multiple markets without compromising performance.",
      author: "Khalid Al-Farsi",
      position: "Chief Digital Officer, Regional Media Conglomerate"
    },
    images: [
      "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Agricultural Management System",
      path: "/case-studies/agricultural-management-system"
    }
  }
];

export default caseStudies;