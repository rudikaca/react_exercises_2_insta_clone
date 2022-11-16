import React, {useState} from 'react';
import './App.css';
import dummyData from "./dummy-data";
import Posts from "./components/Posts/Posts";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  const [searchResult, setSearchResult] = useState([]);

  const likePost = postId => {
    setPosts(posts?.map((post) => {
        if (!post.like && postId === post.id) {
           return {...post, likes: post.likes + 1, like : true}

        } else if (post.like && postId === post.id) {
            return {...post, likes: post.likes - 1, like : false};
        }
        return {...post};
    }));
  };

  return (
    <div className='App'>
      <SearchBar posts={posts} setSearchResult={setSearchResult} />
      <Posts setPosts={setPosts} searchResult={searchResult} likePost={likePost} posts={posts} />
    </div>
  );
};

export default App;
