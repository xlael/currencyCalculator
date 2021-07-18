import React from 'react';
import country from '../assets/dummy.json';
import ImageButton from './ImageButton';
import { 
  PopupArea, 
  TopArticle, 
  CloseButton
} from '../styles';

// TODO: 검색창이 들어갈 수 있는 영역 적용.
// TODO: 온 클릭시 Layout의 상태를 prop 받아 닫고, x 버튼을 클릭하면 창을 안보이게 하는걸로 토글

const Popup = () => {

  return (
    <PopupArea>
      <TopArticle>
        <div width="80%">
          DummySearch
        </div>
        <CloseButton>
          <ImageButton imageName="closeButton" width="1rem" onClick=""/>
        </CloseButton>
      </TopArticle>

      <h3>Flag List</h3>
      {country.map(({ currency, title }, idx) => {
        return <ImageButton key={idx} imageName={currency} title={title} />;
      })}
    </PopupArea>
  );
};

export default Popup;