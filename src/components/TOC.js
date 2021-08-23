import React, {Component} from "react";

class TOC extends Component {
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		//debugger
		return nextProps.data !== this.props.data;
	}

	render(){
		console.log('#####> TOC render');
		let data = this.props.data;
		let i = 0;
        let list = [];
        while(i < data.length){
			list.push(<li key={data[i].id}><a href={"/content/"+data[i].id+".html"}
				data-id={data[i].id}
				onClick={
				function(id, e){
					e.preventDefault();
					this.props.onChangePage(id);
					//this.props.onChangePage(e.target.dataset.id); // data-id
				}.bind(this, data[i].id)
			}>{data[i].title}</a></li>);
        	i += 1;
		}

		return (
			<nav>
				<ul>
					{list}
				</ul>
			</nav>
		)
	};
}

export default TOC;