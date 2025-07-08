import BlogPost from "@/components/blogs/blogs-detail-page/BlogPost";
import GetStartedSection from "@/components/blogs/GetStartedSection";
import NewsletterSidebar from "@/components/blogs/blogs-detail-page/NewsletterSidebar";
export default function BlogDetail() {
    const samplePost = {
        category: "Tools And tutorials",
        readTime: "10 minute-read",
        title: "How to Use Adobe Firefly's Generative AI Features: Insights From Designers",
        description: "AI doesn't diminish creativity—it amplifies it. Top designers reveal how Adobe Firefly's tools, like Generative Fill and Text to Vector Graphic, elevate your work and client results.",
        authors: [
            {
                name: "Shayan Ahmed Khan",
                expertise: "Design",
                experience: "4 years Experience",
                bio: "Shayan is a digital designer who specializes in Adobe Creative Suite...",
                skills: ["Figma", "Adobe XD", "Photoshop"]
            },
            {
                name: "Alex Johnson",
                expertise: "Development",
                experience: "5 years Experience",
                bio: "Alex is a full-stack developer with expertise in React and Node...",
                skills: ["JavaScript", "React", "Node.js"]
            },
        // Add more authors as needed
          ],
        figures: Array(3).fill({}) // 3 empty figures for demonstration
    };
    
    
    return <>
       
        <BlogPost post={samplePost} />
        <GetStartedSection />
        

    </>
}

