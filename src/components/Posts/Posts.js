import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = ({ likePost, posts, searchResult, setPosts }) => {

  return (
    <div className='posts-container-wrapper'>
        {searchResult.length ?
            <div>
                {searchResult.map((post) => <Post posts={posts} setPosts={setPosts} key={post.id} post={post} likePost={likePost} />)}
              </div> :
            <div>
                {posts?.map((post) => <Post posts={posts} setPosts={setPosts} key={post.id} post={post} likePost={likePost} />)}
            </div>
        }
    </div>
  );
};

export default Posts;
