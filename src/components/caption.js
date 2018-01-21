import React, { Component } from 'react';

export class Caption extends Component {
	constructor(props) {
		super(props);
		this.state= {
			srt: [
			{
               number: "1",
               start: '00:00:00,750',
               end:'00:00:04,750',
               text: "Your predilections for the bottle are tearing this family apart!"
           },
           {
               number: "2",
               start: '00:00:05,000',
               end: '00:00:06,000',
               text: "*giggle*"
           },
           {
               number: "3",
               start: '00:00:06,750',
               end: '00:00:10,750',
               text: "This is serious business Leopold!"
           },
           {
               number: "4",
               start: '00:00:11,000',
               end: '00:00:13,000',
               text: "You don't know what you're talking about..."
           },
           {
               number: "5",
               start: '00:00:13,000',
               end: '00:00:17,000',
               text: "Blah blah blah, you're in denial Leo!"
           },
           {
               number: "6",
               start: '00:00:17,500',
               end: '00:00:21,000',
               text: "I know what denial looks like!"
           },
           {
               number: "7",
               start: '00:00:21,500',
               end: '00:00:24,000',
               text: "You're too much sometimes."
           },
           {
               number: "8",
               start: '00:00:24,500',
               end: '00:00:25,500',
               text: "*giggle*"
           },
           {
               number: "9",
               start: '00:00:26,500',
               end: '000:00:27,500',
               text: "*tee hee*"
           },
           {
               number: "10",
               start: '00:00:27,750',
               end: '00:00:30,000',
               text: "Well will you at least share the bottle?"
           },
           {
               number: "11",
               start: '00:00:30,500',
               end: '00:00:32,500',
               text: "No! The milk is all mine!"
           },
           {
               number: "12",
               start: '00:00:32,500',
               end: '00:00:35,000',
               text: "But I'm famished Leo!"
           },
           {
               number: "13",
               start: '00:00:36,000',
               end: '00:00:37,000',
               text: "*heeheehee*"
           },
           {
               number: "14",
               start: '00:00:42,000',
               end: '00:00:45,000',
               text: "Just messing."
           }
			]
		}

	}
	onChange = (number, e) => {
		let store = e.target.value;
		this.setState(prevState => ({
			...prevState,
			srt: prevState.srt.map(caption => ({
				...caption,
				text: caption.number === number ? store : caption.text
			}))
		}))

	}

	onClick = () => {

		let srtString = this.state.srt.map((caption, index) => {
		    return (index > 0 ? '\n' : '') + [
		      caption.number,
		      `${caption.start} --> ${(caption.end)}`,
		      caption.text
		    ].join('\n')
		  }).join('\n') + '\n';


		this.props.onSubmit(srtString)
		console.log(srtString)

	}


	render() {
		return(
			<div class="captions">
				<h3>Enter your captions:</h3>
				<div class="captions-container">
					{this.state.srt.map(caption =>
						<div class="caption" key={caption.number}>
							<div class="caption-number">{caption.number}</div>
							<form onSubmit={this.onSubmit}>
								<input placeholder="Enter texthere" value={caption.text} onChange={(e) => this.onChange(caption.number, e)} />

							</form>
							<div class="caption-times">
								<span>{caption.start}</span>
								<span>{caption.end}</span>
							</div>
						</div>
					)}
				</div>
				<button onClick={this.onClick} >Update + Preview</button>
			</div>
		)
	}

}
