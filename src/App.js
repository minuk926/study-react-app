import React, {Component} from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedToc: 0,
        subject : {title: "WEB", desc: "World wide web!!!"},
        list: [
            {id: 1, title: "HTML", desc: "HyperText Markup Language."},
            {id: 2, title: "CSS", desc: "Cascading Style Sheets."},
            {id: 3, title: "JavaScript", desc: "Java Script Language."}
        ],
        content: {title: "HTML", desc: "HTML is HyperText Markup Language."},

    };

  }
  render() {
      let _title, _desc = null;
      _title = this.state.content.title;
      _desc= this.state.content.desc;

      let i = 0;
      let data = null;

      while(i < this.state.list.length){
          data = this.state.list[i];
          if(this.state.selectedToc === data.id) {
              _title = data.title;
              _desc = data.desc;
              break;
          }
          i += 1;
      }

    return (
        <div className="App">
            <Subject title={this.state.subject.title} desc={this.state.subject.desc}></Subject>
            <TOC data={this.state.list}
                 onChangePage={function(id){
                     debugger
                    this.setState({
                        selectedToc: Number(id)
                    });
                 }.bind(this)}
            >
            </TOC>
            <Content title={_title} desc={_desc}></Content>
        </div>
    );
  }
}

export default App;
