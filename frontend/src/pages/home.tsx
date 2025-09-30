import Header from "../Components/header";

export default function Home() {
  return (
    <div className="bg-zinc-100 min-h-screen text-black font-inter">
      <img src="banner.jpeg" className="w-full min-hs-screen" height='100%' width='100%'/>
      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
<main className="container mx-auto px-6 py-16 flex flex-col gap-12 items-center justify-center">
  
  {/* Left: Text content */}
  <div className="text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500 drop-shadow-md">
      Welcome to Our Academy
    </h1>

    <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed max-w-xl mx-auto">
      Coaching students from <span className="font-semibold">6th to 12th</span> across 
      <span className="font-semibold"> CBSE, ICSE, UP Board</span>, with specialized preparation for 
      <span className="font-semibold"> UPP, RRB, SSC, and Nursing Officer exams</span>. 
      Our mission is to guide students toward academic and competitive success.
    </p>

    {/* Key Highlights */}
    <ul className="text-gray-700 mb-6 max-w-xl mx-auto space-y-2 text-left">
      <li>✅ Expert teachers like Engineer A.K. Nagvanshi & Engineer Arjun</li>
      <li>✅ Structured curriculum & personalized mentorship</li>
      <li>✅ Regular tests, doubt-solving sessions & performance tracking</li>
      <li>✅ Proven results in competitive exams and school boards</li>
    </ul>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
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
    <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
      Trusted by students for quality coaching and results.
    </p>
  </div>
</main>

    </div>
  );
}
