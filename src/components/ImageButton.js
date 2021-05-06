import React from 'react';
import PropTypes from 'prop-types';
import FlagImages from './FlagImages';
import FlagContext from './FlagContext';

/* 
* https://ko.wikipedia.org/wiki/%EA%B5%AD%EA%B0%80%EB%B3%84_%EA%B5%AD%EA%B0%80_%EC%BD%94%EB%93%9C_%EB%AA%A9%EB%A1%9D
* 국가별 코드 목록, 2자리 사용.
*/
function ImageButton(props) {
  return (
    <div>
      <FlagImages img_code={props.img_code} />
      <br />
      <FlagContext context={props.context} />
    </div>
  );
}

ImageButton.defaultProps = {
  // country가 없는 경우, 기본이름으로 쓸 데이터
  country: 'flag-doesnt-exist'
};

ImageButton.propTypes = {
  // country 필수
  img_code: PropTypes.string,
  context: PropTypes.any
};

export default ImageButton;

