import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Linkify from 'react-linkify';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import Icons from '../assets/Images/Icons';
import Card from '../components/Card';
import { selectVideoByURL, fetchVideos } from '../store/slices/videosSlice';
import './Videos.css';

dayjs.extend(advancedFormat);

const socials = [
	{
		name: 'facebook',
		icon: Icons.Facebook,
		href: 'https://www.facebook.com/sharer/sharer.php',
	},
	{
		name: 'twitter',
		icon: Icons.Twitter,
		href: 'https://twitter.com/home?status=NYI',
	},
	{
		name: 'whatsapp',
		icon: Icons.Whatsapp,
		href: 'whatsapp://send?text=NYI',
	},
];

const Videos = () => {
	const { videoId } = useParams();

	// const fetchStatus = useSelector((state) => state.videos.status);
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchVideos());
	}, [dispatch]);

	const video = useSelector((state) => selectVideoByURL(state, videoId));
	if (!video) {
		return (
			<Card>
				<b>404 - Video Not found</b>
				<br />
				<NavLink to="/">Go back to home</NavLink>
			</Card>
		);
	}

	return (
		<Card>
			<div className="video_player">
				<iframe
					allowFullScreen
					frameBorder="0"
					title={video.title}
					src={`https://www.youtube.com/embed/${video._id}`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				/>
			</div>
			<div className="video_info">
				<div className="video_title">
					{video.title}

					{/* Prefer flexbox over float, but this is much easier in this */}
					<div className="video_socials" style={{ float: 'right' }}>
						{socials.map((social) => {
							return (
								<a
									key={social.name}
									className="video_share_button"
									href={social.href}
									target="_blank"
									rel="noreferrer"
								>
									<social.icon />
								</a>
							);
						})}
					</div>
				</div>
				<div className="video_date">
					Published on{' '}
					{dayjs(video.publishDate).format('MMMM Do YYYY')}
				</div>
				<Linkify
					// Use componentDecorator to fix issue with properties attribute
					// https://github.com/tasti/react-linkify/issues/96

					componentDecorator={(decoratedHref, decoratedText, key) => (
						<a
							target="blank"
							className="video_description-link"
							href={decoratedHref}
							key={key}
						>
							{
								// Strip out the protocol from the href to look nicer on mobile (in my opinion)
								decoratedText.replace(/(http|https):\/\//g, '')
							}
						</a>
					)}
				>
					<p className="video_description">{video.description}</p>
				</Linkify>
			</div>
		</Card>
	);
};

export default Videos;
