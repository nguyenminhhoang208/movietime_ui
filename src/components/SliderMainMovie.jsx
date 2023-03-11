import React, { useEffect, useState, useLayoutEffect } from 'react';
import axios from 'axios';
import MainMovie from './MainMovie';
import { FaRegCircle, FaCircle } from 'react-icons/fa';

const SliderMainMovie = ({ title, apiURL }) => {
	const [indexMovie, setIndexMovie] = useState(0);
	const [nextSlide, setNextSlide] = useState(true);

	const [movies, setMovies] = useState([]);
	useLayoutEffect(() => {
		try {
			(async () => {
				await axios.get(apiURL).then((response) => {
					setMovies(response.data.results);
				});
			})();
		} catch (error) {
			console.log(error);
		}
	}, [apiURL]);

	const goToNext = () => {
		const isLastSlide = indexMovie === movies.length - 1;
		const newIndex = isLastSlide ? 0 : indexMovie + 1;
		setIndexMovie(newIndex);
	};

	useEffect(() => {
		const handle = setInterval(() => {
			if (nextSlide) goToNext();
		}, 5000);
		return () => {
			clearInterval(handle);
		};
	});

	return (
		<div>
			{title ? (
				<h1 className='text-mainColor text-xl font-bold mb-4 '>{title}</h1>
			) : undefined}

			{movies.length !== 0 ? (
				<MainMovie
					movie={movies[indexMovie]}
					hoverNextSlide={{ nextSlide, setNextSlide }}
					isSlideChild
				/>
			) : undefined}
			{movies?.length !== 0 ? (
				<div className='flex justify-center items-center lg:mt-[-20px] lg:mb-8 md:mt-[-15px] md:mb-6 sm:mt-[-10px] sm:mb-6 mb-6 mt-[-20px] '>
					{movies.map((movie, index) => {
						return indexMovie === index ? (
							<FaCircle
								key={movie.id}
								onClick={() => {
									setIndexMovie(index);
								}}
								className='inline-block  text-[12px] sm:text-sm sm:mr-2 lg:text-base lg:mr-3 mr-[6px] text-mainColor '
							/>
						) : (
							<FaRegCircle
								key={movie.id}
								onClick={() => {
									setIndexMovie(index);
								}}
								className='inline-block text-[10px] sm:text-[12px] sm:mr-2  lg:text-sm lg:mr-3 mr-[6px] opacity-50 text-mainColor'
							/>
						);
					})}
				</div>
			) : undefined}
		</div>
	);
};

export default SliderMainMovie;
