import React, { Component } from 'react';
import Header from './components/header/Header.js'
import Timeline from './components/timeline/Timeline.js'

function Home(props){
  return (
    <div className="container" style={{"backgroundColor":"#ffffff"}}>
                <Header/>
                <hr/>
                <Timeline/>
    </div>
  );
}
export default Home;
