import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => {
  return (
    <div className='blog-list'>
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} author={post.author} image={post.image} />
      ))}
    </div>
  );
};

export default BlogList;