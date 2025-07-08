const BlogHeader = ({ category, readTime, title, description }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left Column - Text Content */}
                <div className="lg:w-1/2">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <span className="font-medium">{category}</span>
                        <span>•</span>
                        <span>{readTime}</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{title}</h1>
                    <p className="text-lg text-gray-600 mb-8">{description}</p>
                    <div className="text-blue-500 mt-0.5 ">✗</div>
                    <p className="text-sm text-gray-600 p-4 bg-blue-50 rounded-lg mb-8">
                        Authors are valued experts in their field and write on topics in which they have demonstrated experience.
                        This is a generic type of research and validated by liquid experts in the same field.
                    </p>
                </div>
                
                {/* Right Column - Featured Image */}
                <div className="lg:w-1/2">
                    <div className="bg-gray-200 rounded-xl aspect-video w-full h-full min-h-[300px] flex items-center justify-center">
                        <span className="text-gray-400">Featured Image</span>
                    </div>
                </div>
            </div>
        </div>
    );
  };
export default BlogHeader;