import './styles/main.sass';
import React from 'react';
import ColorPicker from './components/ColorPicker/ColorPicker';

const presetMenu = [
  { title: 'red', color: '#FF0000'},
  { title: 'yellow', color: '#FFCC33'},
  { title: 'green', color: '#008000'},
  { title: 'blue', color: '#0000FF'}
]

function App() {
  return (
      <ColorPicker colors={presetMenu} value='#FFCC33' onChange={(color) => console.log(color)}/>
  );
}

export default App;
