import React, { Component } from 'react';
import { Caption } from './components/caption';
import { Video } from './components/video';

export class View extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bool: false,
			srt: undefined

		}
	}

	onSubmit = (bool, srt) => {
		this.setState({
			bool: true,
			srt: srt
		})
		console.log(srt)
	}


  render() {
    return (
      <div className="App">

      	<Video bool={this.state.bool} srt={this.state.srt}  />
        <Caption onSubmit={this.onSubmit}/>
      </div>
    );
  }
}
