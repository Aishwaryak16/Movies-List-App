import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {

   // console.log(movies);
    return (
        <>
        <div>
            <h2 className='mb-3 text-white'>{title}</h2>

            <div className='d-flex movie-list overflow-scroll mb-5'>
           { movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)} 
            </div>
        </div>
      
        </>
    )
}

export default MovieList;