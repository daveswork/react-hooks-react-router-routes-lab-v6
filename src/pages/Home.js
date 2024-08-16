import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movieList, setMovieList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then(response => response.json())
    .then(movies => setMovieList(movies))
  }, [])

  const movieCards = movieList.map((movie, index) => {
    return <MovieCard key={index} title={movie.title} id={movie.id} />
  } )

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieCards}
      </main>
    </>
  );
};

export default Home;
