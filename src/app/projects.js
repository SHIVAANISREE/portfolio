import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

          {/* Spotify Data Engineering Project */}
          <div className="px-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-[500px] flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-teal-400">
                Spotify Track Analysis - Data Engineering
              </h3>
              <p className="mt-3 text-gray-300">
                Collected and processed Spotify track data using{" "}
                <span className="text-teal-300 font-semibold">PySpark</span> and{" "}
                <span className="text-teal-300 font-semibold">FastAPI</span> for
                backend analysis. Built a dynamic web app to display artist-wise
                top tracks using{" "}
                <span className="text-teal-300 font-semibold">Next.js</span>.
              </p>

              <h4 className="mt-4 text-lg font-semibold text-cyan-300">
                Technologies Used
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  🔥 <b>PySpark</b> - ETL & Transformation
                </li>
                <li>
                  ⚡ <b>FastAPI</b> - Backend API Development
                </li>
                <li>
                  📡 <b>Spotify API</b> - Track & Artist Data Collection
                </li>
                <li>
                  🌐 <b>Next.js</b> - Interactive Frontend
                </li>
                <li>
                  🎨 <b>Tailwind CSS</b> - UI Styling
                </li>
              </ul>

              <h4 className="mt-4 text-lg font-semibold text-cyan-300">
                Key Features
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  ✅ <b>Data Collection:</b> Using Spotify Client ID & Secret key for API
                  access
                </li>
                <li>
                  ✅ <b>ETL:</b> Cleaned and structured track data using PySpark
                </li>
                <li>
                  ✅ <b>Analysis:</b> Popularity ranking & artist-wise filtering
                </li>
                <li>
                  ✅ <b>Web App:</b> User can view and play top songs by artist
                </li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
