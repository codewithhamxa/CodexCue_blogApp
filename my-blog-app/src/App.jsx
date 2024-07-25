import React from "react";
import BlogList from "./components/BlogList";
import "./App.css";

const blogPosts = [
  {
    title: "Understanding React Components",
    content: "React components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces that can be managed separately.",
    author: "Hamza Javed",
    image: "https://www.freecodecamp.org/news/content/images/2023/09/React-compo-2-1.jpg"
  },
  {
    title: "Getting Started with Vite.js",
    content: "Vite.js is a modern build tool that significantly improves the development experience. It provides fast server start, hot module replacement, and optimized builds.",
    author: "Hamza Javed",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1674322604924/4999f56c-4448-4b8d-8d66-32bcd12973ef.jpeg"
  },
  {
    title: "Styling in React with Bootstrap",
    content: "Bootstrap is a popular CSS framework that can be easily integrated into React projects. Using Bootstrap with React allows for responsive and attractive UI design.",
    author: "Hamza Javed",
    image: "https://coreui.io/images/blog/react-bootstrap-cover.webp"
  },
  {
    title: "Managing State with Redux",
    content: "Redux is a state management library for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.",
    author: "Hamza Javed",
    image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5993037/og_image/optimized/image_5-b228bd4760b1e5e5a69ab124d1e5dc7d.png"
  },
  {
    title: "Exploring React Hooks",
    content: "React Hooks are functions that let you use state and other React features in functional components. Hooks provide a powerful and expressive way to manage state and lifecycle events.",
    author: "Hamza Javed",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*zKOngarWLDAX9Wo75rOfXg.png"
  },
  {
    title: "Introduction to Next.js",
    content: "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. It's ideal for building SEO-friendly and performant web applications.",
    author: "Hamza Javed",
    image: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F5g2x2sdartj9b1gos6a9.png"
  },
  {
    title: "Advanced JavaScript Concepts",
    content: "Understanding advanced JavaScript concepts such as closures, prototypes, and async/await can significantly improve your coding skills. These concepts form the foundation of modern JavaScript development.",
    author: "Hamza Javed",
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201028214738/7-JavaScript-Concepts-That-Every-Developer-Must-Know.jpg"
},
{
    title: "Building Progressive Web Apps",
    content: "Progressive Web Apps (PWAs) provide a native app-like experience on the web. They are reliable, fast, and engaging, making them a great choice for modern web applications.",
    author: "Hamza Javed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmWJS-23a9Fm7LqhyxgNI__Z5zK7jB48Llw&s"
},
{
    title: "Introduction to TypeScript",
    content: "TypeScript is a strongly typed superset of JavaScript that adds optional static types. It can help catch errors early and make your code more robust and maintainable.",
    author: "Hamza Javed",
    image: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxww3yssq1bitprfnak92.png"
}
];

const App = () => {
  return (
    <>
    <header>
      <h1>Welcome to my Coding Blog!</h1>
      <h3>A Simple Blog Display App using React!</h3>
    </header>
      <div className="app">
        <h2>Blog Posts</h2>
        <BlogList posts={blogPosts} />
      </div>
    </>
  );
};

export default App;
