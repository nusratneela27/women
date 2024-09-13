import Image from "next/image";
import banner from "../../../assets/background.jpg";

export const metadata = {
  title: "Contact",
};

const contact = () => {
  return (
    <div>
      <div className="relative h-[300px] overflow-hidden">
        <Image
          alt="banner"
          src={banner}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 items-center justify-center bg-black bg-opacity-50 z-10 text-center"></div>
        <div className="absolute inset-0 z-20  flex flex-col items-center justify-center text-center space-y-4 p-4">
          <h1 className="text-3xl text-white font-bold mb-4">
            Home - Contact Us
          </h1>
        </div>
      </div>
        <div className="flex flex-col w-full justify-center items-center m-auto py-20">
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg overflow-hidden bg-amber-50">
          <div className="flex flex-col justify-around pb-20">
            <div>
              <h1 className="font-bold text-4xl tracking-wide mt-0 lg:mt-20">
                Get In Touch!
              </h1>
              <p className="pt-2 text-md">
                {`We're open for any suggestion or just to have a chat!`}
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center w-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+880 019 XXX XXXX</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>info@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-map-pin"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-10 w-40 h-40 bg-neutral-500 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-neutral-500 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10  rounded-xl shadow-lg p-8  lg:w-80">
              <form className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  ></textarea>
                </div>
                <button className="d-flex flex-row items-center justify-between gap-2 self-end bg-neutral-500 font-bold rounded-lg px-6 py-4 uppercase text-sm text-white">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default contact;
