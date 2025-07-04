export default function HeaderSection() {
    return (
        <section className="w-full mx-auto h-[501px] bg-[#051077] text-white p-6">
            <div className="h-full flex flex-col justify-start items-start text-left space-y-6">
                <h1 className="text-3xl sm:text-4xl font-bold pt-2.5 md:pt-6">Xavics Blog</h1>
                <p className="text-base sm:text-lg">
                    The Xavics is the top hub for Mobile App And Web developers, designers, management consultants, executives, and entrepreneurs, featuring key technology updates, tutorials, freelancer resources, and management insights.
                </p>
                <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7l-7.05 4.11c-.54-.5-1.25-.81-2.04-.81-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                    </svg>
                    <span className="text-sm sm:text-base">1.1k shares</span>
                </div>
                <p className="text-base sm:text-lg">
                    Xavics core team members share their experience, expertise, and perspectives here.
                </p>
                <div className="w-full max-w-md">
                    <div className="flex items-center border border-gray-300 rounded p-2 bg-white">
                        <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full p-1 text-black outline-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
  }