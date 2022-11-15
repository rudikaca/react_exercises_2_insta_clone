import React from 'react';

const PostHeader = ({ thumbnailUrl, username }) => {

  return (
    <div className='post-header'>
      <div className='post-thumb-wrapper'>
        <img
          alt='post header'
          className='post-thumb'
          src={thumbnailUrl}
        />
      </div>
      <h2>{username}</h2>
    </div>
  );
};

export default PostHeader;
