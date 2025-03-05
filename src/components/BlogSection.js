import React from "react";
import "../styles/BlobSection.css";

const blogs = [
  {
    id: 1,
    date: "Nov 9, 2023",
    title: "How UX works in web",
    tags: ["UI", "UX"],
    image: "image 23.jpg",
  },
  {
    id: 2,
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    tags: ["DESIGN", "PRINT"],
    image: "image 21.png",
  },
  {
    id: 3,
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    tags: ["FIGMA", "WEB"],
    image: "image 22.png",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        {/* Display the title as an image */}
        <img src="Frame.png" alt="Blog Title" className="blog-title-image" />
        <a href="#" className="view-all">View All</a>
      </div>
      
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-date">{blog.date}</span>
              <h3 className="blog-title">{blog.title}</h3>
              <div className="blog-tags">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <button className="read-button">Read</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
