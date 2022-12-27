import React, { useState, useEffect } from "react";
import Movie from "./components/Movie/Movie";
import SearchBar from "./components/Searchbar/SearchBar";
import "./App.css";
function App() {
  const [movie, setMovie] = useState([]);
  const fetchData = async () => {
    try {
      const date = new Date();
      const currentYear = date.getFullYear();
      const data = await fetch(
        `${process.env.REACT_APP_DISCOVER_MOVIES_URI}api_key=${process.env.REACT_APP_API_KEY}&sort_by=primary_release_date.desc&vote_count.gte=3.8&year=${currentYear}&include_adult=false`
      );
      const result = await data.json();
      setMovie(result.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <>
        <SearchBar />
        <div className="title">
          <h1>Most Recent Movie</h1>
        </div>
        <div className="movies">
          {movie &&
            movie.length > 0 &&
            movie.map((obj) => {
              return <Movie key={obj.id} movie={obj} />;
            })}
        </div>
      </>
    </div>
  );
}

export default App;
