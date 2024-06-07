import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import genreids from "../Utility/genre.js";

function WatchList({ watchList, handleRemoveFromWatchList, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp); // it will remove the duplicate values from temp varibale
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre, index) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              key={index}
              className={
                currentGenre == genre
                  ? "flex justify-center items-center h-[2.5rem] w-[8rem] bg-blue-400 rounded-xl text-white font-bold mx-4"
                  : "flex justify-center items-center h-[2.5rem] w-[8rem] bg-gray-400 rounded-xl text-white font-bold mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Movies"
          className="h-[3rem] w-[20rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="p-1">
                  <ArrowUpwardIcon onClick={sortIncreasing} />
                </div>
                <div className="p-1">Ratings</div>
                <div className="p-1">
                  <ArrowDownwardIcon onClick={sortDecreasing} />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj) => {
                if (currentGenre === "All Genres") {
                  return true
                } else {
                  return genreids[movieObj.genre_ids[0]] === currentGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[4rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt={movieObj.title}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      className="text-red-800"
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
