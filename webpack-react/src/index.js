import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from './services/ServiceWorker';
import './sass/index.scss';

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
registerServiceWorker();