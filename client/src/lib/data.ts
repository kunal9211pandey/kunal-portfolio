import {
  Code2,
  Brain,
  Database,
  Layout,
  Server,
  Terminal,
  LineChart,
  Cpu,
  Globe,
  Cloud
} from "lucide-react";

export const personalInfo = {
  name: "Kunal Kumar",
  title: "AI Developer & Data Scientist",
  email: "kunalkumar97503@gmail.com",
  phone: "+91 7370944861",
  location: "Ahemdabad, Gujarat, India",
  about: "I am a passionate AI Developer and Data Scientist with a strong foundation in Machine Learning, NLP, and Data Analytics. My journey involves analyzing complex datasets, building predictive models, and creating intelligent automation solutions. I thrive on solving real-world problems using Python, SQL, and Cloud technologies. My motto: 'Always Do Your Best No Matter What Will Happen Next'.",
  social: {
    linkedin: "https://www.linkedin.com/in/kunal-pandey520/",
    github: "https://github.com/kunal9211pandey",
    leetcode: "https://leetcode.com/u/kunalkumar97503/",
    kaggle: "https://www.kaggle.com/kunal320",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/kunalkumar97503/",
    instagram: "https://www.instagram.com/kunal_pandey_9211/",
    whatsapp: "https://wa.me/917370944861"
  },
  resumeUrl: "/Kunal_Kumar.pdf"
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "SQL", icon: "devicon-mysql-plain colored" }, // using mysql as generic sql icon
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" }
    ]
  },
  {
    category: "AI & Data Science",
    items: [
      { name: "Machine Learning", icon: "devicon-scikitlearn-plain colored" }, // Approximate
      { name: "NLP", icon: "devicon-python-plain" }, // Generic python for NLP if specific not found
      { name: "Deep Learning", icon: "devicon-pytorch-plain colored" }, // Assuming PyTorch/TensorFlow
      { name: "LangChain", icon: "devicon-python-plain" }, // No devicon yet
      { name: "RAG", icon: "devicon-python-plain" },
      { name: "Computer Vision", icon: "devicon-opencv-plain colored" },
      { name: "Web Scraping", icon: "devicon-python-plain" },
      { name: "Data Visualization", icon: "devicon-d3js-plain colored" } // Generic vis
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Flask", icon: "devicon-flask-original colored" },
      { name: "Pandas", icon: "devicon-pandas-plain colored" },
      { name: "NumPy", icon: "devicon-numpy-plain colored" },
      { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
      { name: "Matplotlib", icon: "devicon-python-plain" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Selenium", icon: "devicon-selenium-original colored" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Azure Cloud", icon: "devicon-azure-plain colored" },
      { name: "MySQL Workbench", icon: "devicon-mysql-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Excel", icon: "devicon-windows8-original colored" }, // Microsoft proxy
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Jupyter", icon: "devicon-jupyter-plain colored" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "ChatGPT Style Chatbot",
    shortDescription: "A powerful ChatGPT-style AI chatbot with multiple AI models and long-term memory.",
    fullDescription: "A powerful ChatGPT-style AI chatbot application built with Python and Streamlit. It supports 10+ free AI models via OpenRouter, including Grok, Llama, Gemma, and Mistral, with seamless model switching during conversations. The app features a clean ChatGPT-like UI, persistent chat history with auto-generated titles, search functionality, and chat export in TXT or JSON formats. Long-term memory is enabled using LangChain, and all conversations are securely stored with PostgreSQL for full database persistence across sessions.",
    techStack: ["Python", "Streamlit", "OpenRouter API", "LangChain", "PostgreSQL", "AI API"],
    link: "#",
    github: "https://github.com/kunal9211pandey/ChatGPT-Style-Chatbot",
    image: "/generated_images/chatgpt.png"
  }
  ,
  {
    id: 2,
    title: "AI-Powered Autofiller Browser Extension",
    shortDescription: "Browser extension to automate job applications using OpenAI API.",
    fullDescription: "Developed an intelligent browser extension that automates the job application process. It extracts data from user resumes and maps it to form fields using Regex and Pattern Matching. The system integrates OpenAI API to generate professional responses for custom application questions, significantly reducing manual effort.",
    techStack: ["JavaScript", "Python", "OpenAI API", "Regex", "Flask"],
    link: "#",
    github: "#",
    image: "/generated_images/auto.png"
  },
  {
    id: 3,
    title: "Travel Planner AI",
    shortDescription: "Travel Planner AI is an intelligent system that helps users plan trips using AI-driven reasoning.",
    fullDescription: "Travel Planner AI Agent is built using LangGraph to enable structured, multi-step trip planning based on user preferences.It recommends destinations, generates detailed itineraries, and handles follow-up questions interactively.",
    techStack: ["Langchain","langgraph", "LLMA-3.3 - 70B", "Python", "Flask", "HTML/CSS"],
    link: "#",
    github: "https://github.com/kunal9211pandey/travel-planner-ai",
    image: "/generated_images/travel.png"
  },
  {
    id: 4,
    title: "Shipping Label OCR Text Extraction",
    shortDescription: "Extract waybill identifiers from shipping label images.",
    fullDescription: "An OCR system designed to extract waybill or shipping label information from images by accurately detecting text with the _1_ waybill pattern.Implemented HybridOCRStrategy with multi-PSM Tesseract",
    techStack: ["pytesseract", "streamlit", "opencv-python", "easyocr", "transformers","pillow"],
    link: "#",
    github: "https://github.com/kunal9211pandey/Shipping-Label-OCR-Text-Extraction",
    image: "/generated_images/qrc.png"
  },
  {
    id: 5,
    title: "YouTube Audio Transcriber for Hindi LLM Fine-tuning",
    shortDescription: "A tool that downloads YouTube audio and transcribes it with speaker identification for Hindi AI/LLM training datasets.",
    fullDescription: "A Python-based YouTube audio transcriber built for Hindi LLM fine-tuning with accurate speaker diarization and robust fallback transcription.Supports reliable audio extraction, Hindi-optimized transcription, JSONL dataset export, and an easy-to-use Streamlit web interface.",
    techStack: ["Python", "streamlit", "pytubefix", "assemblyai", "SpeechRecognition","pydub"],
    link: "#",
    github: "https://github.com/kunal9211pandey/YouTube-Audio-Transcriber-for-Hindi-LLM-Fine-tuning",
    image: "/generated_images/youtube.png"
  },
  {
    id: 6,
    title: "Bangalore House Price Prediction",
    shortDescription: "ML model to predict real estate prices with 89.5% accuracy.",
    fullDescription: "Research project published in IJCRT. Investigated machine learning algorithms to predict housing prices in Bangalore. Implemented Regression models (Linear, Lasso, Ridge, Elastic Net) achieving 89.49% accuracy. Performed extensive data cleaning and EDA to derive market insights.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Regression"],
    link: "#",
    github: "https://github.com/kunal9211pandey/Bangalore-House-Price-Predication",
    image: "/generated_images/price.png"
  },
  {
    id: 7,
    title: "Generative AI with LSTM Text Generation",
    shortDescription: "project that generates Shakespeare-style text using LSTM neural networks.",
    fullDescription: "This project implements a text generation system using LSTM (Long Short-Term Memory) networks. The model is trained on Shakespeare's complete works and generates new, coherent text in Shakespeare's style based on seed input.",
    techStack: ["streamlit", "tensorflow", "Numpy", "LSTM", "Python"],
    link: "#",
    github: "https://github.com/kunal9211pandey/Generative-AI-with-LSTM-Text-Generation",
    image: "/generated_images/gen.png"
  },
  {
    id: 8,
    title: "Fine-Tuning Multiple Open-Source Text Generation Models",
    shortDescription: "Fine-tuned multiple open-source text generation models to improve instruction-following and response quality.  ",
    fullDescription: "Successfully fine-tuned multiple text generation models including Phi-3, Qwen, SmolLM, DistilGPT-2, and IBM Granite using custom datasets.Focused on enhancing instruction understanding, coherence, and generation quality through efficient fine-tuning techniques.",
    techStack: [
  "Python",
  "PyTorch",
  "Hugging Face Transformers",
  "LLM Fine-Tuning",
  "Text Generation",
  "Instruction Tuning",
  "PEFT / LoRA",
  "Tokenization",
  "Jupyter Notebook"
],
    link: "#",
    github: "https://github.com/kunal9211pandey/Fine-Tune",
    image: "/generated_images/finetune.png"
  },
  {
    id: 9,
    title: "WhatsApp Chat to LLM Dataset Converter",
    shortDescription: "Transform your WhatsApp chat exports into high-quality datasets.",
    fullDescription: "A powerful tool that converts WhatsApp chat exports into clean, high-quality datasets for LLM fine-tuning across multiple training formats.It offers advanced data cleaning, intelligent message processing, analytics, and a user-friendly interface for efficient dataset generation.",
    techStack: ["streamlit", "tensorflow", "Numpy", "LSTM", "Python"],
    link: "#",
    github: "https://github.com/kunal9211pandey/Generative-AI-with-LSTM-Text-Generation",
    image: "/generated_images/whatsapp.png"
  },
  {
    id: 10,
    title: "Apply Board Clone - Study Abroad Platform",
    shortDescription: "A Flask-based web application that replicates ApplyBoard’s core functionality for international student admissions.",
    fullDescription: "A comprehensive Flask web platform that helps international students discover, apply to, and manage university applications globally.It includes role-based authentication, student and admin dashboards, Stripe payments, and real university data integration.",
    techStack: ["flask", "sqlalchemy", "payments", "HTML/CSS", "API"],
    link: "#",
    github: "https://github.com/kunal9211pandey/Study-Abroad-Platform-Clone",
    image: "/generated_images/aborad.png"
  }
];

