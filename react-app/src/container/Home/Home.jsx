import React, {Component} from 'react';
import YoutubeComponent from '../../commponent/YoutubeComponent/YoutubeComponent'

class Home extends Component {
		render(){
				return ( 
					<div>
					<p>Youtube</p>
					<hr/>
					<YoutubeComponent time="07.09" title="Judul pertama" description="LLorem ipsum dolor sit amet, consectetur adipisicing elit"/>
					<YoutubeComponent time="09.00" title="Judul kedua" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
					<YoutubeComponent time="10.00" title="Judul ketiga" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,"/>
					<YoutubeComponent/>
					</div>
				
				)
			}
	}




export default Home