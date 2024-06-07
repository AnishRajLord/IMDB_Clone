import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({handleAddtoWatchList, handleRemoveFromWatchList, watchList}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrevious = () => {
    if (pageNo === 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=bd8e53cd0cd03b098033b66b83e338ca&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-5">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchList={handleAddtoWatchList}
              movieObj={movieObj}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchList={watchList}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
}

export default Movies;

//https://api.themoviedb.org/3/movie/popular?api_key=bd8e53cd0cd03b098033b66b83e338ca&language=en-US&page=1
