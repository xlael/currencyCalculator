import React from 'react';
import './App.css';
import ImageButton from './components/ImageButton';
import Input from './components/Input';
import styled from 'styled-components';
import country from './assets/dummy.json';

function App() {
  const InlineBlock = styled.div`
    display: inline-block;
  `;

  return (
    <React.Fragment>
      <h3>Input</h3>
      <InlineBlock>
        <ImageButton imageName="south-korea" />
        <Input />
      </InlineBlock>
      <ImageButton imageName="switch" width="3rem" />
      <InlineBlock>
        <ImageButton imageName="united-states" />
        <Input />
      </InlineBlock>

      <h3>Flag List</h3>
      {country.map(({ imageName, title }, idx) => {
        return <ImageButton key={idx} imageName={imageName} title={title} />;
      })}
    </React.Fragment>
  );
}

export default React.memo(App);
