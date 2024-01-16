import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import "../Components/style.css";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className="container-fluid bg-dark">
        <div className="sec-container pt-5">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovie} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
