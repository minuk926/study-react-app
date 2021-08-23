import React, {Component} from "react";

class UpdateContent extends Component {
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.data !== this.props.data;
	}
	render() {
		console.log('#####> UpdateContent render');
		return (
			<article>
				<h2>Update</h2>
				<form action="/create_process" method="post" onSubmit={
					function(e){
						e.preventDefault();
						this.props.onAction(e.target.id.value, e.target.title.value, e.target.desc.value);
					}.bind(this)
				}>
					<p>
						<input type="text" name="title" placeholder="title" value={this.props.data.title}/>
					</p>
					<p>
						<textarea name="desc" placeholder="description" value={this.props.data.desc}></textarea>
					</p>
					<p>
						<input type="submit"/>
					</p>
					<input name="id" type="hidden" value={this.props.data.id}/>
				</form>
			</article>
		)
	};
}

export default UpdateContent;
