import React from "react";
import { useParams } from "react-router-dom";
import RowListMovie from "~/components/RowListMovie";

import options from "~/options";
import { KEY } from "~/request";

const Search = () => {
  const { searchValue } = useParams();
  const searchMovieIdApi = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`
  const searchGenresApi = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${searchValue.slice(6)}&with_watch_monetization_types=flatrate`

  return (
    <div className=" min-h-full">
      <header className="w-full h-[60px] mt-4 mb-6 flex items-center justify-between">
        <h1 className=" text-2xl uppercase inline-block text-mainColor">
          Từ khóa: {searchValue}{" "}
        </h1>
        <ul>
          {options.map((option, index) => {
            if (option?.searchOptions) {
              return (
                <li
                  key={index}
                  className="inline-block ml-2 rounded-md overflow-hidden mr-2 cursor-pointer"
                >
                  <select
                    className="text-[#fff] p-1 pl-2 pr-2 rounded-md  bg-[#303030]"
                    name={option?.title}
                    id={option?.title + "_" + index}
                  >
                    <option value="0">{option?.title}</option>

                    {option?.options.map((optionChild) => {
                      return (
                        <option
                          key={optionChild?.name + '_' + optionChild?.id}
                          value={optionChild?.id}
                        >
                          {optionChild?.name}
                        </option>
                      );
                    })}
                  </select>
                </li>
              );
            }
            return undefined;
          })}
        </ul>
      </header>
      <main className="w-full">
        <RowListMovie
          scroll
          apiURL={searchValue.includes('genres') ? searchGenresApi : searchMovieIdApi}
        />
      </main>
    </div>
  );
};

export default Search;
