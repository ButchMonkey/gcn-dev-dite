import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { fetchVideos, selectAllVideos } from '../store/slices/videosSlice';
import './Home.css';

const Home = () => {
	let videos = useSelector(selectAllVideos);

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
						src={`https://www.youtube.com/embed/${
							videos[0] ? videos[0]._id : ''
						}`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Featured Title"
					/>
				</div>
			</Card>
			{/* Ideally would be clusterized to have infinite scrolling, with return to top button - no need here as there is only a few videos */}
			{videos.map(
				(video, index) =>
					// Skip first index
					index !== 0 && (
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
					)
			)}
		</div>
	);
};

export default Home;
