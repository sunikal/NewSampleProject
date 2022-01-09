import React from 'react';
import Route from './Route';
import { Provider } from 'react-redux';
import Store from './src/redux/store';


const App = () => {
  return (
    <Provider store={Store}>
      <Route />
    </Provider>
  );
}; export default App;