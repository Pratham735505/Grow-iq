export default function Footer  ()  {
  return (
    <footer className="bg-white text-gray-700 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo + About */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500 drop-shadow-sm">
              GROW-IQ
            </h2>
            <p className="text-sm">
              Providing exceptional education and guidance to help students achieve their goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/home" className="hover:text-blue-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="contact" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials with Icons */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.77-1.55 2.13-2.67-.94.56-1.98.96-3.08 1.18-.89-.95-2.17-1.54-3.57-1.54-3.54 0-6.42 2.88-6.42 6.42 0 .5.06 1 .15 1.48-5.34-.26-10.08-2.82-13.25-6.72-.55.95-.87 2.05-.87 3.23 0 2.22 1.13 4.18 2.85 5.32-1.04-.03-2.02-.32-2.87-.79v.08c0 3.12 2.22 5.73 5.17 6.32-.54.15-1.12.23-1.7.23-.42 0-.82-.04-1.22-.11.82 2.56 3.2 4.43 6.03 4.48-2.2 1.72-4.99 2.75-8.02 2.75-.53 0-1.05-.03-1.56-.09 2.85 1.83 6.23 2.9 9.87 2.9 11.85 0 18.33-9.8 18.33-18.33 0-.28-.01-.56-.02-.84.97-.7 1.8-1.55 2.47-2.52z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.97 3.61 9.09 8.35 9.84v-7.06H7.11v-2.78h3.24V9.61c0-3.2 1.95-4.95 4.8-4.95 1.39 0 2.59.1 2.94.14v3.39h-2.02c-1.58 0-1.89.75-1.89 1.85v2.45h3.75l-.6 3.75h-3.15V21.84C18.39 21.09 22 16.97 22 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.253.15 4.79 1.49 4.948 4.74.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.158 3.253-1.495 4.79-4.748 4.948-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.253-.158-4.79-1.495-4.948-4.748-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.158-3.253 1.495-4.79 4.748-4.948 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.633 0-4.074.014-5.485.083-4.73 0-7.23 2.49-7.23 7.23 0 1.41.02 1.85.08 5.485.15 4.73 2.58 7.23 7.23 7.23 1.41 0 1.85-.02 5.485-.08 4.73-.15 7.23-2.58 7.23-7.23 0-1.41-.02-1.85-.08-5.485-.15-4.73-2.58-7.23-7.23-7.23z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Grow-IQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