export const experience = [
  {
    id: 1,
    company: "Vrundaz Technology",
    role: "Jr. Python Developer",
    period: "May 2025 - July 2025",
    location: "Vadodara, Gujarat",
    description: "Operated as the sole Python developer in a PHP-based environment. Developed automated scrapers and AI tools. Built an Automated Job Scraper with Cloudflare/reCAPTCHA bypass and an AI-powered autofiller extension.",
    skills: ["Python", "Flask", "Selenium", "Automation"],
    logo: "/generated_images/python_developer_workspace.png"
  },
  {
    id: 2,
    company: "Laverne Fintech Pvt. Ltd",
    role: "PHP Developer & Web Supporter",
    period: "Sep 2024 - April 2025",
    location: "Vadodara, Gujarat",
    description: "Designed and developed company website using WordPress, HTML, CSS, PHP, and SQL. Provided IT support and collaborated with the Digital Marketing team on strategies.",
    skills: ["PHP", "WordPress", "SQL", "Web Support"],
    logo: "/generated_images/fintech_company_office.png"
  },
  {
    id: 3,
    company: "Code Unnati",
    role: "SAP Student Intern",
    period: "Dec 2023 - Mar 2024",
    location: "Vadodara, Gujarat",
    description: "Acquired hands-on experience in SAP Analytics Cloud, Cybersecurity with IoT integration, and Power BI through practical learning.",
    skills: ["SAP Analytics Cloud", "Power BI", "IoT Security"],
    logo: "/generated_images/data_analytics_dashboard.png"
  },
  {
    id: 4,
    company: "Bharat Intern",
    role: "Data Science Intern",
    period: "Dec 2023 - Jan 2024",
    location: "Remote",
    description: "Worked on data science projects including predictive modeling and analysis.",
    skills: ["Data Science", "Machine Learning"],
    logo: "/generated_images/data_science_lab.png"
  }
];

