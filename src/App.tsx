import * as React from 'react';
import { Route, HashRouter } from 'react-router-dom';

// components
import { View1, View2, View3 } from './components'

// styles
import './App.sass';

export const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      {/* <div className="main">
        <View1 />
        <View2 />
        <View3 />
      </div> */}
      <Route path="/" exact component={View1} />
      <Route path="/2" component={View2} />
      <Route path="/3" component={View3} />
    </HashRouter>
  );
}
