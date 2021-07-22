import React from 'react';

import ConvertSection from './ConvertSection';
import Popup from './Popup';

const Layout = () => {
  return (
    <div>
      <h3>Input</h3>
      <div>
        <ConvertSection />
      </div>
      <section>
        <Popup />
      </section>
    </div>
  );
};

export default Layout;
