import React, {useState}from 'react';
import Button from 'react-bootstrap/Button';

const centerStyle = {
        position: 'relative', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }

function getDogURL(){
	fetch('http://localhost:3000/polls/dogs/')
	.then(resp => resp.json())
	.then(function(data){
		return  data.message;
	})
}


export default function Doggo(){
	 const [link, setLink] = useState('');

	return(
		<div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
    		<h2 style={centerStyle}>Click below to get a random doggo pic</h2>
			<img src={link} alt="" />
			<Button variant='primary' onClick={function(){
				fetch('http://localhost:3000/polls/dogs/')
					.then(resp => resp.json())
					.then(function(data){
						setLink(data.message);
					})}
			} style={centerStyle}>DOGGO</Button>
			

		</div>
		)		
}