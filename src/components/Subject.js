import React, {Component} from "react";

class Subject extends Component {
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return false;
	}
	render(){
		console.log('#######> Subject render')
		return (
			<header>
				<h1>{this.props.title}</h1>
				{this.props.desc}
			</header>
		)
	}
}

export default Subject;