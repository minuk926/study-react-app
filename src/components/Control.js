import React, {Component} from "react";

class Control extends Component {
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return false;
	}
	render() {
		console.log('#######> Control render')
		return (
			<div>
				<ul>
					<li><a href="/create" onClick={
						(e)=>{
							e.preventDefault();
							this.props.onChangeMode("create")
						}
					}>create</a></li>
					<li><a href="/update" onClick={
						(e)=>{
							e.preventDefault();
							this.props.onChangeMode("update")
						}
					}>update</a></li>
					<li><input type="button" value="delete" onClick={
						()=>{
							this.props.onChangeMode("delete")
						}
					}/></li>
				</ul>
			</div>
		);
	}
}

export default Control;