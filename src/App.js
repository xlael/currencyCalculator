import './App.css';
import React from 'react';

import ImageButton from './components/ImageButton';

function App() {
  let config = {
    'test': 123456,
  };

  console.log(config.test);
  return (
    <div className="App">
      <header className="App-header">
        <ImageButton img_code='JP' context=''/>
        <ImageButton />
        <ImageButton img_code='us' context='usa' />
        <ImageButton img_code='KR' context='KRW' />
        <ImageButton img_code='' context='ABCD' />
        <ImageButton img_code='CN' context='China' />
        <ImageButton img_code='SW' />
      </header>
    </div>
  );
}

export default App;
