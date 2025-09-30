import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  // WhatsApp Numbers (no + or spaces)
  const whatsappAbhishek = "919506349789";
  const whatsappArjun = "917275309690";

  const whatsappLinkAbhishek = `https://wa.me/${whatsappAbhishek}`;
  const whatsappLinkArjun = `https://wa.me/${whatsappArjun}`;

  return (
    <div className="p-8 w-full min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Page Header */}
      <div className="max-w-3xl text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="mt-3 text-gray-600">
          Have any questions? Fill out the form below or reach us directly.
          <br />
          <span className="font-medium">Address:</span> Kanchanpur, Medical College Road, Gorakhpur, UP
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8 mb-12 animate-slideUp">
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

      {/* Contact Info Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Abhishek */}
        <div className="bg-white shadow-md rounded-lg p-6 animate-slideUp">
          <h2 className="text-2xl font-semibold text-blue-600">Abhishek</h2>
          <div className="mt-4 space-y-3 text-gray-700">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <a
                href="mailto:abhisheknagbanshi000@gmail.com"
                className="hover:underline"
              >
                abhisheknagbanshi000@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" /> +91 95063 49789
            </p>
          </div>
          <a
            href={whatsappLinkAbhishek}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        {/* Arjun Sir */}
        <div className="bg-white shadow-md rounded-lg p-6 animate-slideUp">
          <h2 className="text-2xl font-semibold text-blue-600">Arjun Sir</h2>
          <div className="mt-4 space-y-3 text-gray-700">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <a
                href="mailto:ay13111993@gmail.com"
                className="hover:underline"
              >
                ay13111993@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" /> +91 72753 09690
            </p>
          </div>
          <a
            href={whatsappLinkArjun}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
