import React, { Component } from 'react';
import TalkingTwins from '../video/TalkingTwins.mp4'

export class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			srt: undefined,
			bool: false
		}
	}

	// componentDidMount(){
	// 	this.setState({
	// 		srt: this.props.srt
	// 	})
	// 	console.log('updated first time')
	// }

	
	componentWillReceiveProps(nextProps){
			this.setState({
				srt: this.props.srtString,
				bool: true
			})
			console.log(this.state.srt)		
	}



	render() {
		return(
			this.state.bool ? (
			<div>	
			<video controls="controls" width="320" height="176">
				<source src={TalkingTwins} type="video/mp4" />
				<track src={this.state.srt} kind="subtitle" srclang="en-US" label="English" />
				Your browser does not support HTML5 video.
			</video>
			</div>) : 
			(<video controls="controls" width="320" height="176">
				<source src={TalkingTwins} type="video/mp4" />
				Your browser does not support HTML5 video.
			</video>)
		)
	}

}



