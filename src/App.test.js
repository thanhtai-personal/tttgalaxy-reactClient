import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App.jsx";


it('renders root without crashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );  
  unmountComponentAtNode(div);
});
