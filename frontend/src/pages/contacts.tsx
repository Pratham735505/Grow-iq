export default function Contact() {
  // Replace with your WhatsApp number (include country code, no + or spaces)
  const whatsappNumber = "+919506349789"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="p-8 w-full min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Page Header */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="mt-3 text-gray-600">
          Have any questions? Fill out the form below or reach us directly on WhatsApp.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8 mb-12">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Write your message..."
              rows={5}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* WhatsApp Banner */}
      <div className="w-full max-w-2xl bg-green-500 text-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Prefer WhatsApp?</h2>
          <p className="text-white/90">Chat with us instantly on WhatsApp.</p>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-green-600 font-medium rounded-md hover:bg-gray-100 transition"
        >
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
}
