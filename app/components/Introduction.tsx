"use client";

import { FaPython, FaReact, FaChartLine } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTensorflow,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

export default function Introduction() {
  return (
    <div className="py-16 px-4 md:px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side - Name & Tagline */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              Hi, I&apos;m
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Abdul Hannan Asif
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Data Science Enthusiast | Innovator | Explorer of Ideas &amp; Places
            </p>
          </div>

          {/* Right Side - Education */}
          <div className="md:mt-12 lg:mt-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Education
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              BSCS Student (Final Year) | University Of Central Punjab
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              INTERMEDIATE | 2021 | Crescent Model Higher Secondary School
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <FaPython size={24} color="#3776AB" />, name: "Python" },
              { icon: <FaChartLine size={24} color="#4CAF50" />, name: "Data Science" },
              { icon: <SiPandas size={24} color="#150458" />, name: "Data Analysis" },
              { icon: <SiTensorflow size={24} color="#FF6F00" />, name: "Machine Learning" },
              { icon: <SiTensorflow size={24} color="#FF6F00" />, name: "Deep Learning" },
              { icon: <SiTensorflow size={24} color="#FF6F00" />, name: "AI" },
              { icon: <FaReact size={24} color="#61DAFB" />, name: "ReactJS" },
              { icon: <SiNextdotjs size={24} color="#FFFFFF" />, name: "Next.js" },
              { icon: <SiMongodb size={24} color="#47A248" />, name: "MongoDB" },
              { icon: <SiNumpy size={24} color="#013243" />, name: "NumPy" },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 bg-red-900/40 backdrop-blur-md rounded-lg px-4 py-2 text-xl md:text-2xl w-max hover:scale-105 transition-transform"
              >
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">
            About Me
          </h3>
          <p className="text-base sm:text-lg md:text-2xl text-center text-gray-300 leading-relaxed">
            I am a dedicated and passionate learner in the field of Data Science,
            constantly striving to expand my knowledge and skills. My goal is to
            contribute to the development of innovative solutions and unlock new,
            useful features that can make a real impact in this field. Alongside
            my professional interests, I have a deep love for tourism and
            exploration, having traveled extensively across the northern regions
            of Pakistan. These experiences have enriched my perspective,
            inspiring creativity and curiosity that I bring into my work.
          </p>
        </div>
      </div>
    </div>
  );
}
