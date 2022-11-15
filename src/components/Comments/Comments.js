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

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {post.comments.map((comment) => <Comment key={comment.id}  comment={comment} />)}
        <div className="comment">
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={handleClick}>send</button>
        </div>
    </div>
  );
};

export default Comments;
