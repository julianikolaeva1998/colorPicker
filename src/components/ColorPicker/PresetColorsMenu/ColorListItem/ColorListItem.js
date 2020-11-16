import React from 'react';
import './color-list-item.sass';

function ColorListItem (props) {
	return (
		<li onClick={() => {
			props.setColors(props.color);
			props.setPresetShown(false)
		}} className={props.value === props.color ? 'color-list__item--active color-list__item' : 'color-list__item'}>
			<span>{props.title}</span>
			<div className='color-list__color' style={{ backgroundColor: props.color }}/>
		</li>
	);
}

export default ColorListItem
