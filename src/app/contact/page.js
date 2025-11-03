import Image from "next/image";
export default function ContactPage() {
  return (
    <div>
      <div className=" bg-[url('/images/contact-bg.png')] bg-center min-h-[250px] bg-no-repeat bg-cover">
        <div className="p-[5rem] text-white">
          <div className="px-3">
            <h1 className="text-3xl font-extrabold mb-3">Contact Us</h1>
            <p>Contact us today to make enquiries.</p>
          </div>
        </div>
      </div>

      <div className="flex pt-5 pb-5 mx-[60px]">
        <div className="flex-1">
          <form className="pe-5 pb-5">
            <div className="border-b border-white/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-5">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="Type your full name"
                    className="block text-sm/6 font-medium"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="full-name"
                      type="text"
                      name="full-name"
                      placeholder="Type your full name"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Add your email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-4">
                  <label
                    htmlFor="about"
                    className="block text-sm/6 font-medium"
                  >
                    Customer Request
                  </label>

                  <div className="mt-2 mb-[1.5rem]">
                    <textarea
                      id="about"
                      name="about"
                      placeholder="Add your request"
                      rows="3"
                      className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray sm:text-sm/6 outline-none"
                    ></textarea>
                  </div>

                  <button className="bg-green-900 text-white px-6 py-2 mt-5 mb-10  rounded-xl ">
                    Send a message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="flex-1 p-15">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.670395930123!2d3.45179307236485!3d6.436362879310356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf501a1595da5%3A0x670c18672f5b64f7!2sFleetwaters%20Limited!5e0!3m2!1sen!2sng!4v1762162624312!5m2!1sen!2sng"
            className="mb-5 rounded-[10px] aspect-square w-[80%]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center space-x-4">
              <Image
                src="/images/location.png"
                width={24}
                height={24}
                alt="location"
              />
              <span>The Fleetwaters farms, off Ajah, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center space-x-4">
              <Image
                src="/images/call.png"
                width={24}
                height={24}
                alt="phone"
              />
              <span>+2348024316781</span>
            </li>
            <li className="flex items-center space-x-4">
              <Image
                src="/images/email.png"
                width={24}
                height={24}
                alt="email"
              />
              <span>info@fleetwatersfarm.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
