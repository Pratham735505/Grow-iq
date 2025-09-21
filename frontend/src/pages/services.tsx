import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "School Coaching (6th to 12th)",
      desc: "Comprehensive classes for all major subjects across CBSE, ICSE, and UP Board with a focus on strong fundamentals and conceptual clarity.",
    },
    {
      title: "Competitive Exam Preparation",
      desc: "Specialized coaching for UPP, RRB, SSC, and Nursing Officer exams with expert guidance, mock tests, and strategy-based teaching.",
    },
    {
      title: "Doubt Solving & Mentorship",
      desc: "Dedicated doubt-solving sessions and one-on-one mentorship to ensure students overcome academic challenges effectively.",
    },
    {
      title: "Test Series & Practice Batches",
      desc: "Regular test series, practice sets, and performance analysis to build confidence and improve exam readiness.",
    },
    {
      title: "Career Guidance",
      desc: "Helping students make informed choices about higher education, career paths, and future opportunities.",
    },
  ];

  return (
    <div className="relative px-4 sm:px-6 md:px-8 py-12 w-full min-h-screen flex flex-col items-center text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500 drop-shadow-md"
      >
        Our Services
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-12"
      >
        We provide a wide range of academic and competitive exam coaching
        services, designed to help students succeed in both school and career
        paths.
      </motion.p>

      {/* Services Grid (centered cards) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center max-w-6xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition text-left max-w-sm w-full"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
