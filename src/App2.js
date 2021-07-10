import React from 'react';
import './App.css';
import ImageButton from './ImageButton.js';
import country from './assets/dummy.json';

const switchButton = {
  name: 'switch',
  className: 'switch',
};

function App() {
  return (
    <React.Fragment>
      {country.map((nature, idx) => {
        const { text, size, name } = nature;
        const obj = Object.assign({}, {name, className: `${size}-flag`, text });

        return (
          <div key={idx}>
            <h2>{`${size[0].toUpperCase()}${size.slice(1)}`} Flag Image Button</h2>
            <ImageButton {...obj} />
          </div>
        );
      })}
      <div>
        <h2>Switch Image Button</h2>
        <ImageButton {...switchButton} />
      </div>
    </React.Fragment>
  );
}

export default React.memo(App);