import React, { Component } from 'react';

class Timeline extends Component {
  constructor(props){
    super(props);
    this.api = "api/timeline.json"
    this.state = {"data":null};
    this.componentDidUpdate();
  }
  componentDidUpdate(){


    if(this.state.data===null){
        fetch(this.api).then(res =>res.json())
        .then((data) => {
            this.setState({"data":data});
          }
        ).catch(
          (d)=>{
          console.log(d);
          this.setState({"data":false});
          }
        )

    }

  }
renderCards(){
  let out = [];
  let data = this.state.data.data;
  console.log(data)
  for(let index in data){
    var card = data[index];
    out.push(
      <li className="media" style={{"textAlign":"justify","marginBottom":"15px"}}>
        <div className="mr-3">
        <span className="material-icons" style={{"fontSize":"72px"}}>{card.icon}</span>
        </div>
        <div className="media-body">
          <h5 className="mt-0 mb-1">{card.title}</h5>
          <b className="mt-0 mb-1" style={{"color":"#4c4c4c"}}>{card.timestamp}</b><br/>
          {card.description}
        </div>
      </li>
    );

  }
  return out;
}

render(){
    if(this.state.data === null){
      return (
        <div className="spinner-border" style={{"width":"3rem","height":"3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
      );
    }else if (this.state.data === false) {
      return (
        <span>Error while trying to fetch data.</span>
      );
    }else{
      return (
        <div>
        <h1>Timeline</h1>
        <hr/>
          <ul className="list-unstyled">
                  {this.renderCards()}
          </ul>
        </div>
      );
    }
  }
}
export default Timeline;
