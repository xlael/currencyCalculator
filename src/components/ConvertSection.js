import React from 'react';
import ImageButton from './ImageButton';
import CurrencyMoney from './CurrencyMoney';
import handleSwap from './handleSwap';

const ConvertSection = () => {
  return (
    <div>
      <CurrencyMoney />
      <ImageButton imageName="swapCurrencyButton" width="3rem" onClick={() => handleSwap()}/>
      <CurrencyMoney />
    </div>
  );
};

export default ConvertSection;
