import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Works from './Works';
import WorkDetail from './components/WorkDetail';
import Contact from './Contact';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainContainer } from './components/Containers';
import { Provider } from 'react-redux';
import store from './services/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <MainContainer>
          <Route path={'/about'} exact>
            <About />
          </Route>

          <Route path={'/works'}>
            <Works />
          </Route>

          <Route path={'/work/:id'}>
            <WorkDetail />
          </Route>

          <Route path={'/contact'} exact>
            <Contact />
          </Route>
        </MainContainer>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
