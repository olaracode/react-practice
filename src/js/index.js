//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//import your own components
import Home from "./views/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
