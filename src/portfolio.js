/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "My Portfolio",
  description:
    "Passionate about building full-stack applications to create impactful, sustainable, and scalable solutions.",
};

//Home Page
const greeting = {
  title: "Satya Priya ",
  logo_name: "Satya Priya",
  subTitle:
    "Passionate about building full-stack applications to create impactful, sustainable, and scalable solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1IMdvt9GoJHa90IoAYGP19bm3Qr2cDz_6/view?usp=sharing",
  portfolio_repository:
    "https://drive.google.com/file/d/1IMdvt9GoJHa90IoAYGP19bm3Qr2cDz_6/view?usp=sharing",
  githubProfile: "https://github.com/SatyaPriyaAmbati",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/SatyaPriyaAmbati",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/satya-priya-ambati/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sambati1864@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/satya_ambati864/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive front end website using React-Redux .",
        "⚡ Experienced in Node.js and Spring Framework for backend development. Developed robust server-side solutions to support frontend applications, ensuring smooth integration and optimal performance.",
        "⚡ Utilized databases such as MySQL and MongoDB to efficiently manage and manipulate data, ensuring seamless integration within full-stack applications.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Technologies",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms.",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases.",
        "⚡Proficient in designing and implementing CI/CD pipelines for smooth software development and deployment workflows.",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },

        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/satyapriyaambati/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/satyapriya_amba1",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kennesaw State University",
      subtitle: "M.S. in Computer Science",
      logo_path: "college-logo.png",
      alt_name: "Marietta,Georgia",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have studied courses which is related to DS, Algorithms, DBMS, operating systams, Computer organization, AI etc.",
        "⚡ As a secondary instructor for a web development course, I guided 60 undergraduate students in mastering front-end libraries through interactive sessions, fostering rapid comprehension and skill acquisition.",
        "⚡Additionally, I actively participated in web development projects, notably collaborating on the creation of a university website that facilitates student grade management.",
      ],
      website_link: "https://www.kennesaw.edu//",
    },
    {
      title: "Vasireddy Venkatadri Institute Of Technology",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "VVIT_Logo.png",
      alt_name: "VVIT",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Explored software engineering basics like Big Data, AI, ML, and DBMS. Skilled in Java, Python, C, and C++. Familiar with web technologies such as HTML, CSS, and JavaScript.",
        "⚡ Additionally, I had the opportunity to participate in the Infosys Certified Software Engineer program.",
        "⚡ Successfully completed professional courses in SQL, Python, and machine learning on Coursera, attaining a high level of proficiency in these domains.",
      ],
      website_link: "https://www.vvitguntur.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML",
      subtitle: "- SoloLearn",
      logo_path: "Sololearn.png",
      certificate_link:
        "https://drive.google.com/file/d/1hETUL4oorNm723EvGfC6owEgSVKdYDO_/view",
      color_code: "#1F70C199",
    },
    {
      title: "JavaScript",
      subtitle: "- freeCodeCamp",
      logo_path: "freeCodeCamp.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/satyapriya/javascript-algorithms-and-data-structures-v8",
      color_code: "#A9A9A9",
    },
    {
      title: "ReactJS",
      subtitle: "- freeCodeCamp",
      logo_path: "freeCodeCamp.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/satyapriya/front-end-development-libraries",
      alt_name: "freeCodeCamp",
      color_code: "#A9A9A9",
    },
    {
      title: "SQL",
      subtitle: "- SoloLearn",
      logo_path: "Sololearn.png",
      certificate_link:
        "https://drive.google.com/file/d/1p1iyjOQoBJH4P7dHBQtonkQrtbYHSrQT/view",
      color_code: "#1F70C199",
    },
    {
      title: "Salesforce Platform Developer 1",
      subtitle: "- Salesforce",
      logo_path: "Salesforce_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1roL0Tvim461zpT0pscL7nfx024b0uikP/view?usp=sharing",
      color_code: "#ADD8E6",
    },
    {
      title: "Automation",
      subtitle: "- GUVI",
      logo_path: "GUVI_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Sg_SanmnK_fAnHCAaW69Dl5NiCLTPD0_/view",
      alt_name: "GUVI",
      color_code: "#98FB98",
    },
    {
      title: "Machine Learning Foundations",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1e_Psxl-xuNks8723fgFTBY9nCjuYQW7Z/view",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Python",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Schi-y6rg4OErVJCsOllq2ov7FyWS56d/view",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "SQL",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/13aWG_RnhTdpqgnMghRQPbEdqwFZYG3T4/view",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a software engineer with two years of experience, I transitioned into full-stack development, where I played a pivotal role as a team member in the development of various web applications. This experience afforded me ample opportunities for learning and growth, as I independently developed and contributed to different projects.",
  header_image_path: "experience.svg",

  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "Kennesaw State University",
          company_url: "https://www.kennesaw.edu//",
          logo_path: "college-logo.png",
          duration: "Aug 2022 - May 2024",
          location: "Marietta, GA, USA",
          description:
            "Dedicated lab instructor with a strong background in web development, which includes React, JavaScript, HTML, CSS, and Java programming. Experienced in facilitating and guiding classes of up to 60 undergraduates, successfully integrating theoretical knowledge with practical applications. Committed to fostering a dynamic learning environment that enhances student comprehension and skill development.",
          color: "#000000",
        },
        {
          title: "Full Stack Developer/ Software Engineer",
          company: "Persistent Systems",
          company_url: "https://www.persistent.com/",
          logo_path: "Persistent_logo.png",
          duration: "Aug 2020 - Aug 2022",
          location: "Hyderabad, India",
          description:
            "As a full-stack developer developed a hospital website using React, JavaScript, Node.js, and SQL, collaborating with AbbVie to deliver flexible medication solutions and foster client engagement, leading to business growth.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [],
    },
    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "My projects includes the various full stack applications.",
  avatar_image_path: "projects_image.svg",
};
const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Contact_logo.png",
    description:
      "I maintain an active presence on numerous professional social media platforms.",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    subtitle: "Marietta,Georgia contact me -  sambati1864@gmail.com",
    locality: "Marietta",
    country: "USA",
    region: "Georgia",
    postalCode: "30067",
    email: "sambati1864@gmail.com",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/dir//860+Franklin+Gateway+SE,+Marietta,+GA+30067/@33.9320334,-84.5820076,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f511679b00be1f:0x4bf8070a92180a30!2m2!1d-84.4996064!2d33.9320608?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
