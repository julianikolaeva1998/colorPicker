import React from 'react';
import './close-button.sass';

function CloseButton (props) {
	return (
		<button className='close-button' onClick={() => {
			props.onClickUnset();
			props.setSliderShown(false);
		}}
		>CLOSE</button>
	);
}

export default CloseButton