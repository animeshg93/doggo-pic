import React,{useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import Doggo from './components/Doggo'

import './App.css';

function App() {

  return(
  	<>
		<Nav className="justify-content-center" variant="tabs" fill>
			<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
	  		<Nav.Item><Nav.Link href="/doggo">Random</Nav.Link></Nav.Item>
	  		<Nav.Item><Nav.Link href="/doggo">Breed</Nav.Link></Nav.Item>
		</Nav>
		<Switch>
			<Route path="/doggo" component={Doggo} />
		</Switch>
	</>);		
}

export default App;
