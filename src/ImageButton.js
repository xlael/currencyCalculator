import React from 'react';
import PropTypes from 'prop-types';
import './ImageButton.css';

function ImageButton(props) {

  const { name, text, className } = props;

  return (
    <div className='image-button'>
      <img 
        src={`./images/${ name }.png`} 
        alt={ name } 
        className={ className }/>
      <div>{ text }</div>
    </div>
  );
}

ImageButton.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
};

export default ImageButton;