import './App.css';
import React from 'react';
import ImageButton from './components/ImageButton';

function App() {
  let config = {
    'test': 123456,
  };

  console.log(config.test);
  return (
    <div className="App App-header">
      <div className="row-layout">
        <ImageButton src="./image/us.png" currency="USD" />
        <ImageButton src="./image/swap.png"/>
        <ImageButton src="./image/ko.png" currency="KRW" />
      </div>
      <div className="row-layout">
        <ImageButton src="./image/us.png" currency="USD" />
        <ImageButton src="./image/ko.png" currency="KRW" />
        <ImageButton src="./image/eu.png" currency="EUR" />
        <ImageButton src="./image/ja.png" currency="JPY" />
        <ImageButton src="./image/india.png" currency="INR" />
        <ImageButton src="./image/thai.png" currency="THB" />
      </div>
    </div>
  );
}

export default App;
