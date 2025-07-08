import BlogHeader from "./BlogHeader";
import React from "react";
import AuthorsGrid from "./AuthorsGrid";

const BlogPost = ({ post }) => {
   
    return (
        <article>
            <BlogHeader
                category={post.category}
                readTime={post.readTime}
                title={post.title}
                description={post.description}
            />

                {/* <ValidationBadge /> */}
           
               
                {/* Authors Grid */}
                <AuthorsGrid authors={post.authors} />

               
           
        </article>
    );
};

export default BlogPost;