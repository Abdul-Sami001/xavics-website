import AuthorCard from "./AuthorCard";
const AuthorsGrid = ({ authors }) => {
    return (
        <div className="w-full mb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Authors</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {authors?.map((author, index) => (
                        <AuthorCard key={index} author={author} />
                    ))}
                </div>
            </div>
        </div>
    );
  };
export default AuthorsGrid;