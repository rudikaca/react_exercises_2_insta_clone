// You do not need to change any code in this file for MVP
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import "./SearchBar.css";

const SearchBar = ({posts, setSearchResult}) => {

    const searchPost = (e) => {
        const results = posts.filter(post => {
            if (!e.target.value) return setSearchResult(posts);
            return post.username.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setSearchResult(results);
    }

    const handleKeyPress = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            searchPost();
        }
    }

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form" onSubmit={handleKeyPress}>
        <input
          type="text"
          placeholder="Search"
          onChange={searchPost}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
