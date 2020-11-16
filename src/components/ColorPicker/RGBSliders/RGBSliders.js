import React, { useState, useEffect } from 'react';
import './rgb-sliders.sass';
import CloseButton from './CloseButton/CloseButton';
import ConfirmButton from './ConfirmButton/ConfirmButton';
import  { range } from './range';
import Range from './Range/Range';
import hexRgb from 'hex-rgb';
import rgbHex  from 'rgb-hex';

const RGBSliders = React.forwardRef((props, ref) => {
	const rgb = hexRgb(props.value);
	const [rgbState, setRange] = useState({
		red: rgb.red,
		green: rgb.green,
		blue: rgb.blue
	});

	useEffect(
		() => {
			const hex = rgbHex(rgbState.red, rgbState.green, rgbState.blue);
			props.setRangeColor(`#${hex.toUpperCase()}`);
		},
		[rgbState]
	);
	
	  const onClick = () => props.setColor(props.rangeColor)
		const onClickUnset = () => props.setRangeColor(props.color)
	
	return (
		<div className='range-sliders' ref={ref}>
			{
				range.map((item)  => (
					<Range rangeValue={rgbState} setRange={setRange} {...item} value={rgb[item.accessKey]} key={item.accessKey}/>
				))
			}
			<div className='control-buttons'>
				<CloseButton onClickUnset={onClickUnset} setSliderShown={props.setSliderShown}/>
				<ConfirmButton setSliderShown={props.setSliderShown} onClick={onClick}/>
			</div>
		</div>
	)
});

export default RGBSliders;