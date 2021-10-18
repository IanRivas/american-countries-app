import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './App.styles';
import Home from './views/Home';
import Header from './components/Header';
import Country from './views/Country';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const [theme, setTheme] = useState(false);

  const themeToggler = () => {
    setTheme(!theme);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <Router>
          <GlobalStyles />
          <Header isTheme={theme} themeToggler={themeToggler} />
          <Switch>
            <Route exact path="/">
              <Home isTheme={theme} />
            </Route>
            <Route path="/country/:countryName">
              <Country isTheme={theme} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
