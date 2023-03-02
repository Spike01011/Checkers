import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";
import Home from "./Components/Home";
import SignUpComponent from "./Components/SignUpComponent";
import LogInComponent from "./Components/LogInComponent";
import LogOutComponent from "./Components/LogOutComponent";

function App() {
  return (
	<>
		<BrowserRouter>
			<CustomNavbar/>
			<main id="main">
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/register" element={<SignUpComponent/>}/>
				<Route path="/login" element={<LogInComponent/>}/>
				<Route path="/logout" element={<LogOutComponent/>}/>
				{/*<Route path="/about" element={<About/>}/>*/}
				{/*<Route path="/contact" element={<Contact/>}/>*/}
			</Routes></main>
		</BrowserRouter>
	</>
  );
}

export default App;
