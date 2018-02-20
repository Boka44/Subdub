import React, { Component } from 'react';

export class Caption extends Component {
	constructor(props) {
		super(props);
		this.state= {
      bool: false,
			srt: [
			{
               "index": 1,
               "start": 750,
               "startStr": "00:00:00,750",
               "end": 4750,
               "endStr": "00:00:04,750",
               "text": "Your predilections for the bottle are tearing this family apart!"
           },
           {
               "index": 2,
               "start": 5000,
               "startStr": "00:00:05000",
               "end": 6000,
               "endStr": "00:00:06,000",
               "text": "*giggle*"
           },
           {
               "index": 3,
               "start": 6750,
               "startStr": "00:00:06,750",
               "end": 10750,
               "endStr":  "00:00:10,750",
               "text": "This is serious business Leopold!"
           },
           {
               "index": 4,
               "start": 11000,
               "startStr": "00:00:11,000",
               "end": 13000,
               "endStr": "00:00:13,000",
               "text": "You don't know what you're talking about..."
           },
           {
               "index": 5,
               "start": 13000,
               "startStr": "00:00:13,000",
               "end": 17000,
               "endStr": "00:00:17,000",
               "text": "Blah blah blah, you're in denial Leo!"
           },
           {
               "index": 6,
               "start": 17500,
               "startStr": "00:00:17,500",
               "end": 21000,
               "endStr": "00:00:21,000",
               "text": "I know what denial looks like!"
           },
           {
               "index": 7,
               "start": 21500,
               "startStr": "00:00:21,500",
               "end": 24000,
               "endStr": "00:00:24,000",
               "text": "You're too much sometimes."
           },
           {
               "index": 8,
               "start": 24500,
               "startStr": "00:00:24,500",
               "end": 25500,
               "endStr": "00:00:25,500",
               "text": "*giggle*"
           },
           {
               "index": 9,
               "start": 26500,
               "startStr": "00:00:26,500",
               "end": 27500,
               "endStr": "000:00:27,500",
               "text": "*tee hee*"
           },
           {
               "index": 10,
               "start": 27750,
               "startStr": "00:00:27,750",
               "end": 30000,
               "endStr": "00:00:30,000",
               "text": "Well will you at least share the bottle?"
           },
           {
               "index": 11,
               "start": 30500,
               "startStr": "00:00:30,500",
               "end": 32500,
               "endStr": "00:00:32,500",
               "text": "No! The milk is all mine!"
           },
           {
               "index": 12,
               "start": 32500,
               "startStr": "00:00:32,500",
               "end": 35000,
               "endStr": "00:00:35,000",
               "text": "But I'm famished Leo!"
           },
           {
               "index": 13,
               "start": 36000,
               "startStr": "00:00:36,000",
               "end": 37000,
               "endStr": "00:00:37,000",
               "text": "*heeheehee*"
           },
           {
               "index": 14,
               "start": 42000,
               "startStr": "00:00:42,000",
               "end": 45000,
               "endStr": "00:00:45,000",
               "text": "Just messing."
           }
			]
		}

	}
	onChange = (index, e) => {
		let store = e.target.value;
		this.setState(prevState => ({
			...prevState,
			srt: prevState.srt.map(caption => ({
				...caption,
				text: caption.index === index ? store : caption.text
			}))
		}))

	}

	onClick = () => {

		// let srtString = this.state.srt.map((caption, indexKey) => {
		//     return (indexKey > 0 ? '\n' : '') + [
		//       caption.index,
		//       `${caption.start} --> ${(caption.end)}`,
		//       caption.text
		//     ].join('\n')
		//   }).join('\n') + '\n';

    let info = this.state.srt;
    console.log(JSON.stringify(info))



    const url = 'http://localhost:8080/srt'
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(info)
      })

      .then(function (data) {
        console.log('Request success: ' + data);

      }).catch(function (error) {
        console.log('Request failure: ' + error);
      })
      
      this.setState({
        bool: true
      })
      console.log(this.state.srt)
		this.props.onSubmit(this.state.bool, this.state.srt)
   

	}


	render() {
		return(
			<div className="captions">
				<h3>Enter your captions:</h3>
				<div className="captions-container">
					{this.state.srt.map(caption =>
						<div className="caption" key={caption.index}>
							<div className="caption-number">{caption.index}</div>
							<form onSubmit={this.onSubmit}>
								<input placeholder="Enter text here" value={caption.text} onChange={(e) => this.onChange(caption.index, e)} />

							</form>
							<div className="caption-times">
								<span>{caption.startStr}</span>
								<span>{caption.endStr}</span>
							</div>
						</div>
					)}
				</div>
				<button onClick={this.onClick}>Update + Preview</button>
			</div>
		)
	}

}
