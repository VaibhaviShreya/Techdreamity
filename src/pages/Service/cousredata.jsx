// courseData.js
import { BookOpen, Play, Award, Users, Clock, Star, Brain, Database, BarChart3, Code } from 'lucide-react';

export const coursesData = {
  fullstack: {
    id: 'fullstack',
    title: "Complete Full Stack Web Development",
    subtitle: "Master Modern Web Development with React, Node.js, and MongoDB",
    description: "Transform your career with our comprehensive full stack development course. Learn to build dynamic, responsive web applications from scratch using industry-standard technologies. This hands-on course covers everything from frontend user interfaces to backend APIs and database management.",
    price: 199,
    originalPrice: 299,
    rating: 4.9,
    reviews: 2847,
    students: 15420,
    duration: "16 weeks",
    level: "Beginner to Advanced",
    certificate: true,
    sections: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        lessons: 12,
        duration: "2 weeks",
        icon: <BookOpen className="w-5 h-5 text-blue-600" />,
        subTopics: [
          {
            title: "HTML Structure & Elements",
            topics: [
              "HTML Document Structure",
              "Semantic HTML Tags",
              "Forms and Input Elements",
              "Tables and Data Representation",
              "Media Elements (Images, Audio, Video)",
              "HTML5 New Features"
            ]
          },
          {
            title: "CSS Styling & Layout",
            topics: [
              "CSS Selectors and Specificity",
              "Box Model and Positioning",
              "Flexbox Layout System",
              "CSS Grid Layout",
              "Responsive Design Principles",
              "CSS Animations and Transitions"
            ]
          }
        ]
      },
      {
        id: 2,
        title: "JavaScript Programming",
        lessons: 18,
        duration: "3 weeks",
        icon: <Play className="w-5 h-5 text-yellow-600" />,
        subTopics: [
          {
            title: "JavaScript Fundamentals",
            topics: [
              "Variables and Data Types",
              "Functions and Scope",
              "Objects and Arrays",
              "Control Flow and Loops",
              "Error Handling",
              "ES6+ Modern Features"
            ]
          },
          {
            title: "DOM Manipulation & Events",
            topics: [
              "DOM Selection and Traversal",
              "Event Handling and Listeners",
              "Dynamic Content Creation",
              "Form Validation",
              "Local Storage and Session Storage",
              "Async JavaScript and Promises"
            ]
          }
        ]
      },
      {
        id: 3,
        title: "React.js Frontend Development",
        lessons: 24,
        duration: "4 weeks",
        icon: <Award className="w-5 h-5 text-cyan-600" />,
        subTopics: [
          {
            title: "React Components & JSX",
            topics: [
              "Component Architecture",
              "JSX Syntax and Rendering",
              "Props and State Management",
              "Event Handling in React",
              "Conditional Rendering",
              "Lists and Keys"
            ]
          },
          {
            title: "Advanced React Concepts",
            topics: [
              "React Hooks (useState, useEffect)",
              "Context API for State Management",
              "React Router for Navigation",
              "Custom Hooks Development",
              "Performance Optimization",
              "Testing React Components"
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Node.js Backend Development",
        lessons: 20,
        duration: "3.5 weeks",
        icon: <Users className="w-5 h-5 text-green-600" />,
        subTopics: [
          {
            title: "Node.js & Express.js",
            topics: [
              "Node.js Runtime Environment",
              "Express.js Framework Setup",
              "Routing and Middleware",
              "Request and Response Handling",
              "File System Operations",
              "Package Management with NPM"
            ]
          },
          {
            title: "RESTful API Development",
            topics: [
              "REST API Design Principles",
              "HTTP Methods and Status Codes",
              "JSON Data Handling",
              "API Authentication & Security",
              "Error Handling and Validation",
              "API Testing and Documentation"
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Database & MongoDB",
        lessons: 16,
        duration: "2.5 weeks",
        icon: <Clock className="w-5 h-5 text-purple-600" />,
        subTopics: [
          {
            title: "Database Fundamentals",
            topics: [
              "Database Design Principles",
              "SQL vs NoSQL Databases",
              "MongoDB Installation and Setup",
              "Collections and Documents",
              "CRUD Operations",
              "Database Indexing"
            ]
          },
          {
            title: "MongoDB with Node.js",
            topics: [
              "Mongoose ODM Integration",
              "Schema Design and Models",
              "Database Connections",
              "Query Building and Aggregation",
              "Database Validation",
              "Performance Optimization"
            ]
          }
        ]
      },
      {
        id: 6,
        title: "Full Stack Integration & Deployment",
        lessons: 14,
        duration: "2 weeks",
        icon: <Star className="w-5 h-5 text-orange-600" />,
        subTopics: [
          {
            title: "Frontend-Backend Integration",
            topics: [
              "API Integration with React",
              "State Management Across Stack",
              "Authentication Flow",
              "File Upload and Handling",
              "Real-time Features with WebSockets",
              "Error Handling and User Feedback"
            ]
          },
          {
            title: "Deployment & DevOps",
            topics: [
              "Environment Configuration",
              "Cloud Deployment (Heroku, Netlify)",
              "Database Hosting (MongoDB Atlas)",
              "CI/CD Pipeline Setup",
              "Performance Monitoring",
              "Security Best Practices"
            ]
          }
        ]
      }
    ]
  },
  
  aiml: {
    id: 'aiml',
    title: "AI & Machine Learning Mastery",
    subtitle: "From Python Basics to Advanced Deep Learning and AI Applications",
    description: "Dive deep into the world of Artificial Intelligence and Machine Learning. This comprehensive course covers everything from Python programming for AI to advanced neural networks, computer vision, and natural language processing. Build real-world AI applications and understand the ethics of AI development.",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 1923,
    students: 8750,
    duration: "20 weeks",
    level: "Intermediate to Advanced",
    certificate: true,
    sections: [
      {
        id: 1,
        title: "Python for AI & Data Science",
        lessons: 15,
        duration: "3 weeks",
        icon: <Code className="w-5 h-5 text-green-600" />,
        subTopics: [
          {
            title: "Python Fundamentals",
            topics: [
              "Python Syntax and Data Types",
              "Control Structures and Functions",
              "Object-Oriented Programming",
              "File Handling and Exception Management",
              "Python Libraries Overview",
              "Virtual Environments and Package Management"
            ]
          },
          {
            title: "NumPy & Pandas",
            topics: [
              "NumPy Arrays and Operations",
              "Mathematical Functions and Broadcasting",
              "Pandas DataFrames and Series",
              "Data Cleaning and Preprocessing",
              "Data Aggregation and Grouping",
              "Time Series Analysis"
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Machine Learning Fundamentals",
        lessons: 22,
        duration: "4 weeks",
        icon: <Brain className="w-5 h-5 text-purple-600" />,
        subTopics: [
          {
            title: "Supervised Learning",
            topics: [
              "Linear and Logistic Regression",
              "Decision Trees and Random Forests",
              "Support Vector Machines",
              "K-Nearest Neighbors",
              "Naive Bayes Classification",
              "Ensemble Methods and Boosting"
            ]
          },
          {
            title: "Unsupervised Learning",
            topics: [
              "K-Means and Hierarchical Clustering",
              "Principal Component Analysis (PCA)",
              "t-SNE and UMAP",
              "Association Rules Mining",
              "Anomaly Detection",
              "Dimensionality Reduction Techniques"
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Deep Learning & Neural Networks",
        lessons: 28,
        duration: "5 weeks",
        icon: <Award className="w-5 h-5 text-red-600" />,
        subTopics: [
          {
            title: "Neural Network Fundamentals",
            topics: [
              "Perceptrons and Multi-layer Networks",
              "Backpropagation Algorithm",
              "Activation Functions",
              "Loss Functions and Optimization",
              "Regularization Techniques",
              "Hyperparameter Tuning"
            ]
          },
          {
            title: "Advanced Deep Learning",
            topics: [
              "Convolutional Neural Networks (CNN)",
              "Recurrent Neural Networks (RNN)",
              "Long Short-Term Memory (LSTM)",
              "Transformer Architecture",
              "Generative Adversarial Networks (GAN)",
              "Transfer Learning and Fine-tuning"
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Computer Vision",
        lessons: 18,
        duration: "3 weeks",
        icon: <Play className="w-5 h-5 text-blue-600" />,
        subTopics: [
          {
            title: "Image Processing Fundamentals",
            topics: [
              "Image Preprocessing and Enhancement",
              "Edge Detection and Feature Extraction",
              "Object Detection Algorithms",
              "Image Segmentation Techniques",
              "Color Space Transformations",
              "Geometric Transformations"
            ]
          },
          {
            title: "Advanced Computer Vision",
            topics: [
              "YOLO and R-CNN Architectures",
              "Facial Recognition Systems",
              "Optical Character Recognition (OCR)",
              "Video Processing and Analysis",
              "3D Computer Vision",
              "Real-time Object Tracking"
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Natural Language Processing",
        lessons: 20,
        duration: "4 weeks",
        icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
        subTopics: [
          {
            title: "NLP Fundamentals",
            topics: [
              "Text Preprocessing and Tokenization",
              "Part-of-Speech Tagging",
              "Named Entity Recognition",
              "Sentiment Analysis",
              "Text Classification",
              "Language Modeling"
            ]
          },
          {
            title: "Advanced NLP",
            topics: [
              "Word Embeddings (Word2Vec, GloVe)",
              "Transformer Models (BERT, GPT)",
              "Machine Translation",
              "Question Answering Systems",
              "Chatbot Development",
              "Text Generation and Summarization"
            ]
          }
        ]
      },
      {
        id: 6,
        title: "AI Ethics & Deployment",
        lessons: 12,
        duration: "2 weeks",
        icon: <Star className="w-5 h-5 text-orange-600" />,
        subTopics: [
          {
            title: "AI Ethics & Responsible AI",
            topics: [
              "Bias and Fairness in AI",
              "Explainable AI (XAI)",
              "Privacy and Data Protection",
              "AI Governance and Regulations",
              "Ethical Decision Making",
              "Social Impact of AI"
            ]
          },
          {
            title: "Model Deployment & MLOps",
            topics: [
              "Model Packaging and Containerization",
              "Cloud Deployment (AWS, GCP, Azure)",
              "Model Monitoring and Maintenance",
              "A/B Testing for ML Models",
              "Continuous Integration/Deployment",
              "Scaling ML Applications"
            ]
          }
        ]
      }
    ]
  },
  
  dataanalyst: {
    id: 'dataanalyst',
    title: "Data Analyst Professional Track",
    subtitle: "Excel, SQL, Python, and Tableau for Data-Driven Decision Making",
    description: "Master the essential skills of data analysis and become a sought-after data professional. Learn to collect, clean, analyze, and visualize data using industry-standard tools. This course combines statistical analysis, data visualization, and business intelligence to help you make data-driven decisions.",
    price: 179,
    originalPrice: 249,
    rating: 4.7,
    reviews: 3245,
    students: 12890,
    duration: "14 weeks",
    level: "Beginner to Intermediate",
    certificate: true,
    sections: [
      {
        id: 1,
        title: "Excel for Data Analysis",
        lessons: 16,
        duration: "2.5 weeks",
        icon: <BarChart3 className="w-5 h-5 text-green-600" />,
        subTopics: [
          {
            title: "Excel Fundamentals",
            topics: [
              "Excel Interface and Navigation",
              "Data Entry and Formatting",
              "Formulas and Functions",
              "Cell References and Named Ranges",
              "Data Validation and Protection",
              "Keyboard Shortcuts and Efficiency"
            ]
          },
          {
            title: "Advanced Excel Analytics",
            topics: [
              "Pivot Tables and Pivot Charts",
              "VLOOKUP, HLOOKUP, and INDEX-MATCH",
              "Conditional Formatting",
              "Data Analysis ToolPak",
              "Scenario Analysis and Goal Seek",
              "Dashboard Creation"
            ]
          }
        ]
      },
      {
        id: 2,
        title: "SQL for Data Retrieval",
        lessons: 20,
        duration: "3.5 weeks",
        icon: <Database className="w-5 h-5 text-blue-600" />,
        subTopics: [
          {
            title: "SQL Fundamentals",
            topics: [
              "Database Concepts and Structure",
              "SELECT Statements and Filtering",
              "Sorting and Grouping Data",
              "Aggregate Functions (COUNT, SUM, AVG)",
              "Data Types and Constraints",
              "Basic Database Design"
            ]
          },
          {
            title: "Advanced SQL Queries",
            topics: [
              "JOIN Operations (INNER, LEFT, RIGHT)",
              "Subqueries and CTEs",
              "Window Functions",
              "Date and Time Functions",
              "String Manipulation",
              "Performance Optimization"
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Python for Data Analysis",
        lessons: 18,
        duration: "3 weeks",
        icon: <Code className="w-5 h-5 text-yellow-600" />,
        subTopics: [
          {
            title: "Python Data Libraries",
            topics: [
              "Pandas for Data Manipulation",
              "NumPy for Numerical Computing",
              "Data Cleaning and Preprocessing",
              "Handling Missing Data",
              "Data Transformation Techniques",
              "File I/O Operations"
            ]
          },
          {
            title: "Statistical Analysis",
            topics: [
              "Descriptive Statistics",
              "Correlation and Regression Analysis",
              "Hypothesis Testing",
              "A/B Testing Framework",
              "Statistical Significance",
              "Distribution Analysis"
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Data Visualization",
        lessons: 22,
        duration: "3.5 weeks",
        icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
        subTopics: [
          {
            title: "Python Visualization",
            topics: [
              "Matplotlib Fundamentals",
              "Seaborn for Statistical Plots",
              "Interactive Plots with Plotly",
              "Chart Types and Best Practices",
              "Color Theory and Design",
              "Storytelling with Data"
            ]
          },
          {
            title: "Tableau Desktop",
            topics: [
              "Tableau Interface and Navigation",
              "Connecting to Data Sources",
              "Creating Charts and Graphs",
              "Calculated Fields and Parameters",
              "Dashboard Design and Interactivity",
              "Publishing and Sharing"
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Business Intelligence",
        lessons: 14,
        duration: "2.5 weeks",
        icon: <Award className="w-5 h-5 text-red-600" />,
        subTopics: [
          {
            title: "KPI Development",
            topics: [
              "Key Performance Indicators",
              "Metric Selection and Definition",
              "Business Requirements Gathering",
              "Stakeholder Communication",
              "Data Governance Principles",
              "Reporting Best Practices"
            ]
          },
          {
            title: "Advanced Analytics",
            topics: [
              "Forecasting and Trend Analysis",
              "Cohort Analysis",
              "Customer Segmentation",
              "Market Basket Analysis",
              "Predictive Analytics Basics",
              "ROI and Business Impact Measurement"
            ]
          }
        ]
      },
      {
        id: 6,
        title: "Capstone Project",
        lessons: 8,
        duration: "1.5 weeks",
        icon: <Star className="w-5 h-5 text-orange-600" />,
        subTopics: [
          {
            title: "End-to-End Analysis Project",
            topics: [
              "Project Planning and Scope Definition",
              "Data Collection and Cleaning",
              "Exploratory Data Analysis",
              "Statistical Analysis and Insights",
              "Visualization and Dashboard Creation",
              "Presentation and Recommendations"
            ]
          },
          {
            title: "Portfolio Development",
            topics: [
              "GitHub Portfolio Setup",
              "Project Documentation",
              "Case Study Writing",
              "Resume Building for Data Roles",
              "Interview Preparation",
              "Industry Networking"
            ]
          }
        ]
      }
    ]
  },
  
  datascience: {
    id: 'datascience',
    title: "Data Science Complete Bootcamp",
    subtitle: "Python, Machine Learning, Statistics, and Big Data Analytics",
    description: "Become a certified data scientist with our comprehensive bootcamp. Master statistical analysis, machine learning algorithms, data visualization, and big data technologies. Work on real-world projects and build a portfolio that showcases your data science expertise to potential employers.",
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviews: 1567,
    students: 6780,
    duration: "24 weeks",
    level: "Intermediate to Advanced",
    certificate: true,
    sections: [
      {
        id: 1,
        title: "Statistics & Probability",
        lessons: 20,
        duration: "4 weeks",
        icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
        subTopics: [
          {
            title: "Descriptive Statistics",
            topics: [
              "Measures of Central Tendency",
              "Measures of Variability",
              "Distribution Shapes and Outliers",
              "Data Visualization Techniques",
              "Correlation and Covariance",
              "Sampling Methods"
            ]
          },
          {
            title: "Inferential Statistics",
            topics: [
              "Probability Distributions",
              "Central Limit Theorem",
              "Hypothesis Testing",
              "Confidence Intervals",
              "ANOVA and Chi-Square Tests",
              "Bayesian Statistics"
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Python Programming for Data Science",
        lessons: 25,
        duration: "4.5 weeks",
        icon: <Code className="w-5 h-5 text-green-600" />,
        subTopics: [
          {
            title: "Python Fundamentals",
            topics: [
              "Python Syntax and Data Structures",
              "Functions and Object-Oriented Programming",
              "Error Handling and Debugging",
              "File I/O and Data Formats",
              "Regular Expressions",
              "Web Scraping with BeautifulSoup"
            ]
          },
          {
            title: "Data Science Libraries",
            topics: [
              "NumPy for Numerical Computing",
              "Pandas for Data Manipulation",
              "Matplotlib and Seaborn for Visualization",
              "Scikit-learn for Machine Learning",
              "Jupyter Notebook Workflow",
              "Version Control with Git"
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Machine Learning Algorithms",
        lessons: 30,
        duration: "5 weeks",
        icon: <Brain className="w-5 h-5 text-purple-600" />,
        subTopics: [
          {
            title: "Supervised Learning",
            topics: [
              "Linear and Polynomial Regression",
              "Logistic Regression",
              "Decision Trees and Random Forests",
              "Support Vector Machines",
              "K-Nearest Neighbors",
              "Ensemble Methods and Boosting"
            ]
          },
          {
            title: "Unsupervised Learning",
            topics: [
              "K-Means and Hierarchical Clustering",
              "Principal Component Analysis",
              "t-SNE and UMAP",
              "Association Rules Mining",
              "Anomaly Detection",
              "Recommendation Systems"
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Deep Learning & Neural Networks",
        lessons: 24,
        duration: "4 weeks",
        icon: <Award className="w-5 h-5 text-red-600" />,
        subTopics: [
          {
            title: "Neural Network Fundamentals",
            topics: [
              "Perceptrons and Multi-layer Networks",
              "Backpropagation and Gradient Descent",
              "Activation Functions and Optimizers",
              "Loss Functions and Regularization",
              "Hyperparameter Tuning",
              "TensorFlow and Keras"
            ]
          },
          {
            title: "Advanced Deep Learning",
            topics: [
              "Convolutional Neural Networks",
              "Recurrent Neural Networks",
              "Long Short-Term Memory Networks",
              "Autoencoders and GANs",
              "Transfer Learning",
              "Natural Language Processing"
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Big Data Technologies",
        lessons: 18,
        duration: "3 weeks",
        icon: <Database className="w-5 h-5 text-cyan-600" />,
        subTopics: [
          {
            title: "Big Data Fundamentals",
            topics: [
              "Hadoop Ecosystem Overview",
              "Distributed Computing Concepts",
              "MapReduce Programming",
              "HDFS and Data Storage",
              "Spark for Big Data Processing",
              "NoSQL Databases"
            ]
          },
          {
            title: "Cloud Analytics",
            topics: [
              "AWS Data Services",
              "Google Cloud Platform",
              "Azure Machine Learning",
              "Cloud Storage Solutions",
              "Serverless Computing",
              "Real-time Data Processing"
            ]
          }
        ]
      },
      {
        id: 6,
        title: "Capstone Projects & Portfolio",
        lessons: 15,
        duration: "3 weeks",
        icon: <Star className="w-5 h-5 text-orange-600" />,
        subTopics: [
          {
            title: "Real-world Projects",
            topics: [
              "Customer Churn Prediction",
              "Stock Price Forecasting",
              "Sentiment Analysis Project",
              "Recommendation Engine",
              "Image Classification System",
              "Time Series Analysis"
            ]
          },
          {
            title: "Career Preparation",
            topics: [
              "Portfolio Development",
              "GitHub Profile Optimization",
              "Technical Interview Preparation",
              "Data Science Resume Building",
              "Networking and Job Search",
              "Freelancing and Consulting"
            ]
          }
        ]
      }
    ]
    
  }
};

export default coursesData;