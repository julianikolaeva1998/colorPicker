import React from 'react';
import './colors-menu.sass';

function ColorsMenu (props) {
	return (
		<div className='color-menu'>
			<output className='color-menu__output'>{props.value}</output>
			<button onClick={props.setSliderShown} className='color-menu__color-btn'>
				<div style={{ backgroundColor: props.rangeValue }}/>
			</button>
			<button onClick={props.setPresetShown} className='color-menu__rgb-btn'>
				<div></div>
			</button>
		</div>
	);
}

export default ColorsMenu;
