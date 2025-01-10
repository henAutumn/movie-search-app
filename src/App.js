import './App.css';
import React,{useEffect, useState} from 'react';
import NavBar from './Navbar';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'http://www.omdbapi.com/?s=super&apikey=a4d98298'
        );
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
     <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
     <div className='layout'>
     <button 
        className="menu-button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>
     <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
            <li><a href="#">Menu 4</a></li>
            <li><a href="#">Menu 5</a></li>
          </ul>
        </nav>
      </aside>
      <main>
        <div className="card-layout">
          {movies.map((movie) => (
            <div className="card">
              <div className='image-container'>
            <img 
              src={movie.Poster || 'https://via.placeholder.com/300x200'} 
              alt={movie.Title} 
              className="card-image"
              />
              </div>
            <div className="card-content">
              <h3 className="card-title">{movie.Title}</h3>
              <p className="card-year">{movie.Year}</p>
            </div>
          </div>
          ))}
        </div>
      </main>
      </div>
    </div>
  );
}

export default App;
