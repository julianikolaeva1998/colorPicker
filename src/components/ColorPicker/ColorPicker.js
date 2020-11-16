import React, { useState, useEffect, useRef } from 'react';
import ColorsMenu from './ColorsMenu/ColorsMenu';
import PresetColorsMenu from './PresetColorsMenu/PresetColorsMenu';
import RGBSliders from './RGBSliders/RGBSliders';
import './color-picker.sass';

function ColorPicker(props) {
	const presetRef = useRef();
	const sliderRef = useRef();

	const [color, setColor] = useState(props.value);
	const [rangeColor, setRangeColor] = useState(props.value);
	const setColors = (newColor) => {
		setColor(newColor);
		setRangeColor(newColor);
	}
	
	const [isMenuShown, setSliderShown] = useState(false);
	const [isPresetShown, setPresetShown] = useState(false);
	const handleClickOutside = (event) => {
		const presetDomNode = presetRef.current;
		const sliderDomNode = sliderRef.current;

		if (!presetDomNode || !presetDomNode.contains(event.target)) {
			setPresetShown(false);
		}

		if (!sliderDomNode || !sliderDomNode.contains(event.target)) {
			setSliderShown(false);
		}
	}
	
	useEffect(
		() => {
			document.addEventListener('click', handleClickOutside);
			return () => document.removeEventListener('click', handleClickOutside);
		},
		[]
	);
	
	
	return (
		<div className='color-picker'>
			<ColorsMenu
				value={color}
				rangeValue={rangeColor}
				setSliderShown={(event) => {
					setTimeout(() => {
						setSliderShown(!isMenuShown);
					});
				}}
				setPresetShown={(event) => {
					setTimeout(() => {
						setPresetShown(!isPresetShown);
					});
				}}
			/>
			{isPresetShown && (
				<PresetColorsMenu
					ref={presetRef}
					value={color}
					setColors={setColors}
					colors={props.colors}
					isPresetShown={isPresetShown}
					setPresetShown={setPresetShown}
				/>
			)}
			{isMenuShown && (
				<RGBSliders
					ref={sliderRef}
					color={color}
					setSliderShown={setSliderShown}
					setColor={setColor}
					rangeColor={rangeColor}
					rangeValue={rangeColor}
				  	setRangeColor={setRangeColor}
					value={color}
				/>
			)}
		</div>
	);
}

export default ColorPicker;
