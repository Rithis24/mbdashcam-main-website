// Verified company contact information and metadata for MetroBasket / MB Automotives India
export const siteConfig = {
  companyName: "MetroBasket",
  legalEntity: "MB Automotives India",
  tagline: "Driving with Confidence - Commercial Vehicle Safety & Telematics",
  description: "Manufacturer and supplier of advanced automotive safety hardware & telematics systems: Dual-Lens Dashcams, Commercial Bus Black Boxes, Driver Monitoring Systems (DMS), ADAS, and Blind Spot Ultrasonic Radar.",
  
  contact: {
    primaryPhone: "+91-8489880444",
    secondaryPhone: "+91-8220955966",
    officePhones: ["+91-9360101871", "+91-9751141147"],
    primaryEmail: "metrobasketin@gmail.com",
    corporateEmail: "mbautomotivesindia@gmail.com",
    businessHours: "Mon – Sat: 9:00 AM – 7:00 PM IST"
  },
  
  locations: [
    {
      title: "Headquarters & Registered Facility",
      address: "14/145, Niton Estate, Club Road",
      city: "Kotagiri",
      state: "Tamil Nadu",
      pincode: "643217",
      country: "India",
      googleMapsEmbedUrl: "https://maps.google.com/maps?q=14%2F145%2C%20Niton%20Estate%2C%20Clube%20Road%2C%20Kotagiri%20-%20643217.&t=m&z=12&output=embed&iwloc=near"
    },
    {
      title: "Regional Operations Base",
      address: "Industrial Corridor, Guindy",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600032",
      country: "India"
    }
  ],

  branding: {
    logo: "/assets/branding/metrobasket-logo.png",
    logoIcon: "/assets/branding/metrobasket-logo-icon.png",
    aboutHeroImage: "/assets/branding/about-hero-image.png"
  },

  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { 
      id: "products", 
      label: "Products",
      hasDropdown: true,
      children: [
        { label: "Bus Dash Camera", category: "MB Bus Dash Camera" },
        { label: "Car Dash Camera", category: "MB Car Black Box Smart" },
        { label: "Bike Dash Camera", category: "MB Bike Dash Cameras" },
        { label: "Memory Cards", category: "MB Memory Cards" },
        { label: "Vehicle Sensors", category: "Vehicle Sensors" },
        { label: "Accessories & Spares", category: "Accessories & Spares" },
        { label: "New Arrival", category: "New Arrival" }
      ]
    },
    {
      id: "gallery",
      label: "Gallery",
      hasDropdown: true,
      children: [
        { label: "Video Gallery", tab: "videos", sectionId: "videos-section" },
        { label: "Photo / Event Gallery", tab: "home", sectionId: "about-section" }
      ]
    },
    { id: "certificates", label: "Certificates", tab: "home", sectionId: "certificates-section" },
    {
      id: "downloads",
      label: "Download",
      hasDropdown: true,
      children: [
        { label: "Brochure (Catalogue PDF)", tab: "downloads", action: "brochure" },
        { label: "Application Downloads", tab: "downloads", action: "apps" }
      ]
    },
    { id: "warranty", label: "Warranty Registration", isAction: true },
    { id: "contact", label: "Contact Us" }
  ],

  channelPartners: [
    { name: "Veera Vahana", logo: "/assets/branding/veera-partner-logo.avif", subtitle: "Fleet & Coach Builders" },
    { name: "SSC Bus Systems", logo: "/assets/branding/ssc-partner-logo.jpg", subtitle: "Transport Integration" },
    { name: "Commercial Fleet Support", logo: "/assets/partners/partner-orig-1.png", subtitle: "Telematics Partner" },
    { name: "National Bus Systems", logo: "/assets/partners/partner-orig-2.png", subtitle: "Bus Fleet Integrator" },
    { name: "Logistics Safety Fleet", logo: "/assets/partners/partner-orig-3.png", subtitle: "Freight Network" },
    { name: "Commercial Transit Systems", logo: "/assets/partners/partner-orig-4.png", subtitle: "Transit Safety" },
    { name: "Vehicle Safety Network", logo: "/assets/partners/partner-orig-5.png", subtitle: "Fleet Surveillance" },
    { name: "Interstate Coach Partner", logo: "/assets/partners/partner-orig-6.png", subtitle: "Highway Compliance" },
    { name: "Enterprise Fleet OEM", logo: "/assets/partners/brand-1.png", subtitle: "Heavy Transit Partner" },
    { name: "Commercial Coach Partner", logo: "/assets/partners/brand-2.png", subtitle: "Coach Body Safety" },
    { name: "Automotive Sensor Partner", logo: "/assets/partners/brand-3.png", subtitle: "ADAS Surveillance" },
    { name: "Fleet Monitoring Network", logo: "/assets/partners/brand-4.png", subtitle: "National Fleet System" }
  ],

  certificateBadges: [
    { 
      id: "iso-9001", 
      name: "ISO 9001:2015", 
      logo: "/assets/certificates/iso-9001-logo.png", 
      label: "Quality Management Certified",
      subtitle: "International Standards Organization",
      certId: "iso-9001"
    },
    { 
      id: "pqc", 
      name: "Paramount Quality (PQC)", 
      logo: "/assets/certificates/pqc-logo.png", 
      label: "Accredited Certification Registrar",
      subtitle: "PQC Registrar • Towards Your Goal",
      certId: "iso-9001"
    },
    { 
      id: "make-in-india", 
      name: "Make in India", 
      logo: "/assets/certificates/make-in-india-logo.svg", 
      label: "Indigenous Manufacturing & R&D",
      subtitle: "Domestic Commercial Fleet Hardware",
      certId: "made-in-india"
    },
    { 
      id: "bis-std", 
      name: "BIS Certified", 
      logo: "/assets/certificates/bis-standards-logo.svg", 
      label: "IS 616 : 2017 Electronics Safety",
      subtitle: "Bureau of Indian Standards",
      certId: "bis-std"
    },
    { 
      id: "udyam", 
      name: "Govt. MSME Udyam", 
      logo: "/assets/certificates/msme-udyam-logo.svg", 
      label: "Registered Manufacturing Entity",
      subtitle: "Govt. of India MSME Recognition",
      certId: "udyam"
    },
    { 
      id: "zed", 
      name: "ZED MSME Bronze", 
      logo: "/assets/certificates/zed-msme-logo.svg", 
      label: "Zero Defect Zero Effect Scheme",
      subtitle: "Ministry of MSME, Govt. of India",
      certId: "zed"
    }
  ],

  certificatesList: [
    {
      id: "udyam",
      title: "Govt. MSME Udyam Registration",
      subtitle: "Ministry of Micro, Small and Medium Enterprises, Govt. of India",
      image: "/assets/certificates/udyam-registration-certificate.jpg",
      badge: "National MSME Recognition",
      certNumber: "UDYAM-TN-22-0008892",
      description: "Official statutory recognition from the Government of India acknowledging MB Automotives India as an accredited automotive safety hardware manufacturing entity."
    },
    {
      id: "zed",
      title: "ZED MSME Bronze Quality Certification",
      subtitle: "Zero Defect Zero Effect Certification Scheme",
      image: "/assets/certificates/zed-msme-certificate.jpg",
      badge: "Zero Defect Zero Effect",
      certNumber: "ZEDMSME020854",
      description: "Accredited for zero defect production methodology, precision incoming component validation, and clean sustainable manufacturing practices."
    },
    {
      id: "iso-9001",
      title: "ISO 9001:2015 Quality Management System",
      subtitle: "International Standards Organization Certified",
      image: "/assets/certificates/cert-badge-iso-9001.png",
      badge: "ISO 9001:2015 Certified",
      certNumber: "ISO 9001:2015 / QMS-IND-2023",
      description: "Comprehensive quality management compliance verifying traceable circuit board assembly, high-temperature environmental testing, and serial number tracking."
    },
    {
      id: "bis-std",
      title: "Bureau of Indian Standards (BIS) Framework",
      subtitle: "Automotive Safety & Telemetry Regulatory Standards",
      image: "/assets/certificates/cert-badge-bis-standard.png",
      badge: "Standard Compliant",
      certNumber: "BIS / AIS-140 COMPLIANT",
      description: "Compliant with Indian national industrial regulations for commercial automotive telemetry, intelligent transport systems, and optical recording devices."
    },
    {
      id: "goi-reg",
      title: "Government of India Statutory Entity Registration",
      subtitle: "Ministry of Commerce & Industry Official Accreditation",
      image: "/assets/certificates/cert-badge-satyamev-1.png",
      badge: "Govt. Accreditation",
      certNumber: "GOI-REG-IND-44820",
      description: "Official statutory entity certification recognizing MB Automotives India as a legitimate domestic manufacturer for public transit and commercial electronics."
    },
    {
      id: "made-in-india",
      title: "Made in India National Manufacturing Certification",
      subtitle: "Indigenous Production & Engineering Initiative",
      image: "/assets/certificates/cert-badge-made-in-india.png",
      badge: "Indigenous Engineering",
      certNumber: "MII-IND-HARDWARE-092",
      description: "Official Make in India accreditation verifying local firmware development, circuit assembly, mechanical bracket tooling, and regional technical field support."
    },
    {
      id: "transit-compliance",
      title: "Commercial Transit & Vehicle Fleet Accreditation",
      subtitle: "National Transport Safety Equipment Framework",
      image: "/assets/certificates/cert-badge-satyamev-2.jpg",
      badge: "Verified Entity",
      certNumber: "NIC-TRANSIT-TN-2024",
      description: "Verified statutory compliance authorization for commercial transport optical telemetry, cabin safety recording, and fleet GPS tracking installations."
    },
    {
      id: "quality",
      title: "Automotive Vibration & Environmental Quality Standard",
      subtitle: "Automotive Telematics & Road Safety Standards",
      image: "/assets/certificates/quality-standard.svg",
      badge: "Automotive Grade",
      certNumber: "ISO & AIS Standards Compliant",
      description: "Hardware thoroughly tested for automotive vibration, extreme cabin temperature fluctuations (-20°C to 70°C), and continuous 9V-36V power regulation."
    }
  ],

  applications: [
    {
      id: "the-locate",
      name: "The Locate",
      category: "GPS & Real-Time Tracking APK",
      desc: "Live vehicle location tracking, route playback history, geo-fencing boundary triggers, and overspeed telemetry for commercial fleets.",
      iconType: "navigation",
      downloadUrl: "https://drive.google.com/file/d/18EshU2-37a3ev6bVuql8qbaG0UAcW3iY/view?usp=sharing",
      fileType: "Android APK"
    },
    {
      id: "icsee-pro",
      name: "iCSee Pro",
      category: "Mobile Surveillance & Live Feed",
      desc: "Ultra-low latency dual-lens camera streaming, two-way audio communication, cloud alarm notifications, and SD card remote playback.",
      iconType: "camera",
      downloadUrl: "https://drive.google.com/file/d/1P084iNZDXNcu-MDgAu0uo6Xi02XB1BaD/view?usp=sharing",
      fileType: "Android / iOS"
    },
    {
      id: "metrokam-vts",
      name: "MetroKam VTS",
      category: "Fleet Telematics Suite",
      desc: "Full-scale Commercial Vehicle Tracking System with engine on/off diagnostics, trip mileage logs, and fuel sensor telemetry.",
      iconType: "truck",
      downloadUrl: "https://drive.google.com/file/d/1JBLOL8o2p0gd9SV7_hwwJ7eEwCbl2zo1/view?usp=sharing",
      fileType: "Android APK"
    },
    {
      id: "cms-v7",
      name: "CMS V7",
      category: "Central Multi-Camera Management Client",
      desc: "Enterprise desktop monitoring client supporting up to 64 simultaneous multi-vehicle camera feeds, GPS track mapping, and automated evidence backup.",
      iconType: "monitor",
      downloadUrl: "https://drive.google.com/file/d/18POpg47uY2726IfM8Sce39LnApTtm5AK/view?usp=sharing",
      fileType: "Windows / Desktop Client"
    }
  ],

  documents: {
    productCataloguePdf: "/assets/docs/MB-Catalogue.pdf",
    productBookletPdf: "/assets/docs/MB-Automotives-India-Booklet.pdf",
    msmeCertificate: "/assets/certificates/udyam-registration-certificate.jpg"
  },

  testimonials: [
    {
      id: 1,
      name: "Manav Raj",
      role: "Commercial Fleet Supervisor",
      location: "Bangalore",
      category: "Bus & Coach Fleets",
      hardware: "MB Bus Black Box Smart (Dual)",
      content: "MetroBasket transformed our 34-bus fleet monitoring. With dual in-cabin and road recording plus wide 9V–36V surge protection, dispute resolution and passenger safety are 100% ensured on every journey.",
      rating: 5,
      date: "Verified Fleet Operator",
      helpful: 48
    },
    {
      id: 2,
      name: "Gokul",
      role: "Logistics & Transport Director",
      location: "Coimbatore",
      category: "Logistics & Freight",
      hardware: "4G Live AI Fleet Monitoring & BSD",
      content: "I highly recommend MetroBasket! Their ultrasonic radar blind-spot detection and live telematics have drastically reduced lane-change incidents across our freight trucks. Truly reliable automotive engineering.",
      rating: 5,
      date: "Verified Transport Partner",
      helpful: 62
    },
    {
      id: 3,
      name: "Lena Rajeev",
      role: "Passenger Coach Operator",
      location: "Chennai",
      category: "Bus & Coach Fleets",
      hardware: "MB-602 Dual Bus Dash Camera",
      content: "MetroBasket's dash cameras have been a game-changer for our intercity luxury coaches. Crystal-clear night vision footage and reliable continuous loop recording gives our team and passengers absolute peace of mind.",
      rating: 5,
      date: "Verified Coach Owner",
      helpful: 39
    },
    {
      id: 4,
      name: "R. Senthil Kumar",
      role: "State Express Bus Contractor",
      location: "Madurai",
      category: "Bus & Coach Fleets",
      hardware: "Commercial Vehicle Mobile DVR System",
      content: "We installed MetroBasket multi-channel systems on 20 government transit route buses. Hardware withstands heavy vibration and heat. Best after-sales service and technical support in Tamil Nadu.",
      rating: 5,
      date: "Verified Route Operator",
      helpful: 54
    },
    {
      id: 5,
      name: "Arvind Swaminathan",
      role: "School Transport Safety Officer",
      location: "The Nilgiris (Kotagiri)",
      category: "School & Public Transit",
      hardware: "MB-DMS Driver Monitoring & ADAS",
      content: "The driver drowsiness alerts and forward collision audio warnings ensure our school buses are driven with maximum discipline. MetroBasket's local facility in Kotagiri provided swift setup.",
      rating: 5,
      date: "Verified School Fleet",
      helpful: 41
    },
    {
      id: 6,
      name: "Dr. K. Narayanan",
      role: "Personal Vehicle Owner",
      location: "Chennai",
      category: "Personal Dashcams",
      hardware: "MB Car Black Box Smart with GPS",
      content: "Fitted the dual smart camera on my SUV. The emergency G-Sensor lock and automatic parking surveillance function without draining the car battery. Extremely satisfied!",
      rating: 5,
      date: "Verified Car Owner",
      helpful: 27
    }
  ],

  ratingStats: {
    score: "4.9",
    totalReviews: "20,054+",
    satisfactionRate: "99.4%",
    activeFleets: "11,570+",
    totalEmployees: "60+",
    totalProducts: "100+",
    breakdown: [
      { stars: 5, percentage: 92, count: "18,450" },
      { stars: 4, percentage: 6, count: "1,203" },
      { stars: 3, percentage: 1.5, count: "301" },
      { stars: 2, percentage: 0.3, count: "60" },
      { stars: 1, percentage: 0.2, count: "40" }
    ],
    // 4 Credibility Metric Counters exactly matching user reference photo
    counterCards: [
      {
        id: "rating-1",
        number: "20,054+",
        title: "Customer Rating",
        subtitle: "Verified commercial fleet evaluations",
        iconType: "star",
        color: "#1B72A6"
      },
      {
        id: "employees",
        number: "60+",
        title: "Employees",
        subtitle: "R&D engineers & technical field specialists",
        iconType: "users",
        color: "#1B72A6"
      },
      {
        id: "rating-2",
        number: "11,570+",
        title: "Customer Rating",
        subtitle: "Active vehicles & hardware units deployed",
        iconType: "award",
        color: "#1B72A6"
      },
      {
        id: "products",
        number: "100+",
        title: "Products",
        subtitle: "Commercial dashcams, sensors & spares",
        iconType: "layers",
        color: "#1B72A6"
      }
    ]
  },

  videos: [
    { 
      title: "Commercial Bus Black Box In-Vehicle Demo", 
      src: "/assets/videos/product-demo-1.mp4",
      poster: "/assets/branding/about-hero-image.png",
      badge: "DUAL 1080P RECORDING",
      desc: "Full HD simultaneous recording showing forward roadway traffic alongside interior passenger cabin observation."
    },
    { 
      title: "Driver Monitoring & Collision Avoidance Demo", 
      src: "/assets/videos/product-demo-2.mp4",
      poster: "/assets/products/mb-dms-driver-monitoring-system-gallery-1.jpg",
      badge: "AI DMS & ADAS ALERTS",
      desc: "Real-time facial fatigue alerts, drowsiness warnings, and active forward collision prevention on highway routes."
    }
  ],

  categories: [
    { 
      id: "bus", 
      name: "Bus & Commercial Dashcams", 
      categoryQuery: "MB Bus Dash Camera",
      count: 5, 
      image: "/assets/products/mb-bus-black-box-smart-thumb.png",
      desc: "Dual 4K / 1080P in-cabin and road recording systems engineered with wide DC 9V–36V power protection." 
    },
    { 
      id: "car", 
      name: "Car & Light Vehicle Dashcams", 
      categoryQuery: "MB Car Black Box Smart",
      count: 3, 
      image: "/assets/products/mb-car-black-box-smart-thumb.png",
      desc: "Compact dual-channel vehicle evidence recorders with automatic G-Sensor incident shock locking." 
    },
    { 
      id: "bike", 
      name: "Motorcycle Dashcams", 
      categoryQuery: "MB Bike Dash Cameras",
      count: 2, 
      image: "/assets/products/mb-bike-black-box-smart-thumb.png",
      desc: "All-weather IP67 dual-lens recorders built to withstand two-wheeler rain and chassis vibration." 
    },
    { 
      id: "dms-adas", 
      name: "Driver Monitoring & ADAS", 
      categoryQuery: "MB Bus Dash Camera",
      count: 3, 
      image: "/assets/products/mb-dms-driver-monitoring-system-thumb.png",
      desc: "Real-time AI computer vision detecting driver drowsiness, eye-closure, distraction, and forward lane drift." 
    },
    { 
      id: "sensors", 
      name: "Vehicle Sensors & Radar", 
      categoryQuery: "Vehicle Sensors",
      count: 3, 
      image: "/assets/products/mb-parking-sensor-thumb.png",
      desc: "Heavy-duty ultrasonic blind-spot sensors and reverse radar for commercial buses, trucks, and trailers." 
    },
    { 
      id: "storage", 
      name: "Memory & Storage", 
      categoryQuery: "MB Memory Cards",
      count: 3, 
      image: "/assets/products/memory-storage-devices-thumb.png",
      desc: "High-endurance flash memory cards designed for uninterrupted 24/7 continuous video loop writes." 
    },
    { 
      id: "accessories", 
      name: "Accessories & Spares", 
      categoryQuery: "Accessories & Spares",
      count: 7, 
      image: "/assets/products/mb-accessories-thumb.png",
      desc: "Vibration-proof threaded 4-pin aviation cables, heavy duty brackets, external speakers, and power modules." 
    }
  ]
};

export default siteConfig;
