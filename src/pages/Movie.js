import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom"


function Movie() {
  const [movieList, setMovieList] = useState({})
  const [movieGenres, setMovieGenres] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${id}`)
    .then(response => response.json())
    .then(movieData => {
      setMovieList(movieData)
      console.log(movieList)
      const movieGenres = movieList.genres
      console.log(movieGenres)
      if(movieGenres){
      const movieGenreList = movieGenres.map((genre, index) =>{
        return <span key={index}>{genre}</span>
      })
      setMovieGenres(movieGenreList)
    }
      
    
    })
  }, [])



  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movieList.title}</h1>
        <p>{movieList.time}</p>
        {movieGenres}
      </main>
    </>
  );
};

export default Movie;
