import React from 'react';
import Header from './Header';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { MainContainer } from './components/Containers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <MainContainer></MainContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
