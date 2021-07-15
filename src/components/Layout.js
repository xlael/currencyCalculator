import React from 'react';
import country from '../assets/dummy.json';
import ImageButton from './ImageButton';
import CompareSection from './ConvertSection';

const Layout = () => {
  return (
    <div>
      <h3>Input</h3>
      <div>
        <CompareSection />
      </div>
      <h3>Flag List</h3>
      {country.map(({ currency, title }, idx) => {
        return <ImageButton key={idx} imageName={currency} title={title} />;
      })}
    </div>
  );
};

export default Layout;