export const education = [
  {
    id: 1,
    institution: "Parul University",
    degree: "B.Tech in Computer Science (Big Data Analysis)",
    period: "2020 - 2024",
    score: "CGPA 7.61/10.00",
    description: "Specialized in Big Data Analysis. Completed multiple projects and research papers."
  },
  {
    id: 2,
    institution: "Mahant Sheo Shankar Giri College",
    degree: "Higher Secondary School Certificate (Science)",
    period: "2018 - 2020",
    score: "Completed",
    description: "Focus on Physics, Chemistry, and Mathematics."
  },
  {
    id: 3,
    institution: "Shree Someshawar Nath High School",
    degree: "Secondary School Certificate",
    period: "2016 - 2018",
    score: "Completed",
    description: "Foundation in general sciences and mathematics."
  }
];

export const certificates = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2023",
    link: "https://www.credly.com/badges/7b7af55c-6da8-401a-ac36-a4e307d6579b/public_url",
    image: "/generated_images/azure_cloud_computing.png"
  },
  {
    id: 2,
    name: "Become a Power BI Specialist",
    issuer: "LinkedIn Learning",
    date: "2023",
    link: "https://www.linkedin.com/learning/certificates/545c86b9958d9728779554463e17f1a6a97d63fed53769f67b7c2d308a8e584f",
    image: "/generated_images/pba.png"
  },
  {
    id: 3,
    name: "Research Paper",
    issuer: "IJCRT",
    date: "2024",
    link: "https://www.ijcrt.org/generatecerti.php?pid=IJCRT2403626",
    image: "/generated_images/research.png"
  },
  {
    id: 4,
    name: "Certified in Internet of Things",
    issuer: "NPTEL",
    date: "2022",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7136776483611553792/",
    image: "/generated_images/iot.png"
  },
   {
    id: 5,
    name: "Mastering 20+ Charts and Graphs",
    issuer: "LinkedIn Learning",
    date: "2023",
    link: "https://www.linkedin.com/learning/certificates/24a06d6b609cf7bcf3e4d135388d287f63365f21cb321b9befd4585d033980ad",
    image: "/generated_images/Charts.png"
  },
  {
    id: 6,
    name: "Excel PivotTable Quick Tips",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/175aa418cf2a2cfda13f72fadffed90b06e5d01146930b4abb7308f3d191bdf6",
    image: "/generated_images/PivotTable.png"
  },
  {
    id: 7,
    name: "Excel: Advanced Formulas and Functions (2023)",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/c7d969ebd9b6b7358108271387f5e106fd39726e7d06b8f3e9a1ffaf59804d5c",
    image: "/generated_images/Advance_formula.png"
  },
  {
    id: 8,
    name: "Excel: Introduction to Formatting (2019)",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/87a6ccb8d5be51e73e991a3694509d9dcbdbcb177509ffe127ae95ff4ac23943",
    image: "/generated_images/Formating.png"
  },
  {
    id: 9,
    name: "Excel: Macros and VBA for Beginners (2021)",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/e6ae35a2048fedbaa401973f541aa0877e05a401bd71abb0f1f1567651b392a4",
    image: "/generated_images/vba.png"
  },
  {
    id: 10,
    name: "Excel: Power Query for Beginners (2021)",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/e83ccd4a817415fd38592c17eb60181a93bcf287c992c8d8dd43664a45f0cd30",
    image: "/generated_images/power_quesry.png"
  },
  {
    id: 11,
    name: "Master Microsoft Excel",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/a3671cd194fc870ed4b71cdd7ce88a427c566d04ef5b3897d1b3909ada1ebf32",
    image: "/generated_images/master.png"
  },
  {
    id: 12,
    name: "Excel: Productivity Tips",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/789bd8cd418c1e0f45f2f7216966d6e0543a5dd6c8c49c350ec687652a16ee7a",
    image: "/generated_images/product.png"
  },
  {
    id: 13,
    name: "Power BI Essential Training",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/ee231e230b57423041969b0b7e39c74c96e7dea0437c189b790a9345bc9ef7fc",
    image: "/generated_images/traing.png"
  },
  {
    id: 14,
    name: " Excel Essential Training (Microsoft 365)",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/a3f2cd487a0249313b1226a844d0833b505eea248907685fdb6b3feb47c346d9",
    image: "/generated_images/excel.png"
  },
  {
    id: 15,
    name: "Excel: Dashboards for Beginners ",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/ddac88ff8f483bb27b0831e52805eba5bf5a60d8d4b01a74fff42e23f2b9fdee",
    image: "/generated_images/dashboard.png"
  },
  {
    id: 16,
    name: "Learning Power BI Desktop",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/14173881c7d934c9cf60d9bba189b153962b94c796db696aae2ace36f106ec43",
    image: "/generated_images/desktop.png"
  },
  {
    id: 17,
    name: "Power BI Quick Tips",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/becf70d72f74ed6bd3cf9eb34d414ccf3df2a782888ca151bf3c832102843841",
    image: "/generated_images/quick_tips.png"
  },
  {
    id: 18,
    name: "Getting Started with Power BI",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/2ac217d81e3755126e03ea0c2988393936f456d672e8a00d4c60e70e2d1024b8",
    image: "/generated_images/power.png"
  },
  {
    id: 19,
    name: "Power BI Data Modeling with DAX",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/0a31c0f2c4d8b767bddecac6e5c2bc9e2ea6b947c415f645204c72d8fc5fa31c",
    image: "/generated_images/dax.png"
  },
  {
    id: 20,
    name: "Using Power BI with Excel",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/4cf899695b8de649bb49440fea840e2f0136558dd07e8c266495dbfda71d1b0c",
    image: "/generated_images/excel_power.png"
  },
  {
    id: 21,
    name: "Google Apps: Tips, Tricks, and Techniques",
    issuer: "LinkedIn Learning",
    date: "2022",
    link: "https://www.linkedin.com/learning/certificates/975181d01c4563eed218a0a3cae0becc628933320c427d36f1c42757f5b553d9",
    image: "/generated_images/tips.png"
  }
];

