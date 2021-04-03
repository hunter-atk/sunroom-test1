import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// components
import { View1, View2, View3 } from './components'

// styles
import './App.sass';

export const App: React.FC = () => {
  return (
    <Router>
      {/* <div className="main">
        <View1 />
        <View2 />
        <View3 />
      </div> */}
      <Route path="/sunroom-test1" exact component={View1} />
      <Route path="/sunroom-test1/2" component={View2} />
      <Route path="/sunroom-test1/3" component={View3} />
    </Router>
  );
}
