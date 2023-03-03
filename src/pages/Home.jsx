import React from "react";
import RowListMovie from "~/components/RowListMovie";
import SliderMainMovie from "~/components/SliderMainMovie";
import { requests } from "~/request";

const Home = () => {
  return (
    <div className="mt-6 mb-10">
      <SliderMainMovie
        title="Nổi bật Trong Tuần"
        apiURL={requests.requestTrenđing}
      />
      <RowListMovie
        rowID="1"
        title="Phim Thịnh Hành"
        apiURL={requests.requestPopular}
      />
      <RowListMovie
        rowID="2"
        title="Phim Hàng Đầu"
        apiURL={requests.requestTopRated}
      />
      <RowListMovie
        rowID="3"
        title="Phim Sắp Chiếu"
        apiURL={requests.requestUpComming}
      />
      <RowListMovie
        rowID="4"
        title="Phim Đang Chiếu"
        apiURL={requests.requestNowPlaying}
      />
    </div>
  );
};

export default Home;
