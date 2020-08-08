import React from 'react';
import About from './About'
import Home from './Home'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dashboard from './Dashboard'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component{
  
  constructor(){
    
    super();
    

  }
  
 
  
  
  render(){
    
 

    
    return (
    
      
      <div>

<Router>

<div>

<Navbar bg="light" expand="lg">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <div>
      <Link to="/">Home</Link> {  "   "} &nbsp;
      </div>
     <div>
     <Link to="/about">About</Link> {  "   "} &nbsp;
     </div>
 <div>
 <Link to="/Dashboard">Dashboard</Link> {  "   "} &nbsp;
 </div>
   
     
    </Nav>

  </Navbar.Collapse>
</Navbar>

        <Switch>
          <Route path="/about"  component= {About} />
          <Route path="/Dashboard"  component= {Dashboard} />
          <Route path="/"  component= {Home} />
        </Switch>
</div>

</Router>
       
        </div>
    );
  }
  
}


export default App;


