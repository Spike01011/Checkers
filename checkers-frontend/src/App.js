import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";

function App() {
  return (
	<>
		<BrowserRouter>
			<CustomNavbar/>
			<main id="main"></main>
		</BrowserRouter>
	</>
  );
}

export default App;
