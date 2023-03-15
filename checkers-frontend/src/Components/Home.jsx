import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import CreateBoard from "./CreateBoard";
import axios from "axios";
import HostGameComponent from "./HostGameComponent";

export default function Home(){

	axios.get("https://localhost:7041/").then(res => console.log(res));

	function DisplayHomePage(){
		if (localStorage.getItem("user")){
			return(
				<div className="home-page-flex">
					<div className="text"><span>Available Now: </span> </div>
					<div className="home-page-btn-flex">
						<Link id="host-btn" type={"button"} to={"/host-game"} className="btn btn-lg btn-outline-primary home-page-btn-left">Host</Link>
						<Link type={"button"} to={"/#"} className="btn btn-lg btn-outline-success home-page-btn-right">Join</Link>
					</div>
					<div className="text"><span>In Progress: </span> </div>
					<div className="home-page-btn-flex">
						<Link id="host-btn" type={"button"} to={"/#"} className="btn btn-lg btn-outline-secondary home-page-btn-left">Ranked</Link>
						<Link type={"button"} to={"/#"} className="btn btn-lg btn-outline-secondary home-page-btn-right">VS AI</Link>
					</div>
				</div>
			)
		}
		else {
			return (
					<div className="home-page-grid">
						<div className="home-page-grid-text"><span>Play Checkers</span> <span>Online</span> <span> on the #1 Site!</span> </div>
						<div className="games-today">97,129 <span className="grayed-out-text">Games Today</span></div>
						<div className="players-online">363,426 <span className="grayed-out-text">Playing now</span></div>
						<div className="players-grid-btn-1"><Link type={"button"} to={"/login"} className="btn btn-lg btn-outline-primary">Log in</Link></div>
						<div className="players-grid-btn-2"><Link type={"button"} to={"/register"} className="btn btn-lg btn-outline-success">Register</Link></div>
					</div>
			)
		}
	}

	return(
		<div id={"game-div"} className={"game-div"}>
			<div className={"checkers-board"}>
				{CreateBoard()}
			</div>
			{/*<div className="home-page-grid">*/}
			{/*	<div className="text"><span>Play Checkers</span> <span>Online</span> <span> on the #1 Site!</span> </div>*/}
			{/*	<div className="games-today">97,129 <span className="grayed-out-text">Games Today</span></div>*/}
			{/*	<div className="players-online">363,426 <span className="grayed-out-text">Playing now</span></div>*/}
			{/*	<div className="players-grid-btn-1"><Link type={"button"} to={"/login"} className="btn btn-lg btn-outline-primary">Log in</Link></div>*/}
			{/*	<div className="players-grid-btn-2"><Link type={"button"} to={"/register"} className="btn btn-lg btn-outline-success">Register</Link></div>*/}
			{/*</div>*/}
			{DisplayHomePage()}
		</div>
	);
}
