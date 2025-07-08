import PostCard from './PostCard';

export default function PostGrid({ posts }) {
    return (
        <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div key={post.id} className="p-2">
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </section>
    );
}
