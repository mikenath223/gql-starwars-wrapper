import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Spinner } from './components/Spinner';

import { GlobalStyles } from './styles';

const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const People = lazy(() => import('./pages/People'));
const PersonDetails = lazy(() => import('./pages/PersonDetails'));

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Spinner size="large" page={true} />}>
        <Router>
          <Switch>
            <Route path="/" component={People} exact={true} />
            <Route path="/person/:name" exact={true} component={PersonDetails} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
