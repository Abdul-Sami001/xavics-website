const NewsletterSidebar = () => {
    return (
        <div className="w-[251px]  bg-gradient-to-br from-[#051077] to-[#0a28c4] p-6 rounded-lg flex flex-col">
            {/* Heading */}
            <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                World-class articles, delivered weekly
            </h3>

            {/* Email Input */}
            <div className="mt-3 ">
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-3 bg-white bg-opacity-10 backdrop-blur-sm text-white placeholder-gray-300 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition"
                />
            </div>

            {/* CTA Button */}
            <button
                className="w-full bg-green-600 text-shadow-white text-[20px] hover:bg-[#051077] font-medium py-3 px-4 rounded-lg transition duration-200 mt-7 mb-4"
            >
                Get Great Content
            </button>

            {/* Footer Note */}
            <p className="text-xs text-white text-opacity-70">
                We respect your privacy. Unsubscribe at any time.
            </p>
        </div>
    );
};

export default NewsletterSidebar;