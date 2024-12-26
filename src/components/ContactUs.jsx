import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const ContactUs = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">Contact us</h1>
            <p className="mt-1 text-gray-400">Got a question or an opportunity? We're just a message away!!</p>
          </div>
          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 border-gray-700 bg-gray-900">
              <h2 className="mb-8 text-xl font-semibold">Get In Touch 🚀</h2>
              <form>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="py-3 px-4 block w-full border-gray-700 rounded-lg text-sm bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="py-3 px-4 block w-full border-gray-700 rounded-lg text-sm bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-3 px-4 block w-full border-gray-700 rounded-lg text-sm bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="py-3 px-4 block w-full border-gray-700 rounded-lg text-sm bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <textarea
                    rows="4"
                    placeholder="Message"
                    className="py-3 px-4 block w-full border-gray-700 rounded-lg text-sm bg-gray-800 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 py-3 px-4 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 hover:text-gray-200 focus:outline-none"
                >
                  Send inquiry <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
              <p className="mt-3 text-center text-sm text-gray-400">We'll get back to you in as soon as possible.</p>
            </div>

            <div className="divide-y divide-gray-700">
            <div className="flex gap-x-5 p-7">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Our address:</h4>

                <address className="mt-1 text-neutral-400 text-sm not-italic">
                  JP Cleaning Services
                  <br />
                  Baneshowr, Kathmandu
                </address>
              </div>
            </div>


        {/* Phone */}
        <div className="flex gap-x-5 p-7">
          <svg
            className="shrink-0 size-6 text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.88 19.88 0 0 1-8.63-3.21 19.64 19.64 0 0 1-6-6A19.88 19.88 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.14 1.14.46 2.25.93 3.3a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.47 2.16.79 3.3.93a2 2 0 0 1 1.72 2.03Z" />
          </svg>

          <div>
                  <h4 className="text-white font-semibold">Phone Number :</h4>
                  <p className="mt-1 text-sm text-gray-400"> Call us</p>
                  <a
                    href="tel:+9808982141"
                    className="text-sm font-medium text-blue-500 hover:text-blue-400"
                  >
                    +977-9865314672
                  </a>
          </div>
        </div>




            {/* Email */}
            <div className="flex gap-x-5 p-7">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Email us:</h4>

                <p className="mt-1 text-sm text-gray-400">If you wish to write us an email instead, please use</p>
                <a
                  href="mailto:example@site.com"
                  className="mt-2 inline-flex text-sm font-medium text-blue-500 hover:text-blue-400"
                >
                  example123@.com
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;