import React from 'react';
import './range.sass';

function Range (props) {
	return (
		<div className='range'>
			<span className='range__title'>{props.title}</span>
			<input onChange={event => props.setRange({ ...props.rangeValue, [props.accessKey]: +event.target.value })}
			       style={{background: props.background}} className='range__input'
			       min="0" max="255" defaultValue={props.value} step='1' type="range"/>
		</div>
	);
}

export default Range