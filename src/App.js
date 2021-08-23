import React, {Component} from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
        mode: 'read',
        selected_toc_id: 1,
        subject : {title: "WEB", desc: "World wide web!!!"},
        contents: [
            {id: 1, title: "HTML", desc: "HyperText Markup Language."},
            {id: 2, title: "CSS", desc: "Cascading Style Sheets."},
            {id: 3, title: "JavaScript", desc: "Java Script Language."}
        ],
        content: {title: "HTML", desc: "HTML is HyperText Markup Language."},

    };

  }
  render() {
      console.log('#######> App render')
      let _article = <ReadContent data={this.getReadContent()}></ReadContent>;
      if (this.state.mode === 'create')
          _article = <CreateContent onAction={
              (title, desc) => {
                  this.max_content_id = this.max_content_id + 1;

                  // 1 - 제외
                  // this.state.contents.push({id: this.max_content_id, title: title, desc: desc});
                  // this.setState({
                  //     contents: this.state.contents
                  // })

                  // 2 - 제외
                  // let cpArr = Array.from(this.state.contents);  Objec.assign
                  // cpArr.push(
                  //     {id: this.max_content_id, title: title, desc: desc}
                  // );
                  // this.setState({
                  //      contents: cpArr
                  // });

                  // 3 - spread 연산자
                  this.setState({
                      contents: [...this.state.contents, {id: this.max_content_id, title: title, desc: desc}],
                      selected_toc_id: this.max_content_id,
                      mode: 'read'
                  });

                  // // 4 - concat 연산
                  // this.setState({
                  //     contents: this.state.contents.concat({id: this.max_content_id, title: title, desc: desc})
                  // });
              }
          }/>;
      else if (this.state.mode === 'update') {
          _article = <UpdateContent data={this.getReadContent()} onAction={
              (id, title, desc) => {
                  //let _contents = Array.from(this.state.contents);
                  //let _contents = Object.assign([], this.state.contents);
                  let _contents = [...this.state.contents];
                  _contents[id - 1] = {id: id, title: title, desc: desc};

                  this.setState({
                      contents: _contents,
                      mode: 'read'
                  })
              }
          }/>;
      }

    return (
        <div className="App">
            <Subject title={this.state.subject.title} desc={this.state.subject.desc}/>
            <TOC data={this.state.contents}
                 onChangePage={function(id){
                    this.setState({
                        selected_toc_id: id,
                        mode: 'read'
                    });
                 }.bind(this)}
            >
            </TOC>
            <Control onChangeMode={
                (mode)=>{
                    if(mode === 'delete'){
                        if(window.confirm('삭제하시겠습니까?')){
                            let _contents = [...this.state.contents];

                            let i = 0;
                            let data = null;

                            while (i < _contents.length) {
                                data = _contents[i];
                                if (this.state.selected_toc_id === data.id) {
                                    _contents.splice(i, 1);
                                    break;
                                }
                                i += 1;
                            }

                            this.setState({
                                mode: mode,
                                contents: _contents,
                                selected_toc_id: this.state.contents.length > 0? 1: 0
                            });
                            alert('삭제 되었습니다');
                        }

                    }else{
                        this.setState({
                            mode: mode,
                        })
                    }
                }
            }
            />
            {_article}

        </div>
    );
  }

    getReadContent() {
        let i = 0;
        let data = null;

        while (i < this.state.contents.length) {
            data = this.state.contents[i];
            if (this.state.selected_toc_id === data.id) {
                return data;
            }
            i += 1;
        }
        return this.state.contents[0];
    }
}

export default App;
