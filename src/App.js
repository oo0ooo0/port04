import React from 'react';
import Header from './Header';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
