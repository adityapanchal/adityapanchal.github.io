import React, { Component } from 'react';
import EducationCard from '../templates/EducationCard.js';
import SkillsCard from '../templates/SkillsCard.js';
import ExperienceCard from '../templates/ExperienceCard.js';
class MainContent extends Component {
  constructor(props){
     super(props);
     this.state = {};
  }
  renderSections(){
    if (this.props.parent.state.tab==="education"){
      let out = []
      let data = this.props.raw.sections;
      for(let section in data){
          out.push(<h1 id={section+"Head"}>{data[section].title}</h1>);
          out.push(<hr/>);
          for(let card in data[section].cards){
            out.push(<EducationCard id={card+"Card"+section+"Head"} raw={data[section].cards[card]}/>);
          }
      }
      return out;
    }else if (this.props.parent.state.tab==="skills"){
      let out = []
      let data = this.props.raw.sections;
      for(let section in data){
          out.push(<h1 id={section+"Head"}>{data[section].title}</h1>);
          out.push(<hr/>);
          for(let card in data[section].cards){
            out.push(<SkillsCard id={card+"Card"+section+"Head"} section={data[section].title} raw={data[section].cards[card]}/>);
          }
      }
      return out;
    }else if (this.props.parent.state.tab==="experience"){
      let out = []
      let data = this.props.raw.sections;
      for(let section in data){
          console.log(section);
          out.push(<h1 id={section+"Head"}>{data[section].title}</h1>);
          out.push(<hr/>);
          for(let card in data[section].cards){
            out.push(<ExperienceCard id={card+"Card"+section+"Head"} section={data[section].title} raw={data[section].cards[card]}/>);
          }
      }
      return out;
    }else{
      return (<h2> No data to display </h2>);
    }
  }
  render() {
      return(
        <div className="col col-sm-10" style={{"backgroundColor":"#ffffff","overflowY":"scroll","height":"100vh","paddingBottom":"100px"}} data-spy="scroll" data-target="#navbar-example3" data-offset="0">
          {this.renderSections()}
        </div>
      );
  }
}
export default MainContent;
//<div className="col" style={{"backgroundColor":"#ffffff"}}>
