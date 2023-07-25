import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Prof from "./Prof";

import { Auth0Provider } from "@auth0/auth0-react";
import UPI from "./UPIpage";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-vb8vd6gs52h6qg7j.us.auth0.com"
        clientId="BjiH1gTDlpcQMo8JyrEYrEUDIFkN43BE"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Provider store={store}>
          {/* <App /> */}
          <Prof />
          {/* <UPI /> */}
        </Provider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
