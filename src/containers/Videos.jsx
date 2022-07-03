import React from 'react';
import { useParams } from 'react-router-dom';
import Linkify from 'react-linkify';
import Card from '../components/Card';
import './Videos.css';

const Videos = () => {
	const { videoId } = useParams();
	return (
		// <Page>
		<Card>
			<div className="video_player">
				<iframe
					src={`https://www.youtube.com/embed/${videoId}`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Video Title"
				/>
			</div>

			<b>
				Surprise In The Opening TT | Tour De France 2022 Stage 1
				Highlights
			</b>
			<p>Published on July 1st 2022</p>

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
				‘La Grand Boucle’ is finally here! The 2022 Tour de France
				begins with a 13 km time trial around the Danish capital of
				Copenhagen. With the likes of Filippo Ganna, Stefan Küng and
				Wout van Aert all eyeing up a strong performance today, who will
				take the first maillot jaune of this year’s race?
				<br />
				<br />
				Useful Links:
				<br />
				Adventure Documentaries, Exclusive Shows & Live Racing on GCN+:
				https://gcn.eu/plus
				<br />
				Download the GCN App for free: https://gcn.eu/app
				<br />
				Visit the GCN Shop: https://gcn.eu/gcnshop
				<br />
				Join the GCN Club: https://www.gcnclub.com/
				<br />
				<br />
				Photos: © Velo Collection (TDW) / Getty Images & © Bettiniphoto
				/ http://www.bettiniphoto.net/
				<br />
				<br />
				Brought to you by the world’s biggest cycling channel, the
				Global Cycling Network (GCN), GCN Racing brings you the best of
				the world’s bike races to your screens, wherever you are: the
				finest live race commentary, in-depth analysis and behind the
				scenes access from your favourite events are all here. So get
				involved, join us, and get ready to be in the thick of the
				action.
				<br />
				<br />
				Engage with on the channel and across social media – we’re here
				to answer every question you’ve got on cycling racing.
				<br />
				<br />
				Facebook: https://gcn.eu/FBGCNRacing
				<br />
				Instagram: https://gcn.eu/IG-GCNRacing
				<br />
				Twitter: https://gcn.eu/TW-GCNRacing
				<br />
				<br />
				Watch our sister channels:
				<br />
				Global Cycling Network - https://www.youtube.com/gcn <br />
				GCN Tech - https://www.youtube.com/gcntech <br />
				Global Triathlon Network - https://www.youtube.com/gtn
				<br />
				GCN Italia - https://www.youtube.com/gcnitalia <br />
				GCN en Espanol - https://www.youtube.com/gcnenespanol <br />
				GCN auf Deutsch - https://www.youtube.com/gcnaufdeutsch
				<br />
				GCN en Francais - https://www.youtube.com/gcnenfrancais
				<br />
				GCN Japan - https://www.youtube.com/gcnjapan <br />
				GCN Training - https://www.youtube.com/gcntraining <br />
				Global Mountain Bike Network - https://youtube.com/gmbn
				<br />
				GMBN Tech - https://www.youtube.com/gmbntech <br />
				Electric Mountain Bike Network - https://www.youtube.com/embn
			</Linkify>
		</Card>
		// </Page>
	);
};

export default Videos;
