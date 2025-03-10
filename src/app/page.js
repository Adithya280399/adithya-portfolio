'use client'
import React from "react";
import Image from "next/image";
import './globals.css';
import { useState,useEffect } from "react";
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans scroll-smooth">
      
      {/* Navigation Menu */}
      <nav className="bg-gray-800 text-white py-4 px-6 shadow-lg flex justify-between items-center">
        {/* Left-side title (not fixed while scrolling) */}
        <h1 className="text-xl font-bold">Adithya Suresh’s Portfolio</h1>

        {/* Right-side menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-lg font-bold"
        >
          ☰ Menu
        </button>
      </nav>
      {menuOpen && (
        <div className="absolute right-0 mt-2 bg-gray-800 p-2 rounded-lg shadow-lg">
          <a href="#about" className="block py-2 px-4 hover:bg-gray-600">About</a>
          <a href="#experience" className="block py-2 px-4 hover:bg-gray-600">Experience</a>
          <a href="#education" className="block py-2 px-4 hover:bg-gray-600">Education</a>
          <a href="#projects" className="block py-2 px-4 hover:bg-gray-600">Projects</a>
          <a href="#certification" className="block py-2 px-4 hover:bg-gray-600">Certifications</a>
          <a href="#awards" className="block py-2 px-4 hover:bg-gray-600">Awards</a>
          <a href="#contact" className="block py-2 px-4 hover:bg-gray-600">Contact</a>
        </div>
      )}
    

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center">
      <Image
      src="/profilepic.jpg"
      alt="Adithya Suresh"
      width={150}
      height={200}
      className="rounded-full border-4 border-white shadow-lg"
      />
        <h1 className="text-5xl font-bold">Adithya Suresh</h1>
        <p className="text-xl mt-2">Software Engineer</p>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 bg-gray-200 text-gray-900">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-2">Innovative software engineer with a strong foundation in problem-solving and data science, currently pursuing a Master of Science in Information Science at the University of North Texas. Experienced in data modeling and visualization through hands-on projects. Previously held a Software Developer position at Ernst & Young, specializing in insurance domain solutions using Guidewire. Skilled in developing, monitoring, and evaluating system performance, as well as designing and implementing new programs and features. Passionate about leveraging domain knowledge to provide optimal solutions. A dedicated team player committed to continuous learning and technical growth, eager to apply my expertise to drive innovation and efficiency in software development.</p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-10 bg-white text-gray-900">
        <h2 className="text-3xl font-bold">Experience</h2>
        <ul className="mt-2">
          <li><strong>Software Engineer</strong> - Ernst and Young (10/2022 - 07/2024)</li>
          <p className="text-2x">1.	Implemented strategies for merging the files from version 8 to version 10.
2.	Worked on converting the logging.properties file from version 8 to log4j.xml in version 10.
3.	Handled DBCC issues that we had in our current Version 8 system.
4.	Resolved various DBCC issues, including solutions like a code fix and script fix. 
5.	Worked on both GOSU and SQL scripts to update, create and delete entries after getting a confirmation from the Guidewire product team.
6.	Collaborated with the business stakeholders for various defect analyses and business queries.
7.	Presented a live demo on a new requirement, including API integration to the client.
8.	Mentored new employees to improve the efficiency of the onboarding process. Delegated work to them and guided them on the same.
</p>          
          <li><strong>Associate Software Engineer</strong> - Ernst and Young  (04/2021 - 09/2022)</li>
          <p className="text-2x">1.	Provided technical solutions for bugs and tasks and involved myself in support and audit-related work.
2.	Focused on injury-related functionalities and integration we have in our system. I have worked on medical exposures and service request invoice flow for the medical bills we create from a third-party integration.
3.	Implemented the PCF structure for a requirement which ranges from introducing a new button to introducing a completely new card view that takes care of the denial flow.
4.	Worked on a few bugs that focused on exception handling and provided solutions that would either restrict or warn based on the severity of the user action with a hard stop or warning message.
5.	Maintained production releases which included being a part of deployments in higher and lower environments. 
</p>
        </ul>
      </section>

      {/* Education Section */}
      <section id="education" className="p-10 bg-gray-200 text-gray-900">
        <h2 className="text-3xl font-bold">Education</h2>
        <ul className="mt-2">
          <li><strong>Master of Science - Information science</strong> - University of North Texas (2024 - 2026)</li>
          <li><strong>Bachelor of Engineering</strong> - Jeppiaar Engineering College Name (2020)</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 bg-white text-gray-900">
        <h2 className="text-3xl font-bold">Projects</h2>
        <ul className="mt-2">
          <li><strong>Claim Management System(Class Project)</strong> - Designed and developed a database model that manages the claim created by the user and other claim details</li>
          <li><strong>Wireless charger for pacemakers(Class project)</strong> - Presented a POC for a wireless charger for a pacemaker with mobile connectivity and developed an app for monitoring the health and status of a pacemaker.</li>
        </ul>
      </section>

      {/* Certifications */}
      <section id="certifications" className="p-10 bg-gray-200 text-gray-900">
        <h2 className="text-3xl font-bold">Certifications</h2>
        <ul className="mt-2">
          <li><strong>Specialist Certification - Claimcenter 10.0 Configuration </strong> - Guidewire</li>
          <li><strong>Associate Certification - InsuranceSuite 10.0 Developer</strong> - Guidewire</li>
          <li><strong>InsuranceSuite 10.0 Fundamentals</strong> - Guidewire</li>
          <li><strong>Azure Az 900</strong> - Microsoft</li>
          <li><strong>Splunk Fundamentals</strong> - Splunk</li>
          <li><strong>Campus connect foundation program</strong> - Infosys</li>
        </ul>
      </section>

      {/* Awards Section */}
      <section id="awards" className="p-10 bg-white text-gray-900">
        <h2 className="text-3xl font-bold">Awards</h2>
        <ul className="mt-2">
          <li>●	Spot Award from EY for the dedication & perseverance to fulfill requirements and meet the targets on time</li>
          <li>●	Received client appreciation for taking up automation work on short notice </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2">Email: adithyasuresh92@gmail.com</p>
        <p>
        LinkedIn: <a href="https://www.linkedin.com/in/adithya-suresh-044435166/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/adithyaSuresh</a> </p>
      </section>
  {/* Back to Top Button */}
  {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-100 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-500 transition"
        >
          ↑ Back to Top
        </button>
      )}
    </div>
  );
};

