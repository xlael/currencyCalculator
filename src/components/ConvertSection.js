import React from 'react';
import ImageButton from './ImageButton';
import CurrencyMoney from './CurrencyMoney';

const ConvertSection = () => {
  return (
    <div>
      <CurrencyMoney />
      <ImageButton imageName="switch" width="3rem" />
      <CurrencyMoney />
    </div>
  );
};

export default ConvertSection;
