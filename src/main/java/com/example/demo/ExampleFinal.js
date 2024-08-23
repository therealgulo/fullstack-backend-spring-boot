import React, { useState } from 'react';

const LikeDislikeButton = () => {
  // State for likes and dislikes
  const [likes, setLikes] = useState(100);
  const [dislikes, setDislikes] = useState(25);

  // State for tracking if the buttons have been clicked
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  // Handle Like button click
  const handleLikeClick = () => {
    if (liked) {
      // Already liked, so un-like it
      setLikes(likes - 1);
      setLiked(false);
    } else {
      // Not liked yet
      setLikes(likes + 1);
      setLiked(true);
    }
    
    // If the Dislike button is currently clicked, adjust both likes and dislikes
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  };

  // Handle Dislike button click
  const handleDislikeClick = () => {
    if (disliked) {
      // Already disliked, so un-dislike it
      setDislikes(dislikes - 1);
      setDisliked(false);
    } else {
      // Not disliked yet
      setDislikes(dislikes + 1);
      setDisliked(true);
    }
    
    // If the Like button is currently clicked, adjust both likes and dislikes
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <div className="like-dislike-container">
      <button 
        className={`like-button ${liked ? 'liked' : ''}`} 
        onClick={handleLikeClick}
      >
        Like | <span className="likes-counter">{likes}</span>
      </button>
      <button 
        className={`dislike-button ${disliked ? 'disliked' : ''}`} 
        onClick={handleDislikeClick}
      >
        Dislike | <span className="dislikes-counter">{dislikes}</span>
      </button>

      <style jsx>{`
        .like-dislike-container {
          display: flex;
          gap: 10px;
        }

        .like-button {
          padding: 10px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        }

        .like-button.liked {
          background-color: #d1e7dd;
          border-color: #badbcc;
        }

        .likes-counter {
          font-weight: bold;
        }

        .dislike-button {
          padding: 10px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        }

        .dislike-button.disliked {
          background-color: #f8d7da;
          border-color: #f5c6cb;
        }

        .dislikes-counter {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default LikeDislikeButton;
