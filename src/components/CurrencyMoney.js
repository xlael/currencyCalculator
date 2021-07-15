import React from 'react';
import styled from 'styled-components';
import { string, func, number } from 'prop-types';
import ImageButton from './ImageButton';

const CurrencyMoney = ({ selectedCurrency, amount, onChangeAmount }) => {
  const InlineBlock = styled.div`
    display: inline-block;
    text-align: center;
  `;

  const Input = styled.input`
    display: block;
  `;

  return (
    <InlineBlock>
      <ImageButton imageName={selectedCurrency} title={selectedCurrency} />
      <Input type="number" value={amount} onChange={onChangeAmount} />
    </InlineBlock>
  );
};

CurrencyMoney.propTypes = {
  selectedCurrency: string,
  onChangeCurrency: func.isRequired,
  amount: number,
  onChangeAmount: number.isRequired,
};

CurrencyMoney.defaultProps = {
  selectedCurrency: 'KRW',
  amount: 1000,
};

export default CurrencyMoney;
