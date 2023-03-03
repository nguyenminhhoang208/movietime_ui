import React, { useContext } from "react";
// import YouTube from "react-youtube";

import { TrailerMovieContext } from "~/context/TrailerMovieContext";
import { KEY } from "~/request";
import RowCredits from "~/components/RowCredits";
import RowListMovie from "~/components/RowListMovie";
import MainMovie from "~/components/MainMovie";

const Movie = () => {
  const trailerMovieContext = useContext(TrailerMovieContext);
  const movie = trailerMovieContext.movie;

  return (
    <div className="w-full ">
      <MainMovie movie={movie} />
      <RowCredits movieId={movie.id} />
      <RowListMovie
        title="Phim tương tự"
        apiURL={`https://api.themoviedb.org/3/movie/${movie?.id}/recommendations?api_key=${KEY}&language=en-US&page=1`}
      />
    </div>
  );
};

export default Movie;
