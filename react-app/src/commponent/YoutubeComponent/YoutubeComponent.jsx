import React from 'react';
import './YoutubeComponent.css';
const YoutubeComponent = (props) => {
	
	return (

			<div className="youtube-wrapper">
				<div className="img-thumb">
					<img src="https://avatars3.githubusercontent.com/u/46808907?s=460&v=4" alt="https://github.com/edwinpen10"/>
					<p className="time">{props.time}</p>
				</div>
				<p>{props.title}</p>
				<p>{props.description}</p>
			</div>

		)	
	
}

YoutubeComponent.defaultProps = {
	time:'00.00',
	title : 'belum ada judul',
	description : 'belum punya description'
}


export default YoutubeComponent;