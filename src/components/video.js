import React, { Component } from 'react';
import TalkingTwins from '../video/TalkingTwins.mp4'
import axios from 'axios';
import subs from '../srt/generated.srt'

export class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bool: false,
			srt: undefined
		}
	}

	// componentDidMount(){
	// 	this.setState({
	// 		srt: this.props.srt
	// 	})
	// 	console.log('updated first time')
	// }


	componentWillReceiveProps(nextProps){
		if(this.props.bool) {
			this.setState({
				bool: true
			})
		this.setState({
			srt: this.props.srt
		})
			// console.log(this.state.srt)
			// console.log("GET beginning")
			// const url = 'http://localhost:8080/srt'
			// if(this.state.srt !== undefined) {
			// 	var video = document.getElementById("video1");
			//     var startTime, endTime, message;
			//     var newTextTrack = video.addTextTrack("captions", "sample");
			//     newTextTrack.mode = newTextTrack.SHOWING; // set track to display
			//     // create some cues and add them to the new track 
			//     for (var i = 0; i < this.state.srt.length; i++) {
			//       startTime = this.state.srt[i].start;
			//       endTime = this.state.srt[i].end / 100;
			//       message = this.state.srt[i].text / 100;
			//       newTextTrack.addCue(new TextTrackCue(startTime, endTime, message));
			//     }
			//     video.play();
			// }
		 //    let objectURL = fetch(url, {
		 //    	method: "GET"
		 //    }).then(function(response) {
			//   if(response.ok) {
			//     response.blob().then(function(blob) {
			//      	const objectURL = URL.createObjectURL(blob);
			       
			//        return objectURL
			//     });
			//   } else {
			//     console.log('Network request: ' + response.status + ': ' + response.statusText);
			//   }
			// });
			// console.log(objectURL)
			// axios({
			//   method:'get',
			//   url: url,
			//   responseType:'stream'
			// })
			//   .then(function(response) {
			//   response.blob().then(function(blob) {

			//   })
			// });

		}
	}
	// OnEvent() {
	// 	var video = document.getElementById("video1");
	//     var startTime, endTime, message;
	//     var newTextTrack = video.addTextTrack("captions", "sample");
	//     newTextTrack.mode = newTextTrack.SHOWING; // set track to display
	//     // create some cues and add them to the new track 
	//     for (var i = 0; i < this.srt.length; i++) {
	//       startTime = this.state.srt[i].start;
	//       endTime = ((i * 5) + 5);
	//       message = "This is number " + i;
	//       newTextTrack.addCue(new TextTrackCue(startTime, endTime, message));
	//     }
	//     video.play();
	// }

	render() {
		return(
			this.state.bool ? (
			<div>
			<video id="video1" controls="controls" width="320" height="176" crossOrigin="anonymous">
				<source src={TalkingTwins} type="video/mp4" />
				<track src={subs} kind="subtitles" srcLang="en-US" label="English" />
				Your browser does not support HTML5 video.
			</video>
			</div>) :

			(<div className="video-container">
				<video id="video1" controls="controls" width="320" height="176">
				<source src={TalkingTwins} type="video/mp4" />
				Your browser does not support HTML5 video.
			</video></div>)
		)
	}

}