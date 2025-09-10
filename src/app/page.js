import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    //push
    <>
      <div className="relative h-[85vh] w-full">
        <Image
          src="/images/farmer.png"
          alt="Farmer"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />

        <div className="relative z-10 flex flex-col justify-center h-full px-24">
          <h1 className="text-white text-4xl font-extrabold max-w-sm">
            Welcome to Fleetwater Farms
          </h1>
          <p className="text-gray-100 mt-4 max-w-sm mb-12">
            Revolutionizing agriculture with cutting-edge solutions, we ensure
            abundant harvests and sustainable food production.
          </p>
          <button className="flex items-center gap-2 bg-white text-green-900 px-6 py-2 rounded-4xl w-40">
            Get a quote
            <svg
              className="w-5 h-5 text-green-900"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="my-8 mx-10 bg-[url('/images/Products.png')] bg-center bg-no-repeat bg-cover">
        <div className="px-16 py-8">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side: Text */}
            <div className="w-full md:w-1/2 pl-12">
              <h4 className="text-2xl font-semibold text-green-900">
                About Us
              </h4>
              <p className="text-gray-700 mt-4 max-w-sm mb-12 leading-relaxed">
                We are a Multi-faceted African Agribusiness Company in Nigeria
                looking to solve problems in agriculture and ensuring food
                availability through efficient farming and food production
                methods thereby raising agribusiness models to the next level.
              </p>
            </div>

            {/* Right side: Image */}
            <div className="w-full md:w-1/2 flex justify-center p-8 relative">
              <Image
                src="/images/circles.png"
                alt="circles"
                className="absolute top-0 right-0"
                priority
              />
              <div className="relative w-80 h-80 md:w-[400px] md:h-[350px]">
                <Image
                  src="/images/gardner.png"
                  alt="gardner"
                  fill
                  className="object-cover object-center shadow-md"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
