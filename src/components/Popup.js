import React from 'react';
import country from '../assets/dummy.json';
import ImageButton from './ImageButton';
import styled from 'styled-components';

const Popup = () => {
  // TODO: 이미지 버튼 컴포넌트를 이용해서 x 부분을 공통으로 변경.
  // 검색창이 들어갈 수 있는 영역 적용.
  // FIXME: 스타일드 컴포넌트 문제가 있는것으로 보임. 한곳으로 모을 것.
  const PopupArea = styled.section`
    padding: 10px;
  `;

  const TopArticle = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const CloseButton = styled.div`
    width: 3rem;
  `;


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