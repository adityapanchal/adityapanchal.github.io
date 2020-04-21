import React from 'react';
function EducationCard(props){
return (
<div className="card mb-3" style={{"maxWidth":"640px","marginLeft":"auto","marginRight":"auto","padding":"12px"}} >
  <div className="row no-gutters">
    <div className="col-md-4" style={{"display":"flex"}}>
      <img src={props.raw.image} className="card-img align-self-center" style={{"height":"auto","maxWidth":"100%","width":"auto","marginTop":"auto","marginBottom":"auto","marginLeft":"auto","marginRight":"auto"}} alt="Image"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title" id={props.id}>{props.raw.title}</h3>
        <h5 className="card-text" dangerouslySetInnerHTML={{__html:props.raw.description}}/>
        <h4 className="card-text"><small className="text-muted">{props.raw.subtitle}</small></h4>
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
