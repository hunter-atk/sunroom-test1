import * as React from 'react';

// components
import { View1, View2, View3 } from './components'

// styles
import './App.sass';

export const App: React.FC = () => {
  return (
    <div className="main">
      <View1 />
      <View2 />
      <View3 />
    </div>
  );
}
