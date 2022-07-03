import React from 'react';
import './Card.css';

const Card = ({ children, style }) => (
	<div className="card">
		<div className="card_content" style={{ ...style }}>
			{children}
		</div>
	</div>
);

export default Card;
