import React, { Component } from 'react';
class Navitem extends Component {
  constructor(props){
    super(props);
    this.state = {"status":this.props.status};
    this.props.parent.state.children.push(this);
    this.onclick = this.onclick.bind(this);
  }
  onclick(){
    this.props.parent.props.parent.setState({"tab":this.props.value});
    //()=>{
    //this.props.parent.refresh();
    this.setState({"status":"active"});
    //}
    this.state.status = "active";

  }
  render() {
      if(this.state.status === "active"){
            return <a data-toggle="collapse" data-target="#navbarNavAltMarkup" onClick={this.onclick} className="nav-item nav-link active"><u>{this.props.label}</u> <span className="sr-only">(current)</span></a>
      }else if (this.state.type === "default"){
            return <a data-toggle="collapse" data-target="#navbarNavAltMarkup" onClick={this.onclick} className="nav-item nav-link">{this.props.label} </a>
      }else{
        return <a data-toggle="collapse" data-target="#navbarNavAltMarkup" onClick={this.onclick} className={"nav-item nav-link "+this.state.status}>{this.props.label} </a>
      }
  }
}
export default Navitem;
