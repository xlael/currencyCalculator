import React from 'react';
import PropTypes from 'prop-types';

import '../css/flags.css';

const FlagImages = props => {
  const { img_code } = props;
  const img_code_low = `${img_code}`.toLowerCase();
  return (
    <>
      <span className={`flag flag-${img_code_low}`} style={{backgroundImage:'url(img/flags_responsive.png)' }} />
    </>
  );
};

FlagImages.propTypes = {
  img_code: PropTypes.string
};

export default FlagImages;
