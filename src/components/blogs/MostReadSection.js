import PostCard from './PostCard';

export default function MostReadSection({ posts }) {
    return (
        <section className="py-12 px-4 md:px-10 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                Most-read Articles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {posts?.map((post) => (
                    <div key={post.id} className="w-full max-w-[350px]">
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </section>
    );
}
