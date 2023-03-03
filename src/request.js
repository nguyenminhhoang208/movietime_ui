import axios from "axios";

// import useFetchData from "./hooks/useFetchData";

const KEY = "14d5457f3ed52a024ecc94bb816f1f21";
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
  requestUpComming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=en-US&page=1`,
  requestTrenđing: `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`,
};
const fetchData = async (apiURL) => {
  let data;
    try {
      await axios.get(apiURL).then((response) => {
        data = response.data;
      });
    } catch (e) {
      console.log(e);
    }
  return data;
};

export { requests, KEY, fetchData };
