import React from "react";
import ReactDOM from "react-dom";

import Layout from "./../js/components/layout";

import "./../scss/main.scss";

console.log("js/client.js");

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);