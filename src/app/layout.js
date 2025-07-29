import "./globals.css";
import "@tailwindplus/elements";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Fleetwaters Farm",
  description: "A serene farm located in the heart of nature",
  icons: {
    icon: "/images/fleetfarms.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="w-full bg-green-900 text-white py-2">
            <div className="max-w-screen-xl mx-auto flex justify-end items-center px-4 space-x-4">
              <a
                href="tel:+2348024316781"
                className="flex items-center space-x-1 text-sm"
              >
                <span>+234 802 431 6781</span>
              </a>
              <span>|</span>
              <a
                href="mailto:info@fleetwatersfarm.com"
                className="flex items-center space-x-1 text-sm"
              >
                <span>info@fleetwatersfarm.com</span>
              </a>
              <span>|</span>
              <div className="flex space-x-2">
                <a
                  href="https://instagram.com/fleetwatersfarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Image
                    src="/images/instagram.png"
                    width={16}
                    height={16}
                    alt="instagram"
                  />
                </a>
                <a
                  href="https://facebook.com/fleetwatersfarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Image
                    src="/images/facebook.png"
                    width={16}
                    height={16}
                    alt="facebook"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full bg-white">
            <div className="max-w-screen-xl mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                <Link href="/" className="flex items-center space-x-3">
                  <Image
                    src="/images/fleetfarms.png"
                    width={45}
                    height={45}
                    alt="Fleetwaters Farm Logo"
                  />
                  <span className="text-xl font-semibold text-gray-800">
                    Fleetwaters Farms
                  </span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-green-600 font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-green-600 font-medium"
                  >
                    About Us
                  </Link>
                  <Navbar />
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-green-600 font-medium"
                  >
                    Contact
                  </Link>
                </div>

                <div className="hidden md:block">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 border rounded-lg focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {children}

        <footer>{/* Add footer content here */}</footer>
      </body>
    </html>
  );
}
