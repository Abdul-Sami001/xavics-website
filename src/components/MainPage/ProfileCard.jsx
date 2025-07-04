'use client';

import Image from 'next/image';

export default function ProfileCard({ image, name, title, role }) {
  return (
<div className="relative w-[280px] sm:w-[300px] rounded-xl bg-white shadow[#00000040] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition duration-300 p-4">
      <div className="relative w-full h-[200px] rounded-md overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

        {/* Logo at bottom-left of image */}
        <div className="absolute bottom-[0.01px] left-[0.01px] w-[22px] h-[22px]">
          <Image
            src="/images/logoNav.png" // replace with correct logo path
            alt="Logo"
            width={22}
            height={22}
            className="rounded"
          />
        </div>
      </div>

      <div className="mt-4 text-center">
      <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
      <p className="text-xs text-green-600 font-medium">{title}</p>
      <p className="text-xs text-gray-600">{role}</p>
      </div>
    </div>
  );
}
