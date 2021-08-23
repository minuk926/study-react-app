import React, {Component} from "react";

class ReadContent extends Component {
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.data !== this.props.data;
	}
	render() {
		console.log('#######> ReadContent render');
		return (
			<article>
				<h2>{this.props.data.title}</h2>
				{this.props.data.desc}
			</article>
		)
	};
}

export default ReadContent;
