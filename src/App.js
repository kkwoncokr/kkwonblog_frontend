import React from 'react';
import Kblog from './pages/index';
import { BrowserRouter } from 'react-router-dom';

function App({children}) {
  return (
    <BrowserRouter>
      <Kblog>
        {children}
      </Kblog>
    </BrowserRouter>
  );
}

export default App;
