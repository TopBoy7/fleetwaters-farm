// src/components/ProductDetails.jsx
export default function ProductDetails({
  title,
  subtitle,
  description,
  bgImage,
  subImages,
}) {
  return (
    <div>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <div>
        <div>
          <p>{description}</p>
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
