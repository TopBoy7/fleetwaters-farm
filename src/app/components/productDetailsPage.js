import Image from "next/image";

export default function ProductDetails({
  title,
  subtitle,
  description,
  bgImage,
  subImages,
}) {
  return (
    <div>
      <div
        className="bg-center min-h-[250px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="p-[5rem] text-white">
          <div className="px-3">
            <h1 className="text-3xl font-extrabold mb-3">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>

      <div
        className="bg-[url('/images/products-page-bg.png')] bg-center bg-no-repeat bg-cover
 px-[5rem] pt-[5rem] pb-[3rem]"
      >
        <div className="px-6 pt-6 pb-10 mt-5 mb-5">
          <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>

      <div>
        <div className="pt-5 pb-5">
          <div className="mx-[60px] px-[12px]">
            <div
              className="flex justify-center items-center text-green-900 text-4xl font-bold text-center
          "
            >
              <hr className="bg-gray-200 h-[2px] w-[20%]  border-none" />
              <h2 className="m-3">Get a quote Today</h2>
              <hr className="bg-gray-200 h-[2px] w-[20%] border-none" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 p-4 gap-6">
              {subImages.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-200"
                >
                  <div className="w-full h-56 relative flex justify-center items-center">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-3 w-full">
                    <p className="text-gray-900 font-bold">{item.title}</p>

                    <button className="bg-green-900 text-white px-6 py-2 rounded-xl ">
                      Get a quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
