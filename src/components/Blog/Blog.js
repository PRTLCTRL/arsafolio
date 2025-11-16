import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BlogCard from './BlogCard';
import blogPosts from '../../content/blog/blogPosts';
import Particle from '../Particle';
import './Blog.css';
import { AiOutlineHeart, AiOutlineReload } from 'react-icons/ai';

function Blog() {
  const [posts, setPosts] = useState([...blogPosts].reverse());
  const [likedPosts, setLikedPosts] = useState([]);
  const [lastDirection, setLastDirection] = useState();

  useEffect(() => {
    document.title = "Journal - Developer's Chronicle";
  }, []);

  const onSwipe = (direction, postId) => {
    setLastDirection(direction);
    if (direction === 'right') {
      const post = posts.find(p => p.id === postId);
      if (post) {
        setLikedPosts([...likedPosts, post]);
      }
    }
  };

  const onCardLeftScreen = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const resetCards = () => {
    setPosts([...blogPosts].reverse());
    setLikedPosts([]);
    setLastDirection(null);
  };

  return (
    <section className="blog-section">
      <Container fluid className="blog-container">
        <Particle />

        <div className="blog-header">
          <h1 className="blog-main-title fade-title">
            <span className="medieval-initial">T</span>he Developer's Chronicle
          </h1>
          <p className="blog-subtitle">
            Swipe right to save • Swipe left to skip • Tap to read
          </p>
        </div>

        <div className="tinder-cards-container">
          {posts.length === 0 ? (
            <div className="no-more-cards">
              <div className="end-message">
                <h2 className="fade-title">Journey Complete</h2>
                <p>You've read through all journal entries</p>
                {likedPosts.length > 0 && (
                  <div className="liked-count">
                    <AiOutlineHeart className="heart-icon" />
                    <span>{likedPosts.length} entries saved</span>
                  </div>
                )}
                <button className="reset-button" onClick={resetCards}>
                  <AiOutlineReload /> Read Again
                </button>
              </div>
            </div>
          ) : (
            <div className="card-stack">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onSwipe={onSwipe}
                  onCardLeftScreen={onCardLeftScreen}
                />
              ))}
            </div>
          )}
        </div>

        {lastDirection && posts.length > 0 && (
          <div className={`swipe-indicator ${lastDirection}`}>
            {lastDirection === 'right' ? (
              <><AiOutlineHeart /> Saved!</>
            ) : (
              'Skipped'
            )}
          </div>
        )}

        <div className="blog-footer">
          <p className="entry-count">
            {posts.length} {posts.length === 1 ? 'entry' : 'entries'} remaining
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Blog;
