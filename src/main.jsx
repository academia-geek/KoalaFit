import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { ContextProvider } from "./Context/ContextProvider";
import "./index.css";
import  store, {Persistor}  from "./Redux/Store/store";
import {PersistGate} from 'redux-persist/integration/react'
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <ContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>

        <App />
        </PersistGate>
      </Provider>
    </ContextProvider>
  
);
