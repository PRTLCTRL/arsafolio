import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Blog.css';

const BlogPost = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-container">
        <Link to="/" className="back-link">← Back to posts</Link>
        <div className="empty-state">
          <h2>Post not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <Link to="/" className="back-link">← Back to posts</Link>

      <article className="blog-post">
        <header className="post-header">
          <h1>{post.title}</h1>
          <p className="post-date">{post.date}</p>
        </header>

        <div className="post-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
