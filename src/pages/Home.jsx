import axios from "axios";
import React, { useEffect, useState } from "react";
import MainMovie from "~/components/MainMovie";
import RowListMovie from "~/components/RowListMovie";
import { requests } from "~/request";

const Home = () => {
  const [movie,setMovie]=useState({})
  useEffect(() => {
    axios.get(requests.requestTrenđing).then((response) => {
      const movies = response.data.results
      setMovie(movies[Math.floor(Math.random() * movies.length)])
    });
  }, []);
   

  return (
    <div className="mt-6 mb-10">
      <MainMovie title='Nổi bật Trong Tuần' movie={movie}/>
      <RowListMovie rowID='1' title='Phim Thịnh Hành'  apiURL={requests.requestPopular}/>
      <RowListMovie rowID='2' title='Phim Hàng Đầu'  apiURL={requests.requestTopRated}/>
      <RowListMovie rowID='3' title='Phim Sắp Chiếu'  apiURL={requests.requestUpComming}/>
      <RowListMovie rowID='4' title='Phim Đang Chiếu'  apiURL={requests.requestNowPlaying}/>
    </div>
  );
};

export default Home;
