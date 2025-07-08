
export default function ContentCard({ icon, title, text }) {
    return (
        <div className="group w-full max-w-[358px] h-auto bg-[#F9F9F9] p-6 border rounded shadow hover:shadow-lg flex flex-col items-start text-left transition-all duration-300 cursor-pointer relative">

            {/* Icon */}
            <div className="w-12 h-12 mb-4">
                {icon}
            </div>

            {/* Title */}
            <h2 className="text-[20px] font-normal leading-none mb-2 text-[#6B6666] group-hover:text-blue-600 transition-colors duration-300">
                {title}
            </h2>

            {/* Text visible by default */}
            <p className="text-[14px] font-normal leading-none text-[#A4A3A3] group-hover:hidden">
                {text}
            </p>

            {/* Hover content */}
            <div className="flex items-center justify-between w-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-6 left-6 right-6">
                <p className="text-[14px] font-normal text-blue-600">
                    Read {title} Article
                </p>

                <svg
                    className="w-6 h-6 text-[#A4A3A3] group-hover:text-blue-600 transform group-hover:-translate-x-1 transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M14 20l-1.41-1.41L16.17 13H4v-2h12.17l-3.58-3.59L14 6l6 6z" />
                </svg>
            </div>
        </div>
    );
}
