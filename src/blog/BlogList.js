import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const BlogList = ({ posts }) => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Arsa Khalid</h1>
        <p className="subtitle">Writer • Thinker • Creator</p>
      </header>

      <div className="posts-grid">
        {posts.map((post) => (
          <Link to={`/post/${post.slug}`} key={post.slug} className="post-card">
            <div className="post-card-content">
              <h2>{post.title}</h2>
              <p className="post-date">{post.date}</p>
              {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="empty-state">
          <p>No posts yet. Add markdown files to src/posts/ to get started.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
