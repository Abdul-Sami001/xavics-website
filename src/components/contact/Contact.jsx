'use client';

import { useRouter } from 'next/navigation';

export default function CallToAction() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[706px] h-[77px] rounded-md flex items-center justify-between px-6 shadow-md">
        {/* Left Text */}
        <p className="text-lg font-medium text-black">Ready to get started?</p>

        {/* CTA Button */}
        <button
          onClick={() => router.push('/components/contact/Step1')}
          className="bg-#00CC83 hover:bg-green-600 text-white px-6 py-2 rounded transition"
        >
          Start Your Project Brief
        </button>
      </div>
    </div>
  );
}
