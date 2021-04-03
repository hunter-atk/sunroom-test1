import * as React from 'react';
import { useState, useEffect } from 'react';
// import { Route, BrowserRouter as Router } from 'react-router-dom';

// components
import { View1, View2, View3 } from './components'

// styles
import './App.sass';

export const App: React.FC = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page) return
  }, [page]);

  return (
      <div className="main">
        <div>
          <div onClick={() => setPage(1)}>1</div>
          <div onClick={() => setPage(2)}>2</div>
          <div onClick={() => setPage(3)}>3</div>
        </div>
        {page == 1 ? <View1/> : null}
        {page == 2 ? <View2/> : null}
        {page == 3 ? <View3/> : null}
        {/* <View1 />
        <View2 />
        <View3 /> */}
        {/* <Route path="/" exact component={View1} />
      <Route path="/2" component={View2} />
      <Route path="/3" component={View3} />  */}
      </div> 
  );
}
