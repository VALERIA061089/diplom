import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './store/store';
import { getFromLocalStorage } from './Constants/helpFunctions';
import { getFiltersInfoAsync, setToken } from './authUsers/authSection';
import { AccessData } from './Moduls/User';
const accessData = getFromLocalStorage("accessData") as (AccessData | undefined)
if (accessData) {
  if (new Date(accessData.expire).getTime() > Date.now()) {
    store.dispatch(setToken({ ...accessData }))
    store.dispatch(getFiltersInfoAsync(accessData.accessToken))
  } else {
    localStorage.removeItem("accessData")
  }
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);