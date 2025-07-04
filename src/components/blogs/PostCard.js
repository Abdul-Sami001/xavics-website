"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function PostCard({ post }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative h-48 w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="p-4 space-y-3">
                {/* Keywords with > icon */}
                <div className="flex items-center text-sm text-blue-600 font-medium space-x-2">
                    {post.tags.map((tag, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <span>{tag}</span>
                            {index < post.tags.length - 1 && <span className="font-bold">›</span>}
                        </div>
                    ))}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-800 hover:text-blue-600 text-lg leading-snug">
                    {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">{post.description}</p>

                {/* Read Time + Hover Line */}
                <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <span>{post.readTime}</span>
                    {hovered && (
                        <span className="text-blue-600 font-medium flex items-center space-x-1 transition-all duration-300">
                            <span>Read {post.tags[0]} Article</span>
                            <span>→</span>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
