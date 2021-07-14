import React from 'react';
import ImageButton from './ImageButton';
import CurrencyMoney from './CurrencyMoney';

const CompareSection = () => {
  return (
    <div>
      <CurrencyMoney />
      <ImageButton imageName="switch" width="3rem" />
      <CurrencyMoney />
    </div>
  );
};

export default CompareSection;
