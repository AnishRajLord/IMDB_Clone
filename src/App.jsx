import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Layout from "./components/Layout";
import WatchList from "./components/WatchList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  let [watchList, setWatchList] = useState([]);


  let handleAddtoWatchList = (movieObj) => {
      let newWatchList = [...watchList, movieObj]
      localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
      setWatchList(newWatchList)
      console.log(newWatchList)
  }

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWachList = watchList.filter((movie)=>{
      return movie.id != movieObj.id
    })
    setWatchList(filteredWachList)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWachList))
    console.log(filteredWachList)
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])
   
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />, // Use the Layout component here
      children: [
        {
          path: "/",
          element: (
            <>
              <Banner />
              <Movies handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList} />
            </>
          ),
        },
        {
          path: "watchList",
          element: <WatchList watchList={watchList} handleRemoveFromWatchList={handleRemoveFromWatchList} setWatchList={setWatchList} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

