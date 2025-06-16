import React from 'react';

export default function ContactFormSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-400 px-4 py-3 placeholder-gray-500 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-400 px-4 py-3 placeholder-gray-500 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="General Questions"
              className="w-full border border-gray-400 px-4 py-3 placeholder-gray-500 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="I would like to know about..."
              className="w-full border border-gray-400 px-4 py-3 placeholder-gray-500 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-[#12C271] hover:bg-[#0da75e] transition text-white font-semibold text-sm py-3 px-8 rounded-md"
            >
              Contact us
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm text-gray-800">
          <div>
            <h4 className="font-semibold">Sales Inquiries</h4>
            <p className="text-blue-600">+92 346 1553264</p>
          </div>
          <div>
            <h4 className="font-semibold">Customer support</h4>
            <p className="text-blue-600">+92 346 1553264</p>
          </div>
          <div>
            <h4 className="font-semibold">Mail</h4>
            <p className="text-blue-600">xavics48@gmail.com</p>
          </div>
          <div>
            <h4 className="font-semibold">Address</h4>
            <p>Chandni Chowk, Rawalakot, Azad Kashmir, Pakistan</p>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
    <div className="px-4 sm:px-6 lg:px-8 mt-16">
  <div
    className="relative text-white text-center rounded-md shadow overflow-hidden max-w-screen-xl mx-auto h-[205px]"
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/images/contact-hero-bg.png"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A114F]/80 to-[#1B207A]/80"></div>
    </div>

    {/* Text Content */}
    <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
      <p className="text-sm sm:text-base md:text-lg font-medium max-w-4xl">
        Where Innovation Meets Execution — <span className="font-semibold">Xavics Connects the Best Minds in Tech.</span>
      </p>
    </div>
  </div>
</div>


    </section>
  );
}
