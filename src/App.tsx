import React from "react";

import { Provider } from "react-redux";

import Routes from "./routes";
import GlobalStyle from "./globalStyle";
import store from "./store";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
      </Provider>
    </div>
  );
};

export default App;
