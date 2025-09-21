"use client"; // if you're using Next.js App Router

import { motion } from "framer-motion";

export default function About() {
  const points = [
    "Classes for 6th to 12th",
    "CBSE, ICSE, and UP Board preparation",
    "Special preparation for UPP & RRB",
    "Dedicated SSC batches",
    "Nursing Officer exam preparation",
  ];

  const teachers = [
    {
      name: "Engineer A.K. Nagvanshi Sir",
      desc: "Highly experienced in teaching with a strong background in mentoring students for both academic and competitive excellence.",
    },
    {
      name: "Engineer Arjun Sir",
      desc: "Expert in guiding students with innovative teaching methods and years of experience in exam-focused preparation.",
    },
  ];

  return (
    <div className="relative px-4 sm:px-6 md:px-8 py-12 w-full min-h-screen flex flex-col justify-center items-center text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500 drop-shadow-md"
      >
        About Us
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-8"
      >
        We focus on providing excellent academic guidance and competitive exam
        preparation. Our programs are designed to help students excel at both
        school-level and professional entrance levels.
      </motion.p>

      {/* Bullet Points */}
      <ul className="space-y-4 text-left max-w-xl mb-12">
        {points.map((point, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.3, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-800 bg-gray-100 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition"
          >
            ✅ {point}
          </motion.li>
        ))}
      </ul>

      {/* Teachers Section */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-700"
      >
        Our Teachers
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl w-full">
        {teachers.map((teacher, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + index * 0.3, duration: 0.7 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition text-left"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-2">
              {teacher.name}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {teacher.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
