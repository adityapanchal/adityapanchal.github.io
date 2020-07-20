import React from 'react';
function buttons(projectslist){
  var out = [];
  for(var index in projectslist){
  //out.push(<span class="badge badge-pill badge-info">Info</span>);
  var project = projectslist[index];
  out.push(<a id={"Project"+index} href={project.link} className="badge badge-pill badge-info" style={{"margin":"2px"}}>{project.title}</a>)
  }
  return out;
}
function libraries(projectslist){
  var out = [];
  for(var index in projectslist){
  //out.push(<span class="badge badge-pill badge-info">Info</span>);
  var project = projectslist[index];
  out.push(<a id={"Lib"+index} href={project.link} className="badge badge-pill badge-dark" style={{"margin":"2px"}}>{project.title}</a>)
  }
  return out;
}

function SkillsCard(props){
  if(props.section ==="Languages" ){
    return (
      <div className="card mb-3" style={{"maxWidth":"640px","marginLeft":"auto","marginRight":"auto","padding":"12px"}} >
        <div className="row no-gutters">
          <div className="col-md-4" style={{"display":"flex"}}>
            <img src={props.raw.image} className="card-img align-self-center" style={{"height":"auto","maxWidth":"100%","width":"auto","marginTop":"auto","marginBottom":"auto","marginLeft":"auto","marginRight":"auto"}} alt={"Image for "+props.raw.title}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title" id={props.id}>{props.raw.title}</h3>
              <h4 className="card-text" style={{"color":props.raw.subtitle.color}}><small>{props.raw.subtitle.text}</small></h4>
              <h5 className="card-text" style={{"float":"left"}}>Projects:</h5>
              <div style={{"display":"flex","overflowX":"auto"}}>
                {buttons(props.raw.projects)}
              </div><br/>
              <h5 className="card-text" style={{"float":"left"}}>Libraries:</h5>
              <div style={{"display":"flex","overflowX":"auto"}}>
                {libraries(props.raw.libraries)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }else if (props.section ==="Tools and Technologies") {
    return(
      <div className="card mb-3" style={{"maxWidth":"640px","marginLeft":"auto","marginRight":"auto","padding":"12px"}} >
        <div className="row no-gutters">
          <div className="col-md-4" style={{"display":"flex"}}>
            <img src={props.raw.image} className="card-img align-self-center" style={{"height":"auto","maxWidth":"100%","width":"auto","marginTop":"auto","marginBottom":"auto","marginLeft":"auto","marginRight":"auto"}} alt={"Image for "+props.raw.title}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title" id={props.id}>{props.raw.title}</h3>
              <h4 className="card-text" style={{"color":props.raw.subtitle.color}}><small>{props.raw.subtitle.text}</small></h4>
              <p class="card-text">{props.raw.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SkillsCard;
