import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RocketIcon, BriefcaseIcon, CalendarIcon, VideoIcon, TagIcon, MoonIcon, SunIcon, UserIcon, MonitorSmartphoneIcon } from 'lucide-react'

const Projects = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="projects" className="p-10 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-cyan-300 text-center mb-8">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Solar Flares Prediction Project */}
          <div className="px-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-[500px] flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-teal-400">
                Solar Flares Prediction
              </h3>
              <p className="mt-3 text-gray-300">
                Built an AI-based model using{" "}
                <span className="text-teal-300 font-semibold">
                  Intel OneAPI
                </span>{" "}
                to predict solar flares, enabling proactive measures against
                disruptions in power grids, GPS, and space radiation.
              </p>

              <h4 className="mt-4 text-lg font-semibold text-cyan-300">
                Technologies Used
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  ⚡ <b>Intel® OneAPI</b> - Accelerated AI Model Training
                </li>
                <li>
                  📊 <b>Machine Learning</b> - Logistic Regression, TensorFlow
                </li>
                <li>
                  🖼 <b>Image Processing</b> - Keras, PIL
                </li>
                <li>
                  📈 <b>Data Analysis</b> - Pandas, NumPy, Matplotlib
                </li>
              </ul>

              <h4 className="mt-4 text-lg font-semibold text-cyan-300">
                Methodology
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  ✅ <b>Data Preprocessing:</b> Cleaning & Feature Engineering
                </li>
                <li>
                  ✅ <b>Model Training:</b> Logistic Regression & Deep Learning
                </li>
                <li>
                  ✅ <b>Performance Evaluation:</b> Statistical Analysis
                </li>
              </ul>
            </div>
          </div>

          {/* Forklift Speed Estimation Project */}
          <div className="px-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-[500px] flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-teal-400">
                Forklift Speed Estimation
              </h3>
              <p className="mt-3 text-gray-300">
                Developed a{" "}
                <span className="text-teal-300 font-semibold">
                  computer vision
                </span>{" "}
                system using object tracking to estimate forklift speeds in
                industrial environments for safety monitoring.
              </p>

              <h4 className="mt-4 text-lg font-semibold text-cyan-300">
                Technologies Used
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  🔍 <b>OpenCV</b> - Computer Vision
                </li>
                <li>
                  📡 <b>Dlib</b> - Object Tracking
                </li>
                <li>
                  🤖 <b>MobileNet-SSD</b> - Deep Learning
                </li>
                <li>
                  🧠 <b>Multithreading</b> - Real-Time Processing
                </li>
              </ul>

              <h4 className="mt-4 text-lg font-semibold text-cyan-300">
                Methodology
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  ✅ <b>Object Detection:</b> Using Deep Learning models
                </li>
                <li>
                  ✅ <b>Tracking:</b> Movement tracking across video frames
                </li>
                <li>
                  ✅ <b>Speed Calculation:</b> Estimating speed in km/hr
                </li>
              </ul>
            </div>
          </div>

          {/* AI Assistant - Flutter App */}
          <div className="px-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-[500px] flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-teal-400">
                AI Assistant - Flutter App
              </h3>
              <p className="mt-3 text-gray-300">
                Built a cross-platform mobile app using{" "}
                <span className="text-teal-300 font-semibold">Flutter</span>{" "}
                that allows users to interact with an AI assistant through
                natural conversation and image generation features.
              </p>

              <h4 className="mt-4 text-lg font-semibold text-cyan-300">
                Technologies Used
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  📱 <b>Flutter</b> - Cross-platform UI
                </li>
                <li>
                  🔌 <b>Node.js + Express</b> - Backend API
                </li>
                <li>
                  🧠 <b>Hugging Face</b> - Chat & Image Generation Models
                </li>
              </ul>

              <h4 className="mt-4 text-lg font-semibold text-cyan-300">
                Models Integrated
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  🗨️ <b>Mixtral-8x7B</b> - Conversational AI
                </li>
                <li>
                  🎨 <b>Stable Diffusion v2</b> - Text-to-Image Generation
                </li>
              </ul>
            </div>
          </div>

          {/* AI Assistant - Web App (Next.js) */}
          <div className="px-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-[500px] flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-teal-400">
                AI Assistant - Web App
              </h3>
              <p className="mt-3 text-gray-300">
                Developed a sleek and professional AI assistant website using{" "}
                <span className="text-teal-300 font-semibold">Next.js</span> and{" "}
                <span className="text-teal-300 font-semibold">
                  Tailwind CSS
                </span>
                , that allows users to interact with an AI assistant through
                natural conversation and image generation features. users.
              </p>

              <h4 className="mt-4 text-lg font-semibold text-cyan-300">
                Technologies Used
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  🌐 <b>Next.js</b> - React Framework
                </li>
                <li>
                  🎨 <b>Tailwind CSS</b> - UI Styling
                </li>
                <li>
                  🔌 <b>Node.js Backend</b> - Shared API Services
                </li>
              </ul>

              <h4 className="mt-4 text-lg font-semibold text-cyan-300">
                Models Integrated
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  🗨️ <b>Mixtral-8x7B</b> - Conversational AI
                </li>
                <li>
                  🎨 <b>Stable Diffusion v2</b> - Image Generation
                </li>
              </ul>
            </div>
          </div>

          {/* Spotify Track Analysis - Frontend (Next.js) */}
