import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { addnowPlayingMovies } from '../Utils/MovieSlice';
import { useEffect } from 'react'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { addPopularMovies } from '../Utils/MovieSlice';
import { addTopRatedMovie } from '../Utils/MovieSlice';
import { addUpcomingMovie } from '../Utils/MovieSlice';
import GPtSearch from './GPtSearch';


const Browse = () => {

  const showGPTSearch = useSelector(store => store.gpt.showGPtSearch)
  
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f77ffa49e5a560546c7a05030dde1193')
    const json = await data.json();
    //console.log(json.results);
    dispatch(addnowPlayingMovies(json.results));
  }

  const getPopularMovies = async () => {
    const data1 = await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=f77ffa49e5a560546c7a05030dde1193')
    const json1 = await data1.json();
    dispatch(addPopularMovies(json1.results));
  }

  const getTopRatedMovies = async () => {
    const data3 = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f77ffa49e5a560546c7a05030dde1193');
    const json3 = await data3.json();
    dispatch(addTopRatedMovie(json3.results));
  }

  const getUpcomingMovie = async () => {
    const data4 = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=f77ffa49e5a560546c7a05030dde1193')
    const json4 = await data4.json();
    dispatch(addUpcomingMovie(json4.results));
  }

  useEffect (()=> {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovie();
  }, []);

  return (
    <div>
      <Header />
      {
        showGPTSearch ? ( <GPtSearch /> ) :
        (
          <>
          <MainContainer />
          <SecondaryContainer />
          </>
        )
      }
     
      


      {
        /*
        Main Container 
          - video background
          - videotitle
        Secondary Container
          - movie list * n
             - cards * n
        */
      }
    </div>
  )
}

export default Browse;
