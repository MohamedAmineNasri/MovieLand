import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com/?apikey=776e7215';

const movie1 = {
  "Title": "Spiderman",
  "Year": "2012",
  "imdbID": "tt232323",
  "Type": "movie",
  "Poser": "N/A"
}

const App =() => {
  const [searchTerm, setSearchTerm] = useState("");
    const [moives, setMoives] = useState([])
    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMoives(data.Search)
    console.log(data.Search)
}
  useEffect(() => {
    searchMovies("Batman")
  }, [])
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
      <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
      </div>

      {moives?.length > 0 ? (
      <div className='container'>
        {moives.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    ) : (
      <div className='empty'>
        <h2>No Movies Found</h2>
      </div>
    )}


    </div>
  );
}

export default App;
