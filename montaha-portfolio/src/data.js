import depiImg from "./assets/DEPI.png";
import ntiImg from "./assets/NTI.png";
import hrImg from "./assets/HR Analytics.png";
import misrImg from "./assets/Banque Misr.png";
import houseImg from "./assets/Housing Prices.png";
import svuImg from "./assets/SVU.png";
import nysaImg from "./assets/UAS.jpg";

export const hero = {
  name: "Montaha Ahmed Atef",
  role: "Data Scientist — AI & ML Enthusiast",
  tagline: "I HUMANISE DATA .. TURNING INSIGHTS INTO STORIES EVERYONE GETS",
};

export const about = {
  intro:
    "Beginning as a Backend Developer, I discovered my passion for Artificial Intelligence and Machine Learning. Today, I build on that technical foundation through Data Analysis and Data Science, delivering data-driven solutions that are accurate, impactful, and future-ready. Curiosity led me to ask: what happens to all this data once it’s collected — can it tell us more? That pull led me to Artificial Intelligence and Data Science.",
  body:
    "Today, I combine that technical foundation with data analysis and machine learning. From preprocessing and EDA to visualisation and predictive modelling, I turn raw data into clear insights and narratives that drive decisions.",
  skills: [
    "Python",
    "SQL",
    "Pandas/Numpy",
    "Scikit-learn",
    "EDA/Visualization",
    "Plotly/Matplotlib/Seaborn",
    "Excel / Power BI / Tableau",
    "Git/GitHub",
  ],
};

export const education = [
  {
    title: "Bachelor's in Computer Science",
    org: "South Valley University, Faculty of Computer and Information",
    period: "Oct 2022 — Jul 2026",
    desc:
      "Built a strong foundation in computer science fundamentals while exploring diverse technologies across multiple areas of the field. Alongside academic studies, actively engaged in student activities—both technical and extracurricular—that supported continuous learning and personal development.",
    image: svuImg,
  },
  {
    title: "Erasmus+ Mobility Program (Semester Abroad)",
    org: "Państwowa Akademia Nauk Stosowanych w Nysie, Poland",
    period: "Feb 2024 - Jul 2024",
    desc:
      "Participated in a semester abroad that combined academic learning with cultural exchange. Involved in presentations, volunteering, and international programmes, which enhanced adaptability, communication, and cross-cultural collaboration skills while expanding global perspectives.",
    image: nysaImg,
  },
];

export const experience = [
  {
    year: "2025",
    period: "Jun 2025 — Present",
    org: "Digital Egypt Pioneers Initiative",
    role: "AI & Data Science, Intern",
    desc:
      "I am currently sharpening my expertise in data science through hands-on training, where I apply Python, SQL, and visualisation tools to real-world projects like predictive modelling and exploratory analysis. Alongside the technical work, I am building strong communication and problem-solving skills, while also exploring freelancing opportunities to apply my knowledge in practical, client-focused contexts.",
    tags: ["SQL", "Python", "EDA", "Predictive Modelling"],
    image: depiImg,
  },
  {
    year: "2025",
    period: "Aug 2025 — Sep 2025",
    org: "National Telecommunication Institute",
    role: "Data Analysis, Intern",
    desc:
      "Levelled up my data analysis journey at NTI — diving into Python, SQL, Excel, and visualisation tools while working on real-world projects. Along the way, I’m also sharpening soft skills and exploring freelancing, turning technical learning into practical, client-ready solutions.",
    tags: ["SQL", "Excel", "Power BI", "Power Query", "Tableau"],
    image: ntiImg,
  },
];