export const recommendations = [
  {
    id: 1,
    name: "Hardik Panchal",
    role: "Senior System and Server Administrator at Laverne Fintech",
    content: "Kunal is very passionate about work at office, He is very Punctual, Disciplined and Dedicated at work-place, He takes keen interest to learn new things about IT Field, He is fast learner and very sincere towards seniors and always try to give best solution of each problem, He have a good co-ordination skill within team to complete each assigned task and also priotized calls very well in heavy work-load, He is friendly & kind in nature and be calm&managed under pressure.",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    linkedin: "https://www.linkedin.com/in/hardik-panchal-360455aa/"
  },
  {
    id: 2,
    name: "Shridhar Deshpande",
    role: "Associate Manager Infrastructure Services at DXC TECHNOLOGY",
    content: "Kunal!! is a fast learner and brilliant resource to work with, wish him all the success in his future endeavours.",
    avatar: "https://i.pravatar.cc/150?u=priya",
    linkedin: "https://www.linkedin.com/in/shridhar-deshpande-76135235/"
  },
  {
    id: 3,
    name: "Meet Gadhvi",
    role: "Business Development Executive @ Epitome Corporation ",
    content: "I enjoyed working on several projects with kunal. His strong technical skills stand out as soon as you start working with him but coupled with his communication skills, problem solving becomes easy and enjoyable. With just minimal background and direction, he resourcefully solves problems and creatively comes up with solutions that precisely address business challenges. He can bring value to any project.",
    avatar: "https://i.pravatar.cc/150?u=amit",
    linkedin: "https://www.linkedin.com/in/meet-gadhvi/"
  },
  {
    id: 4,
    name: "Shruti Singh",
    role: "Assistant Manager at SSA Compliance",
    content: "I hope this finds you, I wanted to take a moment to commend you on your strong foundation in Excel, data analysis, Python, and SQL. These skills are incredibly valuable in the enginnering world. As your very hardworking and a fast learner as well , and he just don't do the work to complete it, he do it to learn new things. I learnt many things from him, he has been instrumental in guiding me towards making my content better. It is due to his unwavering faith in his abilities that he could do well and learn a lot. A person of few words and immensely calm and composed nature, he has always let his work speak and that is one major lesson I have learnt from him.",
    avatar: "https://i.pravatar.cc/150?u=amit",
    linkedin: "https://www.linkedin.com/in/shruti26/"
  },
  {
    id: 5,
    name: "SHIVAM TAPAN SAMAL",
    role: "Data Scientist at Topia Life Sciences",
    content: "Kunal is one of the most brilliant engineers I’ve ever had the pleasure to work with. His breadth and depth of knowledge in data analytics, warehousing, and all things Machine learning and Power BI was always astonishing and his willingness to adapt and improvise was such a huge help in pushing our project forward in directions we had never thought of before. Would not hesitate to recommend Kunal as a colleague.",
    avatar: "https://i.pravatar.cc/150?u=amit",
    linkedin: "https://www.linkedin.com/in/shivam-tapan-samal-7a0957248/"
  }
];
