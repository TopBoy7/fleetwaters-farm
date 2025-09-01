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
          <div className="w-full bg-green-900 text-white py-2 px-24">
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

          <div className="w-full bg-white px-24">
            <div className="max-w-screen-xl mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                <Link href="/" className="flex items-center space-x-3">
                  <Image
                    src="/images/fleetfarms.png"
                    width={45}
                    height={45}
                    alt="Fleetwaters Farm Logo"
                  />
                  <span className=" text-green-900 font-medium">
                    Fleetwaters Farms
                  </span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-900 font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-green-900 font-medium"
                  >
                    About Us
                  </Link>
                  <Navbar />
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-green-900 font-medium"
                  >
                    Contact
                  </Link>
                </div>

                <div className="bg-gray-100 rounded-xl hidden md:block">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2  focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-gray-100 py-12 px-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="px-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/fleetfarms.png"
                  width={45}
                  height={45}
                  alt="Fleetwaters Farm Logo"
                />
                <span className="text-green-900 font-semibold">
                  Fleetwaters Farms
                </span>
              </div>

              <p className="text-gray-600 max-w-sm">
                Seeking the best agricultural products? Reach out to us at
                Fleetwaters today and get unmatched quality.
              </p>

              <div className="flex space-x-2 mt-4">
                <a
                  href="https://x.com/fleetwatersfarm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/x-solid.png"
                    width={16}
                    height={16}
                    alt="x"
                  />
                </a>
                <a
                  href="https://instagram.com/fleetwatersfarm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/instagram-solid.png"
                    width={16}
                    height={16}
                    alt="instagram"
                  />
                </a>
                <a
                  href="https://wa.me/2348024316781"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/whatsapp-solid.png"
                    width={16}
                    height={16}
                    alt="whatsapp"
                  />
                </a>
                <a
                  href="https://facebook.com/fleetwatersfarm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/facebook-solid.png"
                    width={16}
                    height={16}
                    alt="facebook"
                  />
                </a>
              </div>
            </div>

            <div className="px-3">
              <h6 className="text-gray-700 font-semibold mb-3">Quick Links</h6>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/product">Products</Link>
                </li>
                <li>
                  <Link href="/product/livestock">Livestock</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="px-3">
              <h6 className="text-gray-700 font-semibold mb-3">Other Pages</h6>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/product">Products</Link>
                </li>
                <li>
                  <Link href="/">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/">FAQ</Link>
                </li>
              </ul>
            </div>

            <div className="px-3">
              <h6 className="text-gray-700 font-semibold mb-3">Contact Info</h6>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Image
                    src="/images/location.png"
                    width={16}
                    height={16}
                    alt="location"
                  />
                  <span>The Fleetwaters farms, off Ajah, Lagos, Nigeria</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/images/call.png"
                    width={16}
                    height={16}
                    alt="phone"
                  />
                  <span>+2348024316781</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/images/email.png"
                    width={16}
                    height={16}
                    alt="email"
                  />
                  <span>info@fleetwatersfarm.com</span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
