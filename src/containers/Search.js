import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../Style.css';

export const Search = () => {
  const [ searchParam, setSearchParam ] = useState('');

  const history = useHistory();

  const handleChange = (event) => {
    setSearchParam(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchParam
    }).toString();

    setSearchParam('');
    history.push('/search?' + searchQuery);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input placeholder="Search MiniReddit" required type="text" value={searchParam} onChange={handleChange} className="search" />
      <button type="submit" className="search-button">
        <span className="material-symbols-outlined">
          search
        </span>
      </button>
    </form>
  );
}

/*

*/

