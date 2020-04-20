import React, { Component } from 'react';
import EducationCard from '../templates/EducationCard.js'
class MainContent extends Component {
  constructor(props){
     super(props);
     this.state = {};
  }
  renderSections(){
    let out = []
    let data = this.props.raw.sections;
    for(let section in data){
        out.push(<h1 id={section+"Head"}>{data[section].title}</h1>);
        for(let card in data[section].cards){
          out.push(<EducationCard id={card+"Card"} raw={data[section].cards[card]}/>);
        }
    }
    return out;
  }
  render() {
      return(
        <div className="col" style={{"backgroundColor":"#ffffff","overflow-y":"scroll","height":"100vh","minWidth":"420px","padding-bottom":"30px"}} data-spy="scroll" data-target="#navbar-example3" data-offset="0">
          {this.renderSections()}
        </div>
      );
  }
}
export default MainContent;
//<div className="col" style={{"backgroundColor":"#ffffff"}}>
