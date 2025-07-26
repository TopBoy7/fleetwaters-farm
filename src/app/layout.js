import "./globals.css";
import Image from "next/image";
import Link from "next/link";
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
          <div className="top">
            <div className="container flex justify-end items-center">
              <a href="tel:+2348024316781" className="me-2">
                +234 802 431 6781
              </a>
              <Image
                src="/images/arrow.png"
                width={12}
                height={12}
                alt="arrow"
              />
              <a href="mailto:info@fleetwatersfarm.com" className="ms-2 me-2">
                info@fleetwatersfarm.com
              </a>
              <Image
                src="/images/arrow.png"
                width={12}
                height={12}
                alt="arrow"
              />
              <a
                href="https://instagram.com/fleetwatersfarm"
                className="ms-2"
                target="_blank"
                rel="noopener noreferrer"
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
                className="ms-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/facebook.png"
                  width={16}
                  height={16}
                  alt="facebook"
                  className=""
                />
              </a>
            </div>
          </div>

          <div>
            <Link href="/">
              <Image
                src="/images/fleetfarms.png"
                width={45}
                height={45}
                alt="Fleetwaters Farm Logo"
              />
              <p>Fleetwaters Farms</p>
            </Link>
            <div>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/products">Products</Link>
              <Image
                src="/images/vector.png"
                width={11}
                height={6}
                alt="dropdown arrow"
              />
              <div>
                <Link href="/products/livestock">Livestock</Link>
                <Link href="/products/crops">Crops</Link>
                <Link href="/products/poultry">Poultry</Link>
                <Link href="/products/fishes">Fishes</Link>
              </div>
              <Link href="/contact">Contact</Link>
            </div>

            <div>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </div>
        </nav>

        {children}
        <footer></footer>
      </body>
    </html>
  );
}
