import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = ({ post, likePost, posts, setPosts }) => {

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      <LikeSection post={post} likePost={() => likePost(post.id)} />
      <Comments posts={posts} setPosts={setPosts} post={post} />
    </div>
  );
};

export default Post;