<div className="px-4">
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-[500px] flex flex-col justify-between">
    <h3 className="text-2xl font-bold text-teal-400">
      Spotify Track Analysis(Data Engineering) - Frontend
    </h3>
    <p className="mt-3 text-gray-300">
      Designed an interactive and responsive UI using{" "}
      <span className="text-teal-300 font-semibold">Next.js</span> and{" "}
      <span className="text-teal-300 font-semibold">Tailwind CSS</span>. 
      Users can search artists and listen to their top tracks fetched in real-time.
    </p>

    <h4 className="mt-4 text-lg font-semibold text-cyan-300">
      Technologies Used
    </h4>
    <ul className="list-disc list-inside text-gray-400">
      <li>🌐 <b>Next.js</b> - Frontend React Framework</li>
      <li>🎨 <b>Tailwind CSS</b> - Responsive UI Design</li>
      <li>🔁 <b>Axios</b> - API Integration</li>
    </ul>

    <h4 className="mt-4 text-lg font-semibold text-cyan-300">
      Key Features
    </h4>
    <ul className="list-disc list-inside text-gray-400">
      <li>✅ <b>Search Artists:</b> Dynamic search powered by Spotify API</li>
      <li>✅ <b>Track Previews:</b> Users can listen to 30s samples</li>
      <li>✅ <b>Popularity Ranking:</b> Songs displayed by popularity score</li>
    </ul>
  </div>
</div>

{/* Spotify Track Analysis - Backend (FastAPI + PySpark) */}
<div className="px-4">
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-[500px] flex flex-col justify-between">
    <h3 className="text-2xl font-bold text-teal-400">
      Spotify Track Analysis(Data Engineering) - Backend
    </h3>
    <p className="mt-3 text-gray-300">
      Built a scalable backend using{" "}
      <span className="text-teal-300 font-semibold">FastAPI</span> and{" "}
      <span className="text-teal-300 font-semibold">PySpark</span> for efficient
      data handling and analysis of Spotify track data.
    </p>

    <h4 className="mt-4 text-lg font-semibold text-cyan-300">
      Technologies Used
    </h4>
    <ul className="list-disc list-inside text-gray-400">
      <li>🔥 <b>PySpark</b> - ETL and transformation</li>
      <li>⚡ <b>FastAPI</b> - RESTful API development</li>
      <li>📡 <b>Spotify API</b> - Data sourcing</li>
    </ul>

    <h4 className="mt-4 text-lg font-semibold text-cyan-300">
      Key Features
    </h4>
    <ul className="list-disc list-inside text-gray-400">
      <li>✅ <b>Data Collection:</b> Automated fetch using Spotify client credentials</li>
      <li>✅ <b>ETL Pipeline:</b> Cleaned and structured data with PySpark</li>
      <li>✅ <b>API Endpoints:</b> Served filtered and sorted track data</li>
    </ul>
  </div>
</div>

