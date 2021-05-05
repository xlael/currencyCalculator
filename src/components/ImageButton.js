import React from 'react';
// eslint-disable-next-line no-unused-vars
const { Component, useState } = React;
import './ImageButton.css';

const ImageButton = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [imageButton,setImageButton] = useState(props);

  // eslint-disable-next-line no-unused-vars
  return (
    <>
      <div id="img-btn">
        <div className="img-btn-flag">
          <img src={imageButton.src} alt="USA"/>
        </div>
        <div className="img-btn-text">
          {imageButton.currency}
        </div>       
      </div>
    </>
  );
};

export default ImageButton;