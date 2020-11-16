import React from 'react';
import './confirm-button.sass';

function ConfirmButton (props) {
	return (
		<button className='control-buttons__confirm-button'
			onClick={() => {
				props.onClick();
				props.setSliderShown(false);
			}}
		>OK</button>
	);
}

export default ConfirmButton