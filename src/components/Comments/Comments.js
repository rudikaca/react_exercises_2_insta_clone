import React, {useState} from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = ({ post, posts, setPosts }) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const [comment, setComment] = useState('');

  const handleClick = () => {
      const lastId = post.comments[post.comments.length-1];
      const finalComment = {id: lastId.id + 1, username: 'Rudi', text: comment};

      const newPosts = posts.map((item) => {
          if(item.id === post.id){
              item.comments.push(finalComment)
          }

          return item
      })
      setPosts(newPosts)
      setComment('');
  }

  const handleDelete = (commentId) => {
      const updatedPost = posts.map((item) => {
          if (item.id === post.id) {
              post.comments = post.comments.filter((comm) => comm.id !== commentId);
          }
          return item;
      });

      setPosts(updatedPost);
  }

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {post.comments.map((comment) => <Comment key={comment.id}  comment={comment} handleDelete={handleDelete} />)}
        <div className="comment-input">
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button disabled={!comment} onClick={handleClick}>send</button>
        </div>
    </div>
  );
};

export default Comments;
