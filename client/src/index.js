import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import positionStore from './store/PositionStore';
import staffStore from './store/StaffStore';
import reportWebVitals from './reportWebVitals';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    position: new positionStore(),
    staff: new staffStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
