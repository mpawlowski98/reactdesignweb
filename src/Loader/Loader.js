import React from 'react';
import { GridLoader } from 'react-spinners';
// import css from './Loader.module.css';
function Loader() {
  const newStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <div style={newStyle}>
      <GridLoader
        margin="3"
        color="#0350a8"
        size="50"
        loading="true"
        cssOverride={{}}
      />
    </div>
  );
}

export default Loader;
