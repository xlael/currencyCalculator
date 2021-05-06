import React from 'react';
import PropTypes from 'prop-types';

import './FlagContext.css';

const FlagContext = props => {
  const { context } = props;
  return (
    <>
      <span className='Context-area'>
        { context }
      </span>
    </>
  );
};

FlagContext.propTypes = {
  context: PropTypes.any
};

export default FlagContext;