{/* Asha AI chatbot backend*/}
<div className="px-4 overflow-y-auto h-[500px] scroll-container">
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg  flex flex-col justify-between">
    <h3 className="text-2xl font-bold text-teal-400">
      Asha AI Backend
    </h3>
    <p className="mt-3 text-gray-300">
      The <span className="text-teal-300 font-semibold">Asha AI Backend</span> powers intelligent features like career guidance, job discovery, and learning support. It utilizes advanced <span className="text-teal-300 font-semibold">AI models and semantic search</span> to offer a personalized experience throughout a user’s career journey.
    </p>

    <h4 className="mt-4 text-lg font-semibold text-cyan-300">
      Technologies Used
    </h4>
    <ul className="list-disc list-inside text-gray-400">
      <li>⚡ <b>FastAPI</b> - Backend Framework</li>
      <li>🍃 <b>MongoDB</b> - Primary Database</li>
      <li>🌲 <b>Pinecone</b> - Vector Database for embeddings</li>
      <li>🧠 <b>Gemini 1.5 Pro</b> - AI model for text generation</li>
      <li>🔗 <b>model/embedding-001</b> - For semantic search</li>
      <li>💼 <b>Remotive API</b> - Job listings integration</li>
      <li>🎫 <b>Ticketmaster API</b> - Event tracking</li>
      <li>🎓 <b>YouTube API</b> - Learning support</li>
    </ul>

    <h4 className="mt-4 text-lg font-semibold text-cyan-300">
      Key Features
    </h4>
    <ul className="list-disc list-inside text-gray-400">
      <li>✅ <b>Real-time Career Assistance:</b> Connects users with career advice and jobs</li>
      <li>✅ <b>AI-Powered Guidance:</b> Uses Gemini AI for intelligent and contextual responses</li>
      <li>✅ <b>Event Tracking:</b> Recommends local and online events in real time</li>
      <li>✅ <b>Job Discovery:</b> Delivers the latest job listings tailored to user preferences</li>
    </ul>
  </div>
</div>

{/* Asha AI chatbot frontend */}
<div className="px-4 h-[500px] overflow-y-auto scroll-container">
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between">
    <h3 className="text-2xl font-bold text-teal-400">
      Asha AI Frontend
    </h3>
    <p className="mt-3 text-gray-300">
      <span className="text-teal-300 font-semibold">Asha AI</span> is a smart, career-focused chatbot built with <b>Next.js</b> and <b>Tailwind CSS</b>. It empowers users to explore their career path with features like AI chat, live job listings, event updates, and personalized learning resources.
    </p>

    <h4 className="mt-4 text-lg font-semibold text-cyan-300">
      Key Features
    </h4>
    <ul className="list-disc list-inside text-gray-400">
      <li>💬 <b>Chat with AI:</b> Career questions, tips, and resources</li>
      <li>💼 <b>Job Listings:</b> Remote jobs via Remotive API</li>
      <li>🎟️ <b>Event Listings:</b> Tech events from Ticketmaster</li>
      <li>📺 <b>Learning Path:</b> YouTube-powered learning recommendations</li>
      <li>🏷️ <b>Tag Messages:</b> Bookmark important chatbot replies</li>
      <li>🌗 <b>Dark/Light Mode:</b> Seamless UI toggle</li>
      <li>🔐 <b>Auth:</b> Sign In / Sign Up with future support for social logins</li>
      <li>📱 <b>Responsive:</b> Smooth experience on all screen sizes</li>
    </ul>

    <h4 className="mt-4 text-lg font-semibold text-cyan-300">
      Technologies Used
    </h4>
    <ul className="list-disc list-inside text-gray-400">
      <li>⚛️ <b>Next.js</b> - React Framework</li>
      <li>🎨 <b>Tailwind CSS</b> - Utility-first Styling</li>
      <li>🌐 <b>fetch</b> - API Requests</li>
      <li>🍃 <b>MongoDB</b> - Non-contextual Chat Storage</li>
      <li>🌲 <b>Pinecone</b> - Embedding Search</li>
      <li>🧠 <b>model/embedding-001</b> - Semantic Search</li>
      <li>🤖 <b>Gemini 1.5 Pro</b> - Text Generation</li>
    </ul>
  </div>
</div>



        </Slider>
      </div>
    </section>
  );
};

export default Projects;
