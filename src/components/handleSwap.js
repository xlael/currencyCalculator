import React from 'react';
import country from '../assets/dummy.json';
import ImageButton from './ImageButton';
import ConvertSection from './ConvertSection';
import CurrencyMoney from './CurrenyMoney'

const handleSwap = () => {
    const selectedCurrency = this.state.selectedCurrency
    const onChangeCurrency = this.state.onChangeCurrency
    this.setState({
        selectedCurrency: onChangeCurrency, onChangeCurrency: selectedCurrency,
        result: null
    })
}
