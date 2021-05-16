import './App.css';
import React from 'react';
import ImageButton from './ImageButton.js';

const korea = {
  name: 'south-korea',
  className: 'big-flag',
  text: '대한민국 KRW',
};

const japan = {
  name: 'japan',
  className: 'big-flag',
  text: '일본 JPY',
};

const unitedStates = {
  name: 'united-states',
  className: 'small-flag',
  text: '미국 USD',
};

const mexico = {
  name: 'mexico',
  className: 'small-flag',
  text: '멕시코 MXN',
};

const switchButton = {
  name: 'switch',
  className: 'switch',
};


function App() {

  return (
    <>
      <div>
        <h2>Big Flag Image Button</h2>
        <ImageButton {...korea} />
        <ImageButton {...japan} />
      </div>
      <div>
        <h2>Small Flag Image Button</h2>
        <ImageButton {...unitedStates} />
        <ImageButton {...mexico}/>
      </div>
      <div>
        <h2>Switch Image Button</h2>
        <ImageButton {...switchButton} />
      </div>
    </>
  );
}

export default App;
