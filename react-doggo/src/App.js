import React,{useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import Doggo from './components/Doggo'
import Breed from './components/Breed'
import Home from './components/Home'

import './App.css';

function App() {

  return(
  	<>
		<Nav className="justify-content-center" variant="tabs" fill>
			<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
	  		<Nav.Item><Nav.Link href="/doggo">Random</Nav.Link></Nav.Item>
	  		<Nav.Item><Nav.Link href="/breed">Breed</Nav.Link></Nav.Item>
		</Nav>
		<Switch>
			<Route path="/doggo" render={(props) => <Doggo {...props} text="doggo pic" />} />
			<Route path="/" component={Home} exact />
			<Route path="/breed" render={(props) => <Breed {...props} text="doggo pic based on a random breed" />} />
		</Switch>
	</>);		
}

export default App;
