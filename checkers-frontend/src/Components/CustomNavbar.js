import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import SignUpComponent from "./SignUpComponent";
import LogInComponent from "./LogInComponent";
import Logout from "./LogOutComponent";
import LogOutComponent from "./LogOutComponent";
import {useEffect, useState} from "react";


const NavbarAccountDisplay = ({user}) => {
	if (user){
		return(
			<form id={"account-navbar-form"} className="d-flex nav-item dropdown"  style={{marginRight: "0.5vw", color: "white"}}>
				<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
				   aria-expanded="false">
					{localStorage.getItem("user")}
				</a>
				<ul className="dropdown-menu dropdown-menu-dark"  style={{left: "-3vw"}}>
					<li><a href={"/logout"} className="dropdown-item" >Log out</a></li>
				</ul>
			</form>

		)
	}
	else {
		return(
			<form id={"account-navbar-form"} className="d-flex nav-item dropdown"  style={{marginRight: "0.5vw", color: "white"}}>
				<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
				   aria-expanded="false">
					Account
				</a>
				<ul className="dropdown-menu dropdown-menu-dark"  style={{left: "-3vw"}}>
					<li><a className="dropdown-item" href="/login">Log in</a></li>
					<li><a className="dropdown-item" href="/register">Register</a></li>
				</ul>
			</form>
		)
	}
}


export default function CustomNavbar(){

	const [user, setUser] = useState(localStorage.getItem("user") || null);

	window.addEventListener("storage", () => {
		setUser(localStorage.getItem("user") || null);
	})

	return(
		<>
		<nav className="navbar navbar-dark navbar-expand-lg bg-dark navbar-font-size">
			<div className="container-fluid">
				<a className="navbar-brand" href="/home">
					<img src="/CrownCheckers.png" height="40"/>
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
				        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				        aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/host-game">Host</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Join</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/chat">Chat</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Ranked</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">VS AI</a>
						</li>
						{/*<li className="nav-item dropdown">*/}
						{/*	<a className="nav-link dropdown-toggle" style={{color: "white"}} href="#" role="button" data-bs-toggle="dropdown"*/}
						{/*	   aria-expanded="false">*/}
						{/*		Play*/}
						{/*	</a>*/}
						{/*	<ul className="dropdown-menu dropdown-menu-dark">*/}
						{/*		<li><a className="dropdown-item" href="#">Host</a></li>*/}
						{/*		<li><a className="dropdown-item" href="#">Join</a></li>*/}
						{/*		<li>*/}
						{/*			<hr className="dropdown-divider-dark"/>*/}
						{/*		</li>*/}
						{/*		<li><a className="dropdown-item" href="#">Vs Ai (coming soon)</a></li>*/}
						{/*		<li><a className="dropdown-item" href="#">Ranked (coming soon)</a></li>*/}

						{/*	</ul>*/}
						{/*</li>*/}
						{/*<li className="nav-item">*/}
						{/*	<a className="nav-link disabled">Disabled</a>*/}
						{/*</li>*/}
					</ul>
					{/*<form className="d-flex" role="search">*/}
						{/*<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
						{/*	<button className="btn btn-outline-success" type="submit">Search</button>*/}
					<NavbarAccountDisplay user={user} />
				</div>
			</div>
		</nav>

</>
	)
}
