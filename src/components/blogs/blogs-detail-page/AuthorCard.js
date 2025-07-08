const AuthorCard = ({ author }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-6 w-full">
            {/* Author Image (Left) */}
            <div className="flex-shrink-0 sm:w-1/4">
                <div className="w-full aspect-square rounded-lg bg-gray-200 overflow-hidden">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Author Image
                    </div>
                </div>
            </div>

            {/* Author Info (Right) */}
            <div className="flex-1 bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{author.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Verified Expert in {author.expertise}
                    </span>
                    <span className="text-xs text-gray-500">{author.experience}</span>
                </div>
                <p className="text-gray-600 mb-6">{author.bio}</p>
                <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                        {author.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
  export default AuthorCard;