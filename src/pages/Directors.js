import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"

function Directors() {
  const [directorsList, setDirectorsList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then(response => response.json())
    .then(directors => setDirectorsList(directors))
  }, [])

  function MovieLi({movie}){
    return <li>{movie}</li>
  }

  const directorArticles = directorsList.map((director, index) =>{
    const movieList = director.movies.map((movie, index) =>{
      return <MovieLi key={index} movie={movie} />
    })
    return(
      <article key={index}>
        <h2>{director.name}</h2>
        <ul>{movieList}</ul>
      </article>
    )
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorArticles}
      </main>
    </>
  );
};

export default Directors;
