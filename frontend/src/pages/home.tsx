import Header from "../Components/header";

export default function Home() {
  return (
    <div className="bg-zinc-100 min-h-screen text-black font-inter">
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500 drop-shadow-md">
            Welcome to Our Academy
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed max-w-xl">
            Coaching students from <span className="font-semibold">6th to 12th</span> across 
            <span className="font-semibold"> CBSE, ICSE, UP Board</span>, with specialized preparation for 
            <span className="font-semibold"> UPP, RRB, SSC, and Nursing Officer exams</span>. 
            Our mission is to guide students toward academic and competitive success.
          </p>

          {/* Key Highlights */}
          <ul className="text-gray-700 mb-6 max-w-xl mx-auto md:mx-0 space-y-2 text-left">
            <li>✅ Expert teachers like Engineer A.K. Nagvanshi & Engineer Arjun</li>
            <li>✅ Structured curriculum & personalized mentorship</li>
            <li>✅ Regular tests, doubt-solving sessions & performance tracking</li>
            <li>✅ Proven results in competitive exams and school boards</li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-4">
            <a
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Learn More
            </a>
            <a
              href="/services"
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition"
            >
              Our Services
            </a>
          </div>

          {/* Small Trust Line */}
          <p className="text-gray-600 text-sm md:text-base max-w-xl">
            Trusted by students for quality coaching and results.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="/photo.jpeg"
            alt="Education illustration"
            className="w-full max-w-md"
            title="Our A.K Nagvanshi Sir"
          />
        </div>
      </main>
    </div>
  );
}
