import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className=" bg-[url('/images/about-page-bg.png')] bg-center min-h-[250px] bg-no-repeat bg-cover">
        <div className="p-[5rem] text-white">
          <div className="px-3">
            <h1 className="text-3xl font-extrabold mb-3">About Us</h1>
            <p>
              We offer quality livestock products available for pickup or
              delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
