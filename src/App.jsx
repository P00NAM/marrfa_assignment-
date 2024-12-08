import React, { useState } from "react";
import "./App.css";

const blogPosts = [
  { id: 1, title: "React Basics", category: "React", content: "Introduction to React and how to get started with it." },
  { id: 2, title: "Vite Guide", category: "Tools", content: "How to use Vite for creating fast and modern web apps." },
  { id: 3, title: "CSS Tips", category: "CSS", content: "Learn advanced CSS techniques for modern web design." },
  { id: 4, title: "JavaScript Tricks", category: "JavaScript", content: "Improve your JavaScript skills with these simple tricks." },
  { id: 5, title: "React Hooks Overview", category: "React", content: "Understand how and when to use React Hooks effectively." },
  { id: 6, title: "Building with Tailwind", category: "CSS", content: "Using Tailwind CSS to build beautiful and responsive designs." },
  { id: 7, title: "State Management Simplified", category: "React", content: "Exploring state management solutions in React, including Redux." },
  { id: 8, title: "Understanding ES6 Features", category: "JavaScript", content: "Master key features introduced in ES6 for modern JavaScript." },
  { id: 9, title: "Web Performance Optimization", category: "Tools", content: "Techniques and tools to optimize web app performance." },
  { id: 10, title: "Media Queries Made Easy", category: "CSS", content: "Creating responsive designs using media queries effectively." },
  { id: 11, title: "Async JavaScript Explained", category: "JavaScript", content: "Understanding async/await and promises in JavaScript." },
  { id: 12, title: "Component Libraries in React", category: "React", content: "A guide to popular React component libraries like Material-UI." },
  { id: 13, title: "Debugging JavaScript", category: "JavaScript", content: "Tools and techniques for debugging JavaScript applications." },
  { id: 14, title: "CSS Grid vs Flexbox", category: "CSS", content: "When to use Grid and Flexbox for layout design." },
  { id: 15, title: "Version Control with Git", category: "Tools", content: "Introduction to Git and best practices for version control." },
];


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <header className="header">
        <h1>Blog Search</h1>
        <input
          type="text"
          className="search-box"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="filter-dropdown"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="React">React</option>
          <option value="Tools">Tools</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </header>
      <main className="results">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="result-card">
              <h2>{post.title}</h2>
              <p className="category">Category: {post.category}</p>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No posts found.</p>
        )}
      </main>
    </div>
  );
}

export default App;
