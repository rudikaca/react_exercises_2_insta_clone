// You do not need to change this file.
import React from 'react';

const Comment = props => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  const { comment, handleDelete } = props;

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
