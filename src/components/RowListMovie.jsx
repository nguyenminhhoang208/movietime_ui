import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	FaArrowCircleLeft,
	FaArrowCircleRight,
	FaPlayCircle,
} from 'react-icons/fa';

import noimage from '~/assets/img/noimage.jpg';
import { TrailerMovieContext } from '~/context/TrailerMovieContext';

const RowListMovie = ({
	title = false,
	apiURL,
	rowID = false,
	scroll = false,
}) => {
	const [listMovie, setListMovie] = useState([]);

	const trailerMovieContext = useContext(TrailerMovieContext);

	useEffect(() => {
		axios.get(apiURL).then((response) => {
			setListMovie(response?.data?.results);
		});
	}, [apiURL]);

	const nextSlide = (id) => {
		const row = document.getElementById('row_' + id);
		row.scrollLeft += 475;
	};
	const beforeSlide = (id) => {
		const row = document.getElementById('row_' + id);
		row.scrollLeft -= 275;
	};

	const truncateString = (str, num) => {
		return str?.length > num ? str.slice(0, num) + '...' : str;
	};

	return (
		<>
			{listMovie?.length !== 0 ? (
				<>
					{scroll ? (
						<div className='mb-3 relative group/row'>
							{title ? (
								<h1 className='text-mainColor text-xl font-bold mb-4'>
									{title}
								</h1>
							) : undefined}
							<ul
								id={'row_' + rowID}
								className='w-full '
								// className="w-full flex flex-wrap justify-evenly"
							>
								{listMovie.map((movie) => {
									return (
										<li
											key={movie?.id}
											className='lg:w-[24%]  md:w-[32%] sm:w-[48%] w-[47%]  mx-[6px] sm:mx-1 mb-1 sm:mb-0  inline-block overflow-hidden rounded-md cursor-pointer relative group/link_movie  '
										>
											<Link
												to={'/movie/' + movie.id}
												onClick={() => {
													trailerMovieContext.setMovie(movie);
												}}
											>
												<div className='  transition ease-in-out group-hover/link_movie:-translate-y-1 group-hover/link_movie:scale-[1.15] duration-[0.5s]'>
													<img
														className=' rounded-lg translate-y-[-4%]'
														src={
															movie.backdrop_path
																? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
																: noimage
														}
														alt={movie?.title}
													/>
												</div>
												<FaPlayCircle
													className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-5xl text-[#fea900]
                transition ease-in-out opacity-0 group-hover/link_movie:opacity-90 scale-[2] group-hover/link_movie:scale-[1] duration-[0.5s]'
												/>
												<div
													className=' absolute top-1 left-1 text-[12px] px-2 py-1 bg-gradient-to-r from-[rgb(254,106,0)] to-mainColor rounded-md
                        transition translate-y-[-50%]  opacity-0 group-hover/link_movie:translate-y-[0] 
                        group-hover/link_movie:opacity-100  duration-[0.5s]
                        '
												>
													HD | Vietsub
												</div>
												<div className='text-[12px] sm:text-sm absolute bottom-0 truncate  transition translate-y-[50%] w-0 opacity-0 group-hover/link_movie:translate-y-[0] group-hover/link_movie:opacity-100 group-hover/link_movie:w-full duration-[0.5s]  left-0 bg-[#000000c2] text-md px-2 py-1 hover:text-mainColor'>
													{movie.title}
												</div>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					) : (
						<div className='mb-3 relative group/row'>
							{title ? (
								<h1 className='text-mainColor text-xl font-bold mb-4'>
									{title}
								</h1>
							) : undefined}
							<FaArrowCircleLeft
								onClick={() => {
									beforeSlide(rowID);
								}}
								className='   sm:group-hover/row:block  absolute top-[50%] text-4xl hover:text-5xl hidden translate-y-[-20%] text-mainColor left-0 translate-x-[-50%] z-10 cursor-pointer'
							/>
							<ul
								id={'row_' + rowID}
								className='overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide'
							>
								{listMovie.map((movie) => {
									return (
										<li
											key={movie?.id}
											className='lg:w-[24%]  md:w-[32%] sm:w-[33%] w-[49%] md:mx-2  mx-1 first:ml-0 last:mr-0 inline-block overflow-hidden rounded-md cursor-pointer relative group/link_movie  '
										>
											<Link
												to={'/movie/' + movie.id}
												onClick={() => {
													trailerMovieContext.setMovie(movie);
												}}
											>
												<div className=' transition ease-in-out group-hover/link_movie:-translate-y-1 group-hover/link_movie:scale-[1.15] duration-[0.5s]'>
													<img
														className=' rounded-lg translate-y-[-4%]'
														src={
															movie.backdrop_path
																? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
																: noimage
														}
														alt={movie?.title}
														width='100%'
													/>
												</div>
												<FaPlayCircle
													className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-5xl text-[#fea900]
                transition ease-in-out opacity-0 group-hover/link_movie:opacity-90 scale-[2] group-hover/link_movie:scale-[1] duration-[0.5s]'
												/>
												<div
													className=' absolute top-1 left-1 text-[12px] px-2 py-1 bg-gradient-to-r from-[rgb(254,106,0)] to-mainColor rounded-md
                        transition translate-y-[-50%] opacity-0 group-hover/link_movie:translate-y-[0] 
                        group-hover/link_movie:opacity-100  duration-[0.5s]
                        '
												>
													HD | Vietsub
												</div>

												<div className='text-[12px] sm:text-sm absolute bottom-0 truncate  transition translate-y-[50%] w-0 opacity-0 group-hover/link_movie:translate-y-[0] group-hover/link_movie:opacity-100 group-hover/link_movie:w-full duration-[0.5s]  left-0 bg-[#000000c2] text-md px-2 py-1 hover:text-mainColor'>
													{movie.title}
												</div>
											</Link>
										</li>
									);
								})}
							</ul>
							<FaArrowCircleRight
								onClick={() => {
									nextSlide(rowID);
								}}
								className='sm:group-hover/row:block  absolute top-[50%] text-4xl hover:text-5xl hidden translate-y-[-20%] text-mainColor right-0 translate-x-[50%] z-10 cursor-pointer'
							/>
						</div>
					)}
				</>
			) : (
				<div className='w-full h-[328px]'>
					<h1 className='text-xl font-bold mb-4  ml-5'>Không có dữ liệu</h1>
				</div>
			)}
		</>
	);
};

export default memo(RowListMovie);
