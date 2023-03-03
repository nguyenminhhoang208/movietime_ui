import React from "react";
import { createContext, useState } from "react";

const TrailerMovieContext = createContext();
const TrailerMovieProvider = ({ children }) => {
  const [movie, setMovie] = useState({});
  return (
    <TrailerMovieContext.Provider
      value={{
        setMovie,
        movie,
      }}
    >
      {children}
    </TrailerMovieContext.Provider>
  );
};

export { TrailerMovieContext, TrailerMovieProvider };
