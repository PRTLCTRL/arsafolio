import React, { useState, useRef } from 'react';
import TinderCard from 'react-tinder-card';
import ReactMarkdown from 'react-markdown';
import { AiOutlineHeart, AiOutlineClose, AiOutlineRead } from 'react-icons/ai';
import { BiBookOpen } from 'react-icons/bi';

function BlogCard({ post, onSwipe, onCardLeftScreen }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  const swiped = (direction, postTitle) => {
    console.log('removing: ' + postTitle + ' to ' + direction);
    onSwipe(direction, post.id);
  };

  const outOfFrame = (postTitle) => {
    console.log(postTitle + ' left the screen!');
    onCardLeftScreen(post.id);
  };

  const swipe = async (dir) => {
    if (cardRef.current) {
      await cardRef.current.swipe(dir);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <TinderCard
      ref={cardRef}
      className="swipe"
      key={post.id}
      onSwipe={(dir) => swiped(dir, post.title)}
      onCardLeftScreen={() => outOfFrame(post.title)}
      preventSwipe={['up', 'down']}
    >
      <div className={`blog-tinder-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-inner">
          {/* Front of card - Preview */}
          <div className="card-front">
            <div className="card-header">
              <div className="medieval-ornament top"></div>
              <h2 className="blog-card-title fade-title">{post.title}</h2>
              <div className="medieval-ornament bottom"></div>
            </div>

            <div className="card-date">{formatDate(post.date)}</div>

            <div className="card-excerpt">
              <p>{post.excerpt}</p>
            </div>

            <div className="card-tags">
              {post.tags && post.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>

            <div className="card-flip-hint">
              <BiBookOpen className="flip-icon" />
              <span>Tap to read full entry</span>
            </div>

            <div className="swipe-buttons">
              <button className="swipe-btn swipe-left" onClick={() => swipe('left')}>
                <AiOutlineClose />
              </button>
              <button className="swipe-btn read-btn" onClick={() => setIsFlipped(!isFlipped)}>
                <AiOutlineRead />
              </button>
              <button className="swipe-btn swipe-right" onClick={() => swipe('right')}>
                <AiOutlineHeart />
              </button>
            </div>
          </div>

          {/* Back of card - Full content */}
          <div className="card-back">
            <div className="card-back-header">
              <button className="back-button" onClick={() => setIsFlipped(false)}>
                ← Back
              </button>
              <h3 className="fade-title">{post.title}</h3>
            </div>

            <div className="card-content medieval-script">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </TinderCard>
  );
}

export default BlogCard;