export const projects = [
  {
    title: "HR Analytics Project",
    date: "2025",
    desc:
      "Designed and implemented an HR analytics dashboard to reveal workforce insights and support data-driven decision-making. The project focused on analysing employee demographics, attrition trends, performance ratings, and departmental distributions. Using tools such as Excel, Power Query, and visualisation techniques, I transformed raw HR data into interactive reports that highlight key metrics including turnover rate, average tenure, and promotion patterns. The outcome equips HR managers with actionable insights to enhance retention strategies, optimise recruitment, and improve overall organisational performance.",
    tags: ["Excel", "Power Query", "Dashboard"],
    image: hrImg,
    link: "https://docs.google.com/spreadsheets/d/your-sheet-id",
    source: "https://github.com/yourusername/hr-analytics",
    dataset: "https://docs.google.com/spreadsheets/d/your-sheet-id",
  },
  {
    title: "Customers Data Analysis — Banque Misr",
    date: "Sep 2025",
    desc:
      "Performed an in-depth analysis of customer data for Banque Misr using Excel, Pivot Tables, and Power Pivot. Designed an interactive dashboard to visualise customer activity, credit card ownership, and product distribution across countries. The project revealed key insights into customer behaviour and supported data-driven business decisions.",
    tags: ["Excel", "Power Query", "Pivot Tables", "Dashboard"],
    image: misrImg,
    link: "https://docs.google.com/spreadsheets/d/1jlhaHOzgh7zaYVpn8ZlV865sAJfyVaII/edit?usp=sharing",
    dataset: "https://www.kaggle.com/datasets/coffee-shop",
  },
  {
    title: "Housing Prices Data Analysis",
    date: "Apr 2025",
    desc:
      "Analysed the House Pricing Dataset to uncover the factors influencing property values, including location, age, build quality, and construction type. Through thorough data cleaning, exploratory analysis, and visualisation in Python, I identified key patterns showing how neighbourhood, condition, and overall quality impact price. The findings offer valuable insights for buyers, sellers, and investors looking to make informed, data-driven decisions.",
    tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    image: houseImg,
    link: "https://www.kaggle.com/code/yourusername/housing-prices-analysis",
    source: "https://github.com/yourusername/housing-prices-analysis",
    dataset: "https://www.kaggle.com/datasets/coffee-shop",
  },
];

export const services = [
  {
    title: "Data Analysis Package",
    desc: "Transform data into meaningful insights that support smarter business decisions.",
    tiers: [
      {
        level: "⭐ Starter (1 Week)",
        details: "Data cleaning, exploration, and a summary of key findings."
      },
      {
        level: "🚀 Professional (2 Weeks)",
        details: "Comprehensive analysis identifying trends, patterns, and actionable insights."
      },
      {
        level: "👑 Advanced (1 Month)",
        details: "End-to-end analysis project with detailed reporting and strategic recommendations."
      }
    ]
  },
  {
    title: "Data Visualisation Package",
    desc: "Bring data to life through interactive dashboards and storytelling visuals.",
    tiers: [
      {
        level: "⭐ Starter (1 Week)",
        details: "Static charts and simple visuals using Excel or Power BI."
      },
      {
        level: "🚀 Professional (2 Weeks)",
        details: "Interactive dashboards with storytelling elements and business insights."
      },
      {
        level: "👑 Advanced (1 Month)",
        details: "Full data visualisation solution with dynamic dashboards and design refinement."
      }
    ]
  },
  {
    title: "Complete Data Solutions Package",
    desc: "Deliver complete solutions combining analysis, visualisation, and workflow optimisation.",
    tiers: [
      {
        level: "⭐ Starter (2 Weeks)",
        details: "Exploratory analysis and key visualisations with concise insights."
      },
      {
        level: "🚀 Professional (1 Month)",
        details: "Comprehensive analysis with automated reporting and dashboards."
      },
      {
        level: "👑 Advanced (2–3 Months)",
        details: "Full data project integrating analysis, automation, and interactive dashboards."
      }
    ]
  },
  {
    title: "AI & Machine Learning Package",
    desc: "Use machine learning to predict outcomes and unlock smarter decision-making.",
    tiers: [
      {
        level: "⭐ Starter (2 Weeks)",
        details: "Basic predictive models with evaluation and insights."
      },
      {
        level: "🚀 Professional (1 Month)",
        details: "Custom ML models with feature engineering and performance optimisation."
      },
      {
        level: "👑 Advanced (2–3 Months)",
        details: "Full AI solution including data pipeline, model training, and deployment."
      }
    ]
  }
];

export const contact = {
  email: "muntaha7med211@hotmail.com",
  linkedin: "www.linkedin.com/in/muntaha7hmed",
  github: "https://github.com/muntaha7med",
  kaggle: "https://www.kaggle.com/muntaha7med",
};
