import React  from 'react';
import './preset-colors-menu.sass';
import ColorListItem from './ColorListItem/ColorListItem';

const PresetColorsMenu = React.forwardRef((props, ref) => {
	return (
		<ul className='color-list' ref={ref}>
			{props.colors.map((item) => (
				<ColorListItem setPresetShown={props.setPresetShown} setColors={props.setColors} value={props.value} {...item} key={item.title}  />
			))}
		</ul>
	);
})

export default PresetColorsMenu