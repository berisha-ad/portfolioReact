import python from "./icons/python.svg";
import django from "./icons/django.svg";
import php from "./icons/php.svg";
import node from "./icons/node.svg";
import react from "./icons/react.svg";
import html from "./icons/html.svg";
import css from "./icons/css.svg";
import javascript from "./icons/javascript.svg";
import tailwind from "./icons/tailwind.svg";
import postman from "./icons/postman.svg";
import docker from "./icons/docker.svg";
import git from "./icons/git.svg";
import figma from "./icons/figma.svg";
import photoshop from "./icons/photoshop.svg";
import illustrator from "./icons/illustrator.svg";
import webflow from "./icons/webflow.svg";
import express from "./icons/express.svg";
import expressWhite from "./icons/express-white.svg";
import next from "./icons/next-white.svg";
import nextAccent from "./icons/next-accent.svg";
import expressAccent from "./icons/express-accent.svg";
import laravel from "./icons/laravel.svg";
import typescript from "./icons/typescript.svg";
import wordpress from "./icons/wordpress.svg";

import elega from "./images/elega.jpg";
import quranapp from "./images/quranapp.png";
import portfolio from "./images/portfolio.jpg";
import portfolioReact from "./images/portfolioReact.jpg";
import zukunftsraum from "./images/zukunftsraum.jpg";
import sh2 from "./images/sh2.jpg";
import coffeeshop from "./images/coffeeshop.jpg";
import terrassencafe from "./images/terrassencafe.jpg";
import hautzentrum from "./images/hautzentrum.jpg";
import jobinterviews from "./images/jobinterviewchat.jpg";
import webstruct from "./images/webstruct.jpg";
import planbase from "./images/planbase.jpg";
import netdev from "./images/netdev.jpg";
import simbasports from "./images/simbascreen.jpg";

