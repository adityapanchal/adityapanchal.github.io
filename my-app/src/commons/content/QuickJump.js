import React, { Component } from 'react';
class QuickJump extends Component {
  // constructor(props){
  //   super(props);
  // }
  renderraw(){
    let out = []
    let data = this.props.raw.sections;
    for(let section in data){
        out.push(<a className="nav-link" href={"#"+section+"Head"}><h5><b>{data[section].title}</b></h5></a>);

        var out2 = function(){
          let out2 = [];
            for(let card in data[section].cards){
            out2.push(<a className="nav-link ml-3 my-1" href={"#"+card+"Card"}>{data[section].cards[card].title}</a>)

            }
            return out2;
        }
        out2 = out2();
        out.push(
          <nav className="nav nav-pills flex-column">

            {out2}
          </nav>
        );

    }
    return out;
  }
  render(){
    return(
      <nav id="navbar-example3" className="navbar navbar-dark bg-dark d-none d-sm-block col-sm-2" style={{"backgroundColor":"#000000","height":"100vh"}}>

          <nav className="nav nav-pills flex-column">
            <a className="navbar-brand" href="#"><h3>Navigate</h3></a>
            {this.renderraw()}
          </nav>
      </nav>
      );
  }
}
export default QuickJump;
//<nav id="navbar-example3" class="navbar navbar-light bg-light">
//<nav className="col-sm-3 d-none d-sm-block sidebar-expanded" style={{"backgroundColor":"#00ff00"}}>


//
// <nav id="navbar-example3" class="navbar navbar-dark bg-dark" style={{"backgroundColor":"#000000"}}>
//   <a class="navbar-brand" href="#">Navbar</a>
//    <nav class="nav nav-pills flex-column">
//      <a class="nav-link" href="#item-1">Item 1</a>
//      <nav class="nav nav-pills flex-column">
//        <a class="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>
//        <a class="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a>
//      </nav>
//      <a class="nav-link" href="#item-2">Item 2</a>
//      <a class="nav-link" href="#item-3">Item 3</a>
//      <nav class="nav nav-pills flex-column">
//        <a class="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>
//        <a class="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
//      </nav>
//   </nav>
// </nav>
