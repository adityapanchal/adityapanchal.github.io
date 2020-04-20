import React, { Component } from 'react';
import Navitem from './Navitem.js';
class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {"children":[]};
    this.props.parent.children["navbar"] = this;
    this.onclick = this.onclick.bind(this);
  }
  refresh(){
    for(let index in this.state.children){
      if(this.state.children[index].state != "Active"){
        this.state.children[index].state.status ="";
      }else{
        this.state.children[index].setState({"status":""});
      }
    }
  }
  // componentDidUpdate(){
  //   this.refresh();
  // }
  options(){
    let items = [];
    for(let option in this.props.options){
      var navitem = this.props.options[option];
      items.push(<Navitem label={navitem.label} key={option} value={option} parent={this} status={navitem.status}/>);
    }
    return items;
  }
  onclick(){
    this.refresh();
    this.state.children[0].setState({status:"active"});
  }
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-dark sticky-top" style={{'backgroundColor':'#000000'}}>

        <a className="navbar-brand" onClick={this.onclick}>
          <img src="/icons/personal/Logo.bmp" width="30" height="30" className="d-inline-block align-top" alt=""/>
          <span style={{margin:'3%'}}>Aditya Panchal</span>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {this.options()}
          </div>
        </div>
      </header>
    );
  }
}
export default Navbar;
// <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
// <a className="nav-item nav-link" href="#">Features</a>
// <a className="nav-item nav-link" href="#">Pricing</a>
// <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
