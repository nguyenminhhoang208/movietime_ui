import axios from "axios";
import React, { useEffect, useState } from "react";
import { KEY } from "~/request";

import noimage_doc from "~/assets/img/noimage_doc.png";

const RowCredits = ({ movieId }) => {
  const [credits, setCredits] = useState([]);
  let maxCredits = 7;

  useEffect(() => {
    async function getCredits() {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
        )
        .then((response) => {
          setCredits(response.data.cast);
          console.log(credits);
        });
    }
    getCredits();
    return;
  }, [movieId]);
  return (
    <div className="mb-10">
      <h1 className="text-xl font-bold mb-4 text-mainColor">
        Diễn viên nổi bật:
      </h1>
      <div className=" overflow-scroll whitespace-nowrap scrollbar-hide ">
        {credits.map((credit) => {
          if (credit?.popularity && maxCredits > 0) {
            maxCredits--;
            return (
              <div
                key={credit?.name}
                className="mx-2 first:ml-0 last:mr-0 p-1 relative border border-[#fea10054] hover:border-mainColor inline-block rounded-lg group/credit overflow-hidden"
              >
                <img
                  className="transition duration-[0.75s] rounded-lg group-hover/credit:scale-[1.05]"
                  src={
                    credit.profile_path
                      ? `https://image.tmdb.org/t/p/original/${credit?.profile_path}`
                      : noimage_doc
                  }
                  alt={credit?.name}
                  width={credit.profile_path ? "165px" : "178px"}
                />
                <div className="absolute bottom-0 left-0 p-1 bg-[#000000ba] w-full h-[0] opacity-0  group-hover/credit:h-[23%] group-hover/credit:opacity-100 transtion duration-[0.75s] ">
                  <h1 className="font-bold text-sm text-mainColor">
                    {credit?.name}
                  </h1>
                  <p className=" text-xs text-[#b9b9b9]">{credit?.character}</p>
                </div>
              </div>
            );
          }
          return undefined
        })}
      </div>
    </div>
  );
};

export default RowCredits;
