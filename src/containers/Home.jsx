import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { fetchVideos, selectAllVideos } from '../store/slices/videosSlice';
import './Home.css';

const Home = () => {
	const videos = useSelector(selectAllVideos);

	// const fetchStatus = useSelector((state) => state.videos.status);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchVideos());
	}, [dispatch]);

	return (
		<div>
			<Card>
				<div className="featured_video_player">
					<iframe
						src={`https://www.youtube.com/embed/Y-DnwVSS-vo`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Video Title"
					/>
				</div>
			</Card>
			{videos.map((video) => (
				<Card key={video._id}>
					<NavLink
						to={'/videos/' + video.urlTitle}
						className="card_content"
					>
						<div className="home_video-thumbnail">
							<img
								src={video.thumbnail}
								alt={video.title + ' thumbnail'}
							/>
						</div>
						<div className="home_video-header">
							<div className="home_video-title">
								{video.title}
							</div>
							<div className="home_video-date">
								Published on{' '}
								{new Date(
									video.publishDate
								).toLocaleDateString()}
							</div>
						</div>
						<div className="home_video-description">
							{video.description}
						</div>
					</NavLink>
				</Card>
			))}
			{/* <Card>
				<NavLink to="/videos/Y-DnwVSS-vo" className="card_content">
					<img
						className="home_video-thumbnail"
						src="https://img.youtube.com/vi/Y-DnwVSS-vo/hqdefault.jpg"
						alt="Surprise In The Opening TT | Tour De France 2022 Stage 1"
					/>
					<div className="home_video-header">
						<div className="home_video-title">
							Surprise In The Opening TT | Tour De France 2022
							Stage 1 Highlights
						</div>
						<div className="home_video-date">July 1st 2022</div>
					</div>
				</NavLink>
			</Card> */}
		</div>
	);
};

export default Home;
