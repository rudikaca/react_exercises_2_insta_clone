// You do not need to change this file.
import React from 'react';

const Comment = ({ comment, handleDelete }) => {

  return (
    <div className='comment-text'>
      <span className='user'>{comment.username}</span>
      {' '}
      <span className='comment'>{comment.text}</span>
        {comment.username === 'Rudi' && <button className="delete" onClick={() => handleDelete(comment.id)}>Delete</button>}
    </div>
  );
};


export default Comment;
