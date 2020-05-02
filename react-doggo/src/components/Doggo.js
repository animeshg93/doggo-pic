import React, {useState}from 'react';
import Button from 'react-bootstrap/Button';

const centerStyle = {
	position: 'absolute', left: '50%', top: '50%',
	transform: 'translate(-50%, -50%)',
	marginTop:'10px'
}

const imgStyle = {
	position:'absolute',
	top: '20%',
    left: '50%',
    transform: 'translate(-50%, 0%)',
}

export default function Doggo(props){
	const [link, setLink] = useState('');

	return(
		<div>
			<Button variant='primary' onClick={function(){
				fetch(`http://localhost:3000/polls/${props.url}`)
				.then(resp => resp.json())
				.then(function(data){
					setLink(data.message);
				})}
			} style={centerStyle}>{props.button}</Button>

			<img src={link} height="250" width="250" alt="" style={imgStyle}/>

		</div>
		)		
}