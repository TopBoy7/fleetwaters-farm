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
        <div>
          <h2>Get a quote Today</h2>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