const projects = [
  {
    id: 1,
    online: false,
    title: "Elega",
    description:
      "This car listing web app was developed using vanilla PHP, offering a robust platform for users to manage car listings seamlessly. The application features a user registration and login system, allowing users to securely create accounts, sign in, and access personalized dashboards. With full CRUD (Create, Read, Update, Delete) functionality, users can easily add new car listings, view existing listings, edit them, or remove them from the platform as needed. The app integrates with a MySQL database to store user and car listing data, ensuring smooth data retrieval and manipulation. The design focuses on simplicity and functionality, offering an intuitive user interface that makes managing car listings efficient. This project demonstrates proficiency in PHP for building dynamic, data-driven applications and showcases skills in user authentication, database management, and full-stack web development.",
    year: "2025",
    link: "https://github.com/berisha-ad/elega",
    image: elega,
    skills: [php, html, css, javascript, docker],
  },
  {
    id: 2,
    online: true,
    title: "Webstruct",
    description:
      "Webstruct is a personal portfolio and business website developed using Next.js, showcasing a comprehensive range of services including branding, UX/UI design, web design, and full-stack development. The site features a sleek, custom-built interface that reflects a strong design sensibility and technical expertise. It includes a website speed testing tool powered by the Google PageSpeed API, allowing users to analyze and optimize their web performance. Additionally, a fully functional contact form enables potential clients to reach out directly, streamlining communication. Every aspect of the site—from logo design and visual identity to front-end and back-end implementation—was crafted in-house, highlighting proficiency in modern web technologies, performance optimization, and user-centered design. This project serves as a dynamic showcase of both creative and technical skills within a professional context.",
    year: "2025",
    link: "https://www.webstruct.at/",
    image: webstruct,
    skills: [next, javascript, tailwind],
  },
  {
    id: 3,
    online: false,
    title: "Jobinterviews",
    description:
      "This job interview web app, built with React, Tailwind CSS, and Node.js with Express, provides an interactive platform for users to practice job interviews with an AI assistant. The backend integrates the OpenAI API, enabling dynamic, job-specific interview questions and real-time evaluation. Users start by entering a job title, after which the AI conducts a mock interview with 10 relevant questions. Each response is scored on a scale of 1 to 10, and at the end of the session, users receive a detailed assessment indicating whether they have passed or not. The seamless communication between the frontend and backend ensures a smooth user experience, while the modern interface makes interview preparation engaging and effective. This project highlights expertise in full-stack development, API integration, and AI-driven interactions, demonstrating strong skills in React, backend API communication, and real-time scoring.",
    year: "2025",
    link: "https://github.com/berisha-ad/jobinterviews",
    image: jobinterviews,
    skills: [react, tailwind, node, expressWhite, postman],
  },
  {
    id: 4,
    online: false,
    title: "Netdev",
    description:
      "netdev is a platform for software developers, built with React, TypeScript, and Tailwind CSS on the frontend and Laravel on the backend, designed to let users create a personal account, build a small portfolio, upload their CV, showcase projects, add skills, and define their location within a clean and responsive interface. A key aspect of the platform is its many-to-many data structure, allowing users to associate themselves with existing skills and locations or create new ones that other users can also utilize. This setup enables precise filtering and searching based on skills, locations, or their combinations. Registration and onboarding are handled through email confirmation, while performance, data security, and efficient database queries remain central to the development. Future plans include advanced filtering and sorting, bookmarks, skill-based recommendations, and CV exports, making netdev a practical demonstration of full-stack web development expertise and a platform tailored to the real needs of developers.",
    year: "2025",
    link: "/",
    image: netdev,
    skills: [react, typescript, laravel, tailwind, docker],
  },
  // {
  //   id: 5,
  //   title: "Portfolio",
  //   description:
  //     "This portfolio website was built using React and Vite, reflecting a refined approach to modern frontend development. After gaining confidence in React, the project was developed to take full advantage of its component-based architecture, ensuring a modular, scalable, and maintainable code structure. The website features a dynamic project showcase, interactive UI elements, and smooth navigation, all optimized for performance and user experience. To enhance styling efficiency and maintainability, Tailwind CSS was integrated, allowing for a clean and responsive design without excessive custom CSS. The utility-first approach of Tailwind ensures a streamlined development process while maintaining flexibility in styling. Best practices in state management, reusable components, and performance optimization were followed, demonstrating a strong understanding of React’s ecosystem. This portfolio not only highlights the ability to build modern, high-performance web applications but also serves as a testament to the journey of mastering React, Vite, and Tailwind CSS in real-world projects.",
  //   year: "2025",
  //   link: "https://github.com/berisha-ad/portfolioReact",
  //   image: portfolioReact,
  //   skills: [react, tailwind],
  // },
  {
    id: 6,
    online: true,
    title: "Simba Sports Gym",
    description:
      "I developed a modern, high-performance website for Simba Sports Gym, a boxing gym located in Vienna’s 21st district, using Next.js and Tailwind CSS in combination with WordPress as a headless CMS. The site was designed to reflect the energetic and bold branding of the gym, with a clean, responsive user interface that performs seamlessly across all devices. A key feature of the project is a dynamic trial training registration system, where users can sign up by providing their name, email, and preferred date. The system securely checks the WordPress database to ensure that the user hasn’t already registered for a trial session. If they have, they are informed accordingly; if not, they receive a personalized PDF ticket via email. This ticket includes their name, selected date, and a unique, randomly generated verification code to prevent misuse or duplication. This code can be cross-checked at the gym’s front desk. The email is sent from a dedicated no-reply address, and the ticket design aligns with the gym’s branding for a professional and engaging experience. This project demonstrates my ability to integrate frontend technologies with custom backend logic, build secure and user-centric features, and deliver scalable digital solutions tailored to a client’s operational needs.",
    year: "2025",
    link: "https://www.simbasports-boxing.at/",
    image: simbasports,
    skills: [next, javascript, tailwind, wordpress],
  },
  {
    id: 7,
    online: true,
    title: "SH2 Gmbh",
    description:
      "I developed a custom WordPress CMS theme for the website of SH2 GmbH, creating a unique and personalized online presence for the company. The theme was designed to align with SH2 GmbH’s branding and business needs, ensuring a visually appealing, user-friendly experience. I focused on optimizing both the frontend design and backend functionality, making sure that the theme was not only aesthetically pleasing but also fully responsive and easy to navigate on all devices. Custom features were integrated to allow for easy content management by the SH2 GmbH team, enabling them to update and maintain the website effortlessly. The custom theme was built with performance, security, and SEO best practices in mind, ensuring that the website loads quickly and ranks well in search engines. This project highlights my ability to design and develop tailored WordPress solutions, providing businesses with fully functional, scalable websites that meet their specific needs.",
    year: "2024",
    link: "https://sh2gmbh.com/",
    image: sh2,
    skills: [php, html, css, javascript],
  },
  // {
  //   id: 4,
  //   title: "QuranApp",
  //   description:
  //     "This Quran React app is being developed using React and Tailwind CSS, combining modern front-end technologies with an elegant and responsive design. The app aims to provide users with easy access to the Quranic text, featuring a clean and intuitive interface that enhances the reading experience. It utilizes an open-source Quran API, which allows seamless integration of Quranic content, including verses, surahs, and translations. Although still in development, the app is designed with a focus on performance and user experience, ensuring that it loads quickly and provides smooth navigation. Tailwind CSS is used to create a highly customizable and flexible design, making it easy to adapt the app for various screen sizes and user preferences. As the app continues to develop, additional features like search functionality, bookmarking, and audio recitations are planned to enhance its usability and accessibility for users. This project highlights skills in React development, working with APIs, and building responsive web applications.",
  //   year: "2025",
  //   link: "https://github.com/berisha-ad/quran_app",
  //   image: quranapp,
  //   skills: [react, tailwind],
  // },
  // {
  //   id: 6,
  //   title: "Coffeeshop",
  //   description:
  //     "A static website was developed as the first major project during my academic studies, serving as a foundational milestone in learning web development. The website was built using essential front-end technologies, including HTML, CSS, and JavaScript, providing a hands-on experience in creating visually engaging, responsive, and functional web pages. The project aimed to showcase a strong understanding of web design principles, layout techniques, and content structure. It also emphasized the importance of clean, well-organized code and basic interactivity, ensuring that users could navigate through the site effortlessly. This static website served as a personal portfolio, allowing me to demonstrate my ability to integrate text, images, and other media to create an effective and aesthetically pleasing user experience. It marked the beginning of my journey in web development, providing a solid foundation for more complex, dynamic projects in the future.",
  //   year: "2024",
  //   link: "https://github.com/berisha-ad/coffeeshop",
  //   image: coffeeshop,
  //   skills: [html, css, javascript],
  // },
  // {
  //   id: 7,
  //   title: "Terrassencafe",
  //   description:
  //     "I built a website for the Terrassencafe im Hundertwasserhaus using Webflow, focusing on capturing the unique and iconic style of the cafe while ensuring a seamless user experience. The design was inspired by the distinctive architectural features of the Hundertwasserhaus, incorporating vibrant colors, organic shapes, and a playful aesthetic that mirrors the building’s unconventional design. I used Webflow’s powerful design tools to create a visually appealing, responsive website that works flawlessly across all devices. Key features of the website include an interactive menu, a gallery showcasing the cafe’s atmosphere, and an easy-to-use contact form for reservations. Throughout the project, I paid close attention to both the aesthetics and functionality, ensuring that users could navigate the site effortlessly while reflecting the cafe’s creative, welcoming vibe. The website is optimized for performance, with fast loading times and smooth transitions, providing visitors with a pleasant and engaging online experience.",
  //   year: "2024",
  //   link: "https://www.hundertwasserterrassencafe.at/",
  //   image: terrassencafe,
  //   skills: [webflow, figma, photoshop, illustrator],
  // },
  // {
  //   id: 8,
  //   title: "Hautzentrum",
  //   description:
  //     "I developed a website for a dermatologist using Webflow, with a strong emphasis on user experience (UX) design, corporate branding, and seamless Webflow development. The website was carefully crafted to create a professional and welcoming online presence for the dermatologist, ensuring it was easy for patients to find information about services, treatments, and booking appointments. The design prioritizes clean, modern aesthetics that align with the medical profession, while also incorporating the clinic’s branding, such as colors and logos, to ensure consistency with their offline presence. UX design principles were a key focus, with user-friendly navigation and intuitive layout to help visitors quickly access relevant content. I integrated Webflow’s responsive design features to ensure the website provides a smooth experience across all devices, from desktop to mobile. The Webflow development process involved building dynamic pages, forms for appointment scheduling, and interactive elements, all while maintaining high performance and quick load times. The project not only highlights my skills in Webflow development but also demonstrates my ability to create functional, branded websites that are both visually appealing and easy for users to navigate.",
  //   year: "2024",
  //   link: "https://www.hautzentrum-med21.at/",
  //   image: hautzentrum,
  //   skills: [webflow, figma, photoshop, illustrator],
  // },
];

export default projects;
