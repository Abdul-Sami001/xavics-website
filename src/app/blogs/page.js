// import Navbar from '@/components/MainPage/Navbar';
import HeaderSection from '@/components/blogs/HeaderSection';
import ContentCategories from '@/components/blogs/ContentCategories';
import Banner from '@/components/blogs/banner';
import PostGrid from '@/components/blogs/PostGrid';
import MostReadSection from '@/components/blogs/MostReadSection';
import GetStartedSection from '@/components/blogs/GetStartedSection';
export default function BlogsPage() { 
    const dummyPosts = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        image: `/images/post.jpg`, // Repeats images 1 to 5 for testing
        tags: ['Engineering', 'Web Development'],
        title: `How to develop a fine website? what are necessary steps? (${i + 1})`,
        description:
            'A comprehensive guide on the essential steps to develop a high-quality website, including planning, design, development, and testing.',
        readTime: `${10 + i}-minute read`,
    }));
    return <>
        <HeaderSection />
        <ContentCategories />
        <Banner />
        <PostGrid posts={dummyPosts} />
        <MostReadSection posts={dummyPosts.slice(0, 3)} />
        <GetStartedSection />
    </>
}