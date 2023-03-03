import React, { useEffect, useState } from "react";

import axios from "axios";

import { FaStar, FaStarHalfAlt, FaRegStar, FaPlay } from "react-icons/fa";

import { KEY } from "~/request";

import noimage from "~/assets/img/noimage.jpg";

const MainMovie = ({ title, movie }) => {
  const starArray = [];

  const [movieTrailerKey, setMovieTrailerKey] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=${KEY}&language=en-US`
          )
          .then((response) => {
            setMovieTrailerKey(
              response.data.results.find((result) =>
                result.name === "Official Trailer"
                  ? result.name === "Official Trailer"
                  : result.name === "Official US Trailer"
              )?.key
            );
          });
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [movie]);

  (function () {
    const voteAverage = Math.floor(movie?.vote_average);

    for (let i = 0; i < voteAverage; i++) {
      starArray.push(FaStar);
    }
    if (voteAverage < movie?.vote_average) starArray.push(FaStarHalfAlt);
    for (let j = 9; j > voteAverage; j--) {
      starArray.push(FaRegStar);
    }
  })();

  return (
    <div className="w-full mb-10 mt-6 ">
      {title ? (
        <h1 className="text-mainColor text-xl font-bold mb-4 ">{title}</h1>
      ) : undefined}
      <div className="w-[100%]  rounded-lg overflow-hidden relative shadow-md shadow-black group/mainMovie">
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
              : noimage
          }
          alt={movie?.title}
          width="100%"
        />
        <div
          className=" w-full h-full absolute top-0 px-3 left-0 inline-block md:hidden
                bg-[#000000cd] rounded-lg overflow-hidden opacity-0 translate-y-[70%] group-hover/mainMovie:opacity-100 group-hover/mainMovie:translate-y-0
            transition ease-in-out duration-[1.25s] "
        >
          <h1 className="text-mainColor sm:text-lg text-md sm:py-4  pt-1 uppercase font-bold  ">
            {movie?.title}
          </h1>
          <div className=" pb-2 text-[12px] sm:text-sm h-[78%] text-[#d5d5d5]">
            <div>
              <h1 className="mr-2 font-bold inline-block">Năm phát hành:</h1>
              <p className="inline-block">{movie?.release_date}</p>
            </div>
            <div>
              <h1 className="mr-2  font-bold inline-block"> Đánh giá:</h1>
              {starArray.map((Compo, index) => {
                const Comp = Compo;
                return (
                  <Comp
                    key={index}
                    className="text-mainColor inline-block mr-1 mb-1 first:ml-2"
                  />
                );
              })}
              <p className="inline-block text-gray-500 ">{`(${movie?.vote_average})`}</p>
            </div>

            <div className="sm:h-[65%] sm:w-[55%] w-[85%] h-[60%] ">
              <h1 className="mr-2 font-bold inline-block ">Mô tả:</h1>{" "}
              <div className="w-full h-[85%] overflow-y-scroll scrollbar-hide">
                <p className="inline-block">{movie?.overview}</p>
              </div>
            </div>

            <div className="w-full flex items-center ">
              <button
                onClick={() => {
                  alert("Không xem được phim!");
                }}
                className=" cursor-pointer border mr-2 sm:mr-3 border-mainColor sm:px-8 sm:py-2  px-5 py-[6px] rounded-xl mt-3 hover:opacity-80"
              >
                <FaPlay className="text-md sm:text-2xl text-mainColor" />
              </button>
              <a
                href={`https://www.youtube.com/watch?v=${movieTrailerKey}`}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer border border-mainColor  px-4 py-[2px] rounded-xl mt-3 hover:opacity-80"
              >
                <h1 className="text-md sm:text-lg font-bold text-mainColor">
                  Trailler
                </h1>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:scale-[1] hidden md:inline-block md:scale-[0.65] h-[422px]  md:absolute bottom-[-65px] left-[-40px] md:group-hover/movie:left-[-108px]  lg:bottom-3 lg:left-3 p-1 rounded-lg overflow-hidden bg-[#30303048] shadow-lg shadow-black group/movie">
          <div className="w-[272px]    inline-block m-1  mb-0 rounded-lg overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt="poster"
              width="100%"
            />
          </div>
          <div
            className="w-[0]  h-[408px] group-hover/movie:w-[400px]  inline-block bg-[#000000cd] rounded-lg overflow-hidden 
            transition ease-in-out opacity-0 translate-x-[-50%] group-hover/movie:opacity-100  group-hover/movie:translate-x-[0]  duration-[1.25s] "
          >
            <h1 className="text-mainColor text-lg px-5 py-3 uppercase font-bold h-[80px] ">
              {movie?.title}
            </h1>
            <div className="px-5 py-2 h-[78%] text-[#d5d5d5]">
              <div>
                <h1 className="mr-2 font-bold inline-block">Năm phát hành:</h1>
                <p className="inline-block">{movie?.release_date}</p>
              </div>
              <div>
                <h1 className="mr-2 font-bold inline-block"> Đánh giá:</h1>
                {starArray.map((Compo, index) => {
                  const Comp = Compo;
                  return (
                    <Comp
                      key={index}
                      className="text-mainColor inline-block mr-1 mb-1 first:ml-2"
                    />
                  );
                })}
                <p className="inline-block text-gray-500 text-sm">{`(${movie?.vote_average})`}</p>
              </div>

              <div className="h-[65%] overflow-y-scroll scrollbar-hide">
                <h1 className="mr-2 font-bold inline-block ">Mô tả:</h1>{" "}
                <p className="inline-block">{movie?.overview}</p>
              </div>

              <div className="w-full flex items-center ">
                <button
                  onClick={() => {
                    alert("Không xem được phim!");
                  }}
                  className=" cursor-pointer border mr-3 border-mainColor  px-8 py-[6px] rounded-xl mt-3 hover:opacity-80"
                >
                  <FaPlay className="text-2xl text-mainColor" />
                </button>
                <a
                  href={`https://www.youtube.com/watch?v=${movieTrailerKey}`}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer border border-mainColor  px-8 py-[6px] rounded-xl mt-3 hover:opacity-80"
                >
                  <h1 className="text-md font-bold text-mainColor">Trailler</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMovie;
