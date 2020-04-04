import React from 'react';
import Header from './Header';
import About from './About';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainContainer } from './components/Containers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <MainContainer>
          <Route path={'/about'} exact>
            <About />
          </Route>
        </MainContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
