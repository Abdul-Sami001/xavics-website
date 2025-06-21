import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Video/Image (Exact 480x333) */}
        <div
          className="relative overflow-hidden rounded-[20px]"
          style={{ width: '480px', height: '333px' }}
        >
          <Image
            src="/images/video-thumbnail.jpg"
            alt="Xavics Video"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is xavics?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Xavics is a team of developers, designers, and problem-solvers building smart, reliable software for modern businesses.
            We help companies bring their ideas to life — from web and mobile apps to full product ecosystems. Whether it’s designing clean user
            experiences or writing scalable backend code, we stay focused on what actually works. Simple, solid, and built to last — that’s
            how we do things at Xavics.
          </p>

          <button className="text-[#66CBFB] font-semibold border border-[1px] rounded-md px-5 py-2 transition hover:bg-gradient-to-r from-[#66CBFB] to-[#53BFDA] hover:text-white">
            Let’s Connect
          </button>
        </div>
      </div>
    </section>
  );
}
