import React, { useReducer, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { history } from './lib/helpers/history';
import GlobalStyle from './lib/styles/GlobalStyle';
import './app.css';
import BarChart from './components/statistics/BarChart';
import Statistics from './pages/Statistics';

// pages
const Main = lazy(() => import('./pages/Main'));
const Test = lazy(() => import('./pages/Test'));
const Result = lazy(() => import('./pages/Result'));


const App = () => {
  return (
      <Router history={history}>
        <GlobalStyle />
        <Suspense fallback="">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/test/:type" component={Test} />
            <Route path="/result/:type/:name" component={Result} />
            <Route path="/statistics" component={Statistics} />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </Router>
  );
};

export default App;
