const GetStartedSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#051077] to-[#0a28c4] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to get started?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                    Join thousands of satisfied customers who are already using our product.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white text-[#051077] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                        Start your project brief
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetStartedSection;