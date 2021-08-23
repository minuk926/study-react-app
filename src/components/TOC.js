import React, {Component} from "react";

class TOC extends Component {

	render(){
		let data = this.props.data;
		let i = 0;
        let list = [];
        while(i < data.length){
			list.push(<li key={data[i].id}><a href={"/content/"+data[i].id+".html"}
				data-id={data[i].id}
				onClick={
				function(id, e){
					e.preventDefault();
					//debugger;
					// this.setState({
					// 	seleletedToc: e.target.dataset.id
					// });
					this.props.onChangePage(id);
					//this.props.onChangePage(e.target.dataset.id);

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