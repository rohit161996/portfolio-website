export const resume = {
  name: 'ROHIT RAMCHANDANI',
  contact: {
    phone1: '+91-7737577188',
    phone2: '+91 -7055438249',
    email: 'ramchandani.rohit16@gmail.com',
    links: {
      linkedin: '#',
      github: '#',
    },
  },

  about: `Experienced senior software engineer with 4+ years of expertise in full -stack web development and
algorithm  design. Skilled in  Spring Boot, Hibernate, Nodejs, Docker, React, React Native  and AWS. Adept
at collaborating  with cross -functional teams to deliver scalable, high -quality applications that meet
business objectives.  Demonstrated expertise in enhancing system efficiency, automating workflows,
improving user productivity.`,

  experience: [
    {
      title: 'Sr. Software Developer',
      company: 'ST Microelectronics',
      dates: 'January 2023 – Present',
      location: 'Noida, India',
      bullets: [
        'Designed and developed a full-stack IoT monitoring system for real -time telemetry tracking (temperature, humidity, water leaks, door motion) using Bluetooth, LoRaWAN, and IOKey gateways.',
        "Built a responsive React.js web portal with Tailwind CSS, React Router, and Redux for data visualization, device management, and alert-driven automation; implemented performance optimizations (lazy loading, memoization).",
        'Developed and integrated RESTful and GraphQL APIs in Node.js/Express and Spring Boot for real -time sensor updates, authentication/authorization (JWT, OAuth2), and secure session management with CSRF/XSRF token protection.',
        'Designed and optimized the database layer using PostgreSQL and MongoDB with indexing, caching (Redis), and ORM frameworks (Sequelize/Mongoose) for high -performance queries and scalability.',
        'Deployed backend services on AWS EC2 with reverse proxy/load balancing via Nginx; managed runtime processes using PM2 and containerized deployments with Docker.',
        'Integrated AWS SES/SNS for notifications, leveraged IAM for secure access control, and used S3 for storage of device logs and reports.',
        'Managed data flow across the ecosystem (Sensor → Gateway → Verizon ThingSpace → Backend → Web Portal), ensuring reliable event ingestion, storage, and fault -tolerant retries.',
        'Collaborated with cross -functional teams to refine alerting logic, improve dashboards, and scale the platform for higher concurrency.',
        'Followed best practices in Git, Agile, and CI/CD pipelines (GitHub Actions, Jenkins) with automated testing (Jest, Postman, Cypress) to ensure code quality and deployment efficiency.',
        'Documented and exposed APIs using Swagger/OpenAPI, and contributed to code reviews, sprint planning, and knowledge sharing.',
      ],
    },

    {
      title: 'Technical Consultant',
      company: 'Prepladder (Unacademy)',
      dates: 'June 2021 – October 2021',
      location: 'Delhi, India',
      bullets: [
        'Built responsive UI components using React.js, Tailwind CSS, HTML5, and JavaScript to deliver interactive learning modules. Collaborated with design and content teams to enhance UX across web and mobile platforms.',
        'Ensured accessibility, SEO optimization, and cross-browser compatibility using modern front-end best practices.',
      ],
    },

    {
      title: 'Software Developer',
      company: 'Chegg',
      dates: 'September 2020 – June 2021',
      location: 'Delhi, India',
      bullets: [
        'Built responsive web solutions using React.js, HTML5, CSS3, and JavaScript to explain Computer Science concepts.',
        'Used Git for version control and collaborated with content teams to ensure high-quality, engaging user experiences.',
      ],
    },

    {
      title: 'Software Developer',
      company: 'IWork Technologies',
      dates: 'May 2018 – June 2019',
      location: 'Pune, India',
      bullets: [
        'Built a data analytics dashboard using Shiny (R) and JavaScript, enabling real-time visualization of sensor data (acceleration, gyroscope) collected in JSON format from a Xamarin Android app monitoring driver behavior across 3,000+ users.',
        'Developed interactive, web-based visualizations and charts to deliver actionable insights on driving safety, leveraging R libraries and responsive UI design for optimal user experience.',
        'Designed and implemented a web application to analyze Atlassian JIRA issue tracking data, identifying workload imbalances and productivity trends across 2,000+ software developers and QA testers.',
        'Integrated APIs to fetch and display issue tracking data, transforming raw logs into intuitive charts and metrics using HTML5, CSS3, JavaScript, and data visualization frameworks.',
      ],
    },
  ],

  skills: {
    languages: ['JavaScript', 'Typescript', 'Java', 'Python', 'SQL', 'HTML', 'CSS'],
    databases: ['Oracle DB', 'PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
    frameworks: ['React', 'React Native', 'jQuery', 'Spring Boot', 'NodeJS', 'Bootstrap', 'Tailwind'],
    tools: ['Git', 'Docker', 'Jenkins', 'JIRA', 'Bugzilla'],
  },

  education: [
    {
      school: 'Delhi Technological University',
      location: 'Delhi, India',
      dates: '2021 - 2023',
      degree: 'Masters of Technology in Data Science (DSC)',
      cgpa: '9.33',
      coursework: 'Probability and Statistics, Data Warehousing & Data Mining, Data Management and Ethics, Data Preparation and Analysis, Machine Learning, Deep Learning, Swarm and Evolutionary Computing.',
    },
    {
      school: 'UPES',
      location: 'Dehradun, India',
      dates: '2015 - 2019',
      degree: 'Bachelor of Technology, Computer Science and Engineering (CSE)',
      cgpa: '7.35',
      coursework: 'Database Management Systems, Operating Systems, Data Communication and Computer Networks, Design and Analysis of Algorithms, Cryptography and Network Security.',
    },
  ],

  projects: [
    {
      title: 'Pothole Recognition System',
      desc: `Developed a system to detect potholes and provide real -time alerts to vehicles, improving road safety and driving experience. Utilized image processing techniques such as binarization, edge detection, and blob recognition with OpenCV for accurate pothole identification. Achieved 95% accuracy on aggregated test datasets, demonstrating high reliability in diverse road conditions.`,
    },
  ],
};

export default resume;
