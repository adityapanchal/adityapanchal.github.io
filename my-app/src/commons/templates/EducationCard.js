import React, { Component } from 'react';
function EducationCard(props){
return (
<div className="card mb-3" style={{"maxWidth":"640px","marginLeft":"auto","marginRight":"auto"}} >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.raw.image} className="card-img align-self-center" style={{"height":"100%","maxHeight":"300px"}} alt="Image"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title" id={props.id}>{props.raw.title}</h2>
        <h4 className="card-text" dangerouslySetInnerHTML={{__html:props.raw.description}}/>
        <h3 className="card-text"><small className="text-muted">{props.raw.subtitle}</small></h3>
        <div style={{"display":"flex"}}>
          <a style={{"marginLeft":"auto","marginRight":"auto"}} href={props.raw.links.primary.href} className="btn btn-primary">{props.raw.links.primary.label}</a>
          <a style={{"marginLeft":"auto","marginRight":"auto"}} href={props.raw.links.secondary.href} className="btn btn-secondary">{props.raw.links.secondary.label}</a>
        </div>
      </div>
    </div>
  </div>
</div>
);}
export default EducationCard;
