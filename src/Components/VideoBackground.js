import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/MovieSlice";
import '../Components/style.css';

const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector(store => store.movies?.trailervideo);
    const dispatch = useDispatch();
  //fetch trailer video

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"  + movieId + '/videos?api_key=f77ffa49e5a560546c7a05030dde1193'
    );
    const json = await data.json();
    //console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length == 0 ? filterData[0] : json.results[0];
   // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <>
      <div className="w-100 video-container position-relative">
      <div className="overlay position-absolute bg-dark">
           <p>hiiii</p> 
        </div>
        <iframe className="w-100" height='800px'
          src= {"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>

       
      </div>
    </>
  );
};

export default VideoBackground;
