import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./searchBar.css";
const Searchbar = () => {
  const [input, setInput] = useState("");
  const [content, setContent] = useState([]);
  console.log(content);
  const fetchData = async () => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_SEARCH_URI}api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
      );
      const res = await data.json();
      setContent(res.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <div className="container">
        <form className="nosubmit">
          <input
            className="search-image"
            type="search"
            name="Search"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for a movie"
          ></input>
        </form>
      </div>
      <div className="search">
        { content  && content.map((c) => <Movie key={c.id} movie={c} />)}
      </div>
      { input !== '' && content !== [] && (
        <p className="alert">No movies found .Please check the name of the movie</p>
      )}
    </div>
  );
};
export default Searchbar;
