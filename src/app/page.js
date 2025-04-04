"use client";
import React from "react";
import Head from "next/head";
import Lottie from "lottie-react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"
import animationData from "../../public/lottie-animation1.json";
import about from "../../public/about3.json";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="min-h-screen scroll-container bg-gray-900 text-white font-sans">
      <Head>
        <title>Shivaanisree R K | Portfolio</title>
        <meta name="description" content="Portfolio of Shivaanisree R K, Software Developer and AI Engineer." />
      </Head>

      {/* Header */}

      <header className="fixed top-0 left-0 w-full bg-gray-800 z-50 flex justify-between items-center p-2">
        <h1 className="text-xl font-medium text-cyan-400">Shivaanisree R K</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-white min-h-screen px-6 md:px-20 lg:px-32">
  {/* Animated Avatar or Lottie */}
  <Lottie animationData={animationData} className="w-100 h-100 mb-4 " />

  {/* Heading with a Better Layout */}
  <h2 className="text-5xl font-bold text-center md:text-left animate-fade-in-up">
    <span className="bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">
      Hello! It's Me SHIVAANISREE R K
    </span>
    <br />
    <span className="block text-2xl mt-2 text-teal-300">
      and I'm a <span className="text-blue-300 font-extrabold">Software Engineer</span>
    </span>
  </h2>

  {/* Description with Flexbox for Better Spacing */}
  <p className="mt-6 text-lg text-gray-300 text-center md:text-left max-w-3xl leading-relaxed">
    I'm a <span className="font-semibold text-teal-300">Software Engineer</span> with 
    <span className="text-green-400 font-bold"> 1 Year </span> of experience in 
    <span className="text-indigo-400 font-semibold"> AI, Machine Learning,</span> and 
    <span className="text-yellow-400 font-semibold"> Full Stack Development</span>. 
    Passionate about creating innovative web and mobile solutions.
  </p>

  {/* Call to Action Buttons */}
  <div className="mt-8 flex flex-wrap gap-6">
    <a href="#projects" className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition">
      View My Work
    </a>
    <a href="#contact" className="px-6 py-3 rounded-lg border border-cyan-500 hover:bg-cyan-500 transition">
      Contact Me
    </a>
  </div>
</main>

      
<section id="about" className="relative bg-gray-800 text-white py-16 px-6 rounded-xl shadow-lg max-w-7xl mx-auto flex flex-col lg:flex-row items-center text-left">
  {/* Left Side - Lottie Animation */}
  <div className="w-80 h-80 flex-shrink-0 lg:mr-24">
    <Lottie animationData={about} className="w-full h-full" />
  </div>

  {/* Right Side - Content */}
  <div className="flex-1">
    {/* Heading */}
    <h2 className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text mb-6 text-center lg:text-left">
      About Me
    </h2>

    {/* Bio Description */}
    <p className="text-gray-300 text-lg leading-relaxed">
      I am a passionate <span className="text-teal-300 font-semibold">Software Engineer</span> specializing in:
    </p>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg mt-6">
      <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
        💻 <span>Web Development - <b className="text-teal-300 font-medium">React.js, Angular</b></span>
      </div>
      <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
        📱 <span>Mobile Development - <b className="text-teal-300 font-medium">Flutter, Kotlin, Java</b></span>
      </div>
      <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
        🤖 <span>AI & ML - <b className="text-teal-300 font-medium">Chatbots, Image Processing, ASR, Vector Databases</b></span>
      </div>
      <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
        ☁ <span>Backend - <b className="text-teal-300 font-medium">Node.js, Python, AWS, Google Cloud</b></span>
      </div>
    </div>

    {/* Achievements Section */}
    <h3 className="text-3xl font-bold text-teal-300 mt-10">🏆 Achievements</h3>
    <ul className="text-lg text-gray-300 mt-6 space-y-4">
      <li className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
        🥇 <b className="text-green-300 font-medium">Intel OneAPI Hackathon Winner</b> – Built an ML model for Solar Flare prediction
      </li>
      <li className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
        🔬 <b className="text-green-300 font-medium">IoT & Sensor-based AI Solutions</b>
      </li>
      <li className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-all">
        🎓 <b className="text-green-300 font-medium">Final-year CSE Student</b> – Jansons Institute of Technology (CGPA 8.46)
      </li>
    </ul>
  </div>
</section>




{/* Projects Section */}
<Projects/>


      {/* Skills Section */}
<section id="skills" className="relative bg-gray-800 text-white py-16 px-6 rounded-xl shadow-lg max-w-7xl mx-auto flex flex-col items-center text-left">
  <h2 className="text-3xl font-semibold text-cyan-300 text-center">Skills</h2>
  
  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300 max-w-5xl mx-auto">
    
    {[
      { category: "Programming Languages", skills: ["Python", "JavaScript", "Dart"] },
      { category: "Frontend Development", skills: ["React.js", "Angular", "Next.js"] },
      { category: "Mobile Development", skills: ["Flutter", "Kotlin", "Java"] },
      { category: "Backend & APIs", skills: ["Node.js", "Express.js", "FastAPI"] },
      { category: "AI & ML", skills: ["Deep Learning", "NLP", "Computer Vision"] },
      { category: "Cloud & Databases", skills: ["AWS", "Firebase", "MongoDB", "SQL"] },
      { category: "Other Skills", skills: ["Git", "Docker", "Agile Methodology"] }
    ].map((skillGroup, index) => (
      <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
        <h3 className="text-lg font-semibold text-teal-300 mb-2">{skillGroup.category}</h3>
        <ul className="space-y-1">
          {skillGroup.skills.map((skill, idx) => (
            <li key={idx} className="flex items-center">
              <span className="text-cyan-400 mr-2">✔</span> {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}

  </div>
</section>


  {/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="p-10 bg-gray-900 text-white text-center">
  <h2 className="text-3xl font-semibold text-cyan-300">Get in Touch</h2>
  <p className="mt-3 text-gray-400">Feel free to reach out for collaborations or any inquiries!</p>

  <div className="mt-6 space-y-4">
    {/* Email */}
    <div className="flex items-center justify-center space-x-3">
      <FaEnvelope className="text-cyan-400 text-xl" />
      <p className="text-gray-300">rkshivaanisree2003@gmail.com</p>
    </div>

    {/* LinkedIn */}
    <div className="flex items-center justify-center space-x-3">
      <FaLinkedin className="text-cyan-400 text-xl" />
      <a href="https://www.linkedin.com/in/shivaanisree-r-k-28247a254/" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="text-cyan-400 hover:underline">
        LinkedIn Profile
      </a>
    </div>

    {/* GitHub */}
    <div className="flex items-center justify-center space-x-3">
      <FaGithub className="text-cyan-400 text-xl" />
      <a href="https://github.com/SHIVAANISREE" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="text-cyan-400 hover:underline">
        GitHub Profile
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="text-center p-6 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Shivaanisree R K</p>
      </footer>
    </div>
  );
}
