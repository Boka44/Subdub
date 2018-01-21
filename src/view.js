import React, { Component } from 'react';
import { Caption } from './components/caption';
import { Video } from './components/video';

export class View extends Component {
	constructor(props) {
		super(props);
		this.state = {
			srtString: undefined,
			bool: false

		}
	}

	onSubmit = (srtString) => {
		this.setState({
			srtString,
			bool: true
		})

	}


  render() {
    return (
      <div className="App">

      	<Video srtString={this.state.srtString} />
        <Caption onSubmit={this.onSubmit}/>
      </div>
    );
  }
}
