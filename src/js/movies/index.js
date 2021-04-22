import preloaderFactory from '../preloader'
import moviesService from '../services/movies.service'
import moviesListTemplate from '../templates/moviesList.hbs'
import '../../css/movies.css'



const preloader = preloaderFactory('.preloader');
const moviesListRef = document.querySelector('.movies-list');
const listObserverRef = document.querySelector('.list-observer');
let carrentPage = 0;
const movies = [];





const renderList = movies => {
    const moviesWithPosterPath = movies.map(movie => {
        return {
            ...movie,
            poster_path: `https://www.themoviedb.org/t/p/w500${movie.poster_path}`,
        }
    });
    const moviesList = moviesListTemplate(moviesWithPosterPath);
    moviesListRef.innerHTML = moviesList;
}

const fetchMovies = async page => {
    try {
        const { results } = await moviesService.fetchPopularMovies(page)
        // movies = [...movies, ...results];
        renderList(results);
           
    } catch (error) {
        console.log(error)
    } finally {
       preloader.hide() 
    }
    
    
    
}
fetchMovies()