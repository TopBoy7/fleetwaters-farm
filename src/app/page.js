import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
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

            <div className="w-full md:w-1/2 flex justify-center p-8 relative">
              <div className="absolute top-0 right-0 z-50">
                <Image
                  src="/images/circles.png"
                  alt="dots"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>

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

      <div className="mt-[64px] pb-[64px]">
        <div className="mx-[32px] px-[12px]">
          <h4 className="w-1/2 mx-auto mb-3 text-center text-2xl font-semibold text-green-900">
            Why choose Fleetwater Farms?
          </h4>
          <p className="w-1/2 mx-auto text-gray-700 text-center mb-[48px]">
            At Fleetwaters, one of our biggest goals is to ensure the Food
            production process is efficient for quality farming practices with
            minimal impact on the environment while delivering healthy products
            to our consumers.
          </p>

          <div className="bg-green-900 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            <div className="p-6 text-center">
              <Image
                src="/images/leaf.png"
                alt="leaf"
                width={50}
                height={50}
                className="mx-auto mb-3 object-contain"
                priority
              />
              <h2 className="text-white text-xl font-semibold mb-3">
                100% organic products
              </h2>
              <p className="text-gray-300 text-sm mb-3">
                All our products are organically grown and groomed with the best
                materials that ensure our clients are left satisfied.
              </p>
            </div>

            <div className="p-6 text-center">
              <Image
                src="/images/check.png"
                alt="check"
                width={50}
                height={50}
                className="mx-auto mb-3 object-contain"
                priority
              />
              <h2 className="text-white text-xl font-semibold mb-3">
                Quality Standard
              </h2>
              <p className="text-gray-300 text-sm mb-3">
                We ensure our products are top quality and meet the required
                standards set by agricultural boards.
              </p>
            </div>

            <div className="p-6 text-center">
              <Image
                src="/images/delivery.png"
                alt="delivery"
                width={50}
                height={50}
                className="mx-auto mb-3 object-contain"
                priority
              />
              <h2 className="text-white text-xl font-semibold mb-3">
                Nationwide Delivery
              </h2>
              <p className="text-gray-300 text-sm mb-3">
                Fleetwaters farms deliver nationwide across states in Nigeria
                and will expand to Africa in the coming years.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/images/products-bg.png')] bg-center bg-no-repeat bg-cover">
        <div className="py-[64px]">
          <div className="mx-[60px] px-[12px]">
            <h4 className="w-1/2 mx-auto mb-3 text-center text-2xl font-semibold text-green-900">
              Our Products
            </h4>
            <p className="w-1/3 mx-auto text-gray-700 text-center mb-[48px]">
              All our products are organically grown and groomed with the best
              materials.
            </p>
            <div className="grid md:grid-cols-5 gap-6  px-[64px]">
              <div className=" bg-white pt-6 px-4 pb-4 rounded-3xl outline outline-gray-300">
                <div className="  bg-[#fef212]  p-4 rounded-full outline outline-1 outline-orange-500 w-40 h-40 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/images/Tmt.png"
                    alt="tomato"
                    width={100}
                    height={100}
                    className="mx-auto mb-3 object-contain"
                    priority
                  />
                </div>
                <p className="text-center text-sm">Tomato</p>
              </div>
              <div className="bg-white pt-6 px-4 pb-4 rounded-3xl outline outline-gray-300">
                <div className="bg-[#fef212]  p-4 rounded-full outline outline-1 outline-orange-500 w-40 h-40 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/images/Peppers.png"
                    alt="pepper"
                    width={100}
                    height={100}
                    className="mx-auto mb-3 object-contain"
                    priority
                  />
                </div>
                <p className="text-center text-sm">Peppers</p>
              </div>
              <div className="bg-white pt-6 px-4 pb-4 rounded-3xl outline outline-gray-300">
                <div className="bg-[#fef212]  p-4 rounded-full outline outline-1 outline-orange-500 w-40 h-40 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/images/fish.png"
                    alt="fish"
                    width={100}
                    height={100}
                    className="mx-auto mb-3 object-contain"
                    priority
                  />
                </div>
                <p className="text-center text-sm">Catfish</p>
              </div>
              <div className="bg-white pt-6 px-4 pb-4 rounded-3xl outline outline-gray-300">
                <div className="bg-[#fef212]  p-4 rounded-full outline outline-1 outline-orange-500 w-40 h-40 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/images/broilers.png"
                    alt="chicken"
                    width={100}
                    height={100}
                    className="mx-auto mb-3 object-contain"
                    priority
                  />
                </div>
                <p className="text-center text-sm">Broilers</p>
              </div>
              <div className="bg-white pt-6 px-4 pb-4 rounded-3xl outline outline-gray-300">
                <div className="bg-[#fef212]  p-4 rounded-full outline outline-1 outline-orange-500 w-40 h-40 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src="/images/cow.png"
                    alt="cow"
                    width={100}
                    height={100}
                    className="mx-auto mb-3 object-contain"
                    priority
                  />
                </div>
                <p className="text-center text-sm">Livestock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
