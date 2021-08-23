import React, {Component} from "react";

class UpdateContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.data.title,
			desc: this.props.data.desc
		};
		this.inputFormHandler = this.inputFormHandler.bind(this);
	}

	inputFormHandler(e){
		this.setState({[e.target.name]: e.target.value});
	}
	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	return nextProps.data !== this.props.data;
	// }
	render() {
		console.log('#####> UpdateContent render');
		return (
			<article>
				<h2>Update</h2>
				<form action="/" method="post" onSubmit={
					function(e){
						e.preventDefault();
						this.props.onAction(this.props.data.id, this.state.title, this.state.desc);
					}.bind(this)
				}>
					<p>
						<input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.inputFormHandler}/>
					</p>
					<p>
						<textarea name="desc" placeholder="description" value={this.state.desc} onChange={this.inputFormHandler}/>
					</p>
					<p>
						<input type="submit"/>
					</p>
				</form>
			</article>
		)
	};
}

export default UpdateContent;
