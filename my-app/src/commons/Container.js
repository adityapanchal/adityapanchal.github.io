import React, { Component } from 'react';
import QuickJump from './content/QuickJump.js';
import MainContent from './content/MainContent.js';
import Home from './home/Home.js';
class Container extends Component {
  constructor(props){
    super(props);
    this.props.parent.children["container"] = this;
    this.apilist = {
      "education":"api/education.json",
      "skills":"api/skills.json",
      "experience":"api/experience.json"
    }
    this.state = {"tab":this.props.parent.state.tab,"loaded":false,"raw":null};
  }
  componentDidUpdate(){

    if(this.state.tab==="home"){
      this.state.loaded = true;
    }else{
      if(this.state.loaded===false){
        if(this.state.tab in this.apilist){
          fetch(this.apilist[this.state.tab])
          .then(res =>res.json())
          .then(
            (data) => {
              this.setState({"raw":data,"loaded":true});
            }
          )
          .catch(
            (d)=>{
            console.log(d);
            this.setState({"loaded":"error"});
            }
          )
        }
      }
    }
  }
  render() {
    if (this.state.tab !== "home"){
      if(this.state.loaded === false){
        return(
          <div className="container-fluid"><br/>
            <div className="spinner-border" style={{"width":"3rem","height":"3rem"}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        );
      }else if(this.state.loaded === "error"){
        return(
          <div className="container-fluid"><br/>
            Error while trying to fetch data.
          </div>
        );
      }else{

          return(
            <div className="container-fluid" style={{"backgroundColor":"#ff0000"}}>
              <div className="row mainparent">
                <QuickJump raw={this.state.raw} parent={this} />
                <MainContent raw={this.state.raw} parent={this}/>
              </div>
            </div>
          );

      }
    }else{
      return (<Home/>);
    }
  }
}
export default Container;
