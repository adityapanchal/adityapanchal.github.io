import React, { Component } from 'react';
import Navbar from './commons/Navbar.js';
import Container from './commons/Container.js'
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.children= {};
    this.state={"tab":"home"};
    this.options = {
      "home":{"label":"Home","status":"active"},
      "education":{"label":"Education","status":""},
      "skills":{"label":"Skills","status":""},
      "experience":{"label":"Projects and Experience","status":""}
    };
  }
  componentDidUpdate(){
    console.log(this.state.tab);
    this.children["navbar"].refresh();
    // this.render();
    this.children["container"].setState({"tab":this.state.tab,"loaded":false});

  }
  render() {
    return (
      <div className="App">
        <Navbar parent={this} options={this.options}/>
        <Container parent={this}/>
      </div>
    );
  }
}
export default App;
