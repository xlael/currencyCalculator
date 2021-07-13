import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ImageButton({ imageName, title, width }) {
  const Box = styled.div`
    margin: 1em;
    text-align: center;
    display: inline-block;
  `;

  const Img = styled.img`
    width: ${(props) => props.width};
  `;

  const Title = styled.h3`
    font-size: 1rem;
    margin: 0;
  `;

  return (
    <Box>
      <Img src={`./images/${imageName}.png`} alt={title} width={width} />
      <Title>{title}</Title>
    </Box>
  );
}

ImageButton.propTypes = {
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.string,
};

ImageButton.defaultProps = {
  title: '',
  width: '5rem',
};

export default ImageButton;
