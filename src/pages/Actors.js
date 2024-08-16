import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { act } from "react"




function Actors() {
  const [actorsList, setActorsList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then(response => response.json())
    .then(actors => setActorsList(actors))
  }, [])

  function MovieLi({movie}){
    return <li>{movie}</li>
  }

  const actorArticles = actorsList.map((actor, index) =>{
    const movieList = actor.movies.map((movie, index) =>{
      return <MovieLi key={index} movie={movie} />
    })
    return(
      <article key={index}>
        <h2>{actor.name}</h2>
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
        <h1>Actors Page</h1>
        {actorArticles}
      </main>
    </>
  );
};

export default Actors;
