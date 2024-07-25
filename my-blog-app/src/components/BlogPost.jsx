import React from 'react';
import "../App.css"
const BlogPost = ({ title, content, author, image }) => {
  return (
    <div className="blog-post">
      <img src={image} alt={title} style={{ width: '100%', height: '150px' }} />
      <h3>{title}</h3>
      <p>{content}</p>
      <i>By {author}</i> <br /><br />
      <a href="#">Read More</a>
    </div>
  );
};

export default BlogPost;