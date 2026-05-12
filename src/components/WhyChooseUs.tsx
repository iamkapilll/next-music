//src/components/WhyChooseUs.tsx
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
        'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs












// //src/components/WhyChooseUs.tsx
// "use client";
// import React from "react";
// import { StickyScroll } from "./ui/sticky-scroll-reveal";

// const aboutMeContent = [
//   {
//     title: "Hi, I'm Kapil 👋",
//     description:
//       "I’m a Computer Science student passionate about building modern web applications. I enjoy turning ideas into real, interactive products using code.",
//   },
//   {
//     title: "My Development Journey 🚀",
//     description:
//       "I started with HTML, CSS, and JavaScript, and gradually moved into full-stack development. Right now, I’m focused on mastering the MERN stack and building real-world projects.",
//   },
//   {
//     title: "What I’m Learning 💻",
//     description:
//       "Currently improving my skills in React, Node.js, Express, and MongoDB. I also work on authentication, APIs, and scalable backend systems.",
//   },
//   {
//     title: "My Goal 🎯",
//     description:
//       "My goal is to become a strong full-stack developer and eventually move into blockchain development to build decentralized applications (dApps).",
//   },
//   {
//     title: "What I Love Building ⚡",
//     description:
//       "I enjoy building full-stack apps, portfolio projects, and creative UI interfaces with smooth animations and clean design.",
//   },
//   {
//     title: "Beyond Coding 🌱",
//     description:
//       "I believe in continuous learning, consistency, and improving one step at a time. I also like exploring new technologies and design systems.",
//   },
// ];

// function WhyChooseUs() {
//   return (
//     <div>
//         <StickyScroll content={aboutMeContent} />
//     </div>
//   )
// }

// export default WhyChooseUs