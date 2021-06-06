import React from 'react';
import './App.css';
import ImageButton from './ImageButton.js';
import country from './assets/dummy.json';

const switchButton = {
  name: 'switch',
  className: 'switch',
};

const returnValue = (natures, size) => (
  Object.keys(natures).map((nature, index) => {
    const prop = Object.assign(natures[nature], { name: natures[nature], className: `${size}-flag` });
    return <ImageButton {...prop } key={index} />;
  })
);

function App() {

  return (
    <React.Fragment>
      {Object.keys(country).map((flag) => {
        const natures = country[flag];
        flag === 'big'
          ? (
            <div>
              <h2>Big Flag Image Button</h2>
              {returnValue(natures, flag)}
            </div>
          )
          : (
            <div>
              <h2>Small Flag Image Button</h2>
              {returnValue(natures, flag)}
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