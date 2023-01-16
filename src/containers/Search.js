import React, { useState, useEffect } from "react";
import '../Style.css';

export const Search = () => {



    const onSearchHandler = () => {

    }

    return (
        <form onSubmit={onSearchHandler} className="search-form">
          <input type="text" className="search" />
          <button type="submit" className="search-button">
            🔎
          </button>
        </form>
      );
}